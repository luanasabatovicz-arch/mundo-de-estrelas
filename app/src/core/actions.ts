/* Tudo que grava no banco passa por aqui. */
import type { WriteOp } from '../lib/db';
import { addDays, randomSalt, sha256 } from '../lib/util';
import { SUPERADMINS } from '../config';
import { db, fail, getState, selectFamily, toast } from './store';
import { routine, settingsOf, suggestedGoal } from './rules';
import type { Child, Entry, EntryKind, Family, Item, Request, SeasonDef, SeasonRun, Settings, Template } from './types';
import { loadSeason, loadTemplates } from './content';

const fam = () => { const f = getState().family; if (!f) throw new Error('Nenhuma família selecionada'); return f };
const P = (rest: string) => `families/${fam().id}/${rest}`;
const who = () => getState().ui.kidMode ? 'kid' : (getState().user?.uid || '?');
export const isSuperadmin = () => SUPERADMINS.includes(getState().user?.email || '') || getState().demo;

async function run(ops: WriteOp[], okMsg?: string, errMsg?: string) {
  try { await db.write(ops); if (okMsg) toast(okMsg); return true } catch (e) { fail(e, errMsg); return false }
}

/** Operações que movimentam estrelas: saldo, total da vida e progresso da temporada. */
function starOps(child: string, stars: number, countsForWorld: boolean): WriteOp[] {
  const f = fam(); const ops: WriteOp[] = [];
  const data: any = { balance: db.fv.inc(stars) };
  if (stars > 0) data.lifetime = db.fv.inc(stars);
  ops.push({ kind: 'update', path: P(`children/${child}`), data });
  const runInfo = f.season;
  if (countsForWorld && stars > 0 && runInfo && getState().today >= runInfo.startDay && getState().today <= runInfo.endDay) {
    ops.push({ kind: 'set', merge: true, path: P(`progress/${runInfo.runId}_${child}`), data: { runId: runInfo.runId, child, seasonId: runInfo.seasonId, seasonStars: db.fv.inc(stars) } });
  }
  return ops;
}
function entryOp(e: Omit<Entry, 'id' | 'at' | 'day' | 'by' | 'runId'> & { day?: string }): { op: WriteOp; id: string } {
  const id = db.newId(); const f = fam();
  const data: any = { ...e, day: e.day || getState().today, at: Date.now(), by: who() };
  if (f.season?.runId) data.runId = f.season.runId;
  return { id, op: { kind: 'set', path: P(`entries/${id}`), data } };
}

const inflight = new Set<string>();
export async function logItem(child: string, item: Item, label?: string) {
  const s = getState();
  if (item.kind === 'task') {
    const key = `${child}:${item.id}:${s.today}`;
    if (inflight.has(key) || routine(s.family, s.items, s.entries, child, s.today).done.has(item.id)) return true;
    inflight.add(key); setTimeout(() => inflight.delete(key), 1500);
  }
  const stars = item.kind === 'bad' ? -Math.abs(item.stars) : Math.abs(item.stars);
  const ops: WriteOp[] = [entryOp({ child, kind: item.kind as EntryKind, itemId: item.id, label: label || item.label, emoji: item.emoji, stars }).op, ...starOps(child, stars, true)];
  // bônus de rotina completa
  if (item.kind === 'task') {
    const r = routine(s.family, s.items, s.entries, child, s.today);
    const willAll = r.tasks.length > 0 && r.tasks.every(t => t.id === item.id || r.done.has(t.id));
    const hasBonus = s.entries.some(e => e.child === child && e.day === s.today && e.kind === 'bonus' && !e.undone);
    const bonus = settingsOf(s.family).perfectBonus;
    if (willAll && !hasBonus && bonus > 0) {
      ops.push(entryOp({ child, kind: 'bonus', label: 'Rotina completa', emoji: '🌟', stars: bonus }).op, ...starOps(child, bonus, true));
      setTimeout(() => toast(`Rotina completa! +${bonus} de bônus`), 400);
    }
  }
  return run(ops);
}

export async function undoEntry(e: Entry) {
  const s = getState();
  const ops: WriteOp[] = [{ kind: 'update', path: P(`entries/${e.id}`), data: { undone: true } }, ...reverseOps(e)];
  if (e.kind === 'task') {
    const bonus = s.entries.find(x => x.child === e.child && x.day === e.day && x.kind === 'bonus' && !x.undone);
    if (bonus) ops.push({ kind: 'update', path: P(`entries/${bonus.id}`), data: { undone: true } }, ...reverseOps(bonus));
  }
  return run(ops, 'Desfeito');
}
function reverseOps(e: Entry): WriteOp[] {
  const f = fam(); const ops: WriteOp[] = [];
  const data: any = { balance: db.fv.inc(-e.stars) };
  if (e.stars > 0) data.lifetime = db.fv.inc(-e.stars);
  ops.push({ kind: 'update', path: P(`children/${e.child}`), data });
  if (e.stars > 0 && e.runId && f.season?.runId === e.runId) ops.push({ kind: 'set', merge: true, path: P(`progress/${e.runId}_${e.child}`), data: { runId: e.runId, child: e.child, seasonId: f.season.seasonId, seasonStars: db.fv.inc(-e.stars) } });
  return ops;
}

export async function adjust(child: string, stars: number, note: string) {
  return run([entryOp({ child, kind: 'adjust', label: note || 'Ajuste', emoji: stars >= 0 ? '➕' : '➖', stars }).op, ...starOps(child, stars, false)], 'Ajuste registrado');
}
export async function simpleEarn(child: string, kind: EntryKind, label: string, emoji: string, stars: number, okMsg?: string) {
  return run([entryOp({ child, kind, label, emoji, stars }).op, ...starOps(child, stars, true)], okMsg);
}

export async function redeem(child: Child, item: Item) {
  if ((child.balance || 0) < item.stars) { toast(`Faltam ${item.stars - (child.balance || 0)} estrelas para ${item.label}`); return false }
  return run([entryOp({ child: child.id, kind: 'reward', itemId: item.id, label: item.label, emoji: item.emoji, stars: -item.stars }).op, ...starOps(child.id, -item.stars, false)], `${item.label} trocado!`);
}

export async function request(child: string, kind: Request['kind'], label: string, emoji: string, stars: number, itemId?: string) {
  const s = getState();
  if (s.requests.some(r => r.child === child && r.label === label && r.day === s.today)) { toast('Esse pedido já está esperando um adulto'); return false }
  const id = db.newId();
  const data: any = { child, kind, label, emoji, stars, day: s.today, at: Date.now(), status: 'pending' };
  if (itemId) data.itemId = itemId;
  return run([{ kind: 'set', path: P(`requests/${id}`), data }], 'Pedido enviado para um adulto');
}
export async function resolveRequest(r: Request, ok: boolean) {
  const s = getState();
  const close: WriteOp = { kind: 'update', path: P(`requests/${r.id}`), data: { status: ok ? 'ok' : 'no', resolvedAt: Date.now(), resolvedBy: s.user?.uid || '' } };
  if (!ok) return run([close], 'Pedido recusado');
  if (r.kind === 'task') {
    const item = s.items.find(i => i.id === r.itemId);
    if (!item) return run([close]);
    await run([close]); return logItem(r.child, item);
  }
  if (r.kind === 'reward') {
    const child = s.children.find(c => c.id === r.child); const item = s.items.find(i => i.id === r.itemId);
    if (!child || !item) return run([close]);
    if ((child.balance || 0) < item.stars) { toast('Saldo insuficiente para esse prêmio'); return false }
    return run([close, entryOp({ child: r.child, kind: 'reward', itemId: item.id, label: item.label, emoji: item.emoji, stars: -item.stars }).op, ...starOps(r.child, -item.stars, false)], 'Prêmio liberado');
  }
  return run([close, entryOp({ child: r.child, kind: 'challenge', label: r.label, emoji: r.emoji, stars: r.stars }).op, ...starOps(r.child, r.stars, true)], 'Desafio aprovado');
}

export async function claimPiece(child: string, itemId: string) {
  const f = fam(); const run_ = f.season!;
  return run([{ kind: 'set', merge: true, path: P(`progress/${run_.runId}_${child}`), data: { runId: run_.runId, child, seasonId: run_.seasonId, unlocked: { [itemId]: { at: Date.now(), day: getState().today } } } }]);
}
export async function markMilestonesSeen(child: string, n: number) {
  const f = fam(); if (!f.season) return;
  await db.write([{ kind: 'set', merge: true, path: P(`progress/${f.season.runId}_${child}`), data: { runId: f.season.runId, child, seasonId: f.season.seasonId, seenMilestones: n } }]).catch(() => {});
}

export async function openAdventDoor(n: number, pts: number, title: string, emo: string) {
  const s = getState(); const key = `${s.today.slice(0, 4)}-${String(n).padStart(2, '0')}`;
  const ops: WriteOp[] = [{ kind: 'set', path: P(`advent/${key}`), data: { n, at: Date.now(), by: who() } }];
  s.children.forEach(c => ops.push(entryOp({ child: c.id, kind: 'advent', label: `Advento: ${title}`, emoji: emo, stars: pts }).op, ...starOps(c.id, pts, true)));
  return run(ops, `Portinha ${n} aberta! +${pts} para cada criança`);
}

/* ---------------------------------------------------------------- itens e crianças */
export async function saveItem(item: Partial<Item> & { kind: Item['kind'] }) {
  const id = item.id || db.newId();
  const data = { emoji: item.emoji || '⭐', label: item.label || '', stars: Math.max(0, Math.round(item.stars || 0)), kind: item.kind, period: item.period || 'livre', kids: item.kids || [], order: item.order ?? Date.now(), active: item.active !== false, clip: item.clip || '' };
  return run([{ kind: 'set', path: P(`items/${id}`), data }], 'Salvo');
}
export const deleteItem = (id: string) => run([{ kind: 'update', path: P(`items/${id}`), data: { active: false } }], 'Removido');
export const reorderItems = (ids: string[]) => run(ids.map((id, i) => ({ kind: 'update', path: P(`items/${id}`), data: { order: i } }) as WriteOp));

export function templateOps(fid: string, templates: Template[], kids: { id: string; band: number }[]): WriteOp[] {
  const ops: WriteOp[] = []; let order = 0;
  for (const t of templates) {
    const forKids = t.bands ? kids.filter(k => t.bands!.includes(k.band)).map(k => k.id) : [];
    if (t.bands && !forKids.length) continue;
    const all = !t.bands || forKids.length === kids.length;
    ops.push({ kind: 'set', path: `families/${fid}/items/${db.newId()}`, data: { kind: t.kind, emoji: t.emoji, label: t.label, stars: t.stars, period: t.period || 'livre', kids: all ? [] : forKids, order: order++, active: true } });
  }
  return ops;
}

export async function saveChild(c: Partial<Child> & { name: string }) {
  const f = fam(); const isNew = !c.id; const id = c.id || db.newId();
  const data: any = { name: c.name.trim(), birth: c.birth || '', gender: c.gender || 'x', color: c.color || '#8E2C2C', maturity: c.maturity || 2, english: c.english !== false };
  if (c.photo !== undefined) data.photo = c.photo || '';
  const ops: WriteOp[] = [];
  if (isNew) { Object.assign(data, { balance: 0, lifetime: 0, order: getState().children.length }); ops.push({ kind: 'set', path: P(`children/${id}`), data }) }
  else ops.push({ kind: 'update', path: P(`children/${id}`), data });
  if (isNew && f.season) ops.push(progressInit(f.id, f.season, id, suggestedGoal(getState().items, id, f.season)));
  return run(ops, 'Salvo');
}
export const removeChild = (id: string) => run([{ kind: 'delete', path: P(`children/${id}`) }], 'Criança removida');
const progressInit = (fid: string, r: SeasonRun, child: string, goal: number): WriteOp =>
  ({ kind: 'set', merge: true, path: `families/${fid}/progress/${r.runId}_${child}`, data: { runId: r.runId, child, seasonId: r.seasonId, goal, seasonStars: db.fv.inc(0), unlocked: {}, seenMilestones: 0 } });
export const setGoal = (child: string, goal: number) => { const f = fam(); return run([{ kind: 'set', merge: true, path: P(`progress/${f.season!.runId}_${child}`), data: { runId: f.season!.runId, child, seasonId: f.season!.seasonId, goal } }], 'Meta atualizada') };

/* ---------------------------------------------------------------- família */
export async function saveSettings(p: Partial<Settings>) {
  const data: any = {}; for (const [k, v] of Object.entries(p)) data[`settings.${k}`] = v;
  return run([{ kind: 'update', path: `families/${fam().id}`, data }], 'Configuração salva');
}
export async function setPin(pin: string) { const salt = randomSalt(); return saveSettings({ pinSalt: salt, pinHash: await sha256(salt + pin) } as any) }
export async function checkPin(pin: string) { const st = settingsOf(fam()); if (!st.pinHash) return true; return (await sha256(st.pinSalt + pin)) === st.pinHash }
export const renameFamily = (name: string) => run([{ kind: 'update', path: `families/${fam().id}`, data: { name: name.trim() } }], 'Nome salvo');
export const invite = (email: string) => run([{ kind: 'update', path: `families/${fam().id}`, data: { invites: db.fv.union(email.trim().toLowerCase()) } }], 'Convite criado');
export const uninvite = (email: string) => run([{ kind: 'update', path: `families/${fam().id}`, data: { invites: db.fv.remove(email) } }]);
export async function removeMember(uid: string) {
  return run([{ kind: 'update', path: `families/${fam().id}`, data: { [`members.${uid}`]: db.fv.del(), memberIds: db.fv.remove(uid) } }], 'Responsável removido');
}
export async function acceptInvite(f: Family) {
  const u = getState().user!;
  const ok = await run([{ kind: 'update', path: `families/${f.id}`, data: { [`members.${u.uid}`]: { role: 'parent', email: u.email, name: u.name || u.email }, memberIds: db.fv.union(u.uid), invites: db.fv.remove(u.email) } }], `Você entrou na família ${f.name}`);
  if (ok) selectFamily(f.id);
}

export interface NewFamily { name: string; license: string; kids: { name: string; birth: string; gender: Child['gender']; color: string; band: number }[]; pin: string; modules: Settings['modules']; seasonId: string; startNow: boolean }
export async function createFamily(nf: NewFamily) {
  const s = getState(); const u = s.user!; const fid = db.newId();
  // o plano vem da licença (as regras conferem); sem plano na licença, a família fica sem o campo
  let plan: any = s.demo ? { avatar: true } : undefined;
  if (!s.demo) { try { plan = (await db.get(`licenses/${nf.license}`)).data.plan } catch { plan = undefined } }
  const salt = randomSalt();
  const season = await loadSeason(nf.seasonId);
  const runInfo = makeRun(season, s.today, nf.startNow);
  const settings: Settings = { ...settingsOf(null), pinSalt: nf.pin ? salt : '', pinHash: nf.pin ? await sha256(salt + nf.pin) : '', modules: nf.modules };
  const ops: WriteOp[] = [{
    kind: 'set', path: `families/${fid}`, data: {
      name: nf.name.trim(), owner: u.uid, license: nf.license || (s.demo ? 'DEMO' : ''), createdAt: Date.now(), ...(plan ? { plan } : {}),
      members: { [u.uid]: { role: 'owner', email: u.email, name: u.name || u.email } }, memberIds: [u.uid], invites: [], settings, season: runInfo,
    },
  }];
  if (!s.demo) ops.push({ kind: 'update', path: `licenses/${nf.license}`, data: { usedBy: u.uid, family: fid, usedAt: Date.now() } });
  const kids = nf.kids.map((k, i) => ({ ...k, id: db.newId(), order: i }));
  const tpl = await loadTemplates();
  const itemOps = templateOps(fid, tpl.items, kids.map(k => ({ id: k.id, band: k.band })));
  kids.forEach(k => {
    ops.push({ kind: 'set', path: `families/${fid}/children/${k.id}`, data: { name: k.name.trim(), birth: k.birth, gender: k.gender, color: k.color, maturity: 2, english: nf.modules.english, balance: 0, lifetime: 0, order: k.order } });
    const perDay = itemOps.filter(o => o.kind === 'set' && o.data.kind === 'task' && (!o.data.kids.length || o.data.kids.includes(k.id))).reduce((a, o: any) => a + o.data.stars, 0);
    const days = Math.round((new Date(runInfo.endDay).getTime() - new Date(runInfo.startDay).getTime()) / 864e5) + 1;
    ops.push(progressInit(fid, runInfo, k.id, Math.max(60, Math.round(perDay * days * 0.75 / 10) * 10)));
  });
  try {
    await db.write(ops.slice(0, s.demo ? ops.length : 2)); // família + licença juntas: as regras conferem as duas
    if (!s.demo) await db.write(ops.slice(2));
    await db.write(itemOps);
    selectFamily(fid); toast('Família criada! Bem-vindos ao Mundo de Estrelas');
    return true;
  } catch (e) { fail(e, 'Não foi possível criar a família'); return false }
}

/* ---------------------------------------------------------------- temporadas */
export function makeRun(season: SeasonDef, day: string, startNow: boolean): SeasonRun {
  const y = Number(day.slice(0, 4)); const wraps = season.dates.end < season.dates.start;
  let start = '', end = '';
  for (const sy of [y - 1, y, y + 1]) {
    start = `${sy}-${season.dates.start}`; end = `${wraps ? sy + 1 : sy}-${season.dates.end}`;
    if (day <= end) break;
  }
  const startDay = startNow || day > start ? day : start;
  return { runId: `${season.id}-${startDay.replace(/-/g, '')}-${Math.random().toString(36).slice(2, 6)}`, seasonId: season.id, version: season.version, startDay, endDay: end, startedAt: Date.now() };
}

export async function startSeason(seasonId: string, startNow: boolean) {
  const f = fam(); const s = getState(); const season = await loadSeason(seasonId);
  const r = makeRun(season, s.today, startNow);
  const ops: WriteOp[] = [{ kind: 'update', path: `families/${f.id}`, data: { season: r } }];
  s.children.forEach(c => ops.push(progressInit(f.id, r, c.id, suggestedGoal(s.items, c.id, r))));
  return run(ops, `Temporada ${season.name} começou!`);
}

/** Guarda a vila de cada criança no álbum (miniatura + lista de peças) e encerra a temporada. */
export async function endSeason(thumbs: Record<string, string>) {
  const f = fam(); const s = getState(); const r = f.season; const season = s.season;
  if (!r || !season) return false;
  const ops: WriteOp[] = [];
  s.children.forEach(c => {
    const p = s.progress[c.id];
    const items = Object.keys(p?.unlocked || {});
    const goal = p?.goal || suggestedGoal(s.items, c.id, r);
    season.items.filter(i => i.kind === 'milestone').forEach((m, i) => { if ((p?.seasonStars || 0) >= Math.round(goal * (season.milestoneFractions[i] ?? 1))) items.push(m.id) });
    ops.push({ kind: 'set', path: `families/${f.id}/album/${r.runId}_${c.id}`, data: {
      runId: r.runId, seasonId: r.seasonId, seasonName: season.name, child: c.id, childName: c.name, from: r.startDay,
      to: s.today < r.endDay ? s.today : r.endDay, seasonStars: p?.seasonStars || 0, items, thumb: thumbs[c.id] || '', createdAt: Date.now(),
    } });
  });
  ops.push({ kind: 'update', path: `families/${f.id}`, data: { season: null, lastSeason: r } });
  return run(ops, 'Temporada guardada no álbum de aventuras');
}

/* ---------------------------------------------------------------- superadmin */
export async function createLicenses(n: number, note: string, avatar = false) {
  const codes: string[] = []; const ops: WriteOp[] = [];
  const A = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  for (let i = 0; i < n; i++) {
    const code = 'MDE-' + Array.from(crypto.getRandomValues(new Uint8Array(8)), b => A[b % A.length]).join('').replace(/(.{4})(.{4})/, '$1-$2');
    codes.push(code);
    ops.push({ kind: 'set', path: `licenses/${code}`, data: { createdAt: Date.now(), createdBy: getState().user?.email || '', note, usedBy: null, plan: { avatar } } });
  }
  return (await run(ops, `${n} código(s) criado(s)`)) ? codes : [];
}
export const saveSlots = (seasonId: string, slots: Record<string, { x: number; y: number; w: number }>) =>
  run([{ kind: 'set', path: `contentOverrides/${seasonId}`, data: { slots, updatedAt: Date.now(), by: getState().user?.email || '' } }], 'Posições salvas para todas as famílias');

export function exportData() {
  const s = getState();
  return JSON.stringify({ exportedAt: new Date().toISOString(), family: s.family, children: s.children.map(c => ({ ...c, photo: c.photo ? '(foto omitida)' : '' })), items: s.items, progress: s.progress, recentEntries: s.entries }, null, 2);
}
export const yesterday = () => addDays(getState().today, -1);

/* ---------------------------------------------------------------- avatar (recurso extra) */
export async function buyAccessory(child: Child, a: { id: string; name: string; price: number }) {
  if ((child.balance || 0) < a.price) { toast(`Faltam ${a.price - (child.balance || 0)} estrelas`); return false }
  return run([entryOp({ child: child.id, kind: 'reward', label: `Avatar: ${a.name}`, emoji: '✨', stars: -a.price }).op, ...starOps(child.id, -a.price, false),
    { kind: 'update', path: P(`children/${child.id}`), data: { 'avatar.owned': db.fv.union(a.id) } }], `${a.name} é seu!`);
}
export const wearAccessory = (child: string, slot: string, id: string | null) =>
  run([{ kind: 'update', path: P(`children/${child}`), data: { [`avatar.worn.${slot}`]: id || db.fv.del() } }]);

/** Recorta a transparência, reduz e guarda o avatar no banco (só a família vê). */
export async function saveAvatar(child: string, file: File, neck: number) {
  const img = await new Promise<HTMLImageElement>((res, rej) => { const i = new Image(); const u = URL.createObjectURL(file); i.onload = () => { URL.revokeObjectURL(u); res(i) }; i.onerror = rej; i.src = u });
  const c0 = document.createElement('canvas'); c0.width = img.naturalWidth; c0.height = img.naturalHeight; const x0 = c0.getContext('2d')!; x0.drawImage(img, 0, 0);
  const d = x0.getImageData(0, 0, c0.width, c0.height).data; let l = c0.width, r = 0, t = c0.height, b = 0;
  for (let y = 0; y < c0.height; y++) for (let xx = 0; xx < c0.width; xx++) if (d[(y * c0.width + xx) * 4 + 3] > 40) { if (xx < l) l = xx; if (xx > r) r = xx; if (y < t) t = y; if (y > b) b = y }
  if (r <= l || b <= t) { toast('A imagem precisa ter fundo transparente', 'error'); return false }
  let H = 760, data = '';
  for (let q = 0.86; q >= 0.5; q -= 0.12) {
    const w = Math.round((r - l + 1) * H / (b - t + 1)); const c = document.createElement('canvas'); c.width = w; c.height = H;
    c.getContext('2d')!.drawImage(c0, l, t, r - l + 1, b - t + 1, 0, 0, w, H);
    data = c.toDataURL('image/webp', q); if (!data.startsWith('data:image/webp')) data = c.toDataURL('image/png');
    if (data.length < 850_000) break; H = Math.round(H * 0.85);
  }
  return run([{ kind: 'set', path: P(`avatars/${child}`), data: { img: data, neck, updatedAt: Date.now() } }], 'Avatar salvo');
}
export const setAvatarNeck = (child: string, neck: number) => run([{ kind: 'update', path: P(`avatars/${child}`), data: { neck } }]);
export const removeAvatar = (child: string) => run([{ kind: 'delete', path: P(`avatars/${child}`) }], 'Avatar removido');
export const setPlanAvatar = (on: boolean) => run([{ kind: 'update', path: `families/${fam().id}`, data: { 'plan.avatar': on } }], on ? 'Avatares liberados para esta família' : 'Avatares desligados');

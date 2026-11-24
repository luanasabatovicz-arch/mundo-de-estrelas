/* Blocos usados tanto na visão dos responsáveis quanto no modo criança. */
import { useState } from 'preact/hooks';
import { getState, setUI, useApp } from '../core/store';
import { childLevel, challengeBand, routine, settingsOf, world } from '../core/rules';
import { openAdventDoor, request, resolveRequest, simpleEarn } from '../core/actions';
import { contentUrl, loadAdvent, loadChallenges, seasonUrl, useContent } from '../core/content';
import { gx, pickDaily } from '../lib/util';
import { Art, Avatar, Bar, Sheet, Star } from './kit';
import { fpath, useCol, useDoc } from './hooks';
import type { Child } from '../core/types';

export function ChildTabs() {
  const s = useApp();
  if (s.children.length < 2) return null;
  return (
    <div class="child-tabs" role="tablist">
      {s.children.map(c => (
        <button role="tab" aria-selected={s.ui.child === c.id} class={s.ui.child === c.id ? 'on' : ''} onClick={() => setUI({ child: c.id })} style={{ '--c': c.color }}>
          <Avatar child={c} size={30} /><span>{c.name}</span><Star n={c.balance || 0} />
        </button>
      ))}
    </div>
  );
}

/** Resumo do dia: rotina rumo à peça do dia e a próxima grande conquista. */
export function DayCard({ child, kid }: { child: Child; kid?: boolean }) {
  const s = useApp();
  const st = settingsOf(s.family);
  const r = routine(s.family, s.items, s.entries, child.id, s.today);
  const run = s.family?.season; const season = s.season;
  const w = run && season ? world(season, run, s.progress[child.id], r, s.items, child.id, s.today) : null;
  const goalStars = Math.ceil(r.total * st.dailyGoalPct / 100);
  const open = () => kid ? setUI({ screen: 'mundo' }) : setUI({ tab: 'mundo', screen: null });
  return (
    <div class="card daycard">
      <div class="daycard-top">
        <div>
          <span class="eyebrow">Hoje</span>
          <div class="today-stars"><Star n={r.dayStars} big /><span class="muted">no dia · saldo {child.balance || 0}</span></div>
        </div>
        {w?.next && !w.claimedToday && <Art class="mini" src={seasonUrl(season!.id, w.next.img)} emoji={w.next.emoji} alt={w.next.name} />}
        {w?.claimedToday && <Art class="mini" src={seasonUrl(season!.id, w.claimedToday.img)} emoji={w.claimedToday.emoji} alt={w.claimedToday.name} />}
      </div>
      {w && season && <>
        <div class="goal-line">
          <span>{w.claimedToday ? <>Peça do dia conquistada: <b>{w.claimedToday.name}</b></> : w.canClaim ? <b>Peça do dia liberada!</b> : r.goalMet ? w.blockedReason : <>Rotina: {r.earned} de {goalStars} estrelas para a <b>peça do dia</b></>}</span>
        </div>
        <Bar value={r.earned} max={goalStars || 1} label="Rotina do dia" tone={r.goalMet ? 'gold' : ''} />
        {w.canClaim && <button class="btn primary block glow" onClick={open}>Buscar {w.next?.name}</button>}
        {w.nextMilestone && <div class="next-big" onClick={open}>
          <Art class="tiny" src={seasonUrl(season.id, w.nextMilestone.item.img)} emoji={w.nextMilestone.item.emoji} alt="" />
          <div><span class="eyebrow">Próxima grande conquista</span><b>{w.nextMilestone.item.name}</b><span class="muted"> · faltam {w.nextMilestone.need} estrelas</span>
            <Bar value={w.seasonStars} max={w.nextMilestone.at} tone="gold" label="Próxima grande conquista" /></div>
        </div>}
        {!w.nextMilestone && <p class="muted small">Todas as grandes conquistas da temporada foram alcançadas!</p>}
      </>}
      {!run && !kid && <p class="muted small">Nenhuma temporada ativa. Comece uma em Responsáveis → Temporada.</p>}
    </div>
  );
}

export function Requests() {
  const s = useApp();
  if (!s.requests.length) return null;
  return (
    <div class="card requests">
      <h3>Pedidos esperando você</h3>
      {s.requests.map(r => { const c = s.children.find(x => x.id === r.child); return (
        <div class="req">
          {c && <Avatar child={c} size={30} />}
          <span class="req-emo">{r.emoji}</span>
          <span class="req-text"><b>{c?.name}</b> {r.kind === 'reward' ? 'quer trocar por' : r.kind === 'challenge' ? 'fez o desafio' : 'fez'} <b>{r.label}</b> <span class="muted">({r.kind === 'reward' ? '−' : '+'}{r.stars})</span></span>
          <button class="btn sm ghost" onClick={() => resolveRequest(r, false)} aria-label="Recusar">Não</button>
          <button class="btn sm primary" onClick={() => resolveRequest(r, true)}>Sim</button>
        </div>
      ) })}
    </div>
  );
}

/* ---------------------------------------------------------------- Advento */
export const adventDay = (day: string) => { const m = Number(day.slice(5, 7)), d = Number(day.slice(8, 10)); return m === 12 && d <= 24 ? d : 0 };

export function AdventCard({ kid }: { kid?: boolean }) {
  const s = useApp(); const n = adventDay(s.today);
  const doc = useDoc(n ? fpath(`advent/${s.today.slice(0, 4)}-${String(n).padStart(2, '0')}`) : null);
  if (!settingsOf(s.family).modules.advent) return null;
  if (!n) return null;
  return (
    <button class="card advent-card" onClick={() => setUI({ screen: 'advento' })}>
      <span class="advent-num">{n}</span>
      <span><span class="eyebrow">Calendário do Advento</span><b>{doc?.exists ? 'Portinha de hoje aberta' : 'Portinha de hoje esperando'}</b>
        <span class="muted small">{doc?.exists ? 'Toque para rever a história.' : kid ? 'Toque para abrir!' : 'Abram juntos e ganhem estrelas.'}</span></span>
    </button>
  );
}

export function AdventScreen() {
  const s = useApp(); const data = useContent(loadAdvent);
  const year = s.today.slice(0, 4); const nToday = adventDay(s.today);
  const [open, setOpen] = useState<number | null>(nToday || null);
  const opened = useDocs(year);
  if (!data) return <p class="muted center">Carregando…</p>;
  const door = open ? data.doors[open - 1] : null;
  const isOpen = open ? opened.has(open) : false;
  return (
    <div class="page">
      <h2 class="page-title">Calendário do Advento</h2>
      {!nToday && <p class="muted">As portinhas abrem de 1 a 24 de dezembro, uma por dia.</p>}
      <div class="advent-grid">
        {data.doors.map((d, i) => { const n = i + 1; const can = nToday >= n; return (
          <button class={'door' + (opened.has(n) ? ' open' : '') + (can ? '' : ' locked')} disabled={!can} onClick={() => setOpen(n)} aria-label={`Portinha ${n}`}>
            {opened.has(n) ? <span>{d.emo}</span> : <span>{n}</span>}
          </button>
        ) })}
      </div>
      {door && open && <Sheet title={`Portinha ${open}`} onClose={() => setOpen(null)}>
        <Art class="wide-art" src={contentUrl(`advento/${String(open).padStart(2, '0')}.jpg`)} emoji={door.emo} alt="" />
        <h3>{door.t}</h3><p class="ref">{door.ref}</p><p class="story">{door.s}</p>
        <div class="activity"><span class="eyebrow">Atividade em família</span><p>{door.a}</p></div>
        {!isOpen ? <button class="btn primary block" onClick={async () => { await openAdventDoor(open, door.pts, door.t, door.emo) }}>Abrir a portinha · +{door.pts} para cada criança</button>
          : <p class="muted center">Portinha aberta. As estrelas já foram entregues.</p>}
      </Sheet>}
    </div>
  );
}
function useDocs(year: string) {
  const col = useCol(fpath('advent'));
  return new Set((col || []).filter(d => d.id.startsWith(year)).map(d => Number(d.id.slice(5))));
}

/* ---------------------------------------------------------------- Desafio do dia */
export function ChallengeCard({ child, kid }: { child: Child; kid?: boolean }) {
  const s = useApp(); const data = useContent(loadChallenges);
  if (!settingsOf(s.family).modules.challenges || !data) return null;
  const band = challengeBand(child, s.today);
  const ch = pickDaily(data.lists[band] || [], child.id + ':desafio', s.today);
  if (!ch) return null;
  const done = s.entries.some(e => e.child === child.id && e.day === s.today && e.kind === 'challenge' && !e.undone);
  const pending = s.requests.some(r => r.child === child.id && r.kind === 'challenge' && r.day === s.today);
  const text = gx(ch.t, child.gender);
  const act = () => kid && settingsOf(getState().family).kidMarks === 'pedido'
    ? request(child.id, 'challenge', text, ch.e, ch.s)
    : simpleEarn(child.id, 'challenge', text, ch.e, ch.s, `Desafio cumprido! +${ch.s}`);
  return (
    <div class={'card challenge' + (done ? ' done' : '')}>
      <span class="challenge-emo">{ch.e}</span>
      <div class="grow"><span class="eyebrow">Desafio do dia · {data.bands[band]}</span><p>{text}</p></div>
      {done ? <span class="pill gold">Feito!</span> : pending ? <span class="pill">Esperando</span> : <button class="btn sm primary" onClick={act}>+{ch.s}</button>}
    </div>
  );
}

export const levelOf = (c: Child) => childLevel(c, getState().today);

import { useState } from 'preact/hooks';
import { db, getState, selectFamily, setUI, toast, useApp } from '../../core/store';
import { goalOf, itemsFor, settingsOf, suggestedGoal } from '../../core/rules';
import {
  createLicenses, deleteItem, endSeason, exportData, invite, isSuperadmin, removeChild, removeMember, renameFamily,
  reorderItems, saveChild, saveItem, saveSettings, setGoal, setPin, startSeason, uninvite,
} from '../../core/actions';
import { loadSeasonIndex, seasonUrl, useContent } from '../../core/content';
import { ageOf, downloadText, fmtDay, shrinkPhoto } from '../../lib/util';
import { APP_VERSION } from '../../config';
import { Avatar, ColorPick, Confirm, EmojiPick, Field, PinPad, Sheet } from '../kit';
import { PERIODS } from './Today';
import { renderThumb } from '../Scene';
import { visibleItems, world, routine } from '../../core/rules';
import { enterKidMode } from './Kid';
import { ImageCheck, LayoutEditor } from './Tools';
import { fpath, useCol } from '../hooks';
import { ClipPicker } from '../clip';
import type { Child, Item, ItemKind, Modules } from '../../core/types';

type Sec = null | 'kids' | 'task' | 'good' | 'bad' | 'reward' | 'rules' | 'mods' | 'season' | 'family' | 'pin' | 'licenses' | 'images' | 'layout';
const KIND_TITLE: Record<ItemKind, string> = { task: 'Rotina', good: 'Atitudes que ganham estrelas', bad: 'Combinados não cumpridos', reward: 'Prêmios' };

export function Admin() {
  const s = useApp(); const [sec, setSec] = useState<Sec>(null);
  const back = <button class="link back" onClick={() => setSec(null)}>← Responsáveis</button>;
  if (sec === 'kids') return <div class="page">{back}<KidsAdmin /></div>;
  if (sec === 'task' || sec === 'good' || sec === 'bad' || sec === 'reward') return <div class="page">{back}<ItemsAdmin kind={sec} /></div>;
  if (sec === 'rules') return <div class="page">{back}<RulesAdmin /></div>;
  if (sec === 'mods') return <div class="page">{back}<ModsAdmin /></div>;
  if (sec === 'season') return <div class="page">{back}<SeasonAdmin go={setSec} /></div>;
  if (sec === 'family') return <div class="page">{back}<FamilyAdmin /></div>;
  if (sec === 'pin') return <div class="page">{back}<PinAdmin done={() => setSec(null)} /></div>;
  if (sec === 'licenses') return <div class="page">{back}<Licenses /></div>;
  if (sec === 'images') return <div class="page">{back}<ImageCheck /></div>;
  if (sec === 'layout') return <div class="page wide">{back}<LayoutEditor /></div>;
  const row = (id: Sec, emo: string, t: string, d: string) => <button class="menu-row" onClick={() => setSec(id)}><span class="menu-emo">{emo}</span><span class="grow"><b>{t}</b><small>{d}</small></span><span aria-hidden="true">›</span></button>;
  return (
    <div class="page">
      <div class="row between"><h2 class="page-title">Responsáveis</h2><button class="btn sm ghost" onClick={() => setUI({ screen: null, adminUntil: 0 })}>Fechar</button></div>
      <div class="card menu">
        {row('kids', '👧', 'Crianças', `${s.children.length} cadastrada(s), idade, foto e nível dos desafios`)}
        {row('task', '✅', 'Rotina', 'Tarefas do dia e quanto vale cada uma')}
        {row('good', '💛', 'Atitudes', 'Comportamentos que ganham estrelas')}
        {row('bad', '⚠️', 'Combinados', 'O que tira estrelas')}
        {row('reward', '🎁', 'Prêmios', 'O que as estrelas compram')}
      </div>
      <div class="card menu">
        {row('season', '🏘️', 'Temporada', s.season ? s.season.name : 'Nenhuma ativa')}
        {row('rules', '⚖️', 'Regras do jogo', 'Meta diária, bônus e pedidos das crianças')}
        {row('mods', '🧩', 'Módulos', 'Cristão, Advento, inglês, calma, desafios')}
        {row('family', '👨‍👩‍👧', 'Família e responsáveis', 'Nome, convites para outros adultos')}
        {row('pin', '🔑', 'Trocar PIN', 'Protege esta área e a saída do modo criança')}
        {isSuperadmin() && row('licenses', '🎫', 'Licenças (administração)', 'Criar códigos para novas famílias')}
      </div>
      <div class="card menu">
        <button class="menu-row" onClick={() => { enterKidMode(); setUI({ adminUntil: 0 }) }}><span class="menu-emo">🧒</span><span class="grow"><b>Modo criança neste aparelho</b><small>As crianças usam sozinhas; para sair, o PIN</small></span></button>
        <button class="menu-row" onClick={() => downloadText(`mundo-de-estrelas-${s.today}.json`, exportData())}><span class="menu-emo">💾</span><span class="grow"><b>Exportar cópia dos dados</b><small>Arquivo para guardar no seu computador</small></span></button>
        {s.families.length > 1 && s.families.filter(f => f.id !== s.familyId).map(f => <button class="menu-row" onClick={() => selectFamily(f.id)}><span class="menu-emo">🔁</span><span class="grow"><b>Ir para {f.name}</b></span></button>)}
        <button class="menu-row" onClick={() => db.signOut()}><span class="menu-emo">🚪</span><span class="grow"><b>{s.demo ? 'Sair e apagar a demonstração' : 'Sair da conta'}</b><small>{s.user?.email}</small></span></button>
      </div>
      {s.demo && <DemoTools />}
      <p class="muted small center">Mundo de Estrelas {APP_VERSION}</p>
    </div>
  );
}

function DemoTools() {
  const s = useApp(); const [d, setD] = useState(s.today);
  return <div class="card"><h3>Demonstração</h3><Field label="Simular a data de hoje"><input type="date" value={d} onInput={e => setD((e.target as HTMLInputElement).value)} /></Field>
    <div class="row gap"><button class="btn sm" onClick={() => { location.search = `?demo=1&hoje=${d}` }}>Usar esta data</button><button class="btn sm ghost" onClick={() => { location.search = '?demo=1&hoje=' }}>Data real</button></div></div>;
}

/* ---------------------------------------------------------------- crianças */
function KidsAdmin() {
  const s = useApp(); const [edit, setEdit] = useState<Partial<Child> | null>(null);
  return (
    <div class="card">
      <h2>Crianças</h2>
      {s.children.map(c => <button class="menu-row" onClick={() => setEdit(c)}><Avatar child={c} size={40} /><span class="grow"><b>{c.name}</b><small>{c.birth ? `${ageOf(c.birth, s.today)} anos` : 'sem data de nascimento'} · saldo {c.balance || 0}</small></span>›</button>)}
      <button class="btn block" onClick={() => setEdit({ name: '', gender: 'f', color: '#2F5D4A', maturity: 2, english: true })}>Adicionar criança</button>
      {edit && <ChildEdit c={edit} onClose={() => setEdit(null)} />}
    </div>
  );
}
function ChildEdit({ c: c0, onClose }: { c: Partial<Child>; onClose: () => void }) {
  const s = getState(); const [c, setC] = useState<Partial<Child>>(c0); const [del, setDel] = useState(false);
  const up = (p: Partial<Child>) => setC({ ...c, ...p });
  return (
    <Sheet title={c0.id ? `Editar ${c0.name}` : 'Nova criança'} onClose={onClose}>
      <div class="row gap center-v"><Avatar child={{ name: c.name || '?', color: c.color || '#888', photo: c.photo }} size={64} />
        <label class="btn sm ghost">Foto<input type="file" accept="image/*" hidden onChange={async e => { const f = (e.target as HTMLInputElement).files?.[0]; if (f) up({ photo: await shrinkPhoto(f) }) }} /></label>
        {c.photo && <button class="link small" onClick={() => up({ photo: '' })}>remover foto</button>}</div>
      <Field label="Nome"><input value={c.name} maxLength={24} onInput={e => up({ name: (e.target as HTMLInputElement).value })} /></Field>
      <Field label="Data de nascimento"><input type="date" value={c.birth} max={s.today} onInput={e => up({ birth: (e.target as HTMLInputElement).value })} /></Field>
      <Field label="Os textos tratam como"><div class="seg">{([['f', 'menina'], ['m', 'menino'], ['x', 'neutro']] as const).map(([g, l]) => <button type="button" class={c.gender === g ? 'on' : ''} onClick={() => up({ gender: g })}>{l}</button>)}</div></Field>
      <Field label="Desafios" hint="Ajusta a faixa dos desafios em relação à idade."><div class="seg">{([[1, 'mais simples'], [2, 'da idade'], [3, 'mais difíceis']] as const).map(([m, l]) => <button type="button" class={c.maturity === m ? 'on' : ''} onClick={() => up({ maturity: m })}>{l}</button>)}</div></Field>
      <label class="toggle"><input type="checkbox" checked={c.english !== false} onChange={e => up({ english: (e.target as HTMLInputElement).checked })} /><span><b>Mostrar palavras em inglês</b></span></label>
      <Field label="Cor"><ColorPick value={c.color || ''} onChange={color => up({ color })} /></Field>
      <button class="btn primary block" disabled={!c.name?.trim()} onClick={async () => { if (await saveChild(c as any)) onClose() }}>Salvar</button>
      {c0.id && <button class="btn ghost danger-text block" onClick={() => setDel(true)}>Remover criança</button>}
      {del && <Confirm danger text={`Remover ${c0.name}? O histórico fica guardado, mas ela some do app.`} yes="Remover" onClose={() => setDel(false)} onYes={() => { removeChild(c0.id!); onClose() }} />}
    </Sheet>
  );
}

/* ---------------------------------------------------------------- itens */
function ItemsAdmin({ kind }: { kind: ItemKind }) {
  const s = useApp(); const [edit, setEdit] = useState<Partial<Item> | null>(null);
  const list = s.items.filter(i => i.kind === kind && i.active !== false);
  const move = (i: number, d: number) => { const ids = list.map(x => x.id); const j = i + d; if (j < 0 || j >= ids.length) return; [ids[i], ids[j]] = [ids[j], ids[i]]; reorderItems(ids) };
  const kidsLabel = (it: Item) => !it.kids?.length ? 'todas as crianças' : it.kids.map(k => s.children.find(c => c.id === k)?.name).filter(Boolean).join(', ');
  return (
    <div class="card">
      <h2>{KIND_TITLE[kind]}</h2>
      {kind === 'task' && <p class="muted small">Dica: use {'{o|a}'} para o texto mudar com o gênero. Ex.: "Arrumad{'{o|a}'} para a escola".</p>}
      {list.map((it, i) => (
        <div class="item-row">
          <span class="item-emo">{it.emoji}</span>
          <button class="grow item-main" onClick={() => setEdit(it)}><b>{it.label}</b><small>{kind === 'reward' ? `${it.stars} estrelas` : `${kind === 'bad' ? '−' : '+'}${it.stars}`} · {kind === 'task' ? PERIODS.find(p => p[0] === (it.period || 'livre'))?.[1] + ' · ' : ''}{kidsLabel(it)}</small></button>
          <button class="icon-btn" onClick={() => move(i, -1)} aria-label="Subir">↑</button>
          <button class="icon-btn" onClick={() => move(i, 1)} aria-label="Descer">↓</button>
        </div>
      ))}
      <button class="btn block" onClick={() => setEdit({ kind, emoji: '⭐', label: '', stars: kind === 'reward' ? 50 : 2, period: 'livre', kids: [], order: list.length })}>Adicionar</button>
      {edit && <ItemEdit it={edit} onClose={() => setEdit(null)} />}
    </div>
  );
}
function ItemEdit({ it: it0, onClose }: { it: Partial<Item>; onClose: () => void }) {
  const s = getState(); const [it, setIt] = useState<Partial<Item>>(it0);
  const up = (p: Partial<Item>) => setIt({ ...it, ...p });
  const toggleKid = (id: string) => { const k = new Set(it.kids || []); k.has(id) ? k.delete(id) : k.add(id); up({ kids: [...k] }) };
  return (
    <Sheet title={it0.id ? 'Editar' : 'Novo'} onClose={onClose}>
      <div class="row gap"><EmojiPick value={it.emoji || '⭐'} onChange={emoji => up({ emoji })} />
        <Field label="Texto"><input value={it.label} maxLength={60} onInput={e => up({ label: (e.target as HTMLInputElement).value })} /></Field></div>
      {(it.kind === 'task' || it.kind === 'good') && <Field label="Ilustração" hint="Automática escolhe pelo texto. Também dá para escolher outra ou usar só o emoji."><ClipPicker value={it.clip || undefined} label={it.label || ''} onChange={clip => up({ clip: clip || '' })} /></Field>}
      <Field label={it.kind === 'reward' ? 'Custa (estrelas)' : 'Estrelas'}><input type="number" inputMode="numeric" min={0} value={it.stars} onInput={e => up({ stars: Number((e.target as HTMLInputElement).value) })} /></Field>
      {it.kind === 'task' && <Field label="Quando"><div class="seg">{PERIODS.map(([p, l]) => <button type="button" class={(it.period || 'livre') === p ? 'on' : ''} onClick={() => up({ period: p })}>{l}</button>)}</div></Field>}
      {s.children.length > 1 && <Field label="Para quem" hint="Nenhuma marcada = todas as crianças."><div class="seg wrap">{s.children.map(c => <button type="button" class={it.kids?.includes(c.id) ? 'on' : ''} onClick={() => toggleKid(c.id)}>{c.name}</button>)}</div></Field>}
      <button class="btn primary block" disabled={!it.label?.trim()} onClick={async () => { if (await saveItem(it as any)) onClose() }}>Salvar</button>
      {it0.id && <button class="btn ghost danger-text block" onClick={() => { deleteItem(it0.id!); onClose() }}>Remover</button>}
    </Sheet>
  );
}

/* ---------------------------------------------------------------- regras e módulos */
function RulesAdmin() {
  const s = useApp(); const st = settingsOf(s.family);
  const [pct, setPct] = useState(st.dailyGoalPct); const [bonus, setBonus] = useState(st.perfectBonus);
  return (
    <div class="card">
      <h2>Regras do jogo</h2>
      <Field label={`Meta diária: ${pct}% da rotina`} hint="Ao alcançar a meta, a criança ganha a peça do dia na temporada."><input type="range" min={40} max={100} step={5} value={pct} onInput={e => setPct(Number((e.target as HTMLInputElement).value))} /></Field>
      <Field label="Bônus por rotina completa (estrelas)"><input type="number" min={0} max={50} value={bonus} onInput={e => setBonus(Number((e.target as HTMLInputElement).value))} /></Field>
      <Field label="No modo criança, ao marcar uma tarefa"><div class="seg">
        <button type="button" class={st.kidMarks === 'pedido' ? 'on' : ''} onClick={() => saveSettings({ kidMarks: 'pedido' })}>um adulto confirma</button>
        <button type="button" class={st.kidMarks === 'direto' ? 'on' : ''} onClick={() => saveSettings({ kidMarks: 'direto' })}>vale na hora</button></div></Field>
      <button class="btn primary block" onClick={() => saveSettings({ dailyGoalPct: pct, perfectBonus: Math.max(0, Math.round(bonus)) })}>Salvar</button>
      <div class="rules-text">
        <h3>Como funciona</h3>
        <p>Cada tarefa, atitude e desafio dá estrelas. O saldo é usado para trocar por prêmios.</p>
        <p>Na temporada, a meta diária libera uma peça nova por dia. As grandes conquistas chegam com as estrelas ganhas na temporada; trocar estrelas por prêmios não tira peças da vila.</p>
        <p>Combinados não cumpridos tiram estrelas do saldo, mas não desmontam a vila.</p>
      </div>
    </div>
  );
}
function ModsAdmin() {
  const s = useApp(); const m = settingsOf(s.family).modules;
  const L: [keyof Modules, string, string][] = [['christian', 'Conteúdo cristão', 'Histórias bíblicas, orações e mensagens de Jesus'], ['advent', 'Calendário do Advento', '1 a 24 de dezembro'], ['english', 'Palavras em inglês', 'Nas peças da temporada'], ['calm', 'Cantinho da calma', 'Respiração guiada'], ['challenges', 'Desafios do dia', 'Um por dia, por idade']];
  return <div class="card"><h2>Módulos</h2>{L.map(([k, t, d]) => <label class="toggle"><input type="checkbox" checked={m[k]} onChange={e => saveSettings({ modules: { ...m, [k]: (e.target as HTMLInputElement).checked } })} /><span><b>{t}</b><small>{d}</small></span></label>)}</div>;
}

/* ---------------------------------------------------------------- temporada */
function SeasonAdmin({ go }: { go: (s: Sec) => void }) {
  const s = useApp(); const run = s.family?.season; const season = s.season;
  const idx = useContent(loadSeasonIndex);
  const [ending, setEnding] = useState(false); const [busy, setBusy] = useState(false);
  const [goals, setGoals] = useState<Record<string, string>>({});
  const doEnd = async () => {
    if (!season || !run) return; setBusy(true);
    const thumbs: Record<string, string> = {};
    for (const c of s.children) {
      const w = world(season, run, s.progress[c.id], routine(s.family, s.items, s.entries, c.id, s.today), s.items, c.id, s.today);
      try { thumbs[c.id] = await renderThumb(season, visibleItems(season, w), s.slots) } catch { thumbs[c.id] = '' }
    }
    await endSeason(thumbs); setBusy(false);
  };
  if (!run || !season) return (
    <div class="card"><h2>Temporada</h2><p>Nenhuma temporada ativa.</p>
      {(idx || []).map(x => <div class="subcard">{x.cover && <img class="season-cover" src={seasonUrl(x.id, x.cover)} alt="" onError={e => ((e.target as HTMLElement).style.display = 'none')} />}<b>{x.name}</b><p class="muted">{x.tagline}</p>
        <div class="row gap"><button class="btn primary sm" onClick={() => startSeason(x.id, false)}>Começar na data oficial</button><button class="btn sm" onClick={() => startSeason(x.id, true)}>Começar hoje</button></div></div>)}
    </div>
  );
  return (
    <div class="card">
      <h2>{season.name}</h2>
      <p class="muted">De {fmtDay(run.startDay)} a {fmtDay(run.endDay)}.</p>
      <h3>Meta de estrelas da temporada</h3>
      <p class="muted small">As grandes conquistas chegam em 12%, 30%, 50%, 75% e 100% desta meta. A sugestão é 75% do que a rotina permite.</p>
      {s.children.map(c => { const g = goalOf(s.progress[c.id], s.items, c.id, run); return (
        <div class="item-row"><Avatar child={c} size={32} /><span class="grow"><b>{c.name}</b><small>{s.progress[c.id]?.seasonStars || 0} de {g} · sugerido {suggestedGoal(s.items, c.id, run)}</small></span>
          <input class="num" type="number" min={30} value={goals[c.id] ?? g} onInput={e => setGoals({ ...goals, [c.id]: (e.target as HTMLInputElement).value })} />
          <button class="btn sm" disabled={!goals[c.id] || Number(goals[c.id]) === g} onClick={() => setGoal(c.id, Math.max(30, Math.round(Number(goals[c.id]))))}>OK</button></div>
      ) })}
      <div class="menu">
        <button class="menu-row" onClick={() => go('images')}><span class="menu-emo">🖼️</span><span class="grow"><b>Conferir imagens</b><small>O que já chegou e o que falta</small></span>›</button>
        {isSuperadmin() && <button class="menu-row" onClick={() => go('layout')}><span class="menu-emo">📐</span><span class="grow"><b>Ajustar posições das peças</b><small>Vale para todas as famílias</small></span>›</button>}
      </div>
      <button class="btn ghost danger-text block" disabled={busy} onClick={() => setEnding(true)}>{busy ? 'Guardando…' : 'Encerrar e guardar no álbum'}</button>
      {ending && <Confirm text="Encerrar a temporada agora? A vila de cada criança vai para o álbum de aventuras e a próxima temporada poderá começar. Saldo e prêmios continuam." yes="Encerrar" onClose={() => setEnding(false)} onYes={doEnd} />}
    </div>
  );
}

/* ---------------------------------------------------------------- família, PIN, licenças */
function FamilyAdmin() {
  const s = useApp(); const f = s.family!; const [name, setName] = useState(f.name); const [email, setEmail] = useState('');
  const owner = f.owner === s.user?.uid;
  return (
    <div class="card">
      <h2>Família</h2>
      <Field label="Nome"><input value={name} maxLength={40} onInput={e => setName((e.target as HTMLInputElement).value)} /></Field>
      <button class="btn sm" disabled={!name.trim() || name === f.name} onClick={() => renameFamily(name)}>Salvar nome</button>
      <h3>Responsáveis</h3>
      {Object.entries(f.members || {}).map(([uid, m]) => <div class="item-row"><span class="grow"><b>{m.name || m.email}</b><small>{m.email} · {m.role === 'owner' ? 'criador(a)' : 'responsável'}</small></span>
        {owner && uid !== s.user?.uid && <button class="link small danger-text" onClick={() => removeMember(uid)}>remover</button>}</div>)}
      <h3>Convidar outro adulto</h3>
      <p class="muted small">A pessoa entra com esse e-mail (Google ou e-mail confirmado) e aceita o convite.</p>
      {(f.invites || []).map(e => <div class="item-row"><span class="grow">{e} <small class="muted">convidado</small></span><button class="link small" onClick={() => uninvite(e)}>cancelar</button></div>)}
      <div class="row gap"><input type="email" placeholder="email@exemplo.com" value={email} onInput={e => setEmail((e.target as HTMLInputElement).value)} />
        <button class="btn" disabled={!/^\S+@\S+\.\S+$/.test(email)} onClick={() => { invite(email); setEmail('') }}>Convidar</button></div>
    </div>
  );
}
function PinAdmin({ done }: { done: () => void }) {
  const [p1, setP1] = useState(''); const [err, setErr] = useState('');
  return <div class="card">{!p1 ? <PinPad title="Novo PIN" error={err} onDone={p => { setP1(p); setErr('') }} />
    : <PinPad title="Repita o novo PIN" onDone={async p => { if (p === p1) { await setPin(p); toast('PIN alterado'); done() } else { setErr('Os PINs não conferem'); setP1('') } }} />}</div>;
}
function Licenses() {
  const [n, setN] = useState(1); const [note, setNote] = useState(''); const [made, setMade] = useState<string[]>([]);
  const col = useCol('licenses');
  const list = (col || []).map(d => ({ id: d.id, ...d.data })).sort((a: any, b: any) => b.createdAt - a.createdAt);
  return (
    <div class="card">
      <h2>Licenças</h2>
      <p class="muted small">Cada código cria uma família. Envie o código para quem comprou.</p>
      <div class="row gap"><Field label="Quantidade"><input type="number" min={1} max={50} value={n} onInput={e => setN(Number((e.target as HTMLInputElement).value))} /></Field>
        <Field label="Anotação (ex.: nome da cliente)"><input value={note} maxLength={60} onInput={e => setNote((e.target as HTMLInputElement).value)} /></Field></div>
      <button class="btn primary block" onClick={async () => setMade(await createLicenses(Math.min(50, Math.max(1, n)), note))}>Criar códigos</button>
      {made.length > 0 && <div class="codes"><pre>{made.join('\n')}</pre><button class="btn sm" onClick={() => { navigator.clipboard?.writeText(made.join('\n')); toast('Copiado') }}>Copiar</button></div>}
      <h3>Códigos</h3>
      {list.map((l: any) => <div class="item-row"><span class="grow"><b class="mono">{l.id}</b><small>{l.note || 'sem anotação'} · {l.usedBy ? 'usado' : 'disponível'}</small></span></div>)}
      {fpath('') && null}
    </div>
  );
}
void itemsFor;

import { useState } from 'preact/hooks';
import { setUI, useApp } from '../../core/store';
import { itemsFor, liveEntries, routine, settingsOf } from '../../core/rules';
import { adjust, logItem, undoEntry } from '../../core/actions';
import { gx } from '../../lib/util';
import { Field, Sheet } from '../kit';
import { AdventCard, ChallengeCard, ChildTabs, DayCard, Requests } from '../parts';
import type { Child, Entry, Item, Period } from '../../core/types';

export const PERIODS: [Period, string][] = [['manha', 'Manhã'], ['tarde', 'Tarde'], ['noite', 'Noite'], ['livre', 'Ao longo do dia']];

export function Today() {
  const s = useApp();
  const child = s.children.find(c => c.id === s.ui.child) || s.children[0];
  if (!child) return <div class="page"><p class="muted">Cadastre uma criança em Responsáveis.</p></div>;
  return (
    <div class="page">
      <ChildTabs />
      <Requests />
      <DayCard child={child} />
      <AdventCard />
      <RoutineList child={child} />
      <ChallengeCard child={child} />
      <Behaviors child={child} />
      <DayLog child={child} />
    </div>
  );
}

export function RoutineList({ child, onTap }: { child: Child; onTap?: (t: Item, done: boolean) => void }) {
  const s = useApp();
  const r = routine(s.family, s.items, s.entries, child.id, s.today);
  if (!r.tasks.length) return <div class="card"><h3>Rotina</h3><p class="muted">Nenhuma tarefa para {child.name}. Adicione em Responsáveis → Rotina.</p></div>;
  const entryOf = (id: string) => liveEntries(s.entries, child.id, s.today).find(e => e.kind === 'task' && e.itemId === id);
  const tap = onTap || ((t: Item, done: boolean) => { if (done) { const e = entryOf(t.id); if (e) undoEntry(e) } else logItem(child.id, t) });
  const pend = new Set(s.requests.filter(q => q.child === child.id && q.kind === 'task').map(q => q.itemId));
  return (
    <div class="card routine">
      <div class="row between"><h3>Rotina</h3><span class="muted small">{r.done.size} de {r.tasks.length}</span></div>
      {PERIODS.map(([p, label]) => {
        const ts = r.tasks.filter(t => (t.period || 'livre') === p);
        if (!ts.length) return null;
        return <div class="period"><span class="eyebrow">{label}</span>
          {ts.map(t => { const done = r.done.has(t.id); return (
            <button class={'task' + (done ? ' done' : '') + (pend.has(t.id) ? ' pend' : '')} onClick={() => tap(t, done)} aria-pressed={done}>
              <span class="check" aria-hidden="true">{done ? '✓' : ''}</span>
              <span class="task-emo">{t.emoji}</span><span class="task-label">{gx(t.label, child.gender)}</span>
              {pend.has(t.id) && !done ? <span class="pill">pedido</span> : <span class="task-stars">+{t.stars}</span>}
            </button>
          ) })}
        </div>;
      })}
    </div>
  );
}

function Behaviors({ child }: { child: Child }) {
  const s = useApp();
  const good = itemsFor(s.items, child.id, 'good'), bad = itemsFor(s.items, child.id, 'bad');
  const [adj, setAdj] = useState(false); const [n, setN] = useState(''); const [note, setNote] = useState('');
  return (
    <div class="card">
      <h3>Atitudes</h3>
      <div class="chips">{good.map(g => <button class="chip good" onClick={() => logItem(child.id, g)}>{g.emoji} {gx(g.label, child.gender)} <b>+{g.stars}</b></button>)}</div>
      {bad.length > 0 && <><span class="eyebrow">Combinados não cumpridos</span>
        <div class="chips">{bad.map(b => <button class="chip bad" onClick={() => logItem(child.id, b)}>{b.emoji} {gx(b.label, child.gender)} <b>−{b.stars}</b></button>)}</div></>}
      <div class="row gap wrap">
        <button class="btn sm ghost" onClick={() => setAdj(true)}>Ajuste manual</button>
        {settingsOf(s.family).modules.calm && <button class="btn sm ghost" onClick={() => setUI({ screen: 'calma', screenArg: child.id })}>Cantinho da calma</button>}
      </div>
      {adj && <Sheet title={`Ajuste para ${child.name}`} onClose={() => setAdj(false)}>
        <Field label="Estrelas (use − para tirar)"><input type="number" inputMode="numeric" value={n} onInput={e => setN((e.target as HTMLInputElement).value)} /></Field>
        <Field label="Motivo"><input value={note} maxLength={60} onInput={e => setNote((e.target as HTMLInputElement).value)} /></Field>
        <button class="btn primary block" disabled={!Number(n)} onClick={() => { adjust(child.id, Math.round(Number(n)), note); setAdj(false); setN(''); setNote('') }}>Registrar</button>
        <p class="muted small">Ajustes mexem no saldo, mas não contam para a vila.</p>
      </Sheet>}
    </div>
  );
}

export function DayLog({ child, day }: { child: Child; day?: string }) {
  const s = useApp(); const d = day || s.today;
  const es = s.entries.filter(e => e.child === child.id && e.day === d).slice().reverse();
  if (!es.length) return null;
  return (
    <div class="card log">
      <h3>Registro do dia</h3>
      {es.map((e: Entry) => (
        <div class={'log-row' + (e.undone ? ' undone' : '')}>
          <span>{e.emoji}</span><span class="grow">{e.label}</span>
          <b class={e.stars < 0 ? 'neg' : 'pos'}>{e.stars > 0 ? '+' : ''}{e.stars}</b>
          {!e.undone && <button class="link small" onClick={() => undoEntry(e)}>desfazer</button>}
        </div>
      ))}
    </div>
  );
}

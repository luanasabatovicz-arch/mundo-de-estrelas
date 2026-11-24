import { useState } from 'preact/hooks';
import { getState, setUI, toast, useApp } from '../../core/store';
import { settingsOf } from '../../core/rules';
import { checkPin, logItem, request } from '../../core/actions';
import { gx } from '../../lib/util';
import { Avatar, PinPad, Sheet, Star } from '../kit';
import { AdventCard, AdventScreen, ChallengeCard, DayCard } from '../parts';
import { RoutineList } from './Today';
import { World } from './World';
import { Prizes } from './Prizes';
import { Night } from './Night';
import { Calm } from './Calm';
import { Album } from './Album';
import type { Item } from '../../core/types';

export function KidShell() {
  const s = useApp(); const [pin, setPin] = useState(false); const [err, setErr] = useState('');
  const child = s.children.find(c => c.id === s.ui.kidId);
  const exit = async (p: string) => { if (await checkPin(p)) { setPin(false); setErr(''); setUI({ kidMode: false, kidId: null, screen: null }) } else setErr('PIN incorreto') };
  const pinSheet = pin && <Sheet title="Área dos adultos" onClose={() => { setPin(false); setErr('') }}><PinPad title="Digite o PIN" error={err} onDone={exit} /></Sheet>;
  if (!child) return (
    <div class="kid page">
      <h1 class="kid-title">Quem está aí?</h1>
      <div class="kid-pick">{s.children.map(c => <button onClick={() => setUI({ kidId: c.id, screen: null })}><Avatar child={c} size={84} /><span>{c.name}</span></button>)}</div>
      <button class="link" onClick={() => setPin(true)}>Sou adulto</button>
      {pinSheet}
    </div>
  );
  const sub = s.ui.screen;
  return (
    <div class="kid" style={{ '--c': child.color }}>
      <header class="kid-head">
        {sub ? <button class="icon-btn" onClick={() => setUI({ screen: null })} aria-label="Voltar">←</button>
          : <button class="kid-me" onClick={() => setUI({ kidId: null })} aria-label="Trocar de criança"><Avatar child={child} size={40} /></button>}
        <div class="kid-hello"><b>{sub ? '' : `Oi, ${child.name}!`}</b></div>
        <Star n={child.balance || 0} big />
        <button class="icon-btn" onClick={() => setPin(true)} aria-label="Sair do modo criança">🔒</button>
      </header>
      <main class="page">
        {!sub && <KidHome />}
        {sub === 'mundo' && <World child={child} kid />}
        {sub === 'premios' && <Prizes child={child} kid />}
        {sub === 'noite' && <Night only={child} />}
        {sub === 'calma' && <Calm childId={child.id} />}
        {sub === 'advento' && <AdventScreen />}
        {sub === 'album' && <Album childId={child.id} />}
      </main>
      {pinSheet}
    </div>
  );
}

function KidHome() {
  const s = useApp(); const child = s.children.find(c => c.id === s.ui.kidId)!;
  const st = settingsOf(s.family);
  const tap = (t: Item, done: boolean) => {
    if (done) { toast('Para desfazer, chame um adulto'); return }
    if (st.kidMarks === 'direto') logItem(child.id, t);
    else request(child.id, 'task', gx(t.label, child.gender), t.emoji, t.stars, t.id);
  };
  const tiles: [string, string, string, boolean][] = [
    ['mundo', '🏘️', 'Meu mundo', true], ['premios', '🎁', 'Prêmios', true],
    ['noite', '🌙', 'Hora de dormir', true], ['calma', '🫧', 'Cantinho da calma', st.modules.calm],
  ];
  return (
    <>
      <DayCard child={child} kid />
      <AdventCard kid />
      <div class="tiles">{tiles.filter(t => t[3]).map(([id, e, l]) => <button class="tile" onClick={() => setUI({ screen: id })}><span>{e}</span>{l}</button>)}</div>
      <RoutineList child={child} onTap={tap} />
      <ChallengeCard child={child} kid />
      {st.kidMarks === 'pedido' && <p class="muted small center">Quando você marca uma tarefa, um adulto confirma.</p>}
    </>
  );
}
export const enterKidMode = () => { setUI({ kidMode: true, kidId: getState().children.length === 1 ? getState().children[0].id : null, screen: null }) };

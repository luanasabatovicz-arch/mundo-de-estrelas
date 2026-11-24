import { useEffect, useState } from 'preact/hooks';
import { setUI, useApp } from '../../core/store';
import { settingsOf } from '../../core/rules';
import { simpleEarn } from '../../core/actions';
import { loadCalm, useContent } from '../../core/content';
import { pickDaily } from '../../lib/util';
import { Avatar } from '../kit';
import type { Child } from '../../core/types';

const CYCLES = 5, STARS = 3, PER_DAY = 2;

export function Calm({ childId }: { childId?: string }) {
  const s = useApp(); const data = useContent(loadCalm);
  const [kidId, setKidId] = useState(childId || (s.ui.kidMode ? s.ui.kidId : null));
  const child = s.children.find(c => c.id === kidId);
  if (!data) return <p class="muted center">Carregando…</p>;
  if (!child) return (
    <div class="page calm"><h2 class="page-title">Cantinho da calma</h2><p>Quem precisa de um momento de calma?</p>
      <div class="kid-pick">{s.children.map(c => <button onClick={() => setKidId(c.id)}><Avatar child={c} size={64} /><span>{c.name}</span></button>)}</div></div>
  );
  return <CalmFlow child={child} data={data} />;
}

function CalmFlow({ child, data }: { child: Child; data: NonNullable<ReturnType<typeof loadCalm> extends Promise<infer T> ? T : never> }) {
  const s = useApp();
  const [step, setStep] = useState<'feel' | 'breathe' | 'tool' | 'done'>('feel');
  const [feel, setFeel] = useState<string | null>(null);
  const [earned, setEarned] = useState(false);
  const [cycle, setCycle] = useState(0); const [phase, setPhase] = useState<'in' | 'out'>('in');
  useEffect(() => {
    if (step !== 'breathe') return;
    const t = setInterval(() => setPhase(p => { if (p === 'out') setCycle(c => c + 1); return p === 'in' ? 'out' : 'in' }), 4000);
    return () => clearInterval(t);
  }, [step]);
  useEffect(() => { if (cycle >= CYCLES) setStep('tool') }, [cycle]);
  const usedToday = s.entries.filter(e => e.child === child.id && e.day === s.today && e.kind === 'calm' && !e.undone).length;
  const finish = (tool: string) => {
    setStep('done'); setEarned(usedToday < PER_DAY);
    if (usedToday < PER_DAY) simpleEarn(child.id, 'calm', `Cantinho da calma: ${tool}`, '🫧', STARS, `+${STARS} por cuidar das emoções`);
  };
  const verse = settingsOf(s.family).modules.christian ? pickDaily(data.verses, child.id, s.today) : null;
  const f = data.feelings.find(x => x.id === feel);
  return (
    <div class="page calm">
      <h2 class="page-title">Cantinho da calma</h2>
      {step === 'feel' && <>
        <p class="calm-q">Como você está se sentindo, {child.name}?</p>
        <div class="feelings">{data.feelings.map(x => <button onClick={() => { setFeel(x.id); setStep('breathe') }}><span>{x.emo}</span>{child.gender === 'f' ? x.f : x.m}</button>)}</div>
      </>}
      {step === 'breathe' && <div class="breathe">
        <p class="muted">Tudo bem se sentir {f ? (child.gender === 'f' ? f.f : f.m).toLowerCase() : 'assim'}. Vamos respirar juntos.</p>
        <div class={'bubble ' + phase}><span>{phase === 'in' ? 'Puxa o ar…' : 'Solta devagar…'}</span></div>
        <p class="muted small">{Math.min(cycle + 1, CYCLES)} de {CYCLES}</p>
        <button class="link" onClick={() => setStep('tool')}>Pular</button>
      </div>}
      {step === 'tool' && <>
        <p class="calm-q">O que pode ajudar agora?</p>
        <div class="tools">{data.tools.map(t => <button onClick={() => finish(t.t)}><span>{t.emo}</span>{t.t}</button>)}</div>
      </>}
      {step === 'done' && <div class="card center">
        <div class="big-emo">🫧</div>
        <h3>Você cuidou do seu coração.</h3>
        {verse && <p class="verse-small">{verse}</p>}
        <p class="muted small">{earned ? `+${STARS} estrelas` : 'As estrelas do cantinho já foram ganhas hoje, mas a calma vale sempre.'}</p>
        <button class="btn primary" onClick={() => setUI({ screen: null })}>Voltar</button>
      </div>}
    </div>
  );
}

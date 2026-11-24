import { useState } from 'preact/hooks';
import { acceptInvite, createFamily, createLicenses, isSuperadmin, type NewFamily } from '../../core/actions';
import { db, getState, useApp } from '../../core/store';
import { loadSeasonIndex, seasonUrl, useContent } from '../../core/content';
import { ageBand, ageOf, fmtDay } from '../../lib/util';
import { ColorPick, COLORS, Field, PinPad } from '../kit';
import type { Gender } from '../../core/types';

type Kid = NewFamily['kids'][number];
const MODS: [keyof NewFamily['modules'], string, string][] = [
  ['christian', 'Conteúdo cristão', 'Histórias bíblicas, orações e mensagens de Jesus na noite.'],
  ['advent', 'Calendário do Advento', '24 portinhas em dezembro, com uma atividade em família.'],
  ['english', 'Palavras em inglês', 'Cada peça da temporada traz uma palavra e uma frase.'],
  ['calm', 'Cantinho da calma', 'Respiração guiada e ideias para quando a emoção aperta.'],
  ['challenges', 'Desafios do dia', 'Um desafio por dia, de acordo com a idade.'],
];

export function Welcome() {
  const s = useApp(); const [creating, setCreating] = useState(false);
  if (creating) return <Onboarding onCancel={() => setCreating(false)} />;
  return (
    <div class="page narrow">
      <header class="welcome-head"><div class="brand-mark">✦</div><h1>Bem-vindos!</h1><p class="muted">{s.user?.email}</p></header>
      {s.invites.map(f => (
        <div class="card">
          <h3>Convite para a família {f.name}</h3>
          <p class="muted">Você foi convidado para acompanhar as crianças desta família.</p>
          <button class="btn primary block" onClick={() => acceptInvite(f)}>Entrar na família</button>
        </div>
      ))}
      <div class="card">
        <h3>Começar uma família nova</h3>
        <p class="muted">{s.demo ? 'Na demonstração você pode criar uma família de exemplo ou montar a sua.' : 'Você vai precisar do código de licença recebido na compra.'}</p>
        <button class="btn primary block" onClick={() => setCreating(true)}>Criar família</button>
        {s.demo && <button class="btn ghost block" onClick={() => createFamily({
          name: 'Família Exemplo', license: 'DEMO', pin: '1234', seasonId: 'vila-natal', startNow: true,
          modules: { christian: true, english: true, calm: true, advent: true, challenges: true },
          kids: [
            { name: 'Lia', birth: `${Number(s.today.slice(0, 4)) - 4}-03-10`, gender: 'f', color: '#B5476B', band: 0 },
            { name: 'Theo', birth: `${Number(s.today.slice(0, 4)) - 10}-07-21`, gender: 'm', color: '#2F5D4A', band: 2 },
            { name: 'Bia', birth: `${Number(s.today.slice(0, 4)) - 14}-01-05`, gender: 'f', color: '#3E7CA6', band: 4 },
          ],
        })}>Família de exemplo pronta (PIN 1234)</button>}
      </div>
      <button class="link" onClick={() => db.signOut()}>{s.demo ? 'Sair da demonstração' : 'Sair'}</button>
    </div>
  );
}

function Onboarding({ onCancel }: { onCancel: () => void }) {
  const s = getState();
  const seasons = useContent(loadSeasonIndex);
  const [step, setStep] = useState(s.demo ? 1 : 0);
  const [license, setLicense] = useState(''); const [licErr, setLicErr] = useState('');
  const [name, setName] = useState('');
  const [kids, setKids] = useState<Kid[]>([]);
  const [kid, setKid] = useState<Kid>({ name: '', birth: '', gender: 'f', color: COLORS[0], band: 2 });
  const [mods, setMods] = useState<NewFamily['modules']>({ christian: true, english: true, calm: true, advent: true, challenges: true });
  const [pin1, setPin1] = useState(''); const [pinErr, setPinErr] = useState('');
  const [startNow, setStartNow] = useState(false);
  const [busy, setBusy] = useState(false);
  const season = seasons?.[0];
  const seasonStart = season ? `${s.today.slice(0, 4)}-${season.dates.start}` : '';
  const before = seasonStart && s.today < seasonStart;

  const checkLicense = async () => {
    setLicErr(''); const code = license.trim().toUpperCase();
    try {
      const d = await db.get(`licenses/${code}`);
      if (!d.exists) return setLicErr('Código não encontrado. Confira as letras e os traços.');
      if (d.data.usedBy) return setLicErr('Este código já foi usado por outra família.');
      setLicense(code); setStep(1);
    } catch (e: any) { setLicErr('Não foi possível conferir o código agora: ' + (e?.code || e)) }
  };
  const addKid = () => {
    if (!kid.name.trim() || !kid.birth) return;
    const age = ageOf(kid.birth, s.today);
    setKids([...kids, { ...kid, band: ageBand(age) }]);
    setKid({ name: '', birth: '', gender: 'f', color: COLORS[(kids.length + 1) % COLORS.length], band: 2 });
  };
  const finish = async (pin: string) => {
    setBusy(true);
    const ok = await createFamily({ name, license, kids, pin, modules: mods, seasonId: season?.id || 'vila-natal', startNow: startNow || !before });
    if (!ok) setBusy(false);
  };

  return (
    <div class="page narrow onboarding">
      <div class="steps" aria-label={`Passo ${step + 1} de 6`}>{[0, 1, 2, 3, 4, 5].map(i => <span class={i <= step ? 'on' : ''} />)}</div>
      {step === 0 && <div class="card">
        <h2>Código da licença</h2>
        <p class="muted">Cada família usa um código, recebido na compra.</p>
        <Field label="Código"><input value={license} placeholder="MDE-XXXX-XXXX" autocapitalize="characters" onInput={e => setLicense((e.target as HTMLInputElement).value)} /></Field>
        {licErr && <p class="err">{licErr}</p>}
        {isSuperadmin() && <button class="btn sm ghost" onClick={async () => { const c = await createLicenses(1, 'Família da administradora'); if (c[0]) setLicense(c[0]) }}>Gerar um código para mim (administração)</button>}
        <div class="row gap end"><button class="btn ghost" onClick={onCancel}>Voltar</button><button class="btn primary" disabled={license.trim().length < 6} onClick={checkLicense}>Continuar</button></div>
      </div>}
      {step === 1 && <div class="card">
        <h2>Como se chama a família?</h2>
        <Field label="Nome da família" hint="Aparece no topo do app. Ex.: Família Souza"><input value={name} maxLength={40} onInput={e => setName((e.target as HTMLInputElement).value)} /></Field>
        <div class="row gap end"><button class="btn ghost" onClick={s.demo ? onCancel : () => setStep(0)}>Voltar</button><button class="btn primary" disabled={!name.trim()} onClick={() => setStep(2)}>Continuar</button></div>
      </div>}
      {step === 2 && <div class="card">
        <h2>Crianças e adolescentes</h2>
        <p class="muted">A idade define a rotina sugerida, os desafios e o jeito dos textos. Tudo pode ser mudado depois.</p>
        {kids.map((k, i) => <div class="kid-row"><span class="dot" style={{ background: k.color }} /><b>{k.name}</b><span class="muted">{ageOf(k.birth, s.today)} anos</span><button class="icon-btn" aria-label={`Remover ${k.name}`} onClick={() => setKids(kids.filter((_, j) => j !== i))}>✕</button></div>)}
        <div class="subcard">
          <Field label="Nome"><input value={kid.name} maxLength={24} onInput={e => setKid({ ...kid, name: (e.target as HTMLInputElement).value })} /></Field>
          <Field label="Data de nascimento"><input type="date" value={kid.birth} max={s.today} onInput={e => setKid({ ...kid, birth: (e.target as HTMLInputElement).value })} /></Field>
          <Field label="Os textos devem tratar como"><div class="seg">{([['f', 'menina'], ['m', 'menino'], ['x', 'neutro']] as [Gender, string][]).map(([g, l]) => <button type="button" class={kid.gender === g ? 'on' : ''} onClick={() => setKid({ ...kid, gender: g })}>{l}</button>)}</div></Field>
          <Field label="Cor"><ColorPick value={kid.color} onChange={c => setKid({ ...kid, color: c })} /></Field>
          <button class="btn block" disabled={!kid.name.trim() || !kid.birth} onClick={addKid}>Adicionar</button>
        </div>
        <div class="row gap end"><button class="btn ghost" onClick={() => setStep(1)}>Voltar</button><button class="btn primary" disabled={!kids.length} onClick={() => setStep(3)}>Continuar</button></div>
      </div>}
      {step === 3 && <div class="card">
        <h2>O que vai ter no app</h2>
        {MODS.map(([k, t, d]) => <label class="toggle"><input type="checkbox" checked={mods[k]} onChange={e => setMods({ ...mods, [k]: (e.target as HTMLInputElement).checked })} /><span><b>{t}</b><small>{d}</small></span></label>)}
        <div class="row gap end"><button class="btn ghost" onClick={() => setStep(2)}>Voltar</button><button class="btn primary" onClick={() => setStep(4)}>Continuar</button></div>
      </div>}
      {step === 4 && <div class="card">
        <h2>Primeira temporada</h2>
        {season ? <>
          <div class="season-pick">{season.cover && <img class="season-cover" src={seasonUrl(season.id, season.cover)} alt="" onError={e => ((e.target as HTMLElement).style.display = 'none')} />}<b>{season.name}</b><p class="muted">{season.tagline}</p></div>
          {before ? <>
            <p>Começa em {fmtDay(seasonStart)}. Até lá, a rotina e os prêmios já funcionam.</p>
            <label class="toggle"><input type="checkbox" checked={startNow} onChange={e => setStartNow((e.target as HTMLInputElement).checked)} /><span><b>Começar a vila hoje</b><small>As peças começam a ser liberadas já, uma por dia.</small></span></label>
          </> : <p>Começa hoje, com uma peça nova por dia.</p>}
        </> : <p class="muted">Carregando temporadas…</p>}
        <div class="row gap end"><button class="btn ghost" onClick={() => setStep(3)}>Voltar</button><button class="btn primary" disabled={!season} onClick={() => setStep(5)}>Continuar</button></div>
      </div>}
      {step === 5 && <div class="card">
        {busy ? <p class="center">Preparando o mundo de vocês…</p> : !pin1
          ? <><PinPad title="Crie um PIN de 4 números" error={pinErr} onDone={p => { setPin1(p); setPinErr('') }} /><p class="muted center">O PIN protege a área dos responsáveis e a saída do modo criança.</p></>
          : <PinPad title="Repita o PIN" error={pinErr} onDone={p => { if (p === pin1) finish(p); else { setPinErr('Os PINs não conferem. Comece de novo.'); setPin1('') } }} onCancel={() => setPin1('')} />}
      </div>}
    </div>
  );
}

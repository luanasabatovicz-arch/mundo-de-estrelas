import { useEffect, useState } from 'preact/hooks';
import { setUI, useApp } from '../core/store';
import { checkPin } from '../core/actions';
import { settingsOf } from '../core/rules';
import { PinPad, Sheet } from './kit';
import { dayKey } from '../lib/util';
import { Login, VerifyEmail } from './screens/Login';
import { Welcome } from './screens/Onboarding';
import { Today } from './screens/Today';
import { WorldTab } from './screens/World';
import { PrizesTab } from './screens/Prizes';
import { Night } from './screens/Night';
import { Admin } from './screens/Admin';
import { KidShell, enterKidMode } from './screens/Kid';
import { Calm } from './screens/Calm';
import { Album } from './screens/Album';
import { AdventScreen } from './parts';

function Splash({ text }: { text?: string }) {
  return <div class="splash"><div class="brand-mark spin">✦</div><p class="muted">{text || 'Carregando…'}</p></div>;
}

function Toast() {
  const s = useApp();
  if (!s.toast) return null;
  return <div class={'toast ' + (s.toast.kind || '')} role="status" key={s.toast.id}>{s.toast.text}</div>;
}

function usePalette() {
  const s = useApp();
  useEffect(() => {
    const p = s.season?.palette; const r = document.documentElement.style;
    if (!p) return;
    r.setProperty('--primary', p.primary); r.setProperty('--secondary', p.secondary); r.setProperty('--accent', p.accent);
    r.setProperty('--paper', p.paper); r.setProperty('--ink', p.ink); r.setProperty('--sky', p.sky);
  }, [s.season?.id]);
}

export function App() {
  const s = useApp(); usePalette();
  let body;
  if (!s.ready) body = <Splash />;
  else if (!s.user) body = <Login />;
  else if (!s.user.verified && s.user.provider === 'password') body = <VerifyEmail />;
  else if (!s.familiesLoaded) body = <Splash />;
  else if (s.error && !s.families.length && !s.invites.length && s.error.includes('permission')) body = <Splash text="O banco ainda não aceita o app novo. As regras de segurança precisam ser publicadas no Firebase." />;
  else if (!s.familyId) body = <Welcome />;
  else if (!s.family) body = <Splash />;
  else if (s.ui.kidMode) body = <KidShell />;
  else body = <ParentShell />;
  return <>{s.demo && <div class="demo-band">Demonstração{s.today !== dayKey() ? ` · data simulada ${s.today.split('-').reverse().join('/')}` : ''}</div>}{s.offline && <div class="offline-band">Sem internet: as mudanças são enviadas quando a conexão voltar.</div>}{body}<Toast /></>;
}

function ParentShell() {
  const s = useApp(); const [pin, setPin] = useState(false); const [err, setErr] = useState('');
  const adminOpen = s.ui.screen === 'admin' && s.ui.adminUntil > Date.now();
  const openAdmin = () => { if (!settingsOf(s.family).pinHash || s.ui.adminUntil > Date.now()) setUI({ screen: 'admin', adminUntil: Date.now() + 15 * 60e3 }); else setPin(true) };
  const tryPin = async (p: string) => { if (await checkPin(p)) { setPin(false); setErr(''); setUI({ screen: 'admin', adminUntil: Date.now() + 15 * 60e3 }) } else setErr('PIN incorreto') };
  const sub = s.ui.screen;
  const tabs: [typeof s.ui.tab, string, string][] = [['hoje', '☀️', 'Hoje'], ['mundo', '🏘️', 'Mundo'], ['premios', '🎁', 'Prêmios'], ['noite', '🌙', 'Noite']];
  return (
    <div class="shell">
      <header class="top">
        {sub && sub !== 'admin' ? <button class="icon-btn" onClick={() => setUI({ screen: null })} aria-label="Voltar">←</button> : <span class="brand-mark sm">✦</span>}
        <div class="top-title"><b>{s.family!.name}</b>{s.requests.length > 0 && <span class="badge" title="Pedidos esperando">{s.requests.length}</span>}</div>
        <button class="icon-btn" onClick={enterKidMode} aria-label="Modo criança" title="Modo criança">🧒</button>
        <button class="icon-btn" onClick={openAdmin} aria-label="Área dos responsáveis" title="Responsáveis">⚙️</button>
      </header>
      <main>
        {adminOpen ? <Admin />
          : sub === 'calma' ? <Calm childId={s.ui.screenArg} />
          : sub === 'album' ? <Album childId={s.ui.screenArg} />
          : sub === 'advento' ? <AdventScreen />
          : s.ui.tab === 'hoje' ? <Today />
          : s.ui.tab === 'mundo' ? <WorldTab />
          : s.ui.tab === 'premios' ? <PrizesTab />
          : <Night />}
      </main>
      {!adminOpen && <nav class="tabbar">{tabs.map(([id, e, l]) => <button class={s.ui.tab === id && !sub ? 'on' : ''} onClick={() => setUI({ tab: id, screen: null })} aria-current={s.ui.tab === id}><span>{e}</span>{l}</button>)}</nav>}
      {pin && <Sheet title="Área dos responsáveis" onClose={() => { setPin(false); setErr('') }}><PinPad title="Digite o PIN" error={err} onDone={tryPin} /></Sheet>}
    </div>
  );
}

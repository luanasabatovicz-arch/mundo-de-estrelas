import { useState } from 'preact/hooks';
import { db, getState, toast } from '../../core/store';
import { APP_NAME } from '../../config';

const errMsg = (e: any) => {
  const c = e?.code || '';
  if (c.includes('invalid-credential') || c.includes('wrong-password') || c.includes('user-not-found')) return 'E-mail ou senha incorretos.';
  if (c.includes('email-already-in-use')) return 'Já existe uma conta com esse e-mail. Use "Entrar".';
  if (c.includes('weak-password')) return 'A senha precisa ter pelo menos 6 caracteres.';
  if (c.includes('invalid-email')) return 'E-mail inválido.';
  if (c.includes('popup-closed') || c.includes('cancelled-popup')) return '';
  if (c.includes('too-many-requests')) return 'Muitas tentativas. Espere alguns minutos.';
  if (c.includes('network')) return 'Sem conexão com a internet.';
  return e?.message || String(e);
};

export function Login() {
  const [mode, setMode] = useState<'start' | 'in' | 'up'>('start');
  const [email, setEmail] = useState(''); const [pass, setPass] = useState('');
  const [err, setErr] = useState(''); const [busy, setBusy] = useState(false);
  const go = async (f: () => Promise<void>) => { setErr(''); setBusy(true); try { await f() } catch (e) { setErr(errMsg(e)) } setBusy(false) };
  return (
    <div class="login">
      <div class="login-hero">
        <div class="brand-mark" aria-hidden="true">✦</div>
        <h1>{APP_NAME}</h1>
        <p class="tagline">Pequenas atitudes, grandes conquistas, infinitos mundos.</p>
      </div>
      <div class="card login-card">
        {mode === 'start' && <>
          <button class="btn primary block" disabled={busy} onClick={() => go(() => db.signInGoogle())}>Entrar com Google</button>
          <button class="btn ghost block" onClick={() => setMode('in')}>Entrar com e-mail</button>
          <button class="btn ghost block" onClick={() => setMode('up')}>Criar conta com e-mail</button>
        </>}
        {mode !== 'start' && <form onSubmit={e => { e.preventDefault(); go(() => mode === 'in' ? db.signInEmail(email, pass) : db.signUpEmail(email, pass)) }}>
          <h2>{mode === 'in' ? 'Entrar' : 'Criar conta'}</h2>
          <label class="field"><span class="field-label">E-mail</span><input type="email" autocomplete="email" required value={email} onInput={e => setEmail((e.target as HTMLInputElement).value)} /></label>
          <label class="field"><span class="field-label">Senha</span><input type="password" autocomplete={mode === 'in' ? 'current-password' : 'new-password'} minLength={6} required value={pass} onInput={e => setPass((e.target as HTMLInputElement).value)} /></label>
          <button class="btn primary block" disabled={busy}>{mode === 'in' ? 'Entrar' : 'Criar conta'}</button>
          {mode === 'in' && <button type="button" class="link" onClick={() => go(async () => { if (!email) throw new Error('Digite seu e-mail primeiro.'); await db.resetPassword(email); toast('Enviamos um link para redefinir a senha') })}>Esqueci a senha</button>}
          <button type="button" class="link" onClick={() => { setMode('start'); setErr('') }}>Voltar</button>
        </form>}
        {err && <p class="err">{err}</p>}
      </div>
      <p class="login-foot">
        <a href="?demo=1" class="link">Ver demonstração sem conta</a>
      </p>
    </div>
  );
}

export function VerifyEmail() {
  const s = getState(); const [busy, setBusy] = useState(false);
  return (
    <div class="login">
      <div class="card login-card">
        <h2>Confirme seu e-mail</h2>
        <p>Enviamos um link para <b>{s.user?.email}</b>. Abra o e-mail, clique no link e volte aqui.</p>
        <button class="btn primary block" disabled={busy} onClick={async () => { setBusy(true); await db.reloadUser(); location.reload() }}>Já confirmei</button>
        <button class="btn ghost block" onClick={async () => { await db.resendVerification(); toast('E-mail reenviado') }}>Reenviar e-mail</button>
        <button class="link" onClick={() => db.signOut()}>Sair</button>
      </div>
    </div>
  );
}

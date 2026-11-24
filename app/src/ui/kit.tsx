/* Componentes pequenos reutilizados em todas as telas. */
import type { ComponentChildren } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';
import { initials } from '../lib/util';
import type { Child } from '../core/types';

export function Avatar({ child, size = 44, ring }: { child: Pick<Child, 'name' | 'color' | 'photo'>; size?: number; ring?: boolean }) {
  return (
    <span class={'avatar' + (ring ? ' ring' : '')} style={{ width: size, height: size, background: child.color, fontSize: size * 0.4 }}>
      {child.photo ? <img src={child.photo} alt="" /> : initials(child.name)}
    </span>
  );
}

export function Star({ n, big }: { n: number; big?: boolean }) {
  return <span class={'starnum' + (big ? ' big' : '')}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.6l2.9 6 6.5.8-4.8 4.5 1.2 6.5L12 17.3l-5.8 3.1 1.2-6.5L2.6 9.4l6.5-.8z" /></svg>{n}</span>;
}

export function Bar({ value, max, label, tone }: { value: number; max: number; label?: string; tone?: string }) {
  const pct = max > 0 ? Math.min(100, Math.round(value / max * 100)) : 0;
  return (
    <div class={'bar ' + (tone || '')} role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label={label}>
      <span style={{ width: pct + '%' }} />
    </div>
  );
}

/** Imagem de conteúdo que pode ainda não existir: mostra o emoji no lugar. */
export function Art({ src, emoji, alt, class: cls }: { src: string; emoji: string; alt: string; class?: string }) {
  const [ok, setOk] = useState<boolean | null>(null);
  useEffect(() => setOk(null), [src]);
  return (
    <span class={'art ' + (cls || '')}>
      {ok !== false && <img src={src} alt={alt} loading="lazy" onLoad={() => setOk(true)} onError={() => setOk(false)} style={ok ? '' : 'opacity:0'} />}
      {ok !== true && <span class="art-emoji" aria-hidden="true">{emoji}</span>}
    </span>
  );
}

export function Sheet({ title, onClose, children, wide }: { title?: string; onClose: () => void; children: ComponentChildren; wide?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const k = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() };
    addEventListener('keydown', k); ref.current?.focus();
    return () => removeEventListener('keydown', k);
  }, []);
  return (
    <div class="sheet-bg" onClick={e => { if (e.target === e.currentTarget) onClose() }}>
      <div class={'sheet' + (wide ? ' wide' : '')} role="dialog" aria-modal="true" aria-label={title} tabIndex={-1} ref={ref}>
        <div class="sheet-head">
          {title && <h2>{title}</h2>}
          <button class="icon-btn" onClick={onClose} aria-label="Fechar">✕</button>
        </div>
        <div class="sheet-body">{children}</div>
      </div>
    </div>
  );
}

export function PinPad({ title, onDone, onCancel, error }: { title: string; onDone: (pin: string) => void; onCancel?: () => void; error?: string }) {
  const [pin, setPin] = useState('');
  useEffect(() => { if (pin.length === 4) { onDone(pin); setTimeout(() => setPin(''), 250) } }, [pin]);
  const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', '⌫'];
  return (
    <div class="pinpad">
      <h2>{title}</h2>
      <div class={'pin-dots' + (error ? ' shake' : '')}>{[0, 1, 2, 3].map(i => <span class={i < pin.length ? 'on' : ''} />)}</div>
      {error && <p class="err">{error}</p>}
      <div class="pin-keys">
        {keys.map(k => k === '' ? <span /> : (
          <button onClick={() => setPin(p => k === '⌫' ? p.slice(0, -1) : (p + k).slice(0, 4))} aria-label={k === '⌫' ? 'Apagar' : k}>{k}</button>
        ))}
      </div>
      {onCancel && <button class="link" onClick={onCancel}>Cancelar</button>}
    </div>
  );
}

export function Confirm({ text, yes = 'Confirmar', onYes, onClose, danger }: { text: string; yes?: string; onYes: () => void; onClose: () => void; danger?: boolean }) {
  return (
    <Sheet onClose={onClose} title="Confirmar">
      <p>{text}</p>
      <div class="row end gap">
        <button class="btn ghost" onClick={onClose}>Cancelar</button>
        <button class={'btn ' + (danger ? 'danger' : 'primary')} onClick={() => { onYes(); onClose() }}>{yes}</button>
      </div>
    </Sheet>
  );
}

export function Empty({ emoji, title, children }: { emoji: string; title: string; children?: ComponentChildren }) {
  return <div class="empty"><div class="empty-emo">{emoji}</div><h3>{title}</h3>{children}</div>;
}

export function Field({ label, children, hint }: { label: string; children: ComponentChildren; hint?: string }) {
  return <label class="field"><span class="field-label">{label}</span>{children}{hint && <span class="hint">{hint}</span>}</label>;
}

export const COLORS = ['#8E2C2C', '#2F5D4A', '#C9A24A', '#1F2E4A', '#7A4E8C', '#C2603A', '#3E7CA6', '#B5476B'];
export function ColorPick({ value, onChange }: { value: string; onChange: (c: string) => void }) {
  return <div class="colors">{COLORS.map(c => <button type="button" class={c === value ? 'on' : ''} style={{ background: c }} onClick={() => onChange(c)} aria-label={'Cor ' + c} />)}</div>;
}

export const EMOJIS = ['⭐', '🛏️', '🪥', '👕', '🎒', '📚', '✏️', '🧸', '🍽️', '🥦', '🚿', '🧹', '🐶', '🌱', '🙏', '📖', '🎹', '⚽', '🧩', '💤', '🤝', '💬', '🫶', '😊', '🗣️', '😤', '📱', '🎮', '🍦', '🎬', '🍕', '🛝', '🎨', '🏊', '🎁', '🧁', '🚲', '🏕️', '🎟️', '🕹️', '💰', '🌙', '☀️', '🧺', '🍳', '🧦', '👟', '💧'];
export function EmojiPick({ value, onChange }: { value: string; onChange: (e: string) => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div class="emoji-pick">
      <button type="button" class="emoji-btn" onClick={() => setOpen(!open)} aria-label="Escolher ícone">{value || '⭐'}</button>
      {open && <div class="emoji-grid">{EMOJIS.map(e => <button type="button" onClick={() => { onChange(e); setOpen(false) }}>{e}</button>)}
        <input class="emoji-own" placeholder="outro" maxLength={4} onInput={e => { const v = (e.target as HTMLInputElement).value; if (v) { onChange(v); } }} /></div>}
    </div>
  );
}

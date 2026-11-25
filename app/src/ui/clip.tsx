/* Ilustrações das atividades (docs/content/clipart). Escolhe pela palavra-chave do texto; sem ilustração, mostra o emoji. */
import { useEffect, useState } from 'preact/hooks';
import { contentUrl, loadJSON } from '../core/content';

export interface Clip { id: string; file?: string; m?: string; f?: string; tags: string[] }
interface ClipIndex { clips: Clip[]; decor: Record<string, string> }

let index: ClipIndex | null = null;
const waiters = new Set<() => void>();
export const loadClips = () => loadJSON<ClipIndex>('clipart/index.json').then(d => {
  index = { clips: d.clips.map(c => ({ ...c, tags: c.tags.map(norm) })), decor: d.decor };
  waiters.forEach(f => f()); return index;
}).catch(() => null);

function useIndex() {
  const [, force] = useState(0);
  useEffect(() => {
    if (index) return;
    const f = () => force(n => n + 1); waiters.add(f); loadClips();
    return () => { waiters.delete(f) };
  }, []);
  return index;
}

export const norm = (s: string) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\{[^}]*\}/g, '');
const fileOf = (c: Clip, gender?: string) => (gender === 'f' ? c.f : gender === 'm' ? c.m : undefined) || c.file || c.m || c.f || '';

export function findClip(idx: ClipIndex | null, label: string, clipId?: string): Clip | null {
  if (!idx || clipId === 'none') return null;
  if (clipId) return idx.clips.find(c => c.id === clipId) || null;
  const t = ' ' + norm(label).replace(/[^a-z0-9 -]/g, ' ');
  for (const c of idx.clips) if (c.tags.some(tag => t.includes(' ' + tag))) return c;
  return null;
}

/** Ícone de uma atividade: ilustração quando houver, senão o emoji. */
export function ItemIcon({ label, emoji, clip, gender, size = 44 }: { label: string; emoji: string; clip?: string; gender?: string; size?: number }) {
  const idx = useIndex();
  const [bad, setBad] = useState(false);
  const c = findClip(idx, label, clip);
  if (!c || bad) return <span class="task-emo" style={{ fontSize: Math.round(size * 0.55) }}>{emoji}</span>;
  return <img class="clip" src={contentUrl('clipart/' + fileOf(c, gender))} alt="" width={size} height={size} loading="lazy" onError={() => setBad(true)} />;
}

/** Ilustração decorativa (turma, balões etc.). */
export function Decor({ name, class: cls, size }: { name: string; class?: string; size?: number }) {
  const idx = useIndex();
  const [bad, setBad] = useState(false);
  const f = idx?.decor[name];
  if (!f || bad) return null;
  return <img class={'decor ' + (cls || '')} src={contentUrl('clipart/' + f)} alt="" style={size ? { width: size } : undefined} onError={() => setBad(true)} />;
}

/** Lista para escolher a ilustração no editor de tarefas. */
export function ClipPicker({ value, label, gender, onChange }: { value?: string; label: string; gender?: string; onChange: (id: string | undefined) => void }) {
  const idx = useIndex();
  if (!idx) return null;
  const auto = findClip(idx, label);
  return (
    <div class="clip-pick">
      <button type="button" class={!value ? 'on' : ''} onClick={() => onChange(undefined)} title="Automática">
        {auto ? <img src={contentUrl('clipart/' + fileOf(auto, gender))} alt="" /> : <span>auto</span>}<small>auto</small>
      </button>
      <button type="button" class={value === 'none' ? 'on' : ''} onClick={() => onChange('none')}><span>😀</span><small>emoji</small></button>
      {idx.clips.map(c => <button type="button" class={value === c.id ? 'on' : ''} onClick={() => onChange(c.id)} title={c.id}><img src={contentUrl('clipart/' + fileOf(c, gender))} alt={c.id} loading="lazy" /></button>)}
    </div>
  );
}

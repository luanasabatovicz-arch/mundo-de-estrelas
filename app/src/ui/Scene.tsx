/* A cena da temporada: fundo + peças posicionadas. Também desenha a mesma cena num canvas para o álbum. */
import { useState } from 'preact/hooks';
import { seasonUrl } from '../core/content';
import type { SeasonDef, SeasonItem } from '../core/types';

type Slot = { x: number; y: number; w: number };
export const slotOf = (it: SeasonItem, over: Record<string, Slot>) => over[it.id] || it.slot;

function Piece({ season, it, slot, fresh, onClick, selected }: { season: SeasonDef; it: SeasonItem; slot: Slot; fresh?: boolean; onClick?: () => void; selected?: boolean }) {
  const [state, setState] = useState<'load' | 'ok' | 'miss'>('load');
  const ratio = season.scene.w / season.scene.h;
  const style = { left: `${slot.x - slot.w / 2}%`, width: `${slot.w}%`, top: `${slot.y - slot.w * ratio}%`, zIndex: Math.round(slot.y * 10) };
  return (
    <button type="button" class={'piece' + (fresh ? ' fresh' : '') + (selected ? ' sel' : '') + (state === 'miss' ? ' miss' : '')} style={style}
      onClick={onClick} aria-label={it.name} tabIndex={onClick ? 0 : -1} data-id={it.id}>
      {state !== 'miss' && <img src={seasonUrl(season.id, it.img)} alt="" draggable={false} onLoad={() => setState('ok')} onError={() => setState('miss')} />}
      {state === 'miss' && <span class="piece-emoji" style={{ fontSize: `${slot.w * 0.62}cqw` }}>{it.emoji}</span>}
    </button>
  );
}

export function Scene({ season, items, slots, fresh, onPick, selected, children }: {
  season: SeasonDef; items: SeasonItem[]; slots: Record<string, Slot>; fresh?: string | null;
  onPick?: (it: SeasonItem) => void; selected?: string | null; children?: any;
}) {
  const [bg, setBg] = useState(true);
  return (
    <div class="scene" style={{ aspectRatio: `${season.scene.w} / ${season.scene.h}` }}>
      {bg ? <img class="scene-bg" src={seasonUrl(season.id, season.images.background)} alt="" onError={() => setBg(false)} draggable={false} />
        : <div class="scene-bg fallback" aria-hidden="true"><span class="moon" /><span class="hill h1" /><span class="hill h2" /><span class="snow" /></div>}
      {items.map(it => <Piece key={it.id} season={season} it={it} slot={slotOf(it, slots)} fresh={fresh === it.id} selected={selected === it.id} onClick={onPick ? () => onPick(it) : undefined} />)}
      {children}
    </div>
  );
}

const loadImg = (src: string) => new Promise<HTMLImageElement | null>(res => { const i = new Image(); i.onload = () => res(i); i.onerror = () => res(null); i.src = src });

/** Desenha a cena num canvas pequeno e devolve um JPEG (dataURL) para guardar no álbum. */
export async function renderThumb(season: SeasonDef, items: SeasonItem[], slots: Record<string, Slot>, width = 360): Promise<string> {
  const W = width, H = Math.round(width * season.scene.h / season.scene.w);
  const c = document.createElement('canvas'); c.width = W; c.height = H; const x = c.getContext('2d')!;
  const bg = await loadImg(seasonUrl(season.id, season.images.background));
  if (bg) x.drawImage(bg, 0, 0, W, H);
  else {
    const g = x.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#1F2E4A'); g.addColorStop(0.42, '#3B4E6E'); g.addColorStop(0.45, '#E9EEF2'); g.addColorStop(1, '#FBF6EE');
    x.fillStyle = g; x.fillRect(0, 0, W, H);
  }
  const sorted = [...items].sort((a, b) => slotOf(a, slots).y - slotOf(b, slots).y);
  for (const it of sorted) {
    const s = slotOf(it, slots); const w = s.w / 100 * W; const left = s.x / 100 * W - w / 2; const top = s.y / 100 * H - w;
    const img = await loadImg(seasonUrl(season.id, it.img));
    if (img) x.drawImage(img, left, top, w, w);
    else { x.font = `${Math.round(w * 0.55)}px serif`; x.textAlign = 'center'; x.textBaseline = 'bottom'; x.fillText(it.emoji, s.x / 100 * W, s.y / 100 * H) }
  }
  return c.toDataURL('image/jpeg', 0.72);
}

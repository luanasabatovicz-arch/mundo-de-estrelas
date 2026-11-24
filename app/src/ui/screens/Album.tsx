import { useState } from 'preact/hooks';
import { useApp } from '../../core/store';
import { loadSeason, useContent } from '../../core/content';
import { fmtDay } from '../../lib/util';
import { Empty, Sheet, Star } from '../kit';
import { fpath, useCol } from '../hooks';
import { Scene } from '../Scene';
import type { AlbumEntry } from '../../core/types';

export function Album({ childId }: { childId?: string }) {
  const s = useApp();
  const col = useCol(fpath('album'));
  const [open, setOpen] = useState<AlbumEntry | null>(null);
  const list = (col || []).map(d => ({ id: d.id, ...d.data }) as AlbumEntry).filter(a => !childId || a.child === childId).sort((a, b) => b.createdAt - a.createdAt);
  const name = childId ? s.children.find(c => c.id === childId)?.name : '';
  return (
    <div class="page">
      <h2 class="page-title">Álbum de aventuras{name ? ` de ${name}` : ''}</h2>
      {col && !list.length && <Empty emoji="📔" title="O álbum ainda está vazio">
        <p class="muted">Quando uma temporada termina, a vila de cada criança fica guardada aqui para sempre.</p></Empty>}
      <div class="album-grid">
        {list.map(a => (
          <button class="album-card" onClick={() => setOpen(a)}>
            {a.thumb ? <img src={a.thumb} alt="" /> : <span class="album-ph">🏘️</span>}
            <span class="album-meta"><b>{a.seasonName}</b><span class="muted small">{a.childName} · {fmtDay(a.from)} a {fmtDay(a.to)}</span><Star n={a.seasonStars} /></span>
          </button>
        ))}
      </div>
      {open && <AlbumView a={open} onClose={() => setOpen(null)} />}
    </div>
  );
}

function AlbumView({ a, onClose }: { a: AlbumEntry; onClose: () => void }) {
  const s = useApp(); const season = useContent(() => loadSeason(a.seasonId), [a.seasonId]);
  return (
    <Sheet title={`${a.seasonName} · ${a.childName}`} onClose={onClose} wide>
      {season ? <Scene season={season} items={season.items.filter(i => a.items.includes(i.id))} slots={s.slots} />
        : a.thumb ? <img class="album-full" src={a.thumb} alt="" /> : null}
      <p class="muted center">{a.items.length} peças · {a.seasonStars} estrelas · {fmtDay(a.from)} a {fmtDay(a.to)}</p>
    </Sheet>
  );
}

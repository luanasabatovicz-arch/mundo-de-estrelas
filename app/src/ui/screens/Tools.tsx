/* Ferramentas da administração: conferir imagens e ajustar posições das peças na cena. */
import { useEffect, useRef, useState } from 'preact/hooks';
import { useApp, toast } from '../../core/store';
import { contentUrl, loadNight, seasonUrl } from '../../core/content';
import { saveSlots } from '../../core/actions';
import { Scene, slotOf } from '../Scene';
import { Field } from '../kit';

type Check = { group: string; name: string; path: string; url: string; ok: boolean | null };
const probe = (url: string) => new Promise<boolean>(res => { const i = new Image(); i.onload = () => res(true); i.onerror = () => res(false); i.src = url + '?v=' + Date.now() });

export function ImageCheck() {
  const s = useApp(); const [list, setList] = useState<Check[]>([]);
  useEffect(() => {
    (async () => {
      const season = s.season; const out: Check[] = [];
      if (season) {
        const base = `seasons/${season.id}/`;
        out.push({ group: 'Vila', name: 'Fundo', path: base + season.images.background, url: seasonUrl(season.id, season.images.background), ok: null });
        out.push({ group: 'Vila', name: 'Capa', path: base + season.images.cover, url: seasonUrl(season.id, season.images.cover), ok: null });
        season.items.forEach(i => out.push({ group: 'Vila', name: i.name, path: base + i.img, url: seasonUrl(season.id, i.img), ok: null }));
      }
      try {
        const n = await loadNight();
        n.stories.forEach(st => [1, 2, 3].forEach(k => { const p = `noite/natal/${String(st.n).padStart(2, '0')}-${k}.jpg`; out.push({ group: k === 1 ? 'Noite (1ª imagem)' : 'Noite (extras)', name: `${st.n}. ${st.title} (${k})`, path: p, url: contentUrl(p), ok: null }) }));
      } catch { /* */ }
      for (let d = 1; d <= 24; d++) { const p = `advento/${String(d).padStart(2, '0')}.jpg`; out.push({ group: 'Advento', name: `Portinha ${d}`, path: p, url: contentUrl(p), ok: null }) }
      setList(out);
      const res = await Promise.all(out.map(c => probe(c.url)));
      setList(out.map((c, i) => ({ ...c, ok: res[i] })));
    })();
  }, [s.season?.id]);
  const groups = [...new Set(list.map(c => c.group))];
  return (
    <div class="card">
      <h2>Conferir imagens</h2>
      <p class="muted small">Pasta no GitHub: docs/content/…</p>
      {groups.map(g => { const gl = list.filter(c => c.group === g); const ok = gl.filter(c => c.ok).length; return (
        <details open={g === 'Vila'}>
          <summary><b class="grow">{g}</b><span>{ok} de {gl.length}</span></summary>
          {gl.map(c => <div class="item-row small"><span>{c.ok === null ? '…' : c.ok ? '✅' : '⬜'}</span><span class="grow">{c.name}<small class="mono">{c.path}</small></span></div>)}
        </details>
      ) })}
    </div>
  );
}

export function LayoutEditor() {
  const s = useApp(); const season = s.season;
  const [slots, setSlots] = useState<Record<string, { x: number; y: number; w: number }>>(() => {
    const o: Record<string, { x: number; y: number; w: number }> = {};
    season?.items.forEach(i => { o[i.id] = { ...slotOf(i, s.slots) } }); return o;
  });
  const [sel, setSel] = useState<string | null>(season?.items[0]?.id || null);
  const wrap = useRef<HTMLDivElement>(null); const drag = useRef(false);
  if (!season) return <p class="muted">Nenhuma temporada ativa.</p>;
  const it = season.items.find(i => i.id === sel);
  const move = (e: PointerEvent) => {
    if (!drag.current || !sel || !wrap.current) return;
    const r = wrap.current.querySelector('.scene')!.getBoundingClientRect();
    const x = Math.round((e.clientX - r.left) / r.width * 1000) / 10, y = Math.round((e.clientY - r.top) / r.height * 1000) / 10;
    setSlots(p => ({ ...p, [sel]: { ...p[sel], x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) } }));
  };
  return (
    <div class="card layout-editor">
      <h2>Posições das peças</h2>
      <p class="muted small">Escolha uma peça, arraste na cena (o ponto é a base da peça) e ajuste o tamanho. Salvar vale para todas as famílias.</p>
      <div ref={wrap} class="editor-scene" onPointerDown={e => { drag.current = true; (e.target as Element).setPointerCapture?.(e.pointerId); move(e) }} onPointerMove={move} onPointerUp={() => { drag.current = false }}>
        <Scene season={season} items={season.items} slots={slots} selected={sel} />
      </div>
      <Field label="Peça"><select value={sel || ''} onChange={e => setSel((e.target as HTMLSelectElement).value)}>{season.items.map(i => <option value={i.id}>{i.emoji} {i.name}</option>)}</select></Field>
      {it && sel && <Field label={`Tamanho: ${slots[sel].w}% da largura`}><input type="range" min={4} max={60} step={0.5} value={slots[sel].w} onInput={e => setSlots({ ...slots, [sel]: { ...slots[sel], w: Number((e.target as HTMLInputElement).value) } })} /></Field>}
      {it && sel && <p class="muted small mono">x {slots[sel].x} · y {slots[sel].y} · w {slots[sel].w}</p>}
      <div class="row gap wrap">
        <button class="btn primary" onClick={() => saveSlots(season.id, slots)}>Salvar para todas as famílias</button>
        <button class="btn ghost" onClick={() => { navigator.clipboard?.writeText(JSON.stringify(slots)); toast('Posições copiadas (JSON)') }}>Copiar JSON</button>
      </div>
    </div>
  );
}

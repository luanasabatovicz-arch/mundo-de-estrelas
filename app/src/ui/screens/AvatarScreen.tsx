/* Avatar com acessórios (recurso extra, liberado por família). A imagem do avatar fica no banco, só para a família. */
import { useEffect, useState } from 'preact/hooks';
import { useApp } from '../../core/store';
import { buyAccessory, wearAccessory } from '../../core/actions';
import { contentUrl, loadJSON, useContent } from '../../core/content';
import { fpath, useDoc } from '../hooks';
import { Confirm, Empty, Star } from '../kit';
import type { Child } from '../../core/types';

export interface Accessory { id: string; name: string; img: string; slot: Slot; price: number }
type Slot = 'cabeca' | 'laco' | 'pescoco' | 'corpo' | 'peito' | 'pes' | 'lado1' | 'lado2';
export const loadAccessories = () => loadJSON<{ items: Accessory[] }>('avatar/acessorios.json');
export const avatarEnabled = (f: any) => !!f?.plan?.avatar;

interface Measure { neck: number; headW: number; headCx: number; shoulderW: number; bodyCx: number; footW: number; footCx: number }

/** Mede cabeça, ombros e pés a partir da transparência da imagem. */
async function measure(src: string, neck: number): Promise<{ m: Measure; ratio: number }> {
  const img = await new Promise<HTMLImageElement>((res, rej) => { const i = new Image(); i.onload = () => res(i); i.onerror = rej; i.src = src });
  const W = img.naturalWidth, H = img.naturalHeight;
  const c = document.createElement('canvas'); c.width = W; c.height = H; const x = c.getContext('2d')!; x.drawImage(img, 0, 0);
  const d = x.getImageData(0, 0, W, H).data; const on = (px: number, py: number) => d[(py * W + px) * 4 + 3] > 80;
  const row = (yr: number) => { const y = Math.min(H - 1, Math.max(0, Math.round(yr * H))); let l = -1, r = -1; for (let i = 0; i < W; i++) if (on(i, y)) { if (l < 0) l = i; r = i } return l < 0 ? [0.3, 0.7] : [l / W, (r + 1) / W] };
  let hl = 1, hr = 0;
  for (let y = 0; y < neck * H; y += 2) { const [l, r] = row(y / H); if (r > l) { hl = Math.min(hl, l); hr = Math.max(hr, r) } }
  const [sl, sr] = row(neck + 0.07); const [fl, fr] = row(0.975);
  return { ratio: W / H, m: { neck, headW: hr - hl, headCx: (hl + hr) / 2, shoulderW: sr - sl, bodyCx: (sl + sr) / 2, footW: fr - fl, footCx: (fl + fr) / 2 } };
}

/** Posição de cada acessório, em % do avatar (largura W, altura H). */
function placeFor(a: Accessory, m: Measure, aspect: number): { left: number; top?: number; bottom?: number; width: number } {
  const n = m.neck;
  switch (a.slot) {
    case 'cabeca': { const w = m.headW * (a.id === 'tiara' ? 0.85 : 1.05); return { left: m.headCx - w / 2, bottom: 1 - n * (a.id === 'tiara' ? 0.36 : 0.52), width: w } }
    case 'laco': { const w = m.headW * 0.4; return { left: m.headCx + m.headW * 0.22 - w / 2, bottom: 1 - n * 0.28, width: w } }
    case 'pescoco': { const w = m.shoulderW * 0.66; return { left: m.bodyCx - w / 2, top: n - 0.02, width: w } }
    case 'corpo': { const w = m.shoulderW * 1.3; return { left: m.bodyCx - w / 2, top: n - 0.035, width: w } }
    case 'peito': { const w = m.shoulderW * 0.28; return { left: m.bodyCx - w / 2, top: n + 0.08, width: w } }
    case 'pes': { const w = Math.min(m.footW * 0.9, m.shoulderW); return { left: m.footCx - w / 2, bottom: -0.012, width: w } }
    default: return { left: 0, width: 0.3 * aspect };
  }
}
const ORDER: Slot[] = ['corpo', 'pes', 'pescoco', 'peito', 'cabeca', 'laco'];

export function AvatarStage({ child, worn, preview, accessories }: { child: Child; worn: Record<string, string>; preview?: Accessory | null; accessories: Accessory[] }) {
  const doc = useDoc(fpath(`avatars/${child.id}`));
  const [info, setInfo] = useState<{ m: Measure; ratio: number } | null>(null);
  const src = doc?.data?.img as string | undefined; const neck = (doc?.data?.neck as number) || 0.25;
  useEffect(() => { setInfo(null); if (src) measure(src, neck).then(setInfo).catch(() => {}) }, [src, neck]);
  if (!doc) return <div class="avatar-stage loading" />;
  if (!src) return <Empty emoji="🧍" title="Ainda sem avatar"><p class="muted">Um adulto pode enviar o avatar em Responsáveis → Crianças.</p></Empty>;
  const byId = (id?: string) => accessories.find(a => a.id === id);
  const on: Record<string, Accessory | undefined> = {};
  for (const [slot, id] of Object.entries(worn || {})) on[slot] = byId(id);
  if (preview) on[preview.slot] = preview;
  const pct = (v: number) => `${v * 100}%`;
  // palco: avatar no centro, com espaço dos lados para bichinho e objetos
  const stageW = 1.9; // em larguras do avatar
  return (
    <div class="avatar-stage" style={{ aspectRatio: info ? `${info.ratio * stageW} / 1` : '1.1 / 1' }}>
      {on.lado2 && <img class="av-side left" src={contentUrl('avatar/' + on.lado2.img)} alt="" />}
      {on.lado1 && <img class="av-side right" src={contentUrl('avatar/' + on.lado1.img)} alt="" />}
      <div class="av-body" style={{ width: pct(1 / stageW) }}>
        <img class="av-base" src={src} alt={child.name} />
        {info && ORDER.map(slot => { const a = on[slot]; if (!a) return null; const p = placeFor(a, info.m, info.ratio); return (
          <img class={'av-acc' + (preview?.id === a.id ? ' preview' : '')} src={contentUrl('avatar/' + a.img)} alt=""
            style={{ left: pct(p.left), width: pct(p.width), ...(p.top !== undefined ? { top: pct(p.top) } : { bottom: pct(p.bottom!) }) }} />
        ) })}
      </div>
    </div>
  );
}

export function AvatarScreen({ child, kid }: { child: Child; kid?: boolean }) {
  const s = useApp(); const data = useContent(loadAccessories);
  const [preview, setPreview] = useState<Accessory | null>(null);
  const [buy, setBuy] = useState<Accessory | null>(null);
  if (!avatarEnabled(s.family)) return <Empty emoji="✨" title="Avatares não estão ativos nesta família" />;
  if (!data) return <p class="muted center">Carregando…</p>;
  const av = (child as any).avatar || {}; const owned: string[] = av.owned || []; const worn: Record<string, string> = av.worn || {};
  const bal = child.balance || 0;
  const tap = (a: Accessory) => {
    if (owned.includes(a.id)) { wearAccessory(child.id, a.slot, worn[a.slot] === a.id ? null : a.id); setPreview(null); return }
    setPreview(a); if (bal >= a.price) setBuy(a);
  };
  return (
    <div class="page avatar-page">
      <div class="row between"><h2 class="page-title">{kid ? 'Meu avatar' : `Avatar de ${child.name}`}</h2><span class="balance"><Star n={bal} /></span></div>
      <AvatarStage child={child} worn={worn} preview={preview} accessories={data.items} />
      <p class="muted small center">{preview && !owned.includes(preview.id) ? `Experimentando: ${preview.name} · ${bal >= preview.price ? 'toque em Comprar' : `faltam ${preview.price - bal} estrelas`}` : 'Toque num acessório para experimentar. Os que você já tem, toque para vestir ou tirar.'}</p>
      <div class="acc-grid">
        {data.items.map(a => { const has = owned.includes(a.id); const wearing = worn[a.slot] === a.id; return (
          <button class={'acc' + (has ? ' has' : '') + (wearing ? ' on' : '') + (preview?.id === a.id ? ' pv' : '')} onClick={() => tap(a)}>
            <img src={contentUrl('avatar/' + a.img)} alt="" loading="lazy" />
            <span class="acc-name">{a.name}</span>
            {has ? <span class="pill gold">{wearing ? 'vestindo' : 'seu'}</span> : <span class={'acc-price' + (bal >= a.price ? '' : ' far')}><Star n={a.price} /></span>}
          </button>
        ) })}
      </div>
      {buy && <Confirm text={`Comprar ${buy.name} por ${buy.price} estrelas?`} yes="Comprar" onClose={() => { setBuy(null) }}
        onYes={async () => { if (await buyAccessory(child, buy)) { await wearAccessory(child.id, buy.slot, buy.id); setPreview(null) } }} />}
    </div>
  );
}

/* Avatar com brinquedos (recurso extra, liberado por família). A criança compra brinquedos com estrelas
   e eles ficam espalhados em volta dela. A imagem do avatar fica no banco, só para a família. */
import { useState } from 'preact/hooks';
import { useApp } from '../../core/store';
import { buyAccessory, toggleToy } from '../../core/actions';
import { contentUrl, loadJSON, useContent } from '../../core/content';
import { fpath, useDoc } from '../hooks';
import { Confirm, Star } from '../kit';
import type { Child } from '../../core/types';

export interface Accessory { id: string; name: string; img: string; zone: 'chao' | 'ceu'; size: 's' | 'm' | 'l'; price: number; group: string }
export const loadAccessories = () => loadJSON<{ items: Accessory[] }>('avatar/acessorios.json');
export const avatarEnabled = (f: any) => !!f?.plan?.avatar;

const ASPECT = 1.35; // largura ÷ altura do palco
// lugares no chão (x do centro, base y, escala) — primeiro os da frente, depois os de trás
const GROUND: [number, number, number][] = [
  [15, 98, 1], [85, 98, 1], [9, 80, .82], [91, 80, .82], [32, 99.5, .62], [68, 99.5, .62],
  [20, 66, .66], [80, 66, .66], [8, 99.5, .62], [92, 99.5, .62], [27, 83, .6], [73, 83, .6],
];
const SKY: [number, number, number][] = [[14, 34, 1], [86, 30, 1], [72, 13, .8]];
const SIZE = { s: 0.15, m: 0.24, l: 0.3 };

export function AvatarStage({ child, toys, preview, accessories }: { child: Child; toys: string[]; preview?: Accessory | null; accessories: Accessory[] }) {
  const doc = useDoc(fpath(`avatars/${child.id}`));
  const src = doc?.data?.img as string | undefined;
  const list = toys.map(id => accessories.find(a => a.id === id)).filter(Boolean) as Accessory[];
  if (preview && !list.includes(preview)) list.push(preview);
  // os maiores vão para os lugares da frente, nas pontas; os pequenos ficam perto do avatar e atrás
  const rank = { l: 0, m: 1, s: 2 };
  const ground = list.filter(a => a.zone === 'chao').slice(-GROUND.length).map((a, i) => ({ a, i })).sort((x, y) => rank[x.a.size] - rank[y.a.size] || x.i - y.i).map(x => x.a);
  const sky = list.filter(a => a.zone === 'ceu').slice(-SKY.length);
  const place = (a: Accessory, [x, y, s]: [number, number, number]) => {
    const h = SIZE[a.size] * s * 100; const w = h / ASPECT;
    return (
      <div class={'toy' + (preview?.id === a.id ? ' preview' : '')} style={{ left: `${x - w * 0.6}%`, top: `${y - h}%`, width: `${w * 1.2}%`, height: `${h}%`, zIndex: Math.round(y) }}>
        <img src={contentUrl('avatar/' + a.img)} alt={a.name} />
      </div>
    );
  };
  return (
    <div class="avatar-stage" style={{ aspectRatio: `${ASPECT} / 1` }}>
      {sky.map((a, i) => place(a, SKY[i]))}
      {src ? <img class="av-base" src={src} alt={child.name} /> : doc && <div class="av-missing">🧍<small>Sem avatar ainda</small></div>}
      {ground.map((a, i) => place(a, GROUND[i]))}
    </div>
  );
}

export function AvatarScreen({ child, kid }: { child: Child; kid?: boolean }) {
  const s = useApp(); const data = useContent(loadAccessories);
  const [preview, setPreview] = useState<Accessory | null>(null);
  const [buy, setBuy] = useState<Accessory | null>(null);
  if (!avatarEnabled(s.family)) return <p class="muted center">Avatares não estão ativos nesta família.</p>;
  if (!data) return <p class="muted center">Carregando…</p>;
  const owned: string[] = child.avatar?.owned || []; const hidden: string[] = child.avatar?.hidden || [];
  const shown = owned.filter(id => !hidden.includes(id));
  const bal = child.balance || 0;
  const tap = (a: Accessory) => {
    if (owned.includes(a.id)) { toggleToy(child.id, a.id, !hidden.includes(a.id)); setPreview(null); return }
    setPreview(a); if (bal >= a.price) setBuy(a);
  };
  const groups = [...new Set(data.items.map(a => a.group))];
  return (
    <div class="page avatar-page">
      <div class="row between"><h2 class="page-title">{kid ? 'Meu avatar' : `Avatar de ${child.name}`}</h2><span class="balance"><Star n={bal} /></span></div>
      <AvatarStage child={child} toys={shown} preview={preview} accessories={data.items} />
      <p class="muted small center">{preview ? `${preview.name}: ${bal >= preview.price ? 'toque em Comprar' : `faltam ${preview.price - bal} estrelas`}` : 'Toque num brinquedo para ver como fica. Os que já são seus, toque para guardar ou mostrar.'}</p>
      {groups.map(g => <>
        <h3 class="acc-group">{g}</h3>
        <div class="acc-grid">
          {data.items.filter(a => a.group === g).map(a => { const has = owned.includes(a.id); const out = has && !hidden.includes(a.id); return (
            <button class={'acc' + (has ? ' has' : '') + (out ? ' on' : '') + (preview?.id === a.id ? ' pv' : '')} onClick={() => tap(a)}>
              <img src={contentUrl('avatar/' + a.img)} alt="" loading="lazy" />
              <span class="acc-name">{a.name}</span>
              {has ? <span class="pill gold">{out ? 'na cena' : 'guardado'}</span> : <span class={'acc-price' + (bal >= a.price ? '' : ' far')}><Star n={a.price} /></span>}
            </button>
          ) })}
        </div>
      </>)}
      {buy && <Confirm text={`Comprar ${buy.name} por ${buy.price} estrelas?`} yes="Comprar" onClose={() => { setBuy(null); setPreview(null) }}
        onYes={async () => { await buyAccessory(child, buy); setPreview(null) }} />}
    </div>
  );
}

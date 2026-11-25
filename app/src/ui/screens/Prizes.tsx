import { useState } from 'preact/hooks';
import { useApp } from '../../core/store';
import { itemsFor } from '../../core/rules';
import { redeem, request } from '../../core/actions';
import { fmtDay } from '../../lib/util';
import { Bar, Confirm, Star } from '../kit';
import { ChildTabs } from '../parts';
import { ItemIcon } from '../clip';
import { avatarEnabled } from './AvatarScreen';
import { setUI } from '../../core/store';
import type { Child, Item } from '../../core/types';

export function PrizesTab() {
  const s = useApp();
  const child = s.children.find(c => c.id === s.ui.child) || s.children[0];
  return <div class="page"><ChildTabs />{child && <>{avatarEnabled(s.family) && <button class="card avatar-link" onClick={() => setUI({ screen: 'avatar', screenArg: child.id })}><span>✨</span><span class="grow"><b>Avatar de {child.name}</b><small class="muted">Brinquedos para comprar com estrelas</small></span>›</button>}<Prizes child={child} /><History child={child} /></>}</div>;
}

export function Prizes({ child, kid }: { child: Child; kid?: boolean }) {
  const s = useApp(); const [ask, setAsk] = useState<Item | null>(null);
  const rewards = itemsFor(s.items, child.id, 'reward').slice().sort((a, b) => a.stars - b.stars);
  const bal = child.balance || 0;
  const pend = new Set(s.requests.filter(r => r.child === child.id && r.kind === 'reward').map(r => r.itemId));
  return (
    <div class="card prizes">
      <div class="row between"><h3>Prêmios</h3><span class="balance">Saldo <Star n={bal} /></span></div>
      {!rewards.length && <p class="muted">Nenhum prêmio cadastrado ainda.</p>}
      {rewards.map(r => { const can = bal >= r.stars; return (
        <div class={'prize' + (can ? ' can' : '')}>
          <span class="prize-emo"><ItemIcon label={r.label} emoji={r.emoji} clip={r.clip} gender={child.gender} size={50} /></span>
          <div class="grow"><b>{r.label}</b>{!can && <><Bar value={bal} max={r.stars} /><span class="muted small">faltam {r.stars - bal}</span></>}</div>
          {pend.has(r.id) ? <span class="pill">pedido</span> :
            <button class={'btn sm ' + (can ? 'primary' : 'ghost')} disabled={!can} onClick={() => setAsk(r)}><Star n={r.stars} /></button>}
        </div>
      ) })}
      {ask && <Confirm text={kid ? `Pedir ${ask.label} por ${ask.stars} estrelas? Um adulto vai confirmar.` : `Trocar ${ask.stars} estrelas de ${child.name} por ${ask.label}?`}
        yes={kid ? 'Pedir' : 'Trocar'} onClose={() => setAsk(null)}
        onYes={() => kid ? request(child.id, 'reward', ask.label, ask.emoji, ask.stars, ask.id) : redeem(child, ask)} />}
    </div>
  );
}

function History({ child }: { child: Child }) {
  const s = useApp();
  const es = s.entries.filter(e => e.child === child.id && !e.undone);
  const days = [...new Set(es.map(e => e.day))].sort().reverse();
  if (!days.length) return null;
  return (
    <div class="card log">
      <h3>Últimos 7 dias</h3>
      {days.map(d => { const de = es.filter(e => e.day === d); const sum = de.reduce((a, e) => a + e.stars, 0); return (
        <details>
          <summary><span class="grow">{fmtDay(d, true)}</span><b class={sum < 0 ? 'neg' : 'pos'}>{sum > 0 ? '+' : ''}{sum}</b></summary>
          {de.map(e => <div class="log-row"><span>{e.emoji}</span><span class="grow">{e.label}</span><b class={e.stars < 0 ? 'neg' : 'pos'}>{e.stars > 0 ? '+' : ''}{e.stars}</b></div>)}
        </details>
      ) })}
      <p class="muted small">Total da vida de {child.name}: {child.lifetime || 0} estrelas.</p>
    </div>
  );
}

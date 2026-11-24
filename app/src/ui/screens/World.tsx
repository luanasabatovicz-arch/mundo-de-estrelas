import { useEffect, useState } from 'preact/hooks';
import { setUI, useApp } from '../../core/store';
import { dailyItems, routine, seasonOver, settingsOf, visibleItems, world } from '../../core/rules';
import { claimPiece, markMilestonesSeen } from '../../core/actions';
import { seasonUrl } from '../../core/content';
import { daysBetween } from '../../lib/util';
import { Art, Bar, Sheet, Star } from '../kit';
import { ChildTabs, levelOf } from '../parts';
import { Scene } from '../Scene';
import type { Child, SeasonItem } from '../../core/types';

export function WorldTab() {
  const s = useApp();
  const child = s.children.find(c => c.id === s.ui.child) || s.children[0];
  return <div class="page"><ChildTabs />{child && <World child={child} />}</div>;
}

export function World({ child, kid }: { child: Child; kid?: boolean }) {
  const s = useApp(); const season = s.season; const run = s.family?.season;
  const [info, setInfo] = useState<SeasonItem | null>(null);
  const [fresh, setFresh] = useState<string | null>(null);
  const [celebrate, setCelebrate] = useState<SeasonItem | null>(null);
  const p = s.progress[child.id];
  const r = routine(s.family, s.items, s.entries, child.id, s.today);
  const w = season && run ? world(season, run, p, r, s.items, child.id, s.today) : null;
  const reached = w ? w.milestones.filter(m => m.reached).length : 0;
  useEffect(() => {
    if (!w || !p || reached <= (p.seenMilestones || 0)) return;
    setCelebrate(w.milestones[reached - 1].item);
  }, [reached, p?.seenMilestones, child.id]);

  if (!season || !run || !w) return (
    <div class="card"><h3>Nenhuma temporada ativa</h3><p class="muted">As vilas das temporadas anteriores estão no álbum.</p>
      <button class="btn block" onClick={() => setUI({ screen: 'album', screenArg: child.id })}>Abrir o álbum de aventuras</button></div>
  );
  const totalDays = daysBetween(run.startDay, run.endDay) + 1;
  const claim = async () => {
    if (!w.next) return; const it = w.next;
    if (await claimPiece(child.id, it.id)) { setFresh(it.id); setTimeout(() => setInfo(it), 900); setTimeout(() => setFresh(null), 2500) }
  };
  const lvl = levelOf(child);
  const showEn = settingsOf(s.family).modules.english && child.english !== false;
  return (
    <>
      <div class="world-head">
        <div><span class="eyebrow">{w.dayN < 1 ? `Começa em ${-w.dayN + 1} dia(s)` : seasonOver(run, s.today) ? 'Temporada encerrada' : `Dia ${w.dayN} de ${totalDays}`}</span>
          <h2>{season.name}</h2></div>
        <div class="world-stars"><Star n={w.seasonStars} big /><span class="muted small">na temporada</span></div>
      </div>
      <Scene season={season} items={visibleItems(season, w)} slots={s.slots} fresh={fresh} onPick={setInfo} />
      {w.canClaim ? <button class="btn primary block glow claim" onClick={claim}>Conquistar a peça do dia: {w.next!.name} {w.next!.emoji}</button>
        : <p class="claim-note">{w.claimedToday ? `Peça de hoje: ${w.claimedToday.name}. Amanhã tem mais!` : w.blockedReason === 'Falta completar a rotina de hoje.' ? `Complete ${settingsOf(s.family).dailyGoalPct}% da rotina para ganhar a peça de hoje (agora: ${r.pct}%).` : w.blockedReason}</p>}
      {w.nextMilestone && <div class="card next-big-card">
        <Art class="tiny" src={seasonUrl(season.id, w.nextMilestone.item.img)} emoji={w.nextMilestone.item.emoji} alt="" />
        <div class="grow"><span class="eyebrow">Próxima grande conquista</span><b>{w.nextMilestone.item.name}</b>
          <Bar value={w.seasonStars} max={w.nextMilestone.at} tone="gold" /><span class="muted small">{w.seasonStars} de {w.nextMilestone.at} estrelas da temporada</span></div>
      </div>}
      <div class="card">
        <div class="row between"><h3>Coleção</h3><span class="muted small">{w.dailyCount} de {dailyItems(season).length} peças</span></div>
        <div class="collection">
          {season.items.map(it => {
            const m = w.milestones.find(x => x.item.id === it.id);
            const has = it.kind === 'daily' ? w.unlocked.has(it.id) : !!m?.reached;
            const idx = dailyItems(season).indexOf(it) + 1;
            return (
              <button class={'coll' + (has ? ' has' : '') + (it.kind === 'milestone' ? ' big' : '')} onClick={() => has && setInfo(it)} disabled={!has} aria-label={has ? it.name : 'Peça bloqueada'}>
                {has ? <Art src={seasonUrl(season.id, it.img)} emoji={it.emoji} alt={it.name} /> : <span class="lock">{it.kind === 'milestone' ? `★ ${m?.at}` : idx}</span>}
              </button>
            );
          })}
        </div>
      </div>
      <button class="btn ghost block" onClick={() => setUI({ screen: 'album', screenArg: child.id })}>Álbum de aventuras</button>
      {seasonOver(run, s.today) && !kid && <div class="card notice"><p>A temporada terminou. Guarde as vilas no álbum em Responsáveis → Temporada.</p></div>}
      {info && <PieceSheet it={info} season={season.id} lvl={lvl} showEn={showEn} onClose={() => setInfo(null)} />}
      {celebrate && <Sheet title="Grande conquista!" onClose={() => { setCelebrate(null); markMilestonesSeen(child.id, reached) }}>
        <div class="celebrate"><Art class="hero-art" src={seasonUrl(season.id, celebrate.img)} emoji={celebrate.emoji} alt={celebrate.name} />
          <h3>{celebrate.name}</h3><p>{celebrate.learn[lvl]}</p></div>
        <button class="btn primary block" onClick={() => { setCelebrate(null); markMilestonesSeen(child.id, reached) }}>Que lindo!</button>
      </Sheet>}
    </>
  );
}

function PieceSheet({ it, season, lvl, showEn, onClose }: { it: SeasonItem; season: string; lvl: 'p' | 'm' | 'g'; showEn: boolean; onClose: () => void }) {
  const say = (text: string, lang: string) => { try { const u = new SpeechSynthesisUtterance(text); u.lang = lang; speechSynthesis.cancel(); speechSynthesis.speak(u) } catch { /* */ } };
  return (
    <Sheet title={it.name} onClose={onClose}>
      <div class="piece-info">
        <Art class="hero-art" src={seasonUrl(season, it.img)} emoji={it.emoji} alt={it.name} />
        <p class="learn">{it.learn[lvl]}</p>
        <button class="link small" onClick={() => say(it.learn[lvl], 'pt-BR')}>Ouvir</button>
        {showEn && it.en && <div class="english"><span class="eyebrow">Em inglês</span>
          <button class="en-word" onClick={() => say(it.en!.w, 'en-US')}>{it.en.w} 🔊</button>
          <button class="en-ex" onClick={() => say(it.en!.ex, 'en-US')}>{it.en.ex}</button></div>}
      </div>
    </Sheet>
  );
}

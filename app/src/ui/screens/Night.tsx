import { useState } from 'preact/hooks';
import { useApp } from '../../core/store';
import { liveEntries, routine, settingsOf } from '../../core/rules';
import { contentUrl, loadMessages, loadNight, loadPrayers, useContent } from '../../core/content';
import { gx, pickDaily, strHash } from '../../lib/util';
import { Art, Avatar } from '../kit';
import { levelOf } from '../parts';
import type { Child, Level, Story } from '../../core/types';

const say = (text: string) => { try { speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(text); u.lang = 'pt-BR'; u.rate = 0.95; speechSynthesis.speak(u) } catch { /* */ } };
const LEVEL_NAME: Record<Level, string> = { p: 'Para os pequenos', m: 'Para os do meio', g: 'Para os maiores' };

export function storyFor(stories: Story[], day: string): { story: Story; preview: boolean } | null {
  if (!stories.length) return null;
  const md = day.slice(5);
  const exact = stories.find(s => s.date === md);
  if (exact) return { story: exact, preview: false };
  const first = stories[0].date, last = stories[stories.length - 1].date;
  // antes do início da série: prévia da primeira história; depois do fim: releitura sorteada
  if (md > last && md < first) return md < '07-01' ? { story: pickDaily(stories, 'releitura', day)!, preview: false } : { story: stories[0], preview: true };
  return { story: pickDaily(stories, 'releitura', day)!, preview: false };
}

export function Night({ only }: { only?: Child }) {
  const s = useApp(); const mods = settingsOf(s.family).modules;
  const night = useContent(loadNight); const msgs = useContent(loadMessages); const prayers = useContent(loadPrayers);
  const kids = only ? [only] : s.children;
  const found = night ? storyFor(night.stories, s.today) : null;
  const levels = [...new Set(kids.map(levelOf))] as Level[];
  const [part, setPart] = useState(0);
  return (
    <div class="page night">
      <header class="night-head"><span class="eyebrow">Hora de dormir</span><h2>{mods.christian ? 'Devocional da noite' : 'Fechamento do dia'}</h2></header>
      {mods.christian && found && <article class="card story">
        {found.preview && <p class="pill">Prévia · a série começa em 1º de dezembro</p>}
        <span class="eyebrow">{night!.title} · noite {found.story.n}</span>
        <h3>{found.story.title}</h3><p class="ref">{found.story.ref}</p>
        {found.story.parts.map((t, i) => (i <= part) && (
          <section class="story-part">
            <Art class="story-art" src={contentUrl(`noite/natal/${String(found.story.n).padStart(2, '0')}-${i + 1}.jpg`)} emoji={['📖', '✨', '🌙'][i] || '✨'} alt="" />
            {t.split('\n').map(par => <p>{par}</p>)}
          </section>
        ))}
        {part < found.story.parts.length - 1
          ? <button class="btn primary block" onClick={() => setPart(part + 1)}>Continuar a história</button>
          : <>
            <blockquote class="verse">{found.story.verse}<cite>{found.story.ref}</cite></blockquote>
            {levels.map(l => <div class="ask"><span class="eyebrow">{levels.length > 1 ? LEVEL_NAME[l] : 'Para conversar'}</span><p>{found.story.ask[l]}</p></div>)}
            <div class="prayer"><span class="eyebrow">Oração</span><p>{found.story.prayer}</p></div>
          </>}
        <button class="link small" onClick={() => say([found.story.title, ...found.story.parts.slice(0, part + 1)].join('. '))}>Ouvir em voz alta</button>
      </article>}
      {msgs && kids.map(c => <ChildNight child={c} msgs={msgs} others={kids} christian={mods.christian} />)}
      {mods.christian && prayers && !only && <ParentPrayer prayers={prayers.parents} names={s.children.map(c => c.name)} day={s.today} />}
      {mods.christian && prayers && <KidPrayer list={prayers.kids} day={s.today} />}
    </div>
  );
}

type Tone = 'otimo' | 'bom' | 'recomeco' | 'dificil';
export function toneOf(s: ReturnType<typeof useApp>, c: Child): Tone {
  const es = liveEntries(s.entries, c.id, s.today); const r = routine(s.family, s.items, s.entries, c.id, s.today);
  const bad = es.filter(e => e.kind === 'bad').length; const good = es.filter(e => e.kind === 'good' || e.kind === 'challenge' || e.kind === 'calm').length + r.done.size;
  if (!bad) return r.goalMet ? 'otimo' : 'bom';
  return good >= bad * 2 || r.goalMet ? 'recomeco' : 'dificil';
}

function ChildNight({ child, msgs, others, christian }: { child: Child; msgs: any; others: Child[]; christian: boolean }) {
  const s = useApp(); const tone = toneOf(s, child); const lvl = levelOf(child);
  const pool: string[] = msgs[christian ? tone : 'neutro_' + tone]?.[lvl] || msgs[tone]?.[lvl] || [];
  // cada criança recebe uma mensagem diferente, mesmo com o mesmo tom e a mesma idade
  const idx = (strHash(s.today + tone + lvl) + others.filter(o => levelOf(o) === lvl && toneOf(s, o) === tone).findIndex(o => o.id === child.id)) % Math.max(1, pool.length);
  const text = pool.length ? gx(pool[idx].replace(/\{nome\}/g, child.name), child.gender) : '';
  const r = routine(s.family, s.items, s.entries, child.id, s.today);
  return (
    <div class="card child-night" style={{ '--c': child.color }}>
      <div class="row gap"><Avatar child={child} size={40} /><div><b>{child.name}</b><span class="muted small"> · {r.dayStars >= 0 ? '+' : ''}{r.dayStars} hoje · rotina {r.pct}%</span></div></div>
      {text && <p class="jesus-msg">{christian && <span class="eyebrow">Uma palavra de Jesus para você</span>}{text}</p>}
      {text && <button class="link small" onClick={() => say(text)}>Ouvir</button>}
    </div>
  );
}

function ParentPrayer({ prayers, names, day }: { prayers: [string, string][]; names: string[]; day: string }) {
  const p = pickDaily(prayers, 'pais', day); if (!p) return null;
  const filhos = names.length <= 1 ? (names[0] || 'nossos filhos') : names.slice(0, -1).join(', ') + ' e ' + names[names.length - 1];
  return <div class="card parent-prayer"><span class="eyebrow">Oração dos pais</span><p>{p[0].replace(/\{filhos\}/g, filhos)}</p><cite>{p[1]}</cite></div>;
}
function KidPrayer({ list, day }: { list: { t: string; l: string[] }[]; day: string }) {
  const p = pickDaily(list, 'criancas', day); if (!p) return null;
  return <div class="card kid-prayer"><span class="eyebrow">Oração para repetir juntos</span><h4>{p.t}</h4>{p.l.map(l => <p>{l}</p>)}<button class="link small" onClick={() => say(p.l.join(' '))}>Ouvir</button></div>;
}

/* Regras do jogo calculadas a partir dos dados. Nada aqui grava no banco. */
import { ageBand, ageOf, daysBetween, readLevel } from '../lib/util';
import type { Child, Entry, Family, Item, ItemKind, Progress, SeasonDef, SeasonItem, SeasonRun } from './types';

export const DEFAULT_SETTINGS = {
  dailyGoalPct: 70, perfectBonus: 5, kidMarks: 'pedido' as const, pinHash: '', pinSalt: '',
  modules: { christian: true, english: true, calm: true, advent: true, challenges: true },
};
export const settingsOf = (f: Family | null) => ({ ...DEFAULT_SETTINGS, ...(f?.settings || {}), modules: { ...DEFAULT_SETTINGS.modules, ...(f?.settings?.modules || {}) } });

export const itemsFor = (items: Item[], child: string, kind: ItemKind) =>
  items.filter(i => i.active !== false && i.kind === kind && (!i.kids?.length || i.kids.includes(child)));
export const liveEntries = (entries: Entry[], child: string, day: string) => entries.filter(e => e.child === child && e.day === day && !e.undone);

export interface Routine { tasks: Item[]; done: Set<string>; earned: number; total: number; pct: number; goalMet: boolean; allDone: boolean; dayStars: number }
export function routine(fam: Family | null, items: Item[], entries: Entry[], child: string, day: string): Routine {
  const tasks = itemsFor(items, child, 'task');
  const es = liveEntries(entries, child, day);
  const done = new Set(es.filter(e => e.kind === 'task' && e.itemId).map(e => e.itemId!));
  const total = tasks.reduce((a, t) => a + t.stars, 0);
  const earned = tasks.filter(t => done.has(t.id)).reduce((a, t) => a + t.stars, 0);
  const pct = total ? Math.round(earned / total * 100) : 0;
  const goal = settingsOf(fam).dailyGoalPct;
  return {
    tasks, done, earned, total, pct, goalMet: total > 0 && pct >= goal, allDone: tasks.length > 0 && tasks.every(t => done.has(t.id)),
    dayStars: es.reduce((a, e) => a + e.stars, 0),
  };
}

/* ---------------------------------------------------------------- temporada */
export const seasonDay = (run: SeasonRun, day: string) => daysBetween(run.startDay, day) + 1;
export const seasonOver = (run: SeasonRun, day: string) => day > run.endDay;
export const dailyItems = (s: SeasonDef) => s.items.filter(i => i.kind === 'daily');
export const milestoneItems = (s: SeasonDef) => s.items.filter(i => i.kind === 'milestone').sort((a, b) => (a.milestone || 0) - (b.milestone || 0));

/** Meta de estrelas da temporada: 75% do que a rotina permite em todos os dias da temporada. */
export function suggestedGoal(items: Item[], child: string, run: SeasonRun) {
  const perDay = itemsFor(items, child, 'task').reduce((a, t) => a + t.stars, 0) || 20;
  const days = daysBetween(run.startDay, run.endDay) + 1;
  return Math.max(60, Math.round(perDay * days * 0.75 / 10) * 10);
}
export const goalOf = (p: Progress | undefined, items: Item[], child: string, run: SeasonRun) => p?.goal || suggestedGoal(items, child, run);

export interface WorldStatus {
  unlocked: Set<string>; claimedToday: SeasonItem | null; next: SeasonItem | null; canClaim: boolean; blockedReason: string;
  seasonStars: number; goal: number; milestones: { item: SeasonItem; at: number; reached: boolean }[];
  nextMilestone: { item: SeasonItem; at: number; need: number } | null; dayN: number; dailyCount: number;
}
export function world(season: SeasonDef, run: SeasonRun, p: Progress | undefined, r: Routine, items: Item[], child: string, day: string): WorldStatus {
  const unlocked = new Set(Object.keys(p?.unlocked || {}));
  const dailies = dailyItems(season);
  const claimedId = Object.entries(p?.unlocked || {}).find(([id, v]) => v.day === day && dailies.some(d => d.id === id))?.[0];
  const claimedToday = claimedId ? dailies.find(d => d.id === claimedId) || null : null;
  const next = dailies.find(d => !unlocked.has(d.id)) || null;
  const dayN = seasonDay(run, day);
  const dailyCount = dailies.filter(d => unlocked.has(d.id)).length;
  const goal = goalOf(p, items, child, run);
  const seasonStars = p?.seasonStars || 0;
  const milestones = milestoneItems(season).map((item, i) => {
    const at = Math.round(goal * (season.milestoneFractions[i] ?? 1));
    return { item, at, reached: seasonStars >= at };
  });
  const nm = milestones.find(m => !m.reached);
  let blockedReason = '';
  if (dayN < 1) blockedReason = 'A temporada ainda não começou.';
  else if (seasonOver(run, day)) blockedReason = 'A temporada terminou.';
  else if (claimedToday) blockedReason = 'A peça de hoje já foi conquistada.';
  else if (!next) blockedReason = 'Todas as peças já foram conquistadas.';
  else if (dailyCount >= dayN) blockedReason = 'Amanhã chega uma peça nova.';
  else if (!r.goalMet) blockedReason = r.total ? 'Falta completar a rotina de hoje.' : 'A rotina ainda não tem tarefas.';
  return {
    unlocked, claimedToday, next, canClaim: !blockedReason, blockedReason, seasonStars, goal, milestones,
    nextMilestone: nm ? { item: nm.item, at: nm.at, need: nm.at - seasonStars } : null, dayN, dailyCount,
  };
}
export const visibleItems = (season: SeasonDef, w: WorldStatus) =>
  season.items.filter(i => i.kind === 'daily' ? w.unlocked.has(i.id) : w.milestones.find(m => m.item.id === i.id)?.reached);

export const childLevel = (c: Child, day: string) => readLevel(ageOf(c.birth, day));
/** Faixa de desafio: idade ajustada pela maturidade (1 = mais simples, 3 = mais desafiador). */
export const challengeBand = (c: Child, day: string) => Math.max(0, Math.min(4, ageBand(ageOf(c.birth, day)) + ((c.maturity || 2) - 2)));

/* Conteúdo editável que mora em docs/content (JSON + imagens), separado do código. */
import { CONTENT } from '../config';
import { db } from './store';
import type { AdventDoor, Challenge, SeasonDef, Story, Template } from './types';

const cache = new Map<string, Promise<any>>();
export function loadJSON<T = any>(path: string): Promise<T> {
  if (!cache.has(path)) {
    cache.set(path, fetch(CONTENT + path, { cache: 'no-cache' }).then(r => { if (!r.ok) throw new Error(`${path}: ${r.status}`); return r.json() })
      .catch(e => { cache.delete(path); throw e }));
  }
  return cache.get(path)!;
}
export const contentUrl = (p: string) => CONTENT + p;
export const seasonUrl = (seasonId: string, p: string) => `${CONTENT}seasons/${seasonId}/${p}`;

export interface SeasonIndexEntry { id: string; name: string; tagline: string; cover?: string; dates: { start: string; end: string } }
export const loadSeasonIndex = () => loadJSON<SeasonIndexEntry[]>('seasons/index.json');
export const loadSeason = (id: string) => loadJSON<SeasonDef>(`seasons/${id}/season.json`);
export async function loadOverrides(id: string) {
  try { const d = await db.get(`contentOverrides/${id}`); return (d.data.slots || {}) as Record<string, { x: number; y: number; w: number }> }
  catch { return {} }
}

export interface NightContent { series: string; title: string; stories: Story[] }
export const loadNight = () => loadJSON<NightContent>('noite/natal.json');
export interface Messages { [tone: string]: { p: string[]; m: string[]; g: string[] } }
export const loadMessages = () => loadJSON<Messages>('noite/mensagens.json');
export interface Prayers { kids: { t: string; l: string[] }[]; parents: [string, string][] }
export const loadPrayers = () => loadJSON<Prayers>('noite/oracoes.json');
export const loadAdvent = () => loadJSON<{ doors: AdventDoor[] }>('advento/advento.json');
export const loadChallenges = () => loadJSON<{ bands: string[]; lists: Challenge[][] }>('desafios/desafios.json');
export interface CalmContent { feelings: { id: string; emo: string; m: string; f: string }[]; tools: { emo: string; t: string }[]; verses: string[] }
export const loadCalm = () => loadJSON<CalmContent>('calma/calma.json');
export const loadTemplates = () => loadJSON<{ items: Template[] }>('modelos.json');

/** Hook simples para carregar conteúdo uma vez. */
import { useEffect, useState } from 'preact/hooks';
export function useContent<T>(loader: () => Promise<T>, deps: any[] = []): T | null {
  const [v, setV] = useState<T | null>(null);
  useEffect(() => { let ok = true; loader().then(x => ok && setV(x)).catch(e => console.error(e)); return () => { ok = false } }, deps);
  return v;
}

/* Estado global do app: quem entrou, qual família, e as coleções dessa família em tempo real. */
import { useEffect, useState } from 'preact/hooks';
import { demoBackend, firebaseBackend, type Backend, type User } from '../lib/db';
import { addDays, setFakeToday, today } from '../lib/util';
import type { Child, Entry, Family, Item, Progress, Request, SeasonDef } from './types';
import { loadSeason, loadOverrides } from './content';

export interface UI {
  kidMode: boolean; kidId: string | null; adminUntil: number; child: string | null;
  tab: 'hoje' | 'mundo' | 'premios' | 'noite'; screen: string | null; screenArg?: any;
}
export interface State {
  ready: boolean; demo: boolean; user: User | null; today: string;
  families: Family[]; invites: Family[]; familiesLoaded: boolean;
  familyId: string | null; family: Family | null;
  children: Child[]; items: Item[]; entries: Entry[]; requests: Request[]; progress: Record<string, Progress>;
  season: SeasonDef | null; slots: Record<string, { x: number; y: number; w: number }>;
  ui: UI; toast: { text: string; kind?: string; id: number } | null; error: string | null; offline: boolean;
}

const LS = {
  get(k: string) { try { return localStorage.getItem(k) } catch { return null } },
  set(k: string, v: string | null) { try { v == null ? localStorage.removeItem(k) : localStorage.setItem(k, v) } catch { /* */ } },
};

export const isDemo = (() => {
  const q = new URLSearchParams(location.search);
  if (q.get('demo') === '1') LS.set('mde.mode', 'demo');
  if (q.get('demo') === '0') LS.set('mde.mode', null);
  const demo = LS.get('mde.mode') === 'demo';
  if (demo) { const h = q.get('hoje'); if (h !== null) LS.set('mde.hoje', h || null); setFakeToday(LS.get('mde.hoje')) }
  return demo;
})();

export const db: Backend = isDemo ? demoBackend() : firebaseBackend();

let state: State = {
  ready: false, demo: isDemo, user: null, today: today(),
  families: [], invites: [], familiesLoaded: false, familyId: LS.get('mde.family'), family: null,
  children: [], items: [], entries: [], requests: [], progress: {}, season: null, slots: {},
  ui: { kidMode: LS.get('mde.kidMode') === '1', kidId: LS.get('mde.kidId'), adminUntil: 0, child: LS.get('mde.child'), tab: 'hoje', screen: null },
  toast: null, error: null, offline: !navigator.onLine,
};
const subs = new Set<() => void>();
let version = 0;
export const getState = () => state;
export function setState(patch: Partial<State> | ((s: State) => Partial<State>)) {
  const p = typeof patch === 'function' ? patch(state) : patch;
  state = { ...state, ...p }; version++; subs.forEach(f => f());
}
export function setUI(p: Partial<UI>) {
  setState(s => ({ ui: { ...s.ui, ...p } }));
  if ('kidMode' in p) LS.set('mde.kidMode', p.kidMode ? '1' : null);
  if ('kidId' in p) LS.set('mde.kidId', p.kidId || null);
  if ('child' in p) LS.set('mde.child', p.child || null);
}
export function useApp(): State {
  const [, force] = useState(0);
  const seen = version;
  useEffect(() => {
    const f = () => force(n => n + 1); subs.add(f);
    if (version !== seen) f(); // mudou entre a renderização e a inscrição
    return () => { subs.delete(f) };
  }, []);
  return state;
}
let toastTimer: any;
export function toast(text: string, kind?: string) {
  clearTimeout(toastTimer); setState({ toast: { text, kind, id: Date.now() } });
  toastTimer = setTimeout(() => setState({ toast: null }), kind === 'error' ? 6000 : 3200);
}
export function fail(e: any, what = 'Não foi possível salvar') {
  console.error(e);
  const code = e?.code || '';
  const msg = code.includes('permission') ? 'sem permissão (as regras do banco já foram publicadas?)'
    : code.includes('unavailable') ? 'sem conexão; tente de novo' : (e?.message || String(e));
  toast(`${what}: ${msg}`, 'error');
}

/* ---------------------------------------------------------------- assinaturas */
let unsubFamilies: (() => void)[] = [];
let unsubFamily: (() => void)[] = [];

function clearFamily() { unsubFamily.forEach(u => u()); unsubFamily = [] }

function watchFamily(fid: string) {
  clearFamily();
  const base = `families/${fid}`;
  const onErr = (e: any) => { console.error(e); setState({ error: e?.code || String(e) }) };
  unsubFamily.push(db.watchDoc(base, d => {
    if (!d.exists) { setState({ family: null }); return }
    const fam = { id: d.id, ...d.data } as Family;
    const prevRun = state.family?.season?.runId;
    setState({ family: fam });
    if (fam.season?.runId !== prevRun) watchSeason(fid, fam);
  }, onErr));
  unsubFamily.push(db.watchCol(`${base}/children`, [], ds => {
    const children = ds.map(d => ({ id: d.id, ...d.data }) as Child).sort((a, b) => a.order - b.order || a.name.localeCompare(b.name));
    const patch: Partial<State> = { children };
    if (!children.find(c => c.id === state.ui.child) && children[0]) patch.ui = { ...state.ui, child: children[0].id };
    setState(patch);
  }, onErr));
  unsubFamily.push(db.watchCol(`${base}/items`, [], ds => setState({ items: ds.map(d => ({ id: d.id, ...d.data }) as Item).sort((a, b) => a.order - b.order) }), onErr));
  watchEntries(fid);
  unsubFamily.push(db.watchCol(`${base}/requests`, [['status', '==', 'pending']], ds =>
    setState({ requests: ds.map(d => ({ id: d.id, ...d.data }) as Request).sort((a, b) => a.at - b.at) }), onErr));
}

let unsubEntries: (() => void) | null = null;
function watchEntries(fid: string) {
  unsubEntries?.();
  const from = addDays(state.today, -7);
  unsubEntries = db.watchCol(`families/${fid}/entries`, [['day', '>=', from]], ds =>
    setState({ entries: ds.map(d => ({ id: d.id, ...d.data }) as Entry).sort((a, b) => a.at - b.at) }));
}

let unsubProgress: (() => void) | null = null;
async function watchSeason(fid: string, fam: Family) {
  unsubProgress?.(); unsubProgress = null;
  if (!fam.season) { setState({ season: null, progress: {} }); return }
  const run = fam.season;
  unsubProgress = db.watchCol(`families/${fid}/progress`, [['runId', '==', run.runId]], ds => {
    const progress: Record<string, Progress> = {};
    ds.forEach(d => { const p = { id: d.id, ...d.data } as Progress; progress[p.child] = p });
    setState({ progress });
  });
  try {
    const [season, slots] = await Promise.all([loadSeason(run.seasonId), loadOverrides(run.seasonId)]);
    setState({ season, slots });
  } catch (e) { console.error(e); setState({ error: 'Não foi possível carregar a temporada.' }) }
}

export function selectFamily(fid: string | null) {
  LS.set('mde.family', fid);
  setState({ familyId: fid, family: null, children: [], items: [], entries: [], requests: [], progress: {}, season: null });
  if (fid) watchFamily(fid); else clearFamily();
}

export function startApp() {
  db.onAuth(user => {
    unsubFamilies.forEach(u => u()); unsubFamilies = [];
    if (!user) { clearFamily(); setState({ user: null, ready: true, families: [], invites: [], familiesLoaded: false, family: null }); return }
    setState({ user, ready: true });
    let gotFam = false;
    unsubFamilies.push(db.watchCol('families', [['memberIds', 'array-contains', user.uid]], ds => {
      const families = ds.map(d => ({ id: d.id, ...d.data }) as Family);
      setState({ families, familiesLoaded: true });
      if (!gotFam) {
        gotFam = true;
        const want = state.familyId && families.find(f => f.id === state.familyId) ? state.familyId : families[0]?.id || null;
        selectFamily(want);
      } else if (state.familyId && !families.find(f => f.id === state.familyId)) selectFamily(families[0]?.id || null);
    }, e => { console.error(e); setState({ familiesLoaded: true, error: e?.code || String(e) }) }));
    if (user.email && user.verified) {
      unsubFamilies.push(db.watchCol('families', [['invites', 'array-contains', user.email]], ds =>
        setState({ invites: ds.map(d => ({ id: d.id, ...d.data }) as Family) }), () => {}));
    }
  });
  setInterval(() => {
    const t = today();
    if (t !== state.today) { setState({ today: t }); if (state.familyId) watchEntries(state.familyId) }
  }, 30000);
  addEventListener('online', () => setState({ offline: false }));
  addEventListener('offline', () => setState({ offline: true }));
}

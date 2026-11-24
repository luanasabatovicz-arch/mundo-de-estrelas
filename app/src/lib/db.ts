/*
 * Camada de dados. O app fala só com esta interface; há duas implementações:
 *  - Firebase (Firestore + Auth), usada pelas famílias de verdade;
 *  - Demonstração (memória do navegador), para testar o app sem conta.
 * Caminhos de documento são strings no estilo "families/abc/children/c1".
 */
import { initializeApp, type FirebaseApp } from 'firebase/app';
import {
  getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword,
  createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signOut, type Auth,
} from 'firebase/auth';
import {
  initializeFirestore, persistentLocalCache, persistentMultipleTabManager, doc, getDoc, setDoc, updateDoc,
  deleteDoc, onSnapshot, collection, query, where, writeBatch, increment, arrayUnion, arrayRemove, deleteField,
  getDocs, type Firestore, type QueryConstraint,
} from 'firebase/firestore';
import { FIREBASE_CONFIG } from '../config';

export type Data = Record<string, any>;
export type Filter = [string, '==' | '>=' | '<=' | 'array-contains', any];
export interface User { uid: string; email: string; name: string; verified: boolean; provider: string }
export interface DocSnap { id: string; exists: boolean; data: Data }
export type WriteOp =
  | { kind: 'set'; path: string; data: Data; merge?: boolean }
  | { kind: 'update'; path: string; data: Data }
  | { kind: 'delete'; path: string };

export interface Backend {
  demo: boolean;
  onAuth(cb: (u: User | null) => void): () => void;
  signInGoogle(): Promise<void>;
  signInEmail(email: string, pass: string): Promise<void>;
  signUpEmail(email: string, pass: string): Promise<void>;
  resendVerification(): Promise<void>;
  resetPassword(email: string): Promise<void>;
  reloadUser(): Promise<void>;
  signOut(): Promise<void>;
  get(path: string): Promise<DocSnap>;
  watchDoc(path: string, cb: (d: DocSnap) => void, onErr?: (e: any) => void): () => void;
  watchCol(path: string, filters: Filter[], cb: (docs: DocSnap[]) => void, onErr?: (e: any) => void): () => void;
  queryOnce(path: string, filters: Filter[]): Promise<DocSnap[]>;
  write(ops: WriteOp[]): Promise<void>;
  fv: { inc(n: number): any; union(...v: any[]): any; remove(...v: any[]): any; del(): any };
  newId(): string;
}

const rid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 8);

/* ------------------------------------------------------------------ Firebase */
export function firebaseBackend(): Backend {
  const app: FirebaseApp = initializeApp(FIREBASE_CONFIG);
  const auth: Auth = getAuth(app);
  auth.languageCode = 'pt';
  let fs: Firestore;
  try { fs = initializeFirestore(app, { localCache: persistentLocalCache({ tabManager: persistentMultipleTabManager() }) }) }
  catch { fs = initializeFirestore(app, {}) }
  const toUser = (u: any): User | null => u ? {
    uid: u.uid, email: (u.email || '').toLowerCase(), name: u.displayName || '', verified: !!u.emailVerified,
    provider: (u.providerData?.[0]?.providerId) || 'password',
  } : null;
  const snap = (s: any): DocSnap => ({ id: s.id, exists: s.exists(), data: s.exists() ? s.data() : {} });
  const cons = (filters: Filter[]): QueryConstraint[] => filters.map(([f, op, v]) => where(f, op as any, v));
  return {
    demo: false,
    onAuth: cb => onAuthStateChanged(auth, u => cb(toUser(u))),
    signInGoogle: async () => {
      const p = new GoogleAuthProvider(); p.setCustomParameters({ prompt: 'select_account' });
      await signInWithPopup(auth, p);
    },
    signInEmail: async (e, p) => { await signInWithEmailAndPassword(auth, e, p) },
    signUpEmail: async (e, p) => { const c = await createUserWithEmailAndPassword(auth, e, p); await sendEmailVerification(c.user) },
    resendVerification: async () => { if (auth.currentUser) await sendEmailVerification(auth.currentUser) },
    resetPassword: async e => { await sendPasswordResetEmail(auth, e) },
    reloadUser: async () => { if (auth.currentUser) { await auth.currentUser.reload(); await auth.currentUser.getIdToken(true) } },
    signOut: async () => { await signOut(auth) },
    get: async path => snap(await getDoc(doc(fs, path))),
    watchDoc: (path, cb, onErr) => onSnapshot(doc(fs, path), s => cb(snap(s)), e => onErr?.(e)),
    watchCol: (path, filters, cb, onErr) =>
      onSnapshot(query(collection(fs, path), ...cons(filters)), s => cb(s.docs.map(snap)), e => onErr?.(e)),
    queryOnce: async (path, filters) => {
      const s = await getDocs(query(collection(fs, path), ...cons(filters)));
      return s.docs.map(snap);
    },
    write: async ops => {
      for (let i = 0; i < ops.length; i += 450) {
        const b = writeBatch(fs);
        for (const op of ops.slice(i, i + 450)) {
          const r = doc(fs, op.path);
          if (op.kind === 'set') b.set(r, op.data, { merge: !!op.merge });
          else if (op.kind === 'update') b.update(r, op.data);
          else b.delete(r);
        }
        await b.commit();
      }
    },
    fv: { inc: n => increment(n), union: (...v) => arrayUnion(...v), remove: (...v) => arrayRemove(...v), del: () => deleteField() },
    newId: rid,
  };
  void updateDoc; void setDoc; void deleteDoc;
}

/* ------------------------------------------------------------ Demonstração */
const INC = '__inc__', UNION = '__union__', REMOVE = '__remove__', DEL = '__del__';
const isSentinel = (v: any) => v && typeof v === 'object' && !Array.isArray(v) && (INC in v || UNION in v || REMOVE in v || DEL in v);
export function demoBackend(): Backend {
  const KEY = 'mde.demo.v1';
  let store: Record<string, Data> = {};
  try { store = JSON.parse(localStorage.getItem(KEY) || '{}') } catch { store = {} }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(store)) } catch { /* sem armazenamento */ } };
  const docWatchers = new Map<string, Set<(d: DocSnap) => void>>();
  const colWatchers = new Set<{ path: string; filters: Filter[]; cb: (d: DocSnap[]) => void }>();
  const user: User = { uid: 'demo-user', email: 'demo@mundodeestrelas.app', name: 'Família Demonstração', verified: true, provider: 'demo' };
  const idOf = (p: string) => p.split('/').pop() as string;
  const parentOf = (p: string) => p.split('/').slice(0, -1).join('/');
  const snapOf = (p: string): DocSnap => ({ id: idOf(p), exists: p in store, data: store[p] ? JSON.parse(JSON.stringify(store[p])) : {} });
  const matches = (d: Data, filters: Filter[]) => filters.every(([f, op, v]) => {
    const x = getPath(d, f);
    if (op === '==') return x === v;
    if (op === '>=') return x >= v;
    if (op === '<=') return x <= v;
    return Array.isArray(x) && x.includes(v);
  });
  const listCol = (path: string, filters: Filter[]) =>
    Object.keys(store).filter(p => parentOf(p) === path && matches(store[p], filters)).map(snapOf);
  const notify = (changed: Set<string>) => {
    queueMicrotask(() => {
      changed.forEach(p => docWatchers.get(p)?.forEach(cb => cb(snapOf(p))));
      colWatchers.forEach(w => { if ([...changed].some(p => parentOf(p) === w.path)) w.cb(listCol(w.path, w.filters)) });
    });
  };
  const applyFields = (target: Data, data: Data, dotted: boolean) => {
    for (const [k, v] of Object.entries(data)) {
      const keys = dotted ? k.split('.') : [k];
      let o = target;
      for (const kk of keys.slice(0, -1)) { if (typeof o[kk] !== 'object' || o[kk] === null) o[kk] = {}; o = o[kk] }
      const last = keys[keys.length - 1];
      if (isSentinel(v)) {
        const x = v as any;
        if (INC in x) o[last] = (Number(o[last]) || 0) + x[INC];
        else if (UNION in x) { const a = Array.isArray(o[last]) ? o[last] : []; o[last] = [...a, ...x[UNION].filter((e: any) => !a.includes(e))] }
        else if (REMOVE in x) o[last] = (Array.isArray(o[last]) ? o[last] : []).filter((e: any) => !x[REMOVE].includes(e));
        else delete o[last];
      }
      else if (v && typeof v === 'object' && !Array.isArray(v) && !dotted) { o[last] = typeof o[last] === 'object' && o[last] ? o[last] : {}; applyFields(o[last], v, false) }
      else o[last] = JSON.parse(JSON.stringify(v));
    }
  };
  const authCbs = new Set<(u: User | null) => void>();
  return {
    demo: true,
    onAuth: cb => { authCbs.add(cb); queueMicrotask(() => cb(user)); return () => authCbs.delete(cb) },
    signInGoogle: async () => {}, signInEmail: async () => {}, signUpEmail: async () => {},
    resendVerification: async () => {}, resetPassword: async () => {}, reloadUser: async () => {},
    signOut: async () => { try { localStorage.removeItem(KEY) } catch { /* */ } location.reload() },
    get: async p => snapOf(p),
    watchDoc: (p, cb) => {
      if (!docWatchers.has(p)) docWatchers.set(p, new Set());
      docWatchers.get(p)!.add(cb); queueMicrotask(() => cb(snapOf(p)));
      return () => docWatchers.get(p)?.delete(cb);
    },
    watchCol: (path, filters, cb) => {
      const w = { path, filters, cb }; colWatchers.add(w); queueMicrotask(() => cb(listCol(path, filters)));
      return () => colWatchers.delete(w);
    },
    queryOnce: async (path, filters) => listCol(path, filters),
    write: async ops => {
      const changed = new Set<string>();
      for (const op of ops) {
        if (op.kind === 'delete') delete store[op.path];
        else if (op.kind === 'set') {
          if (!op.merge || !store[op.path]) store[op.path] = {};
          applyFields(store[op.path], op.data, false);
        } else {
          if (!store[op.path]) throw Object.assign(new Error('not-found'), { code: 'not-found' });
          applyFields(store[op.path], op.data, true);
        }
        changed.add(op.path);
      }
      save(); notify(changed);
    },
    fv: { inc: n => ({ [INC]: n }), union: (...v) => ({ [UNION]: v }), remove: (...v) => ({ [REMOVE]: v }), del: () => ({ [DEL]: true }) },
    newId: rid,
  };
}

export function getPath(o: any, dotted: string) { return dotted.split('.').reduce((a, k) => (a == null ? undefined : a[k]), o) }

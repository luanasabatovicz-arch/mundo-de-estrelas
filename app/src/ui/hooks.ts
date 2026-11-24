import { useEffect, useState } from 'preact/hooks';
import { db, getState } from '../core/store';
import type { DocSnap } from '../lib/db';

export function useDoc(path: string | null): DocSnap | null {
  const [d, setD] = useState<DocSnap | null>(null);
  useEffect(() => { if (!path) { setD(null); return } return db.watchDoc(path, setD, () => setD(null)) }, [path]);
  return d;
}
export function useCol(path: string | null): DocSnap[] | null {
  const [d, setD] = useState<DocSnap[] | null>(null);
  useEffect(() => { if (!path) { setD(null); return } return db.watchCol(path, [], setD, () => setD([])) }, [path]);
  return d;
}
export const fpath = (rest: string) => { const f = getState().family; return f ? `families/${f.id}/${rest}` : null };

export type Gender = 'f' | 'm' | 'x';
export type ItemKind = 'task' | 'good' | 'bad' | 'reward';
export type Period = 'manha' | 'tarde' | 'noite' | 'livre';
export type Level = 'p' | 'm' | 'g';

export interface Modules { christian: boolean; english: boolean; calm: boolean; advent: boolean; challenges: boolean }
export interface Settings {
  dailyGoalPct: number;      // % das estrelas da rotina que libera a peça do dia
  perfectBonus: number;      // bônus por rotina completa
  kidMarks: 'pedido' | 'direto'; // no modo criança, marcar tarefa cria pedido ou já vale
  pinHash: string; pinSalt: string;
  nightStart?: string;       // dia em que a família começou o devocional (senão segue as datas da série)
  modules: Modules;
}
export interface SeasonRun { runId: string; seasonId: string; version: number; startDay: string; endDay: string; startedAt: number }
export interface Member { role: 'owner' | 'parent'; email: string; name: string }
export interface Family {
  id: string; name: string; owner: string; license: string; createdAt: number;
  members: Record<string, Member>; memberIds: string[]; invites: string[];
  settings: Settings; season: SeasonRun | null; plan?: { avatar?: boolean };
}
export interface Child {
  id: string; name: string; birth: string; gender: Gender; color: string; maturity: 1 | 2 | 3;
  english: boolean; photo?: string; balance: number; lifetime: number; order: number;
  avatar?: { owned?: string[]; hidden?: string[] };
}
export interface Item {
  id: string; kind: ItemKind; emoji: string; label: string; stars: number;
  period?: Period; kids: string[]; order: number; active: boolean; clip?: string;
}
export type EntryKind = 'task' | 'good' | 'bad' | 'reward' | 'bonus' | 'challenge' | 'calm' | 'advent' | 'adjust';
export interface Entry {
  id: string; child: string; day: string; at: number; kind: EntryKind; itemId?: string;
  label: string; emoji: string; stars: number; by: string; runId?: string; undone?: boolean;
}
export interface Request {
  id: string; child: string; kind: 'task' | 'reward' | 'challenge'; itemId?: string;
  label: string; emoji: string; stars: number; day: string; at: number; status: 'pending' | 'ok' | 'no';
}
export interface Progress {
  id: string; runId: string; child: string; seasonId: string; goal: number; seasonStars: number;
  unlocked: Record<string, { at: number; day: string }>; seenMilestones: number;
}
export interface AlbumEntry {
  id: string; runId: string; seasonId: string; seasonName: string; child: string; childName: string;
  from: string; to: string; seasonStars: number; items: string[]; thumb: string; createdAt: number;
}

/* ---------- conteúdo (arquivos em docs/content) ---------- */
export interface SeasonItem {
  id: string; kind: 'daily' | 'milestone'; milestone?: number; name: string; emoji: string; img: string;
  slot: { x: number; y: number; w: number }; en?: { w: string; ex: string }; learn: Record<Level, string>;
}
export interface SeasonDef {
  id: string; version: number; name: string; tagline: string; dates: { start: string; end: string };
  palette: Record<string, string>; images: { background: string; cover: string; final?: string };
  scene: { w: number; h: number }; milestoneFractions: number[]; items: SeasonItem[];
}
export interface Story { n: number; date: string; title: string; ref: string; verse: string; parts: string[]; ask: Record<Level, string>; prayer: string }
export interface AdventDoor { t: string; ref: string; s: string; a: string; pts: number; emo: string }
export interface Challenge { t: string; e: string; s: number }
export interface Template { kind: ItemKind; emoji: string; label: string; stars: number; period?: Period; bands?: number[] }

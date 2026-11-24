/* Utilidades sem dependências: datas locais, sorteio determinístico, PIN, idades. */

export const pad = (n: number) => String(n).padStart(2, '0');

/** Dia local no formato AAAA-MM-DD. */
export function dayKey(d: Date = new Date()) { return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}` }
export function parseDay(k: string) { const [y, m, d] = k.split('-').map(Number); return new Date(y, m - 1, d) }
export function addDays(k: string, n: number) { const d = parseDay(k); d.setDate(d.getDate() + n); return dayKey(d) }
export function daysBetween(a: string, b: string) { return Math.round((parseDay(b).getTime() - parseDay(a).getTime()) / 864e5) }
let fakeToday: string | null = null;
/** Só na demonstração: permite simular outra data (?hoje=2026-12-05). */
export function setFakeToday(d: string | null) { fakeToday = d && /^\d{4}-\d{2}-\d{2}$/.test(d) ? d : null }
export const today = () => fakeToday || dayKey();

const MESES = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
const SEMANA = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
export function fmtDay(k: string, withWeekday = false) {
  const d = parseDay(k);
  return (withWeekday ? SEMANA[d.getDay()] + ', ' : '') + `${d.getDate()} de ${MESES[d.getMonth()]}`;
}
export function fmtShort(k: string) { const d = parseDay(k); return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}` }

export function strHash(s: string) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619) } return h >>> 0 }
export function seeded(seed: number) { let a = seed || 1; return () => { a |= 0; a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296 } }
/** Escolhe um item da lista de forma estável para (chave, dia), sem repetir antes de esgotar a lista. */
export function pickDaily<T>(list: T[], key: string, day: string): T | undefined {
  if (!list.length) return undefined;
  const n = list.length, dayN = Math.floor(parseDay(day).getTime() / 864e5);
  const cycle = Math.floor(dayN / n), pos = ((dayN % n) + n) % n;
  const r = seeded(strHash(key + ':' + cycle)); const idx = [...Array(n).keys()];
  for (let i = n - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [idx[i], idx[j]] = [idx[j], idx[i]] }
  return list[idx[pos]];
}

export async function sha256(text: string) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
}
export const randomSalt = () => [...crypto.getRandomValues(new Uint8Array(8))].map(b => b.toString(16).padStart(2, '0')).join('');

export function ageOf(birth: string | undefined, at = today()) {
  if (!birth) return 8;
  const b = parseDay(birth), t = parseDay(at);
  let a = t.getFullYear() - b.getFullYear();
  if (t.getMonth() < b.getMonth() || (t.getMonth() === b.getMonth() && t.getDate() < b.getDate())) a--;
  return Math.max(0, a);
}
/** Faixa de idade dos desafios: 0 = 2–4, 1 = 5–7, 2 = 8–10, 3 = 11–13, 4 = 14–17. */
export function ageBand(age: number) { return age <= 4 ? 0 : age <= 7 ? 1 : age <= 10 ? 2 : age <= 13 ? 3 : 4 }
/** Nível de leitura dos textos: p (até 6), m (7–11), g (12+). */
export function readLevel(age: number): 'p' | 'm' | 'g' { return age <= 6 ? 'p' : age <= 11 ? 'm' : 'g' }

export function clamp(n: number, a: number, b: number) { return Math.max(a, Math.min(b, n)) }
export const plural = (n: number, one: string, many: string) => `${n} ${Math.abs(n) === 1 ? one : many}`;
export const stars = (n: number) => plural(n, 'estrela', 'estrelas');

/** Troca marcadores de gênero: "{o|a}" vira "o" ou "a". "x" usa a primeira forma. */
export function gx(text: string, g: string | undefined) { return text.replace(/\{([^|{}]*)\|([^|{}]*)\}/g, (_, m, f) => g === 'f' ? f : m) }

export function initials(name: string) { return name.trim().split(/\s+/).slice(0, 2).map(w => w[0]?.toUpperCase() || '').join('') }

export function downloadText(name: string, text: string, type = 'application/json') {
  const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([text], { type })); a.download = name;
  document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove() }, 500);
}

/** Reduz uma foto para um quadrado pequeno em JPEG (dataURL), para caber no banco sem serviço pago. */
export function shrinkPhoto(file: File, size = 240): Promise<string> {
  return new Promise((res, rej) => {
    const img = new Image(); const url = URL.createObjectURL(file);
    img.onload = () => {
      const c = document.createElement('canvas'); c.width = c.height = size; const x = c.getContext('2d')!;
      const s = Math.min(img.width, img.height); x.drawImage(img, (img.width - s) / 2, (img.height - s) / 2, s, s, 0, 0, size, size);
      URL.revokeObjectURL(url); res(c.toDataURL('image/jpeg', 0.8));
    };
    img.onerror = () => { URL.revokeObjectURL(url); rej(new Error('imagem inválida')) };
    img.src = url;
  });
}

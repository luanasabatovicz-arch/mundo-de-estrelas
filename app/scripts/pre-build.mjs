// Apaga só o que o build gera (index.html e assets/), preservando docs/content.
import { rmSync, existsSync } from 'node:fs';
const root = new URL('../../docs/', import.meta.url);
for (const p of ['assets', 'index.html']) { const u = new URL(p, root); if (existsSync(u)) rmSync(u, { recursive: true, force: true }); }

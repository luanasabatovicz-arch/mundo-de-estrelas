// Garante arquivos auxiliares do GitHub Pages.
import { writeFileSync, existsSync, copyFileSync } from 'node:fs';
const docs = new URL('../../docs/', import.meta.url);
writeFileSync(new URL('.nojekyll', docs), '');
if (existsSync(new URL('index.html', docs))) copyFileSync(new URL('index.html', docs), new URL('404.html', docs));
console.log('build pronto em docs/');

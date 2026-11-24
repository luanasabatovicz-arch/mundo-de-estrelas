import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

// O site publicado fica em ../docs (GitHub Pages). A pasta docs/content é conteúdo editável
// (temporadas, histórias, imagens) e nunca é apagada pelo build.
export default defineConfig({
  base: './',
  plugins: [preact()],
  publicDir: false,
  build: { outDir: '../docs', emptyOutDir: false, assetsDir: 'assets', sourcemap: false, chunkSizeWarningLimit: 900 },
  server: { fs: { allow: ['..'] } },
});

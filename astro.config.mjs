// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://alexperez7.github.io',
  // Precarga las páginas del menú al pasar el cursor: la navegación se siente instantánea.
  prefetch: true,
});

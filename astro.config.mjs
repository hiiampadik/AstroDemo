import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Astro produces a fully static build by default ('static').
  // ('export' is a Next.js value; the Astro equivalent is 'static'.)
  output: 'static',
  // GitHub Pages serves this project at https://hiiampadik.github.io/AstroDemo/
  site: 'https://hiiampadik.github.io',
  base: '/AstroDemo',
});

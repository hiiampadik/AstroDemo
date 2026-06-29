import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Astro produces a fully static build by default ('static').
  // ('export' is a Next.js value; the Astro equivalent is 'static'.)
  output: 'static',
  // For GitHub Pages deployment, set the `site` (and `base` if served from a
  // subpath) to the repository URL once known, e.g.:
  // site: 'https://owner.github.io',
  // base: '/repo-name',
});

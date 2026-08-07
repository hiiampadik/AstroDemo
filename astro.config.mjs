import { defineConfig } from 'astro/config';

// The GitHub Pages project site lives under /AstroDemo. Local dev + the Decap
// admin run at the root (BASE_PATH=/ in the dev script) so CMS image previews,
// which don't know about Astro's base, resolve correctly — and so dev matches
// the eventual custom-domain-at-root deployment. The production build keeps
// the /AstroDemo base by default.
const base = process.env.BASE_PATH ?? '/AstroDemo';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://hiiampadik.github.io',
  base,
});

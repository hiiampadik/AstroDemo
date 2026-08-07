import { defineConfig } from 'astro/config';

// The GitHub Pages project site lives under /AstroDemo. Local dev + the Decap
// admin run at the root (BASE_PATH=/ in the dev script) so CMS image previews,
// which don't know about Astro's base, resolve correctly — and so dev matches
// the eventual custom-domain-at-root deployment. The production build keeps
// the /AstroDemo base by default.
const base = process.env.BASE_PATH ?? '/AstroDemo';

// Markdown cross-links are authored root-absolute (/slug/). Astro does NOT
// prefix Markdown link hrefs with `base`, so rewrite internal links here so
// they resolve under /AstroDemo (prod) and / (dev) alike.
function rehypeBaseLinks() {
  const prefix = base.replace(/\/$/, ''); // '' when base is '/'
  const walk = (node) => {
    if (
      node.type === 'element' &&
      node.tagName === 'a' &&
      node.properties &&
      typeof node.properties.href === 'string'
    ) {
      const href = node.properties.href;
      if (
        prefix &&
        href.startsWith('/') &&
        !href.startsWith('//') &&
        !href.startsWith(prefix + '/')
      ) {
        node.properties.href = prefix + href;
      }
    }
    if (node.children) node.children.forEach(walk);
  };
  return (tree) => walk(tree);
}

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://hiiampadik.github.io',
  base,
  markdown: {
    rehypePlugins: [rehypeBaseLinks],
  },
});

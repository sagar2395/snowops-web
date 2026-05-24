// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
//
// Deployment: Cloudflare Pages serves the static `dist/` output directly via
// the asset binding in `wrangler.jsonc`. We deliberately do NOT include the
// `@astrojs/cloudflare` adapter — the site is fully static, and the adapter
// routes the dev server through workerd, which breaks SSR-only deps (notably
// `astro-icon`) that depend on Node CommonJS globals. If a server endpoint is
// added later, switch to `output: 'server'` and reintroduce the adapter.
export default defineConfig({
  site: 'https://snowops.net',
  output: 'static',
  integrations: [mdx(), sitemap(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});

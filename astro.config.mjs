import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.globalriskgovernance.org',
  trailingSlash: 'always',
  integrations: [sitemap()],
  build: { format: 'directory' },
});

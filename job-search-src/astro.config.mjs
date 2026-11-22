import { defineConfig } from 'astro/config';

// Published as a directory of erwanbargain.com. The build goes to ../job-search,
// which is the folder the web server serves; this source folder is blocked in .htaccess.
export default defineConfig({
  site: 'https://erwanbargain.com',
  base: '/job-search',
  trailingSlash: 'always',
  outDir: '../job-search',
  build: { format: 'directory' },
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
});

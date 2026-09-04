// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// PLACEHOLDER: domínio final. Usado em canonical, OG tags e sitemap.
const SITE = 'https://joaopauloguedes.dev';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },

  // --- i18n dormente ---
  // Para publicar a versão em inglês: descomente o bloco abaixo, crie
  // src/pages/en/index.astro e preencha as traduções em src/i18n/ui.ts.
  // i18n: {
  //   defaultLocale: 'pt-BR',
  //   locales: ['pt-BR', 'en'],
  //   routing: { prefixDefaultLocale: false },
  // },
});

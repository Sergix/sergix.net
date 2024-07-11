import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://sergix.dev',
  integrations: [vue(), sitemap(), tailwind({
    config: {
      applyBaseStyles: false // disables Tailwind default base stylesheet
    }
  })],
});
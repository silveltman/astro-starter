import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
import image from '@astrojs/image';

// https://astro.build/config
import vue from "@astrojs/vue";

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  // TODO: add site url for sitemap plugin to use
  // site: 'https://mywebsite.com',
  integrations: [tailwind(), sitemap(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), vue(), svelte()]
});
// https://astro.build/config
import { defineConfig } from 'astro/config';

// Astro integrations
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import image from '@astrojs/image';
import vue from "@astrojs/vue";
import svelte from "@astrojs/svelte";

// Third-party plugins
import yaml from '@rollup/plugin-yaml';
import { multicssclass } from 'svelte-multicssclass';


export default defineConfig({
  // TODO: add site url for sitemap plugin to use
  // site: 'https://mywebsite.com',
  integrations: [
    tailwind(),
    sitemap(),
    vue(),
    svelte(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp'
    }),
  ],

  vite: {
    plugins: [
      yaml(),
      multicssclass()
    ]
  }
});
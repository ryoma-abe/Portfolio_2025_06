import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://ryoma-abe.github.io',
  base: '/portfolio-2506',
  integrations: [tailwind()],
});
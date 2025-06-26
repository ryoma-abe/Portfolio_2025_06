import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://ryoma-abe.github.io',
  base: '/Portfolio_2025_06',
  integrations: [tailwind()],
});
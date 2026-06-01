// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Custom domain (www.tesseracton.com) serves from the root, so `base` stays "/".
export default defineConfig({
  site: 'https://www.tesseracton.com',
  vite: {
    plugins: [tailwindcss()],
  },
});

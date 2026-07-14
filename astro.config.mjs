// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Custom domain (tesseracton.com) serves from the root, so `base` stays "/".
export default defineConfig({
  site: 'https://tesseracton.com',
  vite: {
    plugins: [tailwindcss()],
  },
});

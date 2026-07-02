import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://bliss.jaspis.me',
  vite: {
    plugins: [tailwindcss()],
  },
});

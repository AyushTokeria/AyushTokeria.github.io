import { defineConfig } from 'vite';

// GitHub Pages serves project sites from /<repo>/; the workflow sets VITE_BASE.
export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
});

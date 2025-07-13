import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/ED-Website/',    // for GitHub Pages project site
  plugins: [react()],
  build: {
    outDir: 'docs',        // output to /docs for Pages
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
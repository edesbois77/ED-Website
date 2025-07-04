import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/ED-Website/',
  plugins: [react()],
  build: {
    outDir: 'docs',
  },
});

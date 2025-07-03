import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // Changed from '/ED/' to '/' to serve from root path
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
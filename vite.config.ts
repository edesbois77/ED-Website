import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/ED-Website/', // 👈 Add this line!
  plugins: [react()],
});
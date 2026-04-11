import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/dmytro-davydov-dev/',
  plugins: [react({
    jsxRuntime: 'classic'
  })],
});

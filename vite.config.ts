import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const githubPagesBase = '/ecommerce-admin/';

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? githubPagesBase : '/',
  plugins: [react()],
}));

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/SkillConnect/',  // 👈 Esto debe coincidir con tu repositorio
  build: {
    outDir: 'docs',  // 👈 Cambia la carpeta de salida a 'docs'
  },
});
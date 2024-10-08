import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path'; // Importez explicitement le module path

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@views': path.resolve(__dirname, './src/views'),
    },
  },
  build: {
    rollupOptions: {
      external: [], // Assurez-vous que les modules nécessaires ne sont pas listés ici
    },
  },
});

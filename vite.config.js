import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      'ol': '/node_modules/ol'
    }
  }
});
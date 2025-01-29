import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    base: "",
    alias: {
      'ol': '/node_modules/ol'
    }
  }
});
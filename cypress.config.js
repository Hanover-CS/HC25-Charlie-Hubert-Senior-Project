import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    supportFile: false,  // Disable the support file requirement
  },
});

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Node event listeners here if needed
    },
    supportFile: false,  // Disable the support file requirement
  },
});

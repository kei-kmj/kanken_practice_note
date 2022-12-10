import { defineConfig } from "cypress"

export default defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite'
    }
  },
  e2e: {
    baseUrl: 'http://localhost:3036',
    setupNodeEvents (on, config) {
      // implement node event listeners here
    },
  },
});

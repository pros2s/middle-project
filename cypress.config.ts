import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'xvjmq1',
  e2e: {
    setupNodeEvents() {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000",
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});

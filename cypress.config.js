const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  failOnStatusCode: false,
  screenshotOnRunFailure: true,
  video: true,
  videoCompression: 32,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

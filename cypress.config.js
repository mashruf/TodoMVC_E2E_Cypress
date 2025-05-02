const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // Required if you're using reporters or plugins
    },
    screenshotOnRunFailure: true,
    video: true,
    videoUploadOnPasses: false, // optional: keep videos even if tests pass
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
  }
})


const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // Required if you're using reporters or plugins
      require('cypress-mochawesome-reporter/plugin')(on);

    }
  }
})


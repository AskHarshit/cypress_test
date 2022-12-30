const { defineConfig } = require("cypress");
const Mochawesome = require("mochawesome");

module.exports = defineConfig({
  projectId: 'cmurth',
  e2e: {
    setupNodeEvents(on, config) {

      // implement node event listeners here
    },

    "reporter": "Mochawesome",
    "reporterOptions": {
      "reportDir" : "cypress/reports",
      "reportFilename" : "report",
      "overwrite" : false,
      "html" : true,
      "json" : true,
      "charts" : true
    },
    "video" : false
  },
});

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.cy.js", // This tells Cypress where to find your test files
    supportFile: false,
  }
});

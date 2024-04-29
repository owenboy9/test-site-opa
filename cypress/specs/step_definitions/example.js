import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that i am on the very homiest page', () => {
  cy.visit("/")
});
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

/* No duplicate steps, this one already in navigation.js
Given('I am on the {string} page', (a) => {});*/

When('I search for {string}', (searchTerm) => {
  cy.get('#input-54').type(searchTerm + '{enter}')
});

Then('I should see {string} in the search results', (searchTerm) => {
  cy.get('.font-weight-regular > :nth-child(2)').should('contain', searchTerm, { matchCase: false })
  cy.get('.font-weight-regular > :nth-child(1)').invoke('text').then((text) => {
    const intValue = parseInt(text.trim(), 10);
    expect(intValue).to.be.a('number');
  })
  let count = 0
  cy.get('.v-list-item__content').each(($el, index) => {
    let text = $el.text()
    let regex = new RegExp(searchTerm, 'ig')
    if (text.match(regex) && text.match(regex).length > 0) {
      count++
    }
    if (index == cy.get('.v-list-item__content').length - 1) {
      expect(count).to.be.above(0)
    }
    //expect(text).to.match(regex)
  });

});
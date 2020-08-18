Cypress.Commands.add('login', () => {
  cy.visit('seubarriga.wcaquino.me/login')
  cy.get("#email").type(Cypress.env('email'));
  cy.get("#senha").type(Cypress.env('senha'));
  cy.get('.btn.btn-primary').click();
})


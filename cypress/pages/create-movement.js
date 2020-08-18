export const createMovementViewElements = () => {
  cy.get(':nth-child(3) > a').click();
  cy.get('#tipo')
   .should('be.visible');
  cy.get('#data_transacao')
   .should('be.visible');
  cy.get('#data_pagamento')
   .should('be.visible');
  cy.get('#descricao')
   .should('be.visible');
  cy.get('#interessado')
   .should('be.visible');
  cy.get('#valor')
   .should('be.visible');
  cy.get('#conta')
   .should('be.visible');
  cy.get('#status_pago')
   .should('be.visible');
  cy.get('#status_pendente')
   .should('be.visible'); 
  cy.get('.btn.btn-primary')
   .should('be.visible')
   .and('contain', 'Salvar');;
};
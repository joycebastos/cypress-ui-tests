import { createMovementViewElements } from '../pages/create-movement';

describe ('Components displayed create Movement', () => {
  it ('sucessfully', () =>{
    cy.login();
    createMovementViewElements();
  })
})
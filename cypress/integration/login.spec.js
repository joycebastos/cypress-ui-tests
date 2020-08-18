describe ('Login', () => {
  it ('sucessfully', () =>{
    cy.login();
    cy.get('.alert.alert-success').should('exist').and('contain', 'Bem vindo, Sr Barriga!');
  })
})

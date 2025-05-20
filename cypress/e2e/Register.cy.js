describe('template spec', () => {
  // geração de e-mail aleatorio em cada registro de novo Logn
  function gerarEmailUnico() {
    const timestamp = Date.now();
    return `marcelo${timestamp}@teste.com`;
  }


  it('Register', () => {
    cy.viewport(1280, 800); //  aqui define a resolução
    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=common/home')
    cy.get('#widget-navbar-217834 > .navbar-nav > :nth-child(6) > .nav-link > .info > .title').click({force: true});
    cy.contains('Register').click();
    cy.get('#input-firstname').type('Marcelo');
    cy.get('#input-lastname').type('Silva');
    cy.get('#input-email').type(gerarEmailUnico());
    cy.get('#input-telephone').type('47991357899');
    cy.get('#input-password').type('Marcelo@123');
    cy.get('#input-confirm').type('Marcelo@123');
    cy.get('.col-sm-10 > :nth-child(1) > .custom-control-label').click();
    cy.get('.float-right > .custom-control > .custom-control-label').click();
    cy.get('.float-right > .btn').click();
    cy.contains('Your Account Has Been Created!').should('be.visible')
    cy.get('.buttons > .btn').click();
    //Escolhe a categoria
    cy.get('#entry_217822 > .search-wrapper > form > #search > .search-input-group > .search-input > .flex-fill > input').type('HP LP3065');
    cy.get('.type-text').click();
    cy.get('#mz-product-grid-image-47-212469 > .carousel-inner > .active > .lazy-load').click();
    cy.get('#entry_216843 > .text').click();
    cy.get('#input-payment-firstname').type('Marcelo');
    cy.get('#input-payment-lastname').type('Silva');
    cy.get('#input-payment-company').type('SZ Solution');
    cy.get('#input-payment-address-1').type('Rua do Marcelo');
    cy.get('#input-payment-city').type('São Francisco do Sul');
    cy.get('#input-payment-postcode').type('89240000');
    cy.get('#input-payment-country').type('Brazil');
    cy.get('#input-payment-zone').type('Santa Catarina');
    cy.get('#input-comment').type(' Test Cypress ecommerce- playground');
    cy.get(':nth-child(6) > .custom-control-label').click();
    cy.get('#button-save').click();
    cy.wait(2000);
    cy.get('#button-confirm').click();
    cy.wait(5000);
    // Finaliza teste
    cy.contains('Your order has been placed!', { timeout: 10000 }).should('be.visible');
   
  })
})
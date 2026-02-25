describe('Naukri Update', () => {
  it('Login and update', function ()  {
    cy.fixture('example').then((data) => {
    this.data = data;
    cy.visit('https://www.naukri.com/')
    cy.contains('Login').click();
    cy.get('input[maxlength="100"]').type(this.data.email);
    cy.get('input[type="Password"]').type(this.data.password)
    cy.get('.btn-primary.loginButton').click();
    cy.get('a[href*="profile"]').first().click({'center': true})
    cy.get('span.edit.icon').first().click();
    cy.get('.btn-dark-ot').last().click();
    cy.get('span.typ-14Medium.mod-date-val').should('contain', 'Today')
    
    })
    
  })
})
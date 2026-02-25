describe('Naukri Update', () => {
  it('Login and update', function ()  {
    cy.fixture('example').then((data) => {
    this.data = data;
    cy.visit('https://www.naukri.com/')
    cy.wait(5000)
    cy.contains('Login').click();
    cy.wait(5000)
    cy.get('input[maxlength="100"]').type(this.data.email);
    cy.get('input[type="Password"]').type(this.data.password)
    cy.get('.btn-primary.loginButton').click();
    cy.wait(5000)
    cy.get('a[href*="profile"]').first().click({force: true})
    cy.scrollTo(0,300);
    cy.get('span.edit.icon').first().click({force: true});
    cy.wait(5000)
    cy.get('.btn-dark-ot').last().click({force: true});
    cy.wait(5000)
    cy.get('.profileUpdatedProLayer > .crossLayer > .icon').click({force: true});
    cy.get('span.typ-14Medium.mod-date-val').should('contain', 'Today')
    cy.get('.nI-gNb-drawer__icon').click({force: true})
    cy.contains('Logout').click({force: true})
    })
    
  })
})
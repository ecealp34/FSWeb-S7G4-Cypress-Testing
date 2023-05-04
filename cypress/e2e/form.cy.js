describe('First Test', function () {
    it('Does not do much', function() {
        expect(true).to.equal(true);
    })
})

describe('Second Test', function () {
    it('My Second test', function() {
        expect(true).to.equal(true);
    })
})


describe('newMember', () => {
    it('user should be able to submit', () => {
      cy.visit('https://localhost:3000/')
      cy.title().should("eq, users")
  
   
      cy.get('button').contains('addMember').click()
  
  
      cy.get('input[type="name"]').type("melis").should("have.length", 5)
      cy.get('.error').should('be.empty') 
      cy.get('input[type="email"]').type('melis@5.com')
      cy.get('input[type="password"]').type('lsfdl')
      cy.get('input[type="checkbox"]').should('be.checked')

  
     
      cy.get('button').contains('Submit').click()
     
    })
  })

  

  describe('sends a form', () => {
    it('form should be able to send', () => {
      cy.visit('https://localhost:3000/')
      cy.title().should("eq, users")
  
    cy.intercept('POST', '/users*', {}).as('post')
    cy.get('form').within(() => {
      cy.get('input[name=name]').type('mor')
      cy.get('input[name=email]').type('mor@5.com')
      cy.get('input[name=password]').type('+1 (555) 555-5555')
      cy.get('input[type="checkbox"]').should('be.checked')
      cy.get('input[type=submit]').click()
    })
  
   
    cy.wait('@post').its('request.body', { timeout: 1000 })

  })})

  describe('emptyInput', () => {
    it('have to fill data', () => {
      cy.visit('https://localhost:3000/')
      cy.title().should("eq, users")
  
   
      cy.get('button').contains('emptyInput').click()
  
  
      cy.get('#input-data').should("not.have.value");
      
  
     
      cy.get('button').contains('Submit').click()
     
    })
  })
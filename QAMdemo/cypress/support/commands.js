import 'cypress-file-upload';


Cypress.Commands.add('SignIn',()=>{
    cy.visit('/#/login')
    cy.title().should('eq', 'Conduit')
    cy.location('protocol').should('eq', 'https:')
    // cy.get('input[type="email"]').type('tyne2021git@gmail.com')
    // cy.get('input[type="password"]').type('tyne1232021')
    // cy.get('.btn').contains('Sign in').should('be.visible').click()
    cy.get('form').within(($form) => {
        cy.get('input[type="email"]').type('tyne2021git@gmail.com')
        cy.get('input[type="password"]').type('tyne1232021')
        //type=submit
        cy.root().submit()
    })
    cy.contains('Your Feed', { timeout: 10000 }).should('be.visible')
})
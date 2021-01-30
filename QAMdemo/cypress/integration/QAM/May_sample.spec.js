describe('Login',function(){
    it('Sign in',function(){
        cy.visit('https://react-redux.realworld.io/#/login')
        cy.get('input[type="email"]').type('tyne2021git@gmail.com')
        cy.get('input[type="password"]').type('tyne1232021')
        cy.get('.btn').contains('Sign in').should('be.visible').click()
    })
})
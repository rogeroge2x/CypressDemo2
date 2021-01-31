import Login from '../pageObjects/login'
describe('Login',function(){
    const login= new Login
    it('Sign in',function(){
        cy.visit('https://react-redux.realworld.io/#/login')
        login.email().type('tyne2021git@gmail.com')
        login.password().type('tyne1232021')
        login.signInButton().should('be.visible').click()
    })
})
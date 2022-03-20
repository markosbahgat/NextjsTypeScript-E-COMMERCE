import { TestingCart } from './TestingCart.spec';
import { TestingArabicLang } from './TestingArabicLang.spec';

Cypress.config("viewportHeight", 700)
Cypress.config("viewportWidth", 1600)



describe("Testing Application", () => {
    it('Visit the Website', () =>
    {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit('localhost:3003/home')
        cy.url().should('include', '/login')
    })
    it('Test SignUp Form', () =>
    {
        cy.get('input[name="name"]').type('Markos Bahgat')
        cy.get('input[name="email"]').type('markos.a7a@gmail.com')
        cy.get('input[name="username"]').type('markos_bahgat')
        cy.get('input[name="password"]').type('dfsafdsfdsadsfsda')
        cy.get('form').submit()
    })
    it('Adding Proudcts To Cart', () =>
    {
        cy.url().should('include', '/home')
        cy.get('.style_main_container__XdBS6').scrollIntoView()
        // cy.get('.fa-bars').click() // if you testing with mobile view
        cy.contains('Products').click()
        cy.url().should('include', '/products')
        cy.get('.cart_btn').click({multiple: true})
        
    })
    context("CART", () => {
        TestingCart();
    })
    context("ARABICLANG", () => {
        TestingArabicLang();
    })
})

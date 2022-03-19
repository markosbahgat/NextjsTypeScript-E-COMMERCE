

describe("Testing Application", () =>
{
    it('Visit the Website', () =>
    {
        cy.viewport(1600, 700)
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
        cy.viewport(1600, 700)
        cy.url().should('include', '/home')
        cy.get('.style_main_container__XdBS6').scrollIntoView()
        cy.contains('Products').click()
        cy.url().should('include', '/products')
        cy.get('.cart_btn').click({multiple: true})
    })
})
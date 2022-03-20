export const TestingArabicLang = () => {
    describe("ArabicLang", () => {
        it("Convert To Arabic", () => {
            cy.get("#switcher_select__KJZXk").get('select').select('ar')
            cy.get(".Style_logo__oyT_4").get('a[data-testing=Logo]').should("have.text", "متجر الكتروني")
        })
    })
}
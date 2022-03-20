export const TestingCart = () => {
	describe("Testing Cart", () => {
		it("Open Cart", () => {
			// cy.get('.fa-bars').click() // if you testing with mobile view
			cy.get("div[data-testing=dropDown_button]").click();
			cy.get("li[data-testing=cart_button]").click();
			cy.get(".HOC_all_products_container__JQ5hM")
				.find(".style_main_container__PBv7i")
				.should("have.length", "20");
			cy.get("span[data-testing=Price_Span]").should("have.text", "$3241");
			cy.get(".style_clear__4YNzI").click();
			cy.get("h1[data-testing=No_Products]").should("have.attr", "style");
			cy.get(".style_send__MX0hE").click();
			cy.url().should("include", "/checkout");
			cy.get("a[data-testing=link_to_products]").click();
			cy.url().should("include", "/products");
			// cy.get('.fa-bars').click() // if you testing with mobile view
			cy.get("div[data-testing=dropDown_button]").click();
			cy.get("li[data-testing=logOut]").click();
			cy.url().should("include", "/login");
		});
	});
};

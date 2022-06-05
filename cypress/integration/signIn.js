///<reference types = "Cypress"/>
import signInPage from "../support/page-object/signInPage";

describe("E2E - Trying to logg in with already created account", () => {
    it("Loggs in with correct data", () => {
        cy.visit("/index.php?controller=authentication&back=my-account");
        const myGolabalVar = Cypress.env("email");

        cy.get("#email").type(myGolabalVar);

    })
})
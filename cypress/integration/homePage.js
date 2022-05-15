/// <reference types = "cypress" />
import 'cypress-file-upload';

describe("E2E - Home Page", () => {
    it("Completes the form", () => {
        cy.visit("/");
        cy.get('[title="Contact Us"]').click();
        cy.get("#message").type("Random message for test.");
        cy.get("#email").type("test@gmail.com");
        cy.get("#id_order").type("874237");
        cy.get("#id_contact").select("Customer service");
        
        const fixtureFile = 'test.png';
        cy.get("#fileUpload").attachFile(fixtureFile);
        cy.get("span").parents("#submitMessage").click();
    })
})
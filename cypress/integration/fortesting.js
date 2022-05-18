import 'cypress-file-upload';

describe("E2E - Home Page", () => {
    it("Completes the form (Customer service) with incorrect email", () => {
        cy.visit("/?controller=contact");
        cy.get("#message").type("Random message for test.")
        cy.get("#email").type("emailgmail.com")
        cy.get("#id_order").type("874237");
        cy.get("p.form-group.form-error").should("have.class", "form-error"); 
        cy.get("#id_contact").select("Webmaster");
        
        const fixtureFile = 'test.png';
        cy.get("#fileUpload").attachFile(fixtureFile);

        cy.get('[class="filename"]').then(name => {
            expect(name).to.contain("test.png")
        })

        cy.get("span").parents("#submitMessage").click();

        cy.get("p").parents("#center_column").find("p").first().then(error => {
            cy.wrap(error).should("contain", "There is 1 error");
        })

        cy.get("li").parents("#center_column").find("li").first().then(error => {
            cy.wrap(error).should("contain", "Invalid email address.");
        })
    })
})
  
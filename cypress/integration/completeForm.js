/// <reference types = "cypress" />
import 'cypress-file-upload';

describe("E2E - Home Page", () => {
    it("Completes the form (Customer service)", () => {
        // Fills the values ​​into the form 
        cy.visit("/");
        cy.get('[title="Contact Us"]').click();
        cy.get("#message").type("Random message for test.");
        cy.get("#email").type("test@gmail.com");
        cy.get("#id_order").type("874237");
        cy.get("p.form-group.form-ok").should("have.class", "form-ok"); 
        cy.get("#id_contact").select("Customer service");
        
        const fixtureFile = 'test.png';
        cy.get("#fileUpload").attachFile(fixtureFile);
        cy.get('[class="filename"]').then(name => {
            expect(name).to.contain("test.png")
        })

        cy.get("span").parents("#submitMessage").click();
        cy.get('[class="alert alert-success"]').then(confirmation => {
            expect(confirmation).to.contain("Your message has been successfully sent to our team.");
        })
    })

    it("Completes the form (Webmaster)", () => {
        // Fills the values ​​into the form 
        cy.visit("/?controller=contact");
        cy.get("#message").type("Random message for test.")
        cy.get("#email").type("test@gmail.com");
        cy.get("#id_order").type("874237");
        cy.get("p.form-group.form-ok").should("have.class", "form-ok"); 
        cy.get("#id_contact").select("Webmaster");

        const fixtureFile = 'test.png';
        cy.get("#fileUpload").attachFile(fixtureFile);
        cy.get('[class="filename"]').then(name => {
            expect(name).to.contain("test.png")
        })

        cy.get("span").parents("#submitMessage").click();
        cy.get('[class="alert alert-success"]').then(confirmation => {
            expect(confirmation).to.contain("Your message has been successfully sent to our team.");
        })
    })

    it("Completes the form (Customer service) with incorrect email", () => {
        // Fills the values ​​into the form 
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

    it("Completes the form (Webmaster) with incorrect email", () => {
        // Fills the values ​​into the form
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


import 'cypress-file-upload';

import contactUsPage from "../support/page-object/contactUsPage"

describe("E2E - Home Page", () => {
    it("Completes the form (Customer service) with incorrect email", () => {

        cy.visit("http://automationpractice.com/index.php?controller=authentication&back=my-account#account-creation");
        cy.get("#email_create").type("test50@interia.com");
        cy.get("#SubmitCreate").click();
        cy.get("#id_gender1").check();
        cy.get("#id_gender1").uncheck();


        
        
    })
})
  
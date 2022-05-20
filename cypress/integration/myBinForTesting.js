import 'cypress-file-upload';

import contactUsPage from "../support/page-object/contactUsPage"

describe("E2E - Home Page", () => {

    const emailName = "test@gmail.com";
    const wrongEmailName = "testgmail.com";
    const orderNumber = 83214;
    const filName = "test.png";
    const testMessage = "Random message for test";


    it("Completes the form (Customer service) with incorrect email", () => {

        cy.visit("http://automationpractice.com/index.php?controller=contact");
        cy.get('[title="Contact Us"]').click();
        contactUsPage.fillForm(0, emailName, orderNumber, filName, testMessage);
        cy.get("#fileUpload").attachFile("");
        contactUsPage.checkTrueEmail();
        contactUsPage.clickSend();
        contactUsPage.checkErrorInfo();

        
        
    })
})
  
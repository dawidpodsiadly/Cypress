/// <reference types = "cypress" />
import 'cypress-file-upload';
import contactUsPage from "../support/page-object/contactUsPage"

describe("E2E - Filling the 'Contact us' form", () => {
 // https://www.cypress.io/blog/2019/01/03/stop-using-page-objects-and-start-using-app-actions/
    const emailName = "test@gmail.com";
    const orderNumber = 83214;
    const filName = "test.png";
    const testMessage = "Random message for test";

    it("Completes the form (Customer service)", () => {

        cy.visit("/");
        cy.get('[title="Contact Us"]')
        .should("contain", "Contact us")
        .click();

        //const Form = contactUsPage;
        contactUsPage.fillForm(1, emailName, orderNumber, filName, testMessage);
        contactUsPage.checkTextInfo();
        contactUsPage.checkTrueEmail();
        contactUsPage.clickSend();
        contactUsPage.verifyEndMessage();
    })

    it("Completes the form (Webmaster)", () => {
        
        contactUsPage.visitFormPage();
        contactUsPage.fillForm(2, emailName, orderNumber, filName, testMessage);
        contactUsPage.checkTextInfo();
        contactUsPage.checkTrueEmail();
        contactUsPage.clickSend();
        contactUsPage.verifyEndMessage();
    })

    it("Completes the form without choosen subject", () => {
        
        contactUsPage.visitFormPage();
        contactUsPage.fillForm(0, emailName, orderNumber, filName, testMessage);
        contactUsPage.checkTrueEmail();
        contactUsPage.clickSend();
        contactUsPage.subjectErrorInfo();

        //Completes the form with correct data
        contactUsPage.clearForm();
        contactUsPage.fillForm(1, emailName, orderNumber, filName, testMessage);
        contactUsPage.checkTextInfo();
        contactUsPage.subjectErrorInfo();
        contactUsPage.clickSend();
        contactUsPage.verifyEndMessage();
    })

    it("Completes the form with wrong email", () => {

        contactUsPage.visitFormPage();
        contactUsPage.fillForm(1, "testgmail.com", orderNumber, filName, testMessage);
        contactUsPage.checkTextInfo();
        contactUsPage.checkFalseEmail();
        contactUsPage.clickSend();
        contactUsPage.emailErrorInfo();

        //Completes the form with correct data
        contactUsPage.clearForm();
        contactUsPage.fillForm(1, emailName, orderNumber, filName, testMessage);
        contactUsPage.checkTextInfo();
        contactUsPage.emailErrorInfo();
        contactUsPage.clickSend();
        contactUsPage.verifyEndMessage();
    })

    it("Completes the form with blank message input", () => {

        contactUsPage.visitFormPage();
        contactUsPage.fillForm(1, emailName, orderNumber, filName, testMessage);
        contactUsPage.checkTextInfo();
        contactUsPage.checkTrueEmail();
        contactUsPage.clearMessageInput();
        contactUsPage.clickSend();
        contactUsPage.messageErrorInfo();

        //Completes the form with correct 
        contactUsPage.clearForm();
        contactUsPage.fillForm(1, emailName, orderNumber, filName, testMessage);
        contactUsPage.checkTextInfo();
        contactUsPage.messageErrorInfo();
        contactUsPage.clickSend();
        contactUsPage.verifyEndMessage();
    })
})


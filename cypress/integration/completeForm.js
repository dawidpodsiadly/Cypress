/// <reference types = "cypress" />
import 'cypress-file-upload';
import contactUsPage from "../support/page-object/contactUsPage"

describe("E2E - Filling the 'Contact us' form", () => {

    const emailName = "test@gmail.com";
    const orderNumber = 83214;
    const filName = "test.png";
    const testMessage = "Random message for test";

    it("Completes the form (Customer service)", () => {
        cy.visit("/");
        cy.get('[title="Contact Us"]')
        .should("contain", "Contact us")
        .click();

        contactUsPage
        .fillForm(1, emailName, orderNumber, filName, testMessage)
        .checkTextInfo()
        .checkTrueEmail()
        .clickSend()
        .verifyEndMessage();
    })

    it("Completes the form (Webmaster)", () => {
        contactUsPage
        .visitFormPage()
        .fillForm(2, emailName, orderNumber, filName, testMessage)
        .checkTextInfo()
        .checkTrueEmail()
        .clickSend()
        .verifyEndMessage();
    })

    it("Completes the form without choosen subject", () => {
        contactUsPage
        .visitFormPage()
        .fillForm(0, emailName, orderNumber, filName, testMessage)
        .checkTrueEmail()
        .clickSend()
        .subjectErrorInfo();

        //Completes the form with correct data
        contactUsPage
        .clearForm()
        .fillForm(1, emailName, orderNumber, filName, testMessage)
        .checkTextInfo()
        .subjectErrorInfo()
        .clickSend()
        .verifyEndMessage();
    })

    it("Completes the form with wrong email", () => {
        contactUsPage
        .visitFormPage()
        .fillForm(1, "testgmail.com", orderNumber, filName, testMessage)
        .checkTextInfo()
        .checkFalseEmail()
        .clickSend()
        .emailErrorInfo();

        //Completes the form with correct data
        contactUsPage
        .clearForm()
        .fillForm(1, emailName, orderNumber, filName, testMessage)
        .checkTextInfo()
        .emailErrorInfo()
        .clickSend()
        .verifyEndMessage();
    })

    it("Completes the form with blank message input", () => {
        contactUsPage  
        .visitFormPage()
        .fillForm(1, emailName, orderNumber, filName, testMessage)
        .checkTextInfo()
        .checkTrueEmail()
        .clearMessageInput()
        .clickSend()
        .messageErrorInfo();

        //Completes the form with correct 
        contactUsPage
        .clearForm()
        .fillForm(1, emailName, orderNumber, filName, testMessage)
        .checkTextInfo()
        .messageErrorInfo()
        .clickSend()
        .verifyEndMessage();
    })
})


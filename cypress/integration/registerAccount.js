/// <reference types = "cypress" />
import createAccountPage from "../support/page-object/createAccountPage"

describe("E2E - Register account", () => {

    const email = "testing346@gmail.com";

    it("Creates new account", () => {
        cy.visit("/");
        createAccountPage.goToRegistration();
        createAccountPage.InputEmail(email);
        createAccountPage.fillCreateAccount();
        createAccountPage.isCorrect(email);
        createAccountPage.endRegister();
    })
})
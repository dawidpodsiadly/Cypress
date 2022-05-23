/// <reference types = "cypress" />
import createAccountPage from "../support/page-object/createAccountPage"
import { faker } from '@faker-js/faker';

describe("E2E - Register account", () => {

        const email = faker.internet.email();
    it("Creates new account", () => {
        cy.visit("/");
        createAccountPage.goToRegistration();
        createAccountPage.InputEmail(email);
        cy.wait(10000);
        createAccountPage.fillCreateAccount(1);
        createAccountPage.isCorrect(email);
        createAccountPage.endRegister();
    })
})
/// <reference types = "cypress" />
import registerAccountPage from "../support/page-object/registerAccountPage"

describe("E2E - Register account", () => {

    beforeEach(() => {
        registerAccountPage.generateFakerData();
    })

    it("Register new account with all data filled", () => {
        const Gender = "Mr";
        const bDay = "1";
        const mDay = "January";
        const yDay = "1996";
        const ifNewsletter = true;
        const ifOffers = true;

        cy.visit("/");
        registerAccountPage.goToRegistration();
        registerAccountPage.inputEmail();

        registerAccountPage.fillCreateAccount(Gender, bDay, mDay, yDay, ifNewsletter, ifOffers);
        registerAccountPage.isCorrect(Gender, bDay, mDay, yDay, ifNewsletter, ifOffers);
        registerAccountPage.endRegister();
    })

   it("Register new account with other data", () => {
        const Gender = "Mrs";
        const bDay = "2";
        const mDay = "February";
        const yDay = "1997";
        const ifNewsletter = false;
        const ifOffers = false;

        cy.visit("/index.php?controller=authentication&back=my-account");
        registerAccountPage.inputEmail();

        cy.wait(4000);
        
        registerAccountPage.fillCreateAccount(Gender, bDay, mDay, yDay, ifNewsletter, ifOffers);
        registerAccountPage.isCorrect(Gender, bDay, mDay, yDay, ifNewsletter, ifOffers);
        registerAccountPage.endRegister();

    })

    it("Tries to register without any data", () => {
        cy.visit("/index.php?controller=authentication&back=my-account");
        registerAccountPage.inputEmail();
        registerAccountPage.checkErrors();
    })

    it("Tries to register account which has been already registered", () => {
        cy.visit("/index.php?controller=authentication&back=my-account");
        registerAccountPage.inputTakenEmail();
    })

    it("Registers account with only demanding data (*)", () => {
        cy.visit("/index.php?controller=authentication&back=my-account");
        registerAccountPage.inputEmail();
        cy.wait(4000);
        registerAccountPage.fillDemandingDataOnly();
        registerAccountPage.endRegister();
    })
})
/// <reference types = "cypress" />
import newsletterPage from "../support/page-object/newsletterPage";

describe("E2E - sign to newsletter", () => {

    beforeEach(() => {

        cy.visit('/')
      
      })

    it("Signs to newsletter with correct email", () => {
        newsletterPage.signCorrect();
    })

    it("Signs to newsletter with incorrect email", () => {
        newsletterPage.signIncorrect();
    })

    it("Signs to newsletter with already signed email", () => {
        newsletterPage.signSecondTime();
    })
})
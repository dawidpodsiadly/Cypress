/// <reference types = "cypress" />

describe("E2E - Home Page", () => {
    it("Should open home page - automationpractice", () => {
        cy.visit("/")
    })
})
class contactUsPage {
    get message() {
        return cy.get('[title="Contact Us"]');
    }

    get email() {
        return cy.get("#email");
    }

    get idOrder() {
        return cy.get("#id_order");
    }
}

export default new contactUsPage
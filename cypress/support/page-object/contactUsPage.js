import 'cypress-file-upload';
import chaiColors from 'chai-colors'
chai.use(chaiColors)

// Fills everything in Form.

class contactUsPage {
    get message() {
        return cy.get("#message");
    }

    get email() {
        return cy.get("#email");
    }

    get idOrder() {
        return cy.get("#id_order");
    }

    get fileUpload() {
        return cy.get("#fileUpload");
    }

    get subject() {
        return cy.get("#id_contact");
    }

    get inputForFile() {
        return cy.get('[class="filename"]');
    }

    get sendButton() {
        return cy.get("span").parents("#submitMessage");
    }

    get endMessage() {
        return cy.get('[class="alert alert-success"]');
    }

    fillForm(optionNumber, email, idOrder, fileUpload, message) {
        this.subject.select(optionNumber);
        this.email.type(email);
        this.idOrder.type(idOrder);
        this.fileUpload.attachFile(fileUpload)
        this.inputForFile.should("contain", "test.png");
        this.message.type(message);
    }

    checkFormTrue() {
        this.email.should("have.css", "color").and('be.colored', '#35b33f');
    }

    checkFormFalse() {
        this.email.should("have.css", "color").and('be.colored', '#f13340');
    }

    clickSend() {
        this.sendButton.click();
    }

    verifyMessage() {
        this.endMessage
        .should("contain", "Your message has been successfully sent to our team.")
        .and("have.css", "background-color").and('be.colored', '#55c65e');
    }
}

export default new contactUsPage
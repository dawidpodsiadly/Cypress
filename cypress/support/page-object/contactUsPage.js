import 'cypress-file-upload';
import chaiColors from 'chai-colors'
chai.use(chaiColors);

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

    get info() {
        return cy.get("#desc_contact2");
    }

    get inputForFile() {
        return cy.get('[class="filename"]');
    }

    get endMessage() {
        return cy.get('[class="alert alert-success"]');
    }

    get sendButton() {
        return cy.get("span").parents("#submitMessage");
    }

    get errorInfo() {
        return cy.get("li").parents("#center_column").find("li").first();
    }

    visitFormPage() {
        cy.visit("http://automationpractice.com/index.php?controller=contact");
    }

    fillForm(optionNumber, email, idOrder, fileUpload, message) {
        this.inputForFile.should("contain", "No file selected");
        this.subject.select(optionNumber);
        this.email.type(email);
        this.idOrder.type(idOrder);
        this.fileUpload.attachFile(fileUpload);
        this.inputForFile.should("contain", "test.png");
        this.message.type(message);
    }

    clearForm() {
        this.subject.select(0);
        this.email.clear();
        this.idOrder.clear();
        this.message.clear();
    }

    clearMessageInput(){
        this.message.clear();
    }

    checkTrueEmail() {
        this.email
        .should("have.css", "color").and('be.colored', '#35b33f');
    }

    checkFalseEmail() {
        this.email.should("have.css", "color").and('be.colored', '#f13340');
    }

    clickSend() {
        this.sendButton.should("contain", "Send");
        this.sendButton.click();
    }

    verifyEndMessage() {
        this.endMessage
        .should("contain", "Your message has been successfully sent to our team.")
        .and("have.css", "background-color").and('be.colored', '#55c65e');
    }

    subjectErrorInfo() {
        this.errorInfo
        .should("contain", "Please select a subject from the list provided. ")
        .and("not.contain", "The message cannot be blank.")
        .and("not.contain", "Invalid email address.");
    }

    emailErrorInfo() {
        this.errorInfo
        .should("contain", "Invalid email address.")
        .and("not.contain", "The message cannot be blank.")
        .and("not.contain", "Please select a subject from the list provided. ");
    }

    messageErrorInfo() {
        this.errorInfo
        .should("contain", "The message cannot be blank.")
        .and("not.contain", "Invalid email address.")
        .and("not.contain", "Please select a subject from the list provided. ");
    }

    checkTextInfo() {
        this.info.should("contain", "For any question about a product, an order")
    }
}

export default new contactUsPage
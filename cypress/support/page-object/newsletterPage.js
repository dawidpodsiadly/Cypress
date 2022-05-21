import chaiColors from 'chai-colors';
chai.use(chaiColors);

class newsletterPage {

    get newsletterInput() {
        return cy.get("#newsletter-input");
    }

    get captionNewsletter() {
        return cy.get("h4").parents("#newsletter_block_left").find("h4").eq(0);
    }

    get sendButton() {
        return cy.get('button[name="submitNewsletter"]');
    }

    get finalMessage() {
        return cy.get("p").parents("#columns").find("p").eq(0);
    }

    get errorMessage() {
        return cy.get("p[class='alert alert-danger']");
    }

    signCorrect() {
        this.captionNewsletter.should("contain", "Newsletter");

        this.newsletterInput
        .should("have.value", "Enter your e-mail")
        .type("tes9t@gmail.com");

        this.sendButton.click();
        this.finalMessage
        .should("contain", " Newsletter : You have successfully subscribed to this newsletter.")
        .and("have.class", "alert alert-success")
        .and("have.css", "background-color")
        .and('be.colored', '#55C65E');
    }

    signIncorrect() {
        this.captionNewsletter.should("contain", "Newsletter");

        this.newsletterInput
        .should("have.value", "Enter your e-mail")
        .type("tes5tgmail.com");
        this.sendButton.click();

        this.errorMessage
        .should("contain", " Newsletter : Invalid email address.")
        .and("have.css", "background-color")
        .and('be.colored', '#f3515c');
        this.newsletterInput.should("have.value", "Invalid email address.");
    }

    signSecondTime() {
        this.captionNewsletter.should("contain", "Newsletter");

        this.newsletterInput
        .should("have.value", "Enter your e-mail")
        .type("test@gmail.com");
        this.sendButton.click();

        this.errorMessage
        .should("contain", " Newsletter : This email address is already registered.")
        .and("have.css", "background-color")
        .and('be.colored', '#f3515c');
        this.newsletterInput.should("have.value", "This email address is already registered.")
    }
}
// value="This email address is already registered."

// Newsletter : This email address is already registered.
export default new newsletterPage
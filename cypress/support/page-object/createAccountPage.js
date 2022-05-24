import chaiColors from 'chai-colors';
import { faker } from '@faker-js/faker';

chai.use(chaiColors);

const name = "John";
const surname = "Secundo";

class createAccountPage {

    get signIn() {
        return cy.get("a").parents(".header_user_info");
    }

    get emailAdressInput() {
        return cy.get("#email_create");
    }

    get submitCreate() {
        return cy.get("#SubmitCreate");
    }
    // Your personal information
    get titleMr() {
        return cy.get("#id_gender1");
    }
    
    get gender() {
        return cy.get('input[name="id_gender"]');
    }
    get titleMrs() {
        return cy.get("#id_gender1");
    }
    
    get firstName() {
        return cy.get("#customer_firstname");
    }

    get lastName() {
        return cy.get("#customer_lastname");
    }

    get email() {
        return cy.get("#email");
    }

    get password() {
        return cy.get("#passwd");
    }

    get birthDay() {
        return cy.get("#days");
    }

    get birthMonth() {
        return cy.get("#months");
    }

    get birthYear() {
        return cy.get("#years");
    }

    get newsletterCheckbox() {
        return cy.get("#newsletter");
    }

    get offersCheckbox() {
        return cy.get("#optin");
    }

    //Your address

    get addressFirstName() {
        return cy.get("#firstname");
    }

    get addressLastName() {
        return cy.get("#lastname");
    }

    get company() {
        return cy.get("#company");
    }

    get address1() {
        return cy.get("#address1");
    }

    get address2() {
        return cy.get("#address2");
    }

    get city() {
        return cy.get("#city");
    }

    get state() {
        return cy.get("#id_state");
    }

    get postalCode() {
        return cy.get("#postcode");
    }

    get country() {
        return cy.get("#id_country");
    }

    get additionalInfo() {
        return cy.get("#other");
    }

    get homePhone() {
        return cy.get("#phone");
    }

    get mobilePhone() {
        return cy.get("#phone_mobile");
    }

    get alias() {
        return cy.get("#alias");
    }

    get registerButton() {
        return cy.get("#submitAccount");
    }

    get finalMessage() {
        return cy.get(".info-account");
    }

    InputEmail(email) {
        this.emailAdressInput
        .type(email)
        .should("have.value", email);
        this.submitCreate
        .click();
    }

    goToRegistration() {
        this.signIn.should("contain", "Sign in");
        this.signIn.click();
    }

    fillCreateAccount(title) {
        // Fills personal information

         this.gender.then(gen => {
            if(title == "Mr")
                cy.get(gen).eq(0).check().should("be.checked");
            else
                cy.get(gen).eq(1).check().should("be.checked");
            })
        this.firstName.type(name);
        this.lastName.type(surname);
        this.password.type("12345");
        this.birthDay.select(1);
        this.birthMonth.select(1);
        this.birthYear.select(1);
        this.newsletterCheckbox.check();
        this.offersCheckbox.check();

        //Fills address information
        this.company.type("Test");
        this.address1.type("12 Sunny Street, apartment 20");
        this.address2.type("13 Raining Street, apartment 21")
        this.city.type("Chicago");
        this.state.select("Illinois");
        this.postalCode.type("12345");
        this.additionalInfo.type("Random message for test");
        this.homePhone.type("123456789");
        this.mobilePhone.type("987654321");
    }

    isCorrect(email) {
        //Checks your personal information
        this.titleMr
        .should("be.checked");

        this.firstName
        .should("have.css", "color")
        .and("be.colored", "#35b33f");

        this.lastName
        .should("have.css", "color")
        .and("be.colored", "#35b33f");

        this.email
        .should("have.value", email);

        this.password
        .should("have.value", "12345")
        .and("have.css", "color")
        .and("be.colored", "#35b33f");

        this.birthDay
        .should("contain", "1");

        this.birthMonth
        .should("contain", "January");

        this.birthYear
        .should("contain", "2022");

        this.newsletterCheckbox
        .should("be.checked");

        this.offersCheckbox
        .should("be.checked");

        //Checks your address information

        this.addressFirstName
        .should("have.value", name);

        this.addressLastName
        .should("have.value", surname);

        this.company
        .should("have.value", "Test");

        this.address1
        .should("have.value", "12 Sunny Street, apartment 20");

        this.address2
        .should("have.value", "13 Raining Street, apartment 21");

        this.city
        .should("have.value", "Chicago");

        this.state
        .should("contain", "Illinois");

        this.postalCode
        .should("have.value", "12345");

        this.country
        .should("contain", "United States");

        this.additionalInfo
        .should("have.value", "Random message for test");

        this.homePhone
        .should("have.value", "123456789");

        this.mobilePhone
        .should("have.value", "987654321");

        this.alias
        .should("have.value", "My address");

    }

    endRegister() {
        this.registerButton.click();
        this.finalMessage
        .should("contain", "Welcome to your account. Here you can manage all of your personal information and orders.");
    }



}

export default new createAccountPage
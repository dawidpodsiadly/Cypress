import chaiColors from 'chai-colors';
import { faker } from '@faker-js/faker';

chai.use(chaiColors);

var firstNameFaker = faker.name.firstName();
 //Personal information
 var lastNameFaker = faker.name.lastName();
 var passwordFaker = faker.internet.password();
 var emailFaker = faker.internet.email();
// Address information
var companyFaker = faker.company.companyName();
var address1Faker = faker.address.streetAddress();
var address2Faker = faker.address.streetAddress();
var cityFaker = faker.address.cityName();
var stateFaker = faker.address.state();
var postalCodeFaker = faker.address.zipCode("#####");
var messageInfoFaker = faker.random.words();
var homePhoneFaker = faker.phone.phoneNumber("###-###-###");
var mobilePhoneFaker = faker.phone.phoneNumber("###-###-###");

class registerAccountPage {

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

    //Your address information

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

    generateFakerData() {
     //Personal information
    firstNameFaker = faker.name.firstName();
    lastNameFaker = faker.name.lastName();
    passwordFaker = faker.internet.password();
    emailFaker = faker.internet.email();

    // Address information
    companyFaker = faker.company.companyName();
    address1Faker = faker.address.streetAddress();
    address2Faker = faker.address.streetAddress();
    cityFaker = faker.address.cityName();
    stateFaker = faker.address.state();
    postalCodeFaker = faker.address.zipCode("#####");   
    messageInfoFaker = faker.random.words();
    homePhoneFaker = faker.phone.phoneNumber("###-###-###");
    mobilePhoneFaker = faker.phone.phoneNumber("###-###-###");
    }

    goToRegistration() { 
        this.signIn.should("contain", "Sign in");
        this.signIn.click();
    }

    inputEmail() {
        this.emailAdressInput
        .type(emailFaker)
        .should("have.value", emailFaker);
        this.submitCreate
        .click();
    }

    inputTakenEmail() {
        this.emailAdressInput
        .type("test@gmail.com")
        .should("have.value", "test@gmail.com");
        this.submitCreate
        .click();
        
        cy.wait(4000);

        cy.get("li").parents("#create_account_error").find("li").first()
        .should("contain", "An account using this email address has already been registered. Please enter a valid password or request a new one. ");
    }

    fillCreateAccount(title, bDay, mDay, yDay, ifNewsletter, ifOffers) {

        // Fills personal information
         this.gender.then(gen => {
            if(title == "Mr") {
                cy.get(gen).eq(0).check().should("be.checked");
                cy.get(gen).eq(1).should("not.be.checked");
            }
            else {
                cy.get(gen).eq(1).check().should("be.checked");
                cy.get(gen).eq(0).should("not.be.checked");
            }
            })

        this.firstName.type(firstNameFaker);
        this.lastName.type(lastNameFaker);
        this.password.type(passwordFaker);
        this.birthDay.select(bDay);
        this.birthMonth.select(mDay);
        this.birthYear.select(yDay);

        this.newsletterCheckbox.then(checkbox => {
            if(ifNewsletter == true)
                cy.get(checkbox).check().should("be.checked");
            else
                cy.get(checkbox).should("not.be.checked");
        })
    
        this.offersCheckbox.then(checkbox => {
            if(ifOffers == true)
                cy.get(checkbox).check().should("be.checked");
            else
                cy.get(checkbox).should("not.be.checked");
        })

        //Fills address information
        this.company.type(companyFaker);
        this.address1.type(address1Faker);
        this.address2.type(address2Faker)
        this.city.type(cityFaker);
        this.state.select(stateFaker);
        this.postalCode.type(postalCodeFaker);
        this.additionalInfo.type(messageInfoFaker);
        this.homePhone.type(homePhoneFaker);
        this.mobilePhone.type(mobilePhoneFaker);
    }

    fillDemandingDataOnly() {
        // Fills personal information
        this.firstName.type(firstNameFaker).should("have.value", firstNameFaker);
        this.lastName.type(lastNameFaker).should("have.value", lastNameFaker);
        this.password.type(passwordFaker).should("have.value", passwordFaker);

        //Fills address information
        this.address1.type(address1Faker).should("have.value", address1Faker);
        this.city.type(cityFaker).should("have.value", cityFaker);
        this.state.select(stateFaker).should("contain", stateFaker);
        this.postalCode.type(postalCodeFaker).should("have.value", postalCodeFaker);
        this.mobilePhone.type(mobilePhoneFaker).should("have.value", mobilePhoneFaker);
    }

    isCorrect(title, bDay, mDay, yDay, ifNewsletter, ifOffers) {
        //Checks your personal information
        this.firstName
        .should("have.css", "color")
        .and("be.colored", "#35b33f");

        this.lastName
        .should("have.css", "color")
        .and("be.colored", "#35b33f");

        this.email
        .should("have.value", emailFaker);

        this.password
        .should("have.value", passwordFaker)
        .and("have.css", "color")
        .and("be.colored", "#35b33f");

        this.birthDay
        .should("contain", bDay);

        this.birthMonth
        .should("contain", mDay);

        this.birthYear
        .should("contain", yDay);

        //Checks your address information

        this.addressFirstName
        .should("have.value", firstNameFaker);

        this.addressLastName
        .should("have.value", lastNameFaker);

        this.company
        .should("have.value", companyFaker);

        this.address1
        .should("have.value", address1Faker);

        this.address2
        .should("have.value", address2Faker);

        this.city
        .should("have.value", cityFaker);

        this.state
        .should("contain", stateFaker);

        this.postalCode
        .should("have.value", postalCodeFaker);

        this.country
        .should("contain", "United States");

        this.additionalInfo
        .should("have.value", messageInfoFaker);

        this.homePhone
        .should("have.value", homePhoneFaker);

        this.mobilePhone
        .should("have.value", mobilePhoneFaker);

        this.alias
        .should("have.value", "My address");

    }

    checkErrors() {
        this.registerButton.click();
        cy.get("p").parents(".alert-danger").find("p").first().then(err => {
            expect(err).to.have.prop("outerText", "There are 8 errors");
        })

        cy.get(".alert-danger").find("li").then(num => {
            expect(num).to.have.length(8);
        })
    }

    endRegister() {
        this.registerButton.click();
        this.finalMessage
        .should("contain", "Welcome to your account. Here you can manage all of your personal information and orders.");
    }
}

export default new registerAccountPage
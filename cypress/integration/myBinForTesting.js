/// <reference types = "cypress" />
import createAccountPage from "../support/page-object/createAccountPage"
import { faker } from '@faker-js/faker';

describe("E2E - Register account", () => {

        const email = faker.internet.email();
    it("Creates new account", () => {
        cy.visit("/");
        createAccountPage.goToRegistration();
        createAccountPage.InputEmail(email);
        cy.wait(7000);
        
        const flag = "Mrs"; 

        createAccountPage.fillCreateAccount("Mrs");
        //createAccountPage.InputEmail("Mr");
        //cy.get('input[name="id_gender"]').then((test) => {
       // if(flag == "Mr")
        //    cy.get(test).eq(0).check().should("be.checked");
      //  else 
         //   cy.get(test).eq(1).check().should("be.checked");
    
           //// if(flag == 1)
               //cy.get(dupa).check();
         //   else
               // cy.get("#id_gender1").check();
       // })
    })
})
/// <reference types = "cypress" />

describe("E2E - Home Page", () => {
    it("Looks for the product", () => {

        const lookTime = 1000; // Time for my eye

        cy.visit("/");

        //searchs and clicks the product
        cy.get("#search_query_top").type("Dress{enter}");
        cy.get("li").parents(".product_list").find("li").eq(0).click();
        cy.get("#color_20").click();

        //Adds then substracts quantity
        cy.get("span").parents("#quantity_wanted_p").find("span").eq(1).click();
        cy.get("span").parents("#quantity_wanted_p").find("span").eq(0).click();

        //Tries all sizes
        cy.get("#group_1").select("L").wait(lookTime);
        cy.get("#group_1").select("M").wait(lookTime);
        cy.get("#group_1").select("S").wait(lookTime);

        //Tries all colors
        cy.get("#color_11").click().wait(lookTime);
        cy.get("#color_13").click().wait(lookTime);
        cy.get("#color_16").click().wait(lookTime);
        cy.get("#color_14").click().wait(lookTime);

        //'Add to cart' window
        cy.get("span").parents("#add_to_cart",{ timeout: 20000 }).click();
        cy.get("span").parents("#layer_cart",{ timeout: 20000 }).find("span").eq(0).click();
        cy.get("span").parents("#add_to_cart",{ timeout: 20000 }).click();
        cy.get('[title="Close window"]').should('be.visible',{ timeout: 20000 }).click();
        cy.get("span",).parents("#add_to_cart",{ timeout: 20000 }).click();

        //'Summary'' window
        cy.get("span").contains("Proceed to checkout",{ timeout: 20000 }).should('be.visible').click();
        cy.get("span").parents(".standard-checkout").click();

        //'Sign in' window
        cy.get("#email_create").type("automation.cypress@interia.pl");
        cy.get("#SubmitCreate").click();

        //'Sign in', create account window

        


    })
})
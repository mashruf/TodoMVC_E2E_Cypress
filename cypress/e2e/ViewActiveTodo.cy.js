/// <reference types="cypress" />

describe("View active todo",()=>{

    before("",()=>{
        cy.visitWebsite();
    })

    it("Should show the active todo",()=>{
        cy.get(".new-todo").type("Todo 1{enter}");
        cy.get(".view").should("contain","Todo 1");
        cy.get(".new-todo").type("Todo 2{enter}");
        cy.get(".view").should("contain","Todo 2"); 
        cy.get(".view").find(".toggle").eq(0).should("be.exist").click();
        cy.get(".todo-count").should("contain","1 item left!");
        cy.get(".filters>li:nth-child(2)").click();
        cy.get(".view").should("contain","Todo 2");   
    })

})
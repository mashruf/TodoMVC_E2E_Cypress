/// <reference types="cypress" />

describe("Unmark Todo",()=>{

    before("",()=>{
        cy.visitWebsite();
        cy.get(".new-todo").type("New todo{enter}");
        cy.get(".view").should("contain","New todo");
    })

    it("Should unmark a complete todo",()=>{
        cy.get(".view").find(".toggle").should("be.exist").click();
        cy.get(".todo-count").should("contain","0 items left!");
        cy.get(".view").find(".toggle").should("be.exist").click();
        cy.get(".todo-count").should("contain","1 item left!");


    })
    
})
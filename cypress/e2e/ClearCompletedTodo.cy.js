/// <reference types="cypress" />

describe("Clear complete todo",()=>{
    before("",()=>{
        cy.visitWebsite();
    })

    it("Should clear a complete todo",()=>{
        cy.get(".new-todo").type("New todo{enter}");
        cy.get(".view").should("contain","New todo");
        cy.get(".view").find(".toggle").should("be.exist").click();
        cy.get(".todo-count").should("contain","0 items left!");
        cy.get(".clear-completed").click();
        cy.get(".todo-count").should("not.be.exist");
    })
})
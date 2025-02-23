/// <reference types="cypress" />

describe("Mark todo",()=>{
    before("",()=>{
        cy.visitWebsite();
    })

    it("Should mark a todo as completed",()=>{
        cy.get(".new-todo").type("New todo{enter}");
        cy.get(".view").should("contain","New todo");
        cy.get(".view").find(".toggle").should("be.exist").click();
        cy.get(".todo-count").should("contain","0 items left!");
    })
})
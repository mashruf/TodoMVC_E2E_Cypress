/// <reference types="cypress" />

describe("Todos persistance after reload",()=>{
    before("",()=>{
        cy.visitWebsite();
    })

    it("Todos should be removed after reload",()=>{
        cy.get(".new-todo").type("Todo 1{enter}");
        cy.get(".new-todo").type("Todo 2{enter}");
        cy.reload();
        cy.get(".view").should("not.be.exist");

    })
})
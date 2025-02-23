/// <reference types="cypress" />

describe("Edit existing todo",()=>{
    before("",()=>{
        cy.visitWebsite();
    })

    it("Should edit a existing todo",()=>{
        cy.get(".new-todo").type("New todo{enter}");
        cy.get(".view").should("contain","New todo");
        cy.get(".view").dblclick().
        find("input[type='text']").clear().type("Edited todo{enter}");
        cy.get(".view").should("contain","Edited todo");
    })
})
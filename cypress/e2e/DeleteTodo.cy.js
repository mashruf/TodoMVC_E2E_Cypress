/// <reference types="cypress" />

describe("Clear complete todo",()=>{
    before("",()=>{
        cy.visitWebsite();
    })

    it("Should clear a complete todo",()=>{
        cy.get(".new-todo").type("New todo{enter}");
        cy.get(".view").should("contain","New todo");
        cy.get(".view").find(".destroy").should("be.exist").click({force:true});
        cy.get(".todo-count").should("not.be.exist");
    })
})
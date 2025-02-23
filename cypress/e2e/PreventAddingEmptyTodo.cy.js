/// <reference types="cypress" />

describe("Prevent adding empty todo",()=>{
    before("",()=>{
        cy.visitWebsite();
    })

    it("Should prevent adding empty todo",()=>{
        cy.get(".new-todo").type("{enter}");
        cy.get(".view").should("not.be.exist");

    })
})
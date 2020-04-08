/// <reference types='Cypress'/>
describe("signatory documents",function(){
    it("create_document",function(){
        cy.visit("https://rocketship.shr-proto0.com")
        cy.wait(8000)
        cy.login("manasa+01@trysapling.com","admin@123")
        cy.signatory_doc()
    })
})
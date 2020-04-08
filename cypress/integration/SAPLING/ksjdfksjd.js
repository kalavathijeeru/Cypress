/// <reference types='Cypress'/>
describe("functionlk",function(){
    it("lodjf",function(){
        cy.task('recordHar')
        cy.visit("https://rocketship.shr-proto0.com")
        cy.task('saveHar')
        cy.task('recordHar')
        cy.login('manasa+01@trysapling.com','admin@123')
        cy.task('saveHar')

    })
})
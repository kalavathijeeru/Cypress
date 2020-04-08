/// <reference types = 'Cypress'/>
describe("har generating files",function(){
    // beforeEach(() => {
    //     //cy.task('removeHar');
    //     cy.task('recordHar');
    //   });
    //   after(() => cy.task('saveHar'));
    it("login",function(){
        //cy.task('removeHar');
        cy.task('recordHar');
        cy.visit("https://rocketship.shr-proto0.com")
        //cy.wait(8000)
        
        cy.login('manasa+01@trysapling.com','admin@123')
        //cy.wait(10000)
        cy.task('saveHar')
        
        //cy.task('removeHar');
        cy.task('recordHar');
        //cy.get('#onboard_people').click()
        cy.visit('https://rocketship.shr-proto0.com/#/people')
        //cy.wait(5000)
        cy.task('saveHar')
        //cy.task('removeHar');
        // cy.task('recordHar');
        // cy.xpath('//span[contains(text(),"Home")]').click()
        // cy.task('saveHar')
    })
})
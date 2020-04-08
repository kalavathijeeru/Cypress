/// <reference types='Cypress'/>
describe("bypass login page",function(){
    it("loginpage",function(){
        cy.server()
        
        cy.visit("https://rocketship.shr-proto0.com")
        cy.login('manasa+01@trysapling.com','admin@123')
        cy.wait(10000)
        cy.request('https://rocketship.shr-proto0.com/api/v1/auth/sign_in?').as('loginbypass')
        //cy.wait('@loginbypass')
        cy.get('@loginbypass').should((xhr)=> {
            expect(xhr.status).to.eq(200)
            expect(xhr.uid).to.eq('manasa+01@trysapling.com')
            //expect(xhr).to.have.property('uid')
        })
        //loginbypass.its('status').should('equal',200)
        
    })
    // it("documents",function(){
    //     cy.visit("https://rocketship.shr-proto0.com/#/admin/activities/documents")
    
    
    // })
})
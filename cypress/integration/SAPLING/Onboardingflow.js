/// <reference types='Cypress' />
describe("onboarding",function(){
    before(function(){
        cy.fixture("sapling_credentials").then((data)=>{
            this.data=data
        })
        cy.fixture("Onboarding").then((data)=>{
            this.data2=data
        })
    })
    it("validating the functions",function(){
        cy.visit("https://rocketship.shr-proto0.com/")
        cy.login(this.data.uid,this.data.pwd)
        cy.Navigate_to_dashboard()
        //clicking on onboard hire button
        cy.get('.md-raised.btn-dashboard-onboard.md-button.md-default-theme.md-ink-ripple').should('have.attr','href','#/admin/onboard').click()
        cy.Validate_CreateProfile(this.data2.firstname,this.data2.lastname,this.data2.Personalemail,this.data2.jobtitle,this.data2.jobtitle,this.data2.startdate)
        cy.Confirm_Info()

    })
})
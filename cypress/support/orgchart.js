/// <reference types='Cypress' />
describe("orgchart_functionality",function(){
    it("org_chart_functionalities",function(){
        cy.visit("https://rocketship.shr-proto0.com")
        cy.login("manasa+01@trysapling.com","admin@123")
        cy.wait(6000)
        cy.navigate_to_org_chart_page()
        //cy.Zoom_functionality()
        cy.share_button()
    })
})

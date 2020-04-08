/// <reference types = 'Cypress'/>
describe("admin",function(){
    it("login function",function(){
        cy.visit("https://rocketship.shr-test.com/admin/login")
        cy.get('#admin_user_email').type('admin@example.com')
        cy.get('#admin_user_password').type('password')
        cy.xpath('//input[@name="commit"]').click()
    })
})
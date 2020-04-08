/// <reference types='Cypress' />
describe("login_page",function(){
    // beforeEach(function(){
    //     //cy.exec('npm run db:reset && npm run db:seed')
    //     cy.visit('http://www.payvoo.tk/#/index/login/personal')
    //     // cy.request({
    //     //     method: 'POST',
    //     //     url: 'http://service.payvoo.tk:5000/service/user/login', // baseUrl is prepended to url
    //     //     form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
    //     //     body: {
    //     //       userId: "kjeeru@incrivelsoft.com",
    //     //       password: "Test1234",
    //     //       account_type: "personal"
    //     //     }
    //     //   })
    //     cy.get('input[formcontrolname="userId"]').type('kjeeru@incrivelsoft.com')
    //     cy.get('input[formcontrolname="password"]').type('Test1234')
    //     cy.get('.btn.btn-primary.btn-block').click()
    //     cy.wait(8000)
    //})
    it("login to the programtically",function(){
        // cy.request('POST', 'http://service.payvoo.tk:5000/service/user/login')

        // //})
        // cy.visit('http://www.payvoo.tk/#/home/individual-settings/general-details')
        cy.visit('https://rocketship.shr-proto0.com')
        cy.wait(20000)
        cy.get('input[name="email"]').type('manasa+01@trysapling.com')
    })
})
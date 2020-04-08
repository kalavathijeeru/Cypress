import { type } from "os";

describe("updates page",function(){
    var token
    var userid
    var options
    // it("validating apis",function(){
    //     cy.access_tokens_usid()
    //     // cy.visit('https://rocketship.shr-proto0.com/')
    //     // cy.get('#input_0').type('manasa+01@trysapling.com')
    //     // cy.get('#input_1').type('admin@123')
    //     // cy.get('.sapling-primary > .ng-binding').click()
    //     cy.wait(20000)
    //     cy.get('#onboard_people').click()
    //     cy.get('.dt-button').click()
    //     cy.get('input[name="first_name"]').type('name')
    //     cy.get('.md-toolbar-tools > .md-icon-button > .ng-scope').click()
        
    // })
    it('time off page',function(){
        //cy.login_api()
        cy.request('POST',
      'https://rocketship.shr-proto0.com/api/v1/auth/sign_in?',
      { "email":"manasa+01@trysapling.com",
      "password":"admin@123"})
      .then((response)=>{
        token = response.headers["access-token"]
        userid = response.headers['uid']
          cy.log(token)
          cy.log(userid)
      })
        options = {
            url: 'https://rocketship.shr-proto0.com/check_subdomain?',
            headers: {'access-token':token,'uid': userid}
          }
          cy.request(options)
          cy.log(token)
          options = {
            url: 'https://rocketship.shr-proto0.com/assets/locales/auth.en.json?',
            headers: {'access-token':token,'uid': userid}
          }
          cy.request(options)
          cy.log(token)
          options = {
            url: 'https://rocketship.shr-proto0.com/#/people',
            headers: {'access-token':token,'uid': userid}
          }
          cy.visit(options)


    })
})
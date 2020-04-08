/// <reference types='Cypress'/>
describe("access token",function(){
  let access_tokens
  let userid
    it("going to time off page",function(){
      cy.access_tokens_usid()
        cy.visit('https://rocketship.shr-proto0.com')
        cy.login('manasa+01@trysapling.com','admin@123')
        cy.wait(20000)
        cy.get('#onboard_people').click()
        cy.get('.dt-button').click()
        cy.get('input[name="first_name"]').type('name')
        cy.get('.md-toolbar-tools > .md-icon-button > .ng-scope').click()
        /*cy.get('.full-name').click()
        cy.xpath("//span[contains(text(),'Sign Out')]").click()
        cy.wait(10000)*/
        // cy.visit('https://rocketship.shr-proto0.com/#/time_off/22')
        //cy.visit('https://rocketship.shr-proto0.com/#/time_off/22'
      //,{headers:{access_tokens}},{headers:{userid}})
        
        

      })
    
    it("timeoff",function(){
      cy.visit('https://rocketship.shr-proto0.com')
        cy.login('manasa+01@trysapling.com','admin@123')
        cy.wait(20000)
      //cy.access_tokens_usid()
      // cy.wait(10000)
      cy.visit('https://rocketship.shr-proto0.com/#/time_off/22')
      //,{headers:{access_tokens}},
      //{headers:{userid}})
      //cy.wait(10000)
        //cy.log(access_tokens)
        //cy.log(userid)

    })
})
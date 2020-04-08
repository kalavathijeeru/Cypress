/// <reference types='Cypress'/>
describe("onboarding_flow",function(){
    before(function(){
        cy.fixture('sapling_credentials').then(function(data){
            this.data=data

        })
        cy.fixture('onboardhire_profile').then(function(profile){
          this.profile=profile
        })
    })
    it("onboardhire",function(){
        cy.visit("https://rocketship.shr-proto0.com/")
        //cy.get('.sapling-title').click()
        cy.login(this.data.uid,this.data.pwd)
        cy.get('.dashboard-nav > .ms-navigation-item > .ms-navigation-button').click()
        //cy.get('.dashboard-nav > .ms-navigation-item > .ms-navigation-button')
        cy.log("clicked on dashboard icon")
        cy.contains('ONBOARD HIRE').click()
        cy.get('#input_59').type(this.profile.firstname)
        //cy.get('#input_60')
        cy.get('#input_60').type(this.profile.lastname)
        cy.get('#input_61').type(this.profile.personal_email)
        //cy.get('#select_value_label_87 > :nth-child(1)').click()
        //cy.contains('Personal Email Only').click({force:true})

        cy.get('#input-74').type('QA Engineer').type('{enter}')
       // cy.get('.md-datepicker-input-container').click()
        cy.get('#date > .md-datepicker-button').click()
        
        cy.get('#md-0-month-1880-0-6 > .md-calendar-date-selection-indicator').click()
        cy.get('#submit').click()
        cy.get('#save_employee_record').click()
        
        
        

        
      })
     
})
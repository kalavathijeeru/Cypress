/// <reference types='Cypress' />
//import Homepage from '../support/objects'
describe("checking methods",function(){
    before(function(){
        cy.fixture('sapling_credentials').then(function(data){
            this.data=data
        })
        cy.fixture('add_team member').then(function(data1){
            this.data1=data1
        })
        
    })
    it("methods are",function(){
        cy.visit("https://rocketship.shr-proto0.com")
        //cy.wait(10000)
        cy.get('.sign-in-with-email.ng-scope',{timeout:8000}).click()
        cy.login(this.data.uid,this.data.pwd)
        //clicking on people page
        cy.get('#onboard_people',{timeout:8000}).click()
        //cy.adding_team_member(this.data1.firstname,this.data1.lastname,this.data1.title,this.data1.company_mail,this.data1.personal_mail)
        
        // cy.individual_document()
        // cy.documentpacket()
        // cy.workflows()
        // cy.members_count()
        // cy.request_information()
        // cy.changemanager()
         cy.poweredit()
        // cy.sendinvite()
        
        // cy.delete_from_sapling()
        // cy.fileteing()
    })
})
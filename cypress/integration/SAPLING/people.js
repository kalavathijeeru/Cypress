/// <reference types='Cypress'/>
describe("people_page",function(){
    before(function(){
        cy.fixture('sapling_credentials').then(function(data){
            this.data=data
        })
        cy.fixture('add_team member').then(function(data1){
            this.data1=data1
        })

    })
    
    it("people",function(){
        //login to application
        cy.visit('https://rocketship.shr-proto0.com')
        cy.login(this.data.uid,this.data.pwd)
        cy.wait(10000)
        //click on "Add Team Member"
        //method in peoplepage_method.js
        cy.adding_team_member(this.data1.firstname,this.data1.lastname,this.data1.title,this.data1.company_mail,this.data1.personal_mail)
        if('Email already in use'){
            //clicking in into button which is belong to add team member[*]
            cy.get('.md-toolbar-tools > .md-icon-button > .ng-scope').click()
            //clicking in search bar which is present on peoples page

            //**Assigning individual document to user */
            cy.individual_document()//method in peoplepage_method.js
            //**Assigning document packet to particular user */
            cy.documentpacket()//method in peoplepage_method.js
            //**Assigning work flows to user */
            cy.workflows()//method in peoplepaga_method.js
            
        }
        else{
            cy.get('input[name="people_search"]').type('tester')
            cy.wait(5000)
            //click on checkbox
            cy.get('#row-checkbox').click()
            //**Assigning individual document to user */
            cy.individual_document()//method in peoplepage_method.js
            //**Assigning document packet to particular user */
            cy.documentpacket()//method in peoplepage_method.js
            //**Assigning work flows to user */
            cy.workflows()//method in peoplepaga_method.js
            

        }
        


    })
})
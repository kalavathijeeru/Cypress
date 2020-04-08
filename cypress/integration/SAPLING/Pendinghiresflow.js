/// <reference types='Cypress' />
describe("pendinghires",function(){
    before(function(){
        cy.fixture("sapling_credentials").then((data)=>{
            this.data=data
        })
        cy.fixture("Pendinghires").then((data)=>{
            this.data2=data
        })
        cy.fixture("Onboarding").then((data)=>{
            this.data3=data
        })
    })
    it("validate_pendinghires",function(){
        cy.visit("https://rocketship.shr-proto0.com/")
        cy.login(this.data.uid,this.data.pwd)
        cy.navigate_to_pendinghires()
        //cy.members_count(this.data2.peoplecount,this.data2.datatable_count)
        //cy.validating_searchbar1(this.data2.valid_search_data)
        //cy.validate_checkbox_dropdownlist()
        //cy.members_count(this.data2.peoplecount,this.data2.datatable_count)
        // cy.validate_continue_button(this.data2.searchuser,this.data2.user_onboard)
        // cy.Confirm_Info()
        // cy.Assign_paperwork(this.data3.select_document,this.data3.select_packet)
        // cy.Schedule_emails(this.data3.template)
        cy.Validate_ONBOARDNEWHIRE(this.data3.firstname,this.data3.lastname,this.data3.Personalemail,this.data3.jobtitle,this.data3.jobtitle,this.data3.startdate,this.data3.select_document,this.data3.select_packet,this.data3.template)


    })
})
/// <reference types='Cypress' />
describe("SD-6701",function(){
    before(function(){
        cy.fixture("sapling_credentials").then((data)=>{
            this.data=data
        })
        cy.fixture("Individual_doc").then((data)=>{
            this.data2=data
        })
    })
    it("Combine Add flows",function(){
        cy.visit("https://rocketship.shr-proto0.com")
        cy.login(this.data.uid,this.data.pwd)
        //cy.navigate_to_documents_Tab()
        cy.individual_documents(this.data2.name,this.data2.description)
    })
})
///<reference types ='Cypress'/>
describe("functionalities",function(){
    before(function(){
        cy.fixture('sapling_credentials').then(function(data){
            this.data=data
        })
        cy.fixture('add_team member').then(function(data1){
            this.data1=data1
        })

    })
    it("people count",function(){
        cy.visit("https://rocketship.shr-proto0.com")
        cy.wait(8000)
        cy.login('manasa+01@trysapling.com','admin@123')
        cy.wait(10000)
        cy.get('#onboard_people').click()
        cy.wait(5000)
        //cy.members_count()
       // cy.get('input[name="people_search"]').type('tester')
       // cy.wait(5000)
        //cy.get('#row-checkbox').click()
        //cy.request_information()
        cy.xpath('//span[contains(text(),"Home")]').click()

    })

})
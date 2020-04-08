/// <reference types='Cypress' />
describe("SD-6711",function(){
    before(function(){
        cy.fixture('sapling_credentials').then(function(data){
            this.data=data
        })
    })
    it("Documents accepting",function(){
        cy.visit("https://rocketship.shr-proto0.com")
        //cy.wait(10000)
        //cy.get('.sign-in-with-email.ng-scope',{timeout:8000}).click()
        cy.login(this.data.uid,this.data.pwd)
        cy.wait(8000)
        cy.navigate_to_documents_Tab()
        //cy.wait(10000)
        //Verifying data present on each tab
        //verifying the data on individual tab/onboarding
        cy.tabs_switching()
        // cy.get('.md-tab.ng-scope.ng-isolate-scope.md-ink-ripple.md-active')
        // cy.get('.md-tab.ng-scope.ng-isolate-scope.md-ink-ripple')
        
        cy.documentspackets()
        // cy.get('md-tab-item').each(($el,index,$list)=>{
        //     if($el){
        //         $el.click()

        //     }
        // })

    })
})
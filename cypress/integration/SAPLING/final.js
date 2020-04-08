/// <reference types='Cypress' />

describe("kjdlfj",function(){
    var token
    beforeEach(function(){
        cy.visit("https://rocketship.shr-proto0.com")
        cy.request('POST',
        'https://rocketship.shr-proto0.com/api/v1/auth/sign_in?',
        { "email":"manasa+01@trysapling.com",
        "password":"admin@123"})
        .then((response)=>{
          token = response.headers['access-token']
          cy.log(token) 
    })
        
        })
        it("functiosdf",function(){
            // cy.wait('@loginheader')
            // cy.server()
            cy.visit({
                url: 'https://rocketship.shr-test.com/#/people',
                onRequest: xhr => {
                    xhr.setRequestHeader('access-token',token)
                }
            })
        })
})
describe("lkd",function(){
    it("iopp",function(){
        cy.visit("https://rocketship.shr-proto0.com")
        cy.request('POST',
        'https://rocketship.shr-proto0.com/api/v1/auth/sign_in?',
        { "email":"manasa+01@trysapling.com",
        "password":"admin@123"})
        .then((response)=>{
          var token = response.headers['access-token']
          cy.log(token)
          cy.server({
            headers: {
                'user': 'fgfty'
              }
        
        
            })
            cy.visit("https://rocketship.shr-proto0.com/")
        })
    })
})
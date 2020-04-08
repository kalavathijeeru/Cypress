Cypress.Commands.add("access_tokens_usid",(access_tokens,userid)=>{
    //cy.request('https://rocketship.shr-proto0.com/check_subdomain?')
      //cy.request('https://rocketship.shr-proto0.com/api/v1/companies/auth_current.json?')
      var token
      var userid
    
      cy.request('POST',
      'https://rocketship.shr-proto0.com/api/v1/auth/sign_in?',
      { "email":"manasa+01@trysapling.com",
      "password":"admin@123"})
      .then((response)=>{
        token = response.headers["access-token"]
        userid = response.headers['uid']
          cy.log(token)
          cy.log(userid)
      })
          

})

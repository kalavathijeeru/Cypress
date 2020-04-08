Cypress.Commands.add("localstoragecommands",()=>{
    var token
    var userid
    cy.request('POST',
      'https://rocketship.shr-proto0.com',
      { "email":"manasa+01@trysapling.com",
      "password":"admin@123"})
      .then((response)=>{
        token = response.headers["access-token"]
        userid = response.headers['uid']
        cy.setLocalStorage("storage", token);
          cy.log(token)
          cy.log(userid)
      })

})
Cypress.Commands.add("login1",()=>{
    cy.request({
        method: 'POST',
        url: 'https://rocketship.shr-proto0.com/api/v1/auth/sign_in?',
        body:{
          user:{
            email:'manasa+01@trysapling.com',
            password:'admin@123',
          }
        }
      })
      .then((resp) => {
        window.localStorage.setItem('storage1', resp.body.user.access-token)
      })
})
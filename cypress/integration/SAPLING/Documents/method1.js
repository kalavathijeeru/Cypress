/// <reference types='Cypress'/>
describe("method1function",function(){
    const loginpage="https://rocketship.shr-proto0.com"
    var loggedpage
    var cookie_values
    var pageURL
    before(function(){
        cy.server()
        cy.route('POST','https://rocketship.shr-proto0.com/api/v1/companies/auth_current.json?').as('loginurl')
        cy.visit(loginpage)
        //cy.clearCookie()
        cy.login('manasa+01@trysapling.com','admin@123')
        cy.url().should('contain','/#/login').then(url=>{
            loggedpage=url
            cy.log(url)
        })
        
        cy.getCookie('access-token').then(access-token=>{
            cookie_values=access-token
            cy.log(cookie_values)

        })


    })
//     cy.request('POST',
//   'https://rocketship.shr-proto0.com/api/v1/auth/sign_in?',
//   { "email":"manasa+01@trysapling.com",
//   "password":"admin@123"})
//   .then((response)=>{
//     var token = response.headers['access-token']
//     cy.log(token)
    it("accessing_peoplepage",function(){
        // cy.server({
        //     headers: {
        //         'access-token': 'abc-123-foo-bar'
        //       }
        
        //     })
        cy.request('https://rocketship.shr-proto0.com/api/v1/companies/current.json','')
        cy.setCookie('AWSALB','cookie_values')
        
        pageURL=loggedpage.replace('/#/login','/#/people')
        cy.visit(pageURL)

    })
        
})

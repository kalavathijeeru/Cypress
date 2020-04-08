/// <reference types='Cypress' />
describe("kjdlfj",function(){
    //var options
    var token
    // beforeEach(function(){
    //     cy.server();
    //     cy.route({
    //         url: 'https://rocketship.shr-test.com/api/v1/auth/sign_in',
    //         onRequest: xhr => {
    //             xhr.setRequestHeader('email', 'chaitanya+888@trysapling.com');
    //             xhr.setRequestHeader('password', 'admin@123');
    //         }
            

    //     })
    //     //cy.log(token)
    //     // .then((response)=>{
    //                 //   token = response.headers['access-token']
                      

    //     //})
    //     // cy.wait('@loginheader')
    //     // cy.visit("https://rocketship.shr-test.com/#/updates")

    // }).then((response)=>{
    //     token = response.headers['access-token']
    //     cy.log(token)
    // })
    it("lkjjj",function(){
        //    options = {
        //         url: 'https://rocketship.shr-test.com',
        //         auth:{
        
        //         'email': 'chaitanya+888@trysapling.com','password':'admin@123'
        //       }
        //     }
        //       cy.visit(options)
        //cy.visit({'url':'https://rocketship.shr-test.com/api/v1/auth/sign_in?',headers:{'uid': 'chaitanya+888@trysapling.com','password':'admin@123'}})
        // cy.contains('"uid":"chaitanya+888@trysapling.com"')
        
        // cy.visit('https://rocketship.shr-test.com');
        // cy.login('chaitanya+888@trysapling.com','admin@123')

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
        cy.route({
            url: 'https://rocketship.shr-test.com/#/people',
            onRequest: xhr => {
                xhr.setRequestHeader('access-token',token)
            }
        })
                        

        //cy.visit('')
    })
    
})
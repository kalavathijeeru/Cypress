// This is for method Login 
Cypress.Commands.add("login",(username,password)=>{
    
            cy.get('.navigation_page').scrollIntoView()
            cy.get('#email').type(username)
            cy.get('#passwd').type(password)
            cy.get('#SubmitLogin').click()
        
})
//Cypress.Commands.add("shippng_addr"=>
//){

//}
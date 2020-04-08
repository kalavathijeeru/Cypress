Cypress.Commands.add("login",(username,password)=>{
    
    cy.get('input[name="email"]',{timeout:15000}).type(username)
    cy.get('input[name="password"]').type(password)
    cy.xpath('//span[@class="ng-binding ng-scope"]').click()
})
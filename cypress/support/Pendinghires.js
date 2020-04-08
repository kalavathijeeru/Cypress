Cypress.Commands.add("navigate_to_pendinghires",()=>{
    cy.get('button[id="pending-hire-button"]',{timeout:10000}).click()
    cy.log("clicked on pending hire button")
})
Cypress.Commands.add('Validate_pendinghires',()=>{
    
})
//validating search bar with valid and invalid data.
Cypress.Commands.add("validating_searchbar",(valid_data)=>{
    cy.get('input[placeholder="Search"]',{timeout:6000}).clear().type(valid_data)
    cy.wait(5000)
    if(cy.get('tbody',{timeout:5000})){
        if(cy.get('tbody')){
            //tbody > :nth-child(1) > .pending-hire-name
            cy.get('.pending-hire-name',{timeout:5000}).each(($el,index,$list)=>{
                cy.log($el.text())
            })
        }
        else{
            if('No pending hires at the moment'){
                cy.log("no pending hire with the data")
            }
        }
    }

})
Cypress.Commands.add("validate_checkbox",(search_data)=>{
    //selecting multiple users
    cy.get('input[placeholder="Search"]',{timeout:6000}).clear().type(search_data)
    cy.wait(5000)
    cy.get('div[id="row-checkbox"]',{timeout:6000}).each(($el,index,$list)=>{
        if($el){
            $el.click()
        }
    })
    
})
Cypress.Commands.add("Removing_user_from_the_list",()=>{
    cy.validate_checkbox()
    cy.get('md-icon[aria-label="Open sample menu"]',{timeout:6000}).click()
    //Removing the user from the page
    cy.get('md-menu-content.md-default-theme>md-menu-item:nth-child(1),',{timeout:6000}).click()
    cy.get('button').contains('YES, CONTINUE').click()
    //counting the users again after deleting the user.
    cy.wait(5000)
    cy.get('input[placeholder="Search"]',{timeout:6000}).clear()

})
//Method for downloading report as CSV from the actions list
Cypress.Commands.add("downloading_as_CSVreport",()=>{
    cy.get('md-icon[aria-label="Open sample menu"]',{timeout:6000}).click()
    //Removing the user from the page
    cy.get('md-menu-content.md-default-theme>md-menu-item:nth-child(2)',{timeout:6000}).click()
    cy.wait(5000)
    cy.get('input[placeholder="Search"]',{timeout:6000}).clear()
})
//Validating the "NEXT" and "PREVIOUS" button
Cypress.Commands.add('validate_next_and_previous_button',()=>{


})
//Validating CONTINUE button in pending hires page
Cypress.Commands.add("validate_continue_button",(user,user_onboard)=>{
    cy.get('input[placeholder="Search"]').clear().type(user)
    cy.wait(5000)
    cy.get('.pending-hire-name',{timeout:5000}).each(($el,index,$list)=>{
        cy.log(`${user_onboard}`)
        if($el.text() == `${user_onboard}`){
            cy.get('button').contains('CONTINUE').click()

        }
    })
})
//validating ONBOARD NEW HIRE button
Cypress.Commands.add('Validate_ONBOARDNEWHIRE',(first_name,last_name,personal_email,job_title,jobtitle,startdate,select_document,select_packet,template)=>{
    //clicking on 'ONBOARD NEW HIRE' button
    cy.get('.dt-button',{timeout:6000}).click()
    cy.wait(6000)
    cy.Validate_CreateProfile(first_name,last_name,personal_email,job_title,jobtitle,startdate)
    cy.wait(6000)
    cy.Confirm_Info()
    cy.wait(5000)
    cy.Assign_paperwork(select_document,select_packet)
    cy.wait(4000)
    cy.Schedule_emails(template)


})
//Validating START button in pending hires page
Cypress.Commands.add("Validate_START_button",()=>{

})

Cypress.Commands.add("Navigate_to_dashboard",function(){
    //navigating to dashboard page
    cy.get('a[aria-label="Dashboard"]',{timeout:10000}).click()

})
Cypress.Commands.add("Validate_CreateProfile",(first_name,last_name,personal_email,job_title,jobtitle,startdate)=>{
    //filling the page of "CREATE PROFILE"

    //filling the profile information
    cy.get('input[name="first_name"]',{timeout:4000}).type(first_name)
    cy.get('input[name="last_name"]').type(last_name)
    cy.get('input[name="personal_email"]').type(personal_email)
    //cy.get('input[name="email"]').type('manasa+112@trysapling.com')

    // filling the Role information
    cy.get('input[aria-label="Job Title *"]').type(job_title)
    cy.contains(`${jobtitle}`).click()
    cy.get('md-datepicker[id="date"]').click()
    cy.get('td[aria-label= "' + startdate + '"]').click()

    //filling Smart Assignment
    //if(cy.get('md-switch').isTrue(true,'execute below statements')){
        cy.get('input[name="location"]').click()
        cy.contains('London').click()
        cy.get('input[name="employee_type"]').click()
        cy.contains('Full Time').click()
        cy.get('input[name="team"]').click()
        cy.contains('Product').click()
    //}
    if(cy.get('button[id="submit"]',{timeout:4000}).should('be.enabled')){
        cy.get('button[id="submit"]',{timeout:4000}).click()
        cy.log("Create profile filled successfully and moved to the next Confirm info")
    }
    else{
        cy.log('Please fill all the mandatory fields')
    }
})
Cypress.Commands.add("Confirm_Info",()=>{
    //filling the fields of Information to be collected
    //Selecting option from the dropdown
    
    // if(cy.get('button[aria-label="Select Template"]').contains('Default profile template')){
    //     cy.log('nothing to be execute')

    // }
    // else{
    //     cy.log("select template as Nothing required")
    // }
    cy.get('button[aria-label="Select Template"]',{timeout:6000}).click()
    //cy.get('button').contains('Nothing required').click()
    cy.get('md-menu-content.md-default-theme > :nth-child(2) > .md-button').click()
    cy.get('button[id="save_employee_record"]').click()   //clicking on save and continue button.
    
})
Cypress.Commands.add("Assign_paperwork",(select_document,select_packet)=>{
    cy.get('input[aria-label="Select Existing Documents"]',{timeout:8000}).click()
    cy.contains(`${select_document}`).click()
    cy.get('input[aria-label="Select Existing Packet"]',{timeout:6000}).click()
    cy.contains(`${select_packet}`).click()
    //Assign workflows
    // cy.get('input[aria-label="Select Workflow to assign"]').click()
    // cy.contains('').click()
    cy.get('button[id="assign-activites-submit"]',{timeout:8000}).click()
})
Cypress.Commands.add('Schedule_emails',(template)=>{
    //validating default emails for onboarding
    if(cy.get('.offboard-template-used.open-dialog.clickable')){
        cy.wait(5000)
        cy.get('.offboard-template-used.open-dialog.clickable').each(($el,index,$list)=>{
            cy.log($el.text())
        })
    }
    else{
        cy.location("no email templates are displaying")
    }
    cy.wait(5000)
    //clicking on 'ADD SCHEDULED Email'
    cy.get('button').contains('Add SCHEDULED EMAIL').click()
    //selcting template
    cy.get('md-select[id="templates-list"]').click()
    cy.get('md-option').contains(`${template}`).click()
    //cy.file_uploading()
    cy.get('button[type="submit"]').contains('Send').click()
    //clicking on INITIATE ONBOARDING
    cy.get('.main > .text-right > .sapling-primary',{timeout:8000}).click()
    cy.wait(5000)
    cy.get('button[ng-click="close()"]').contains('Done').click()
    cy.get('input[placeholder="Search"]').clear().type(user)
    //cy.wait(5000)
    cy.get('.pending-hire-name',{timeout:5000}).each(($el,index,$list)=>{
        cy.log(`${user_onboard}`)
        if($el.text() == `${user_onboard}`){
            cy.get('button').contains('CONTINUE').click()

        }
    })
})
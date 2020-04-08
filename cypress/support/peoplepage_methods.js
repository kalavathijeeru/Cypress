import Homepage from '../support/objects'

//method for adding team member in people page
//const hm=new Homepage()
Cypress.Commands.add("adding_team_member",(fname,lname,tit,com_mail,per_mail)=>{
    //clicking on people page
    cy.get('#onboard_people',{timeout:8000}).click()
    //click on "Add Team Member"
    cy.get('.secondary-btn.hide-mobile.add-team-member.ng-binding.ng-scope',{timeout:4000}).click()
    cy.get('input[name="first_name"]').type(fname)
    cy.xpath('//input[@name="last_name"]').type(lname)
    cy.get('input[name="title"]').type(tit)
    cy.get('.margin-right-50 > input[name="email"]').click({force:true}).type(com_mail)
    cy.get('input[name="personal_email"]').click({force:true}).type(per_mail)
    //saving a team member
    cy.xpath('//button[@id="save-invite"]').click()
    if("Email has already in use"){
        cy.get('md-icon[aria-label="onboard.people.dialog.close_dialog"]').click()
        cy.log('Email has already in use')
    }
    else{
        cy.log("user created successfully")
    }
    
})

//selecting team members to perform actions 
Cypress.Commands.add("selecting_member",()=>{
    cy.get('.gray-clear-text.ng-binding.ng-scope').click({force:true})
    cy.wait(3000)
    cy.get('input[name="people_search"]').type('tester')
    cy.wait(5000)
    cy.get('#row-checkbox').click()
})
//Method for clicking on action menu
Cypress.Commands.add('actions',()=>{
    cy.get('.icon-menu-down').click()
})

// method for assigning  invidual document to team member
Cypress.Commands.add("individual_document",()=>{
    //***Assigning individual document to user */
    cy.selecting_member()
    cy.actions()
    //mouseover to assign 
    cy.get('._md-nested-menu > .md-primary').trigger('mouseover')
    //clicking on invidual document
    cy.contains('Individual Document').click()
    //selecting document from the drop down
    //cy.get('input[name="paperwork"]').click()
    cy.get('md-select').click()    //cy.select('Signatory documents').click()
    cy.contains('Signatory documents').click()
    //clicking on review document
    cy.get('.sapling-primary.md-button.md-ink-ripple').should('be.enabled').click()
    
})
// method for assining documentpacket to user
Cypress.Commands.add("documentpacket",()=>{
    
    cy.selecting_member()
    cy.actions()
    
    cy.get('._md-nested-menu > .md-primary',{timeout:6000}).trigger('mouseover')
    //clicking on Document packet
    cy.contains('Document Packet').click()
    //cy.get('button').contains('Document Packet').click()
    //selecting document packet
    cy.get('md-select',{timeout:5000}).click()
    //selecting document packet
    cy.contains('new hire signature document').click()
    cy.wait(3000)
    cy.get('button').contains('Assign Packet').click()
    if("Packet Assigned"){
        cy.log('packet successfully added')
    }
    else{
        //canceling adding document
        cy.get('.padding-right-20>md-icon[role="button"]').click()
        cy.log('packet not added successfully')
    }
    
})
// method for assigning workflows for team member
Cypress.Commands.add("workflows",()=>{
    cy.selecting_member()
    cy.actions()
    cy.get('._md-nested-menu > .md-primary',{timeout:6000}).trigger('mouseover')
    //clicking on workflow
    //cy.contains('Workflow').click()
    //clicking on seach
    try{
        cy.get('button').contains('Workflow').click()

    }
    catch{
        cy.log("unable to click on workflow")
    }
    
    //checking the box for valid input
    cy.get('input[placeholder="Find a Workflow"]').click()
    cy.contains('onboarding with documents').click()
    //clicking on next button
    cy.wait(4000)
    cy.get('button').contains('Next').click()
    //cliking on next button for second step
    cy.wait(4000)
    cy.get('button').contains('Next').click()
    //clicking on next button for third step
    cy.wait(4000)
    cy.get('button').contains('Finish').click()
    
})
// method for members count in people page
Cypress.Commands.add("members_count",(peoplecount,datatable_count)=>{
    cy.wait(3000)
    let team_member = ''
    //.plain-header-text.ml-8.ng-binding below element
    cy.get(`${peoplecount}`)
      .then(number1 => {
        team_member = number1
          .text()
          .split(' ')
          .pop()
          cy.log("team members are "+team_member)
      })
      cy.wait(4000)
    let divNumber = ''
    //.dataTables_info below element
    cy.get(`${datatable_count}`)
    .then(number => {
        divNumber = number
        .text()
        .split(' ')
        .pop()
        //cy.get('divDataTables_Table_0_info')
        //.should('contain', divNumber)
        cy.log("The total team members count "+divNumber)
        
    })
    if(team_member==divNumber){
        cy.log("The team member count is validating")
    }
    else{
        cy.log("the team members count is not validating")
    }
})

//method for request infomation
Cypress.Commands.add("request_information",()=>{
    cy.selecting_member()
    cy.actions()
    //clicking on request information
    cy.contains('Request Information').click()
    cy.get('md-select').click({force:true})
    cy.contains('First Name').click()
    cy.contains('Last Name').click()
    cy.contains('Preferred Name').click()
    //clicking on apply button
    cy.get('._md > .apply-btn').click()
    cy.contains('Complete Request').should('be.enabled').click()
    if("Success! These coworkers will be asked to complete this info.Sapling"){
        cy.log("The request information changed successfully")
        cy.log("Success! These coworkers will be asked to complete this info.Sapling")
    }
    else
    {
        cy.log("Request information operation not formed")
    }
    
})
//method for change manager in people page
Cypress.Commands.add("changemanager",()=>{
    cy.selecting_member()
    cy.actions()
    cy.contains('Change Manager').click()
    //Homepage.getnewmanager().type('chaitanya')
    //cy.contains('New Manager').click()
    cy.get('md-input-container [type="search"]',{timeout:5000}).click().type('chaitanya raju')
    cy.contains('chaitanya raju').click()
    //Homepage.getmanagersave()
    cy.get('button[type="submit"]').click()
    //Homepage.getmanagerclose()
    if("Manager change successful"){
        cy.log("manager assigned successfully")
    }
    else{
        cy.get('md-icon[md-font-icon="icon-close"][aria-label="icon-close"]').click()
        cy.log("clicked on close button")
        
    }
})
//method for power editing in peoplepage
Cypress.Commands.add("poweredit",()=>{
    cy.selecting_member()
    cy.actions()
    cy.contains('Power Edit',{timeout:5000}).click()
    
    cy.get('md-select').click()
    try{
        cy.contains('standard tableqa test').click()

    }
    catch{
        cy.log("unable to select document to edit")

    }
    
    cy.get('md-radio-button[class="md-default-theme md-checked"]').click({force:true})
    cy.get('button').contains('CONTINUE').click()
    cy.contains('SAVE CHANGES').click()
    cy.get('.md-icon-button > .md-hue-1',{timeout:5000}).click()
    
})
//method for send invite for team member
Cypress.Commands.add("sendinvite",()=>{
    cy.selecting_member()
    cy.actions()
    cy.contains('Send Invite').click()
})
//method for deleting user from sapling for people page
Cypress.Commands.add('delete_from_sapling',()=>{
    cy.selecting_member()
    cy.actions()
    cy.contains('Delete from Sapling').click()
    //deleting profile from the sapling
    cy.get('button').contains('Delete Profile').click()
})
//method for filetering team members in people page
Cypress.Commands.add("fileteing",()=>{
    //clicking on fileters button
    cy.xpath('//button[@class="people-menu-btn md-button md-default-theme md-ink-ripple"]').click()
    //fileting departments
    cy.contains('Departments').trigger('mouseover')
    cy.contains('Accounting').click({force:true})
    cy.contains('Air Conditioning').click({force:true})
    cy.contains('Construction').click({force:true})
    //clicking on apply button
    //cy.get('#menu_container_31 > .people-filter-menu-content > .apply-button > .ng-binding').click()
    cy.contains('APPLY').click({force:true})
    //filetering location in people page
    cy.contains('Locations').trigger('mouseover')
    cy.contains('Alberta',{timeout:6000}).click({force:true})
    cy.contains('Alberta, Canada').click({force:true})
    cy.contains('APPLY').click({force:true})
    //clearing fileters for applied fileters
    cy.get('.gray-clear-text.ng-binding.ng-scope').click({force:true})
    
    
    
    
})


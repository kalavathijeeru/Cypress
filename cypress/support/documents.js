//import { try } from "cypress/types/bluebird";
import 'cypress-file-upload';
Cypress.Commands.add("navigate_to_documents_Tab",()=>{
    cy.get(':nth-child(2) > ul.ng-scope > :nth-child(2) > .ms-navigation-item > .ms-navigation-button',{timeout:15000}).click()
    //Accepting the popup
    //clicking on 'Got it' button
    cy.get('#signatory_document_prepare').click()
    cy.wait(3000)
})
//Adding individual document to documents page
Cypress.Commands.add("individual_documents",(doc_name,doc_des)=>{
    cy.navigate_to_documents_Tab()
    cy.contains("Individual Documents").click()
    //cy.get('button').contains('New Document').click()
    cy.get('button[aria-label="add document"]').click()
    cy.get('input[name="title"]').type(doc_name)
    cy.get('input[name="description"]').type(doc_des)
    //select document type
    //selecting doc-type as 'Signatory documents'
    cy.get('md-radio-button[aria-label="Signatory"]').click()
    cy.file_uploading()
    cy.wait(6000)
    cy.get('button[type="submit"]').click()
    // if('Oops. Looks like an error occured. Please retry.'){
    //     cy.get('.clear-btn.mr-8.md-button.md-ink-ripple').click()
    //     cy.get('button').contains('Yes').click()
    //     cy.log('clicked on cancel button and document is not saved')
    // }
    // else{
        
    // }
    
})
Cypress.Commands.add('upload_requests',(ur_type,ur_name,ur_des)=>{
    //cy.navigate_to_documents_Tab()
    cy.contains('Upload Requests').click()
    cy.get('button').contains('Create Request').click()
    cy.get('input[type="search"]').click().type(ur_type)
    cy.get('input[name="title"]').click().type(ur_name)
    cy.get('input[name="description"]').click().type(ur_des)
    //cy.get('button').contains('Save').click()
    cy.contains('Save').should('be.enabled').click()
    if('Document Upload Request Added'){
        cy.log("upload request successfully added")
    }
    else{
        cy.log('upload packet not added successfully')
    }
})
Cypress.Commands.add("updating_upload_request",(name,pac_name)=>{
    cy.contains('Upload Requests').click()
    //cy.get('.clear-btn').click()
    
    cy.get('input[placeholder="Search"]').type(name)
    cy.wait(4000)
    cy.get('.documents-name.break-word.sorting_1').click()
    cy.get('input[name="description"]').click().clear().type(pac_name)
    cy.contains('Save').should('be.enabled').click()
    if('Document Upload Request Updated'){
        cy.log("upload request successfully updated")
    }
    else{
        cy.log('upload request not added successfully')
    }
})
Cypress.Commands.add("deleting_upload_request",(name)=>{
    cy.contains('Upload Requests').click()
    cy.get('input[placeholder="Search"]').type(name)
    cy.wait(4000)
    cy.get('md-icon[md-font-icon="icon-dots-vertical"]').click()
    cy.get('button').contains('Delete').click()
    if('Are you sure you want to delete this Upload Request?'){
        cy.get('button').contains('Yes').click()
        if('Document Upload Request Deleted'){
            cy.log('upload request successfully deleted')
        }
        else{
            cy.log('upload request not succesfully deleted')
        }
        
    }
    else{
        cy.get('md-icon[md-font-icon="icon-dots-vertical"]').click()
        cy.get('button').contains('Delete').click()
        cy.get('button').contains('Yes').click()
        
    }
})
Cypress.Commands.add('Document_packets',(pac_type,pac_name,pac_des)=>{
    cy.contains('Document Packets').click()
    cy.wait(3000)
    cy.get('button').contains('Create Packet').click()
    try{
        cy.get('input[type="search"][aria-label="Packet Type"]').click({force:true}).type(pac_type)
    }
    catch{
        cy.log('packet type name is not taking')
    }
    try{
        cy.get('input[name="name"]').click({force:true}).type(pac_name)
    }
    catch{
        cy.log('packet name name is not taking')
    }
    try{
        cy.get('input[name="description"]').click({force:true}).type(pac_des)
    }
    catch{
        cy.log('packet description description is not taking')
    }
    cy.get('input[type="search"][aria-label="Search for docs to add"]').click().type('tes')
    cy.contains('Release 6.7 signatory test').click()
    //cy.contains('Keep documents Separate').click()
    cy.get('button').contains('Save').click()
    if('Packet Created'){
        cy.log("packet sucessfully added")
    }
    else{
        cy.log('packet does not added successfully')
    }
    
})
Cypress.Commands.add("updating_document_request",(name,pac_des)=>{
    cy.contains('Document Packets').click()
    cy.get('input[placeholder="Search"]').type(name)
    cy.wait(4000)
    cy.get('.documents-name.break-word.sorting_1').click()
    cy.get('input[type="search"][aria-label="Search for docs to add"]').click().type('manager sign').click()
    //cy.contains('manager sign').click()
    cy.wait(2000)
    cy.get('button').contains('Save').click()
    if('Packet Updated'){
        cy.log("packet successfully updated")
    }
    else{
        cy.log('packet not updated')
    }
})
Cypress.Commands.add('deleting_document_packet',(doc_name)=>{
    cy.contains('Document Packets').click()
    cy.get('input[placeholder="Search"]').type(doc_name)
    cy.wait(4000)
    cy.get('md-icon[md-font-icon="icon-dots-vertical"]').click()
    cy.get('button').contains('Delete').click()
    if('Are you sure you want to delete this Upload Request?'){
        cy.get('button').contains('Yes').click()
        if('Document Upload Request Deleted'){
            cy.log('upload request successfully deleted')
        }
        else{
            cy.log('upload request not succesfully deleted')
        }
        
    }
    else{
        cy.get('md-icon[md-font-icon="icon-dots-vertical"]').click()
        cy.get('button').contains('Delete').click()
        cy.get('button').contains('Yes').click()
        
    }
})

Cypress.Commands.add("navigating_to_dacTab_nd_actions",()=>{
    //clicking on documents tab
    cy.get('a[href="#/updates"]').click()
    //clicking on documents tab on home page
    cy.get('md-tab-item',{timeout:4000}).contains('Documents').click()
    cy.get('button[id="assign_doc"]',{timeout:4000}).click()

})

Cypress.Commands.add("documents_tab_create_documents",(sig_name,sig_des,file_uploading)=>{
    cy.get('button').contains('Request Signature').trigger('mouseover')
    cy.xpath('//div[@id="menu_container_31"]//md-menu-item[1]//button[1]').click()
    cy.get('input[placeholder="Title"]').click().type(sig_name)
    cy.get('input[name="description"]').click().type(sig_des)
    cy.get('md-select').click()
    cy.get('md-option').contains('Single Sign Only').click()
    cy.file_uploading()
    cy.wait(4000)
    cy.get('button',{timeout:5000}).contains('Prepare').click()
    // cy.window().then(win)=>{
    //     confirmedFoo = win.confirm('OK')
    //     //expect(confirmedFoo).to.be.false

    // }
})
Cypress.Commands.add("file_uploading",()=>{
    //cy.get('input[class="dropify"][type="file"]').click()
    const fileName = 'sample 4.pdf';
    cy.get('input[class="dropify"][type="file"]',{timeout:10000}).attachFile(fileName);
    
})

Cypress.Commands.add("docTab_assigning_doc",()=>{
    cy.navigating_to_dacTab_nd_actions()
    cy.get('button').contains('Request Signature').trigger('mouseover')
    cy.get('button').contains('Existing').click()
    cy.get('md-select').click()
    cy.contains('onboarding with attach files').click()
    cy.get('button').contains('Review Document').click()
    if(''){

    }
    else{

    }

    
})
Cypress.Commands.add("create_request_frm_doc_tab",(ur_name,ur_des)=>{
    cy.navigating_to_dacTab_nd_actions()
    cy.get('button').contains('Request File Upload').trigger('mouseover')
    cy.get('md-menu-content.md-default-theme > :nth-child(1) > .md-button').click()
    cy.get('input[name="title"]').click().type(ur_name)
    cy.get('input[name="description"]').click().type(ur_des)
    cy.wait(4000)
    cy.contains('Save').should('be.enabled').click()
    if('Document Added'){
        cy.log("upload request packet successfully added")
    }
    else{
        cy.log('upload request packet not added successfully and contine above steps to repeat testcase')
        cy.get('.md-icon-button>md-icon[aria-label="Close dialog"]')
        cy.navigating_to_dacTab_nd_actions()
     cy.get('button').contains('Request File Upload').trigger('mouseover')
    cy.get('md-menu-content.md-default-theme > :nth-child(1) > .md-button').click()
    cy.get('input[name="title"]').click().type(ur_name)
    cy.get('input[name="description"]').click().type(ur_des)
    cy.wait(2000)
    cy.contains('Save').should('be.enabled').click()
    }

})

Cypress.Commands.add("assign_uploadRequest_frm_docTab",()=>{
    cy.navigating_to_dacTab_nd_actions()
    cy.get('button').contains('Request File Upload').trigger('mouseover')
    //cy.wait(2000)
    //cy.contains('Existing').click({force:true})
    cy.get('md-menu-content.md-default-theme > :nth-child(2) > .md-button').click()
    cy.get('md-select').click()
    cy.contains('hellosigns').click()
    cy.get('button').contains('Review Document').click()
    if('Document Added'){
        cy.log('upload request added successfully')
    }
    else{
        cy.log('upload request not added successfully')
    }
})
Cypress.Commands.add("Assign_pac",(packet_name,packet_des)=>{
    cy.navigating_to_dacTab_nd_actions()
    cy.get('button').contains('Assign Packet').trigger('mouseover')
    cy.get('md-menu-content.md-default-theme > :nth-child(1) > .md-button > .ng-binding').click()
    cy.get('input[name="name"]').click().type(packet_name)
    cy.get('input[name="description"]').click().type(packet_des)
    cy.get('md-select-value').click()
    cy.contains('Combine into one document').click()
    cy.get('input[type="search"][aria-label="Search"]').type('ma')

    cy.get('md-checkbox').contains('manager11',{timeout:5000}).click({force:true})
    
    cy.contains('Create Packet').should('be.enabled').click()

})
Cypress.Commands.add("assign_packet_existing",()=>{
    cy.navigating_to_dacTab_nd_actions()
    cy.get('button').contains('Assign Packet').trigger('mouseover')
    cy.get('md-menu-content.md-default-theme > :nth-child(2) > .md-button > .ng-binding').click()
    cy.get('md-select').click()
    cy.contains('combinusers').click()
    cy.get('.sapling-primary').click({force:true})
    if('Packet Assigned'){
        cy.log('packet assinged successfully from user documents tab')
    }
    else{
        cy.log('packet not assigned successfully from user documents tab')
    }
})
Cypress.Commands.add("doc_tab_searchdocuments",(doc_name)=>{
    //clicking on documents tab
    cy.get('a[href="#/updates"]').click()
    //clicking on documents tab on home page
    cy.get('md-tab-item',{timeout:4000}).contains('Documents').click()
    cy.get('input[placeholder="Search"]').click().type(doc_name)
    cy.wait(5000)
    if(cy.get('.user-documents-name.clickable.break.sorting_1')){
        cy.log("the search functionality works properly")
    }
    else{
        cy.log('the document found')
    }
    
})
Cypress.Commands.add("drag_nd_drop_files",()=>{
    //clicking on documents tab
    cy.get('a[href="#/updates"]').click()
    //clicking on documents tab on home page
    cy.get('md-tab-item',{timeout:4000}).contains('Documents').click()
    //cy.get('input[class="dropify ng-scope"][type="file"]').click()
    const fileName = 'sample.pdf';
    
    cy.fixture(fileName).then(fileContent => {
        cy.get('input[class="dropify ng-scope"][type="file"]').upload({ fileContent, fileName, mimeType: 'application/json' });
    });
    cy.contains('Save').click()
    cy.wait(5000)
    if('Document uploaded'){
        cy.log("document uploaded successfully from drag and drop")
    }
    else{
        cy.log("document not uploaded successfully from drag and drop")
    }
})
Cypress.Commands.add("Incompelete_complete_status",()=>{


})
Cypress.Commands.add("verifing_upload_button",(doc_name)=>{
    //clicking on documents tab
    cy.get('a[href="#/updates"]').click()
    //clicking on documents tab on home page
    cy.get('md-tab-item',{timeout:4000}).contains('Documents').click()
    cy.get('input[placeholder="Search"]').click().type(doc_name)
    cy.wait(4000)
    const fileName = 'sample2.pdf';
    
    cy.fixture(fileName).then(fileContent => {
        cy.get('button[name="document_attached_file"]').upload({ fileContent, fileName, mimeType: 'application/json' });
    });
    cy.contains('Save').click()
    
})
Cypress.Commands.add('data_found',()=>{
    if(cy.get('tbody')){
        //cy.log("data found")
        //cy.log("The data is ")

    }
    else{
        cy.get('img[src="assets/images/general/doc_packet.png"]')
        cy.contains('Lets create your first document packet!')
        cy.log("no data found the tab")
    }

})
Cypress.Commands.add("onboarding",()=>{
    cy.contains('Onboarding').click()
    cy.data_found()
    

})
Cypress.Commands.add("offboarding",()=>{
    cy.contains('Offboarding').click()
    cy.data_found()
})
Cypress.Commands.add('Relocation',()=>{
    cy.contains('Relocation').click()
    cy.data_found()
})
Cypress.Commands.add('Promotion',()=>{
    cy.contains('Promotion').click()
    cy.data_found()
})
Cypress.Commands.add('Other',()=>{
    cy.contains('Other').click()
    cy.wait(3000)
    cy.data_found()
})
Cypress.Commands.add("tabs_switching",()=>{
        //cy.onboarding()
        cy.wait(3000)
        cy.offboarding()
        cy.wait(3000)
        cy.Relocation()
        cy.wait(3000)
        cy.Promotion()
        cy.wait(3000)
        cy.Other()
    
})
Cypress.Commands.add('documentspackets',()=>{
    cy.contains('Document Packets').click()
    cy.wait(4000)
    cy.tabs_switching()
        
})
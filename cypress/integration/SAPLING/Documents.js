/// <reference types='Cypress'/>
describe("documents",function(){
    before(function(){
        cy.fixture('sapling_credentials').then(function(data){
            this.data=data

        })
        cy.fixture('upload_request').then(function(data){
            this.data1=data
        })
        cy.fixture('packet.json').then(function(data){
            this.data2=data
        })
        cy.fixture('signatory_doc.json').then(function(data){
            this.data3=data
        })

    })
    it("documents page",function(){
        cy.visit("https://rocketship.shr-test.com/")
        //cy.contains('Sign in with email',{timeout:6000}).click()
        cy.login('chaitanya+888@trysapling.com','admin@123')
        cy.wait(8000)
        //cy.navigate_to_documents_Tab()
        //cy.create_signatory_doc()
        //cy.upload_requests(this.data1.upload_type,this.data1.upload_name,this.data1.upload_description)
        //cy.updating_upload_request(this.data1.search_names,this.data1.upload_type)
        //cy.deleting_upload_request(this.data1.search_names)
        //cy.Document_packets(this.data2.packet_type,this.data2.packet_name,this.data2.packet_description)
        //cy.updating_document_request(this.data2.packet_name,this.data2.packet_type)
        //cy.deleting_document_packet(this.data2.packet_name)
        //cy.documents_tab_create_documents(this.data3.name,this.data3.descipt)
        //cy.docTab_assigning_doc()
        //cy.create_request_frm_doc_tab(this.data1.uploadrequest_name_doc,this.data1.uploadrequest_des)
        //cy.assign_uploadRequest_frm_docTab()
        //cy.Assign_pac(this.data2.assign_pac_name,this.data2.assign_pac_des)
        //cy.assign_packet_existing()
        //cy.doc_tab_searchdocuments(this.data3.search_doc)
        //cy.drag_nd_drop_files()
        cy.verifing_upload_button(this.data1.upload_name)
        
        
        
    })

})
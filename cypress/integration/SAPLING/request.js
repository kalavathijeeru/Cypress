describe('My first proto0 suite',function(){
  var token
  before(function(){
    
    cy.server()
    cy.visit("https://rocketship.shr-test.com")
    cy.request('POST',
    'https://rocketship.shr-test.com/api/v1/auth/sign_in?',
    { "email":"chaitanya+888@trysapling.com",
    "password":"admin@123"})
    .then((response)=>{
      token = response.headers['access-token']
      cy.log(token)
      // cy.visit('https://rocketship.shr-test.com')
      //   cy.login('manasa+01@trysapling.com','admin@123')
      
      cy.request("https://rocketship.shr-test.com/api/v1/companies/current.json",
      {headers:{access_token: response.headers["access_token"]}})
      cy.request('https://rocketship.shr-test.com/api/v1/custom_table_user_snapshots/updates_page_ctus?',
      {headers:{access_token: response.headers["access_token"]}})
      cy.request('https://rocketship.shr-test.com/api/v1/users/home_user.json?',
      {headers:{access_token: response.headers["access_token"]}})
      cy.request('https://rocketship.shr-test.com/api/v1/users/people_paginated_count?',
      {headers:{access_token: response.headers["access_token"]}})
      cy.request('https://rocketship.shr-test.com/api/v1/users/total_active_count?',
      {headers:{access_token: response.headers["access_token"]}})
      cy.request('https://rocketship.shr-test.com/api/v1/users/paginated.json?',
      {headers:{access_token: response.headers["access_token"]}})
      cy.request('https://rocketship.shr-test.com/api/v1/users/get_team_activities_count.json?',
      {headers:{access_token: response.headers["access_token"]}})
      cy.request('https://rocketship.shr-test.com/api/v1/users/get_my_activities_count.json?',
      {headers:{access_token: response.headers["access_token"]}})
      cy.request('https://rocketship.shr-test.com/api/v1/company_links.json?',
      {headers:{access_token: response.headers["access_token"]}})
      cy.request('https://rocketship.shr-test.com/api/v1/pto_requests/get_users_out_of_office.json',
      {headers:{access_token: response.headers["access_token"]}})
      cy.request('https://rocketship.shr-test.com/api/v1/calendar_events/get_milestones.json?',
      {headers:{access_token: response.headers["access_token"]}})
      
    })
  })
  
  
  
  it("peoplepage",function(){
    cy.visit("https://rocketship.shr-test.com/#/people")
  })
  
  
})
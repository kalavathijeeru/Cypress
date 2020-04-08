describe('The Dashboard Page', function () {
    var token
    beforeEach(function () {
      // reset and seed the database prior to every test
      //cy.exec('npm run db:reset && npm run db:seed')
  
      // seed a user in the DB that we can control from our tests
      // assuming it generates a random password for us
      cy.request('POST', 'https://rocketship.shr-test.com/api/v1/auth/sign_in', { email: 'chaitanya+888@trysapling.com' ,password:'admin@123'})
        .its('body')
        .then((response)=>{
            token = response.headers['access-token']
            cy.log(token)
        })
        
    })
  
    it('logs in programmatically without using the UI', function () {
      // destructuring assignment of the this.currentUser object
      const { email,password } = this.currentUser
  
      // programmatically log us in without needing the UI
      cy.request('POST', 'https://rocketship.shr-test.com/api/v1/auth/sign_in', {email:'chaitanya+888@trysapling.com',password:'admin@123'
      },{'access-token':'9NFj2ZL0CtmEJjEuV4k9iA'})
      //cy.url().should('contain','/#/login')
  
      // now that we're logged in, we can visit
      // any kind of restricted route!
      cy.visit('http://rocketship.shr-test.com/#/updates')
  
      // our auth cookie should be present
      cy.getCookie('AWSALB').should('exist')
  
      // UI should reflect this user being logged in
      //cy.get('h1').should('contain', 'chaitanya+888@trysapling.com')
    })
  })
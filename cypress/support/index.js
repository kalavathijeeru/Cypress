// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import './automationlogin'
import './sapling_login'
import './peoplepage_methods'
import './access_token'
import  "cypress-localstorage-commands"
//import './local_Storage_commands'
require('cypress-xpath')
import './objects'
import './documents'
import './onboarding'
import './Pendinghires'
//import 'orgchart'
//import 'cypress-file-upload'
//require('@neuralegion/cypress-har-generator/support')

// Alternatively you can use CommonJS syntax:
// require('./commands')

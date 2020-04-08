///<reference types ='Cypress'/>
class Homepage{

    getfirstname(){
        return cy.contains('First Name')
    }
    getlastname(){
        return cy.contains('Last Name')
    }
    getprefererredname(){
        return cy.contains('Preferred Name')
    }
    getpersonalmail(){
        return cy.contains('Personal Email')
    }
    getabout(){
        return cy.contains('About')
    }
    getfoodpreference(){
        return cy.contains('Food Allergies/Preferences')
    }
    getcompleterequest(){
        return cy.contains('Complete Request')
    }
    getcancel(){
        return cy.get('.sapling-flat')
    }
    getclosebuttonforreqinfo(){
        return cy.get('ng-scope md-font material-icons icon-close')
    }
    getnewmanager(){
        return cy.contains('Change Manager')
    }
    getmanagersave(){
        return cy.get('.md-button sapling-primary ng-binding')
    }
    getmanagercancel(){
        return cy.get('sapling-flat md-button md-ink-ripple')
    }
    getmanagerclose(){
        return cy.get('.ng-scope md-font material-icons icon-close')
    }
    getdatainpoweredit(){
        return cy.get('.md-text ng-binding')
    }
    getdataindividually(){
        return cy.get('.md-default-theme md-checked')
    }
    getdataasagroup(){
        return cy.get('md-default-theme')
    }
}


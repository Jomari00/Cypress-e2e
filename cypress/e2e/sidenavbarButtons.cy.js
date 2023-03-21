describe('Side Nav Button spec', () => {
    it('side navigation bar button - passes', () =>{
        cy.visit('https://live.quickreach.co')
        cy.get('[data-cy="lg-email"]').type('testuser@yopmail.com')
        cy.get('[data-cy="lg-password"]').type('Pass@word1')
        cy.get('[data-cy="lg-submit-btn"]').click()
        cy.wait(10000)
        cy.contains('Use QuickReach').click()
        cy.get('[data-cy="sideNav-toggleBtn"] > .mat-button-wrapper > .text-cyan100').click({force:true})
        //cy.get('.cc-1kn9').click()
        cy.get('.fa').click({force:true})
        cy.get('[data-cy="SidebarUserSelectAdmin"] > span').click({force:true})//Admin
        cy.get('.cdk-overlay-backdrop').click()
        cy.get('[data-cy="sideNav-toggleBtn"] > .mat-button-wrapper > .text-cyan100').click()
        cy.get('[data-cy="Company Profile"]').click({force:true})//Company Profile
        cy.wait(4000)
        cy.get('.cdk-overlay-backdrop').click()
        cy.get('[data-cy="User Management"]').click()//User Management
        cy.wait(20000)
        cy.get('[data-cy="sideNav-toggleBtn"]').click({force:true})
        cy.get('.cdk-overlay-backdrop').click({force:true})
        cy.get('[data-cy="Group Management"]').click({force:true})//Group Management
        cy.wait(4000)
        cy.get('[data-cy="sideNav-toggleBtn"]').click()
        cy.get('.cdk-overlay-backdrop').click()
        cy.get('[data-cy="Access Settings"]').click()//Access Settings
        cy.wait(4000)
        cy.get('[data-cy="sideNav-toggleBtn"]').click()
        cy.get('.cdk-overlay-backdrop').click()
        cy.get('[data-cy="Master Data Table"]').click()//Master Data Table
        cy.wait(40000)
        //cy.get('.cdk-overlay-backdrop').click()
        cy.get('[data-cy="sideNav-toggleBtn"]').click({force:true})
        cy.get('.cdk-overlay-backdrop').click({force:true})
        cy.get('[data-cy="Steer Setup"]').click({force:true})//Steer Setup
        cy.wait(4000)
        cy.get('[data-cy="sideNav-toggleBtn"]').click({force:true})
        cy.get('.cdk-overlay-backdrop').click()
        cy.get('.fa').click()
        cy.get('[data-cy="SidebarUserSelectBuilder"]').click()//Builder
        cy.wait(4000)
        cy.get('[data-cy="Solutions"]').click()//Solutions
        cy.wait(4000)
        cy.get('[data-cy="Reports"]').click()//Reports
        cy.wait(4000)
        cy.get('[data-cy="sideNav-toggleBtn"]').click()
        cy.get('.cdk-overlay-backdrop').click()
        cy.get('[data-cy="Automation"]').click()//Automation
        cy.wait(4000)
        cy.get('[data-cy="sideNav-toggleBtn"]').click()
        cy.get('.cdk-overlay-backdrop').click()
        cy.get('[data-cy="Third Party Integration"]').click()//Third Party Integration
        cy.wait(4000)
        cy.get('[data-cy="sideNav-toggleBtn"]').click()
        cy.get('.cdk-overlay-backdrop').click()
        cy.get('[data-cy="Customer Access Tools"]').click()//Customer Access Tools
        cy.wait(4000)
        cy.get('[data-cy="sideNav-toggleBtn"]').click()
        cy.get('.cdk-overlay-backdrop').click()
        cy.get('[data-cy="Notification Management"]').click()//Notification Management
        cy.wait(4000)
        cy.get('[data-cy="sideNav-toggleBtn"] > .mat-button-wrapper > .text-cyan100').click()
        cy.get('.cdk-overlay-backdrop').click()
        cy.get('.fa').click()
        cy.get('[data-cy="SidebarUserSelectUser"]').click()//Internal User
        cy.get('[data-cy="sideNav-toggleBtn"] > .mat-button-wrapper > .text-cyan100').click()
        cy.get('.cdk-overlay-backdrop').click()
        cy.get('[data-cy="Dashboard"]').click()//Dashboard
        cy.wait(4000)
        cy.get('[data-cy="sideNav-toggleBtn"] > .mat-button-wrapper > .text-cyan100').click()
        cy.get('.cdk-overlay-backdrop').click()
        cy.get('[data-cy="Solution Overview"]').click()//Solution Overview
        cy.wait(4000)
        cy.get('[data-cy="sideNav-toggleBtn"] > .mat-button-wrapper > .text-cyan100').click()
        cy.get('.cdk-overlay-backdrop').click()
        cy.get('[data-cy="Reports"]').click()//Reports
        cy.wait(4000)
        cy.get('[data-cy="sideNav-toggleBtn"] > .mat-button-wrapper > .text-cyan100').click()
        cy.get('.cdk-overlay-backdrop').click()
        cy.get('[data-cy="External Access Management"]').click()//External Access Management
        cy.wait(4000)
        cy.get('[data-cy="hd-togglemenu"] > .mat-button-wrapper > .material-icons').click()
        cy.get('[data-cy="hd-menumyprofile"] > .fs14').click()
        cy.wait(4000)
        cy.get('[data-cy="hd-menuopenknowledgebase"] > .fs14').click()
        cy.wait(4000)
        cy.get('[data-cy="hd-menuonlineacademy"] > .fs14').click()
        cy.wait(4000)
        cy.get('[data-cy="hd-menusignout"] > .fs14').click()

        






    })
})
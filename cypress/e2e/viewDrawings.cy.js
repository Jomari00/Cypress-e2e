describe('Project Admin', () =>{
    it('viewDrawings-passes', () =>{
       //LOGIN using live account
      cy.visit('https://live.quickreach.co')
      cy.get('[data-cy="lg-email"]').type('testuser@yopmail.com')
      cy.get('[data-cy="lg-password"]').type('Pass@word1')
      cy.get('[data-cy="lg-submit-btn"]').click()

        //Search Newly Created Project
      cy.wait(5000)
      cy.get('#search > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex').type('02252023 TPJom Automate{enter}')
      cy.get('#project-card').click()
      cy.get('[data-cy="sideNav-toggleBtn"] > .mat-button-wrapper > .text-cyan100').click()
      cy.wait(10000)
      cy.get('[data-cy="Drawings"]').click({force:true})
    })

})
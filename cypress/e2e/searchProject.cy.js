describe('template spec', () => {
    it('searchProject-passes', () => {
      cy.visit('https://live.quickreach.co')
      cy.get('[data-cy="lg-email"]').type('testuser@yopmail.com')
      cy.get('[data-cy="lg-password"]').type('Pass@word1')
      cy.get('[data-cy="lg-submit-btn"]').click()
      cy.wait(10000)
      cy.get('#search > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex').type('03062023 Automate v3{enter}')
    })
  })  

  
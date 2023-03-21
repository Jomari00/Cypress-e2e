describe('template spec', () => {
  it('LOGIN-passes', () => {
    cy.visit('https://live.quickreach.co')
    cy.get('[data-cy="lg-email"]').type('testuser@yopmail.com')
    cy.get('[data-cy="lg-password"]').type('Pass@word1')
    cy.get('[data-cy="lg-submit-btn"]').click()
    //cy.wait(10000)
    //cy.contains('Use QuickReach').click()
  })
})
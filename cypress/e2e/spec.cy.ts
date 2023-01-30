describe('tic tac toe', () => {
  it('x player win', () => {
    cy.visit('/')
    cy.get('[data-cy="square-0"]').click()
    cy.get('[data-cy="square-1"]').click()
    cy.get('[data-cy="square-3"]').click()
    cy.get('[data-cy="square-4"]').click()
    cy.get('[data-cy="square-6"]').click()

    cy.get('[data-cy="game-status"]').should('have.text', 'Winner: X')
  })
  it('draw', () => {
    cy.visit('/')
    cy.get('[data-cy="square-0"]').click()
    cy.get('[data-cy="square-4"]').click()
    cy.get('[data-cy="square-3"]').click()
    cy.get('[data-cy="square-6"]').click()
    cy.get('[data-cy="square-2"]').click()
    cy.get('[data-cy="square-1"]').click()
    cy.get('[data-cy="square-7"]').click()
    cy.get('[data-cy="square-5"]').click()
    cy.get('[data-cy="square-8"]').click()

    cy.get('[data-cy="game-status"]').should('have.text', 'Draw!')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('x player win (by cypress-studio)', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('/');
    cy.get('[data-cy="square-0"]').click();
    cy.get('[data-cy="square-1"]').click();
    cy.get('[data-cy="square-3"]').click();
    cy.get('[data-cy="square-4"]').click();
    cy.get('[data-cy="square-6"]').click();
    cy.get('[data-cy="game-status"]').should('have.text', 'Winner: X');
    /* ==== End Cypress Studio ==== */
  });
})

export {}
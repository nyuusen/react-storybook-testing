describe('tic tac toe', () => {
  it('xプレイヤーが勝利する', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy="square-0"]').click()
    cy.get('[data-cy="square-1"]').click()
    cy.get('[data-cy="square-3"]').click()
    cy.get('[data-cy="square-4"]').click()
    cy.get('[data-cy="square-6"]').click()

    cy.get('[data-cy="game-status"]').should('have.text', 'Winner: X')
  })
})

export {}
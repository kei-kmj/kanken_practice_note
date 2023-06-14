/// <reference types="cypress" />

describe('coursesページ', () => {
  beforeEach(() => {
    cy.visit('/')

    cy.contains('始める').click()
    cy.url().should('include', '/courses')
  })

  it('初期状態は級のみ表示', () => {
    cy.contains('読 み').should('not.exist')
    cy.contains('新 規').should('not.exist')
    cy.contains('準1級').click()
  })

  it('級選択後に分野ボタンが出る', () => {
    cy.contains('準1級').click()
    cy.contains('読 み').should('exist')
    cy.contains('読 み').click()

  })
  it('分野選択後に新規/復習ボタンが出る', () => {
    cy.contains('準1級').click()
    cy.contains('読 み').click()
    cy.contains('新規').should('exist')
  })

  it('復習データが無い時', () => {
    cy.contains('準1級').click()
    cy.contains('読 み').click()
    cy.contains('復習').click()

  })
})

export {}
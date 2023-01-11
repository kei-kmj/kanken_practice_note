/// <reference types="cypress" />

describe('quizページ', () => {
  before(() => {
    cy.visit('/')
    cy.contains('始める').click()
    cy.contains('準1級').click()
    cy.contains('読 み').click()
    cy.contains('新 規').click()
  })

  it('Loading中はLoading画面が表示される', () => {
    cy.contains('しばらくお待ちください').should('exist')
  })

  it('級表示が選択と合っている', () => {
    cy.contains('準1級').should('exist')
  })

  it('問題の分野が合っている', () => {
    cy.contains('読みは次のうちどれ？').should('exist')
  })

  it('選択肢が4つ表示される', () => {
    cy.get('.btn.answer.btn-wide').should('have.length', 4)
  })

  it('1問目と表示される', () => {
    cy.contains('1問目').should('exist')
  })

  it('途中で止めようとすると確認画面が表示される', () => {
    cy.get('.btn.answer.btn-wide').first().click()
    cy.contains('問題選択画面に戻る').click()
    cy.contains('戻りますか？')
    cy.contains('いいえ').click()
    cy.contains('次の問題').click()
  })

  it('次の問題が表示される', () => {
    cy.get('.btn.btn-wide.btn-primary').first().click()
    cy.contains('次の問題').click()
    cy.contains('3問目').should('exist')
  })

  it('10回目までは得点が表示されない', () => {
    cy.get('.btn.btn-wide.btn-primary').first().click()
    cy.contains('次の問題').click()
    cy.get('.btn.btn-wide.btn-primary').first().click()
    cy.contains('次の問題').click()
    cy.get('.btn.btn-wide.btn-primary').first().click()
    cy.contains('次の問題').click()
    cy.get('.btn.btn-wide.btn-primary').first().click()
    cy.contains('次の問題').click()
    cy.get('.btn.btn-wide.btn-primary').first().click()
    cy.contains('次の問題').click()
    cy.get('.btn.btn-wide.btn-primary').first().click()
    cy.contains('次の問題').click()
    cy.get('.btn.btn-wide.btn-primary').first().click()
    cy.contains('次の問題').click()
    cy.contains('得点').should('not.be.visible')
  })

  it('最後に得点が表示される', () => {
    cy.get('.btn.btn-wide.btn-primary').first().click()
    cy.contains('得点').should('exist')
    cy.contains('問題選択画面に戻る').click()
  })
})
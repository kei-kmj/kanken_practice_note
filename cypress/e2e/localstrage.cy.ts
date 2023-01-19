/// <reference types="cypress" />

describe('localstrage', () => {
    beforeEach(() => {
    cy.visit('/')
  })

  it('localstrageのデータを全消去できる', () => {
    cy.visit('/')
    cy.contains('始める').click()
    cy.contains('準1級').click()

    cy.contains('全分野').click()
    cy.get('.btn').contains('復習').click()

    cy.on('window:alert', (t) => {
      expect(t).to.contains('登録されている問題がありません')
    })
  })

  it('復習するボタンをクリックするとlocalstrageに登録される', () => {
    cy.contains('始める').click()
    cy.contains('準1級').click()
    cy.contains('全分野').click()
    cy.get('.btn').contains('新規').click()

    cy.get('.btn.answer.btn-wide').first().click()
    cy.contains('復習する').click()

    cy.contains('問題選択画面に戻る').click()
    cy.contains('はい').click()

    cy.contains('準1級').click()
    cy.contains('全分野').click()
    cy.get('.btn').contains('復習').click()

    cy.contains('1問目 / 1 問中').should('exist')
  })

  it('localstrageのデータを消去できる', () => {
    cy.contains('始める').click()
    cy.contains('準1級').click()
    cy.contains('全分野').click()
    cy.get('.btn').contains('新規').click()

    cy.get('.btn.answer.btn-wide').first().click()
    cy.contains('復習する').click()

    cy.contains('問題選択画面に戻る').click()
    cy.contains('はい').click()

    cy.contains('準1級').click()
    cy.contains('全分野').click()
    cy.get('.btn').contains('復習').click()

    cy.contains('1問目 / 1 問中').should('exist')
    cy.get('.btn.answer.btn-wide').first().click()

    cy.contains('問題選択画面に戻る').click()

    cy.contains('準1級').click()
    cy.contains('全分野').click()
    cy.get('.btn').contains('復習').click()

    cy.on('window:alert', (t) => {
      expect(t).to.contains('登録されている問題がありません')
    })
  })
})
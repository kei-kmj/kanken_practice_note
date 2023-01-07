/// <reference types="cypress" />

describe('ルーティング', () => {

  it('トップページを開く', () => {
    cy.visit('/')
    cy.get('h3').should('contain', '漢字検定')
  })

  it('アプリケーションポリシーを開く', () => {
    cy.contains('アプリケーションポリシー').click()

    cy.get('h1').should('contain', 'アプリケーションポリシー')
    cy.contains('トップ画面に戻る').click()
  })

  it('お問い合わせを開く', () => {
    cy.contains('お問い合わせ').click()

    cy.get('iframe').should('exist')
    cy.contains('トップ画面に戻る').click()
  })

  it('ページが無い時は404が表示される', () => {
    cy.visit('/aa')
    cy.get('h2').should('contain', '404')
    cy.contains('トップ画面に戻る').click()
  })
})
export {}

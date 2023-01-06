/// <reference types="cypress" />

describe('API', () => {
  it('APIを叩くと200が返る', () => {
    cy.intercept('get', '/api/index?&category=1&level=11&limit=10',{statusCode:200})
  })
})
export {}

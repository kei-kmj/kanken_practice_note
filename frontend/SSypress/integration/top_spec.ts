import * as cypress from 'cypress'

describe('Access',function(){
  it('can access',function(){
    cy.visit('/')

    cy.get('h3').should('contain','漢字検定')
  })
})
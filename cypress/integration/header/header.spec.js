/// <reference types="cypress" />

describe('Testando o header', () => {

  beforeEach(() => {
    cy.visit('/')
  });

  it('Verificar se existe o componente de header', () => {
    cy.get('.header').should('to.have.length', 1)
  });

  it('Verificar se dentro do header possui o botão de SignUp', () => {
    const btn = cy.get('.header-btn-signup');

    expect(btn).to.exist;
  })
})
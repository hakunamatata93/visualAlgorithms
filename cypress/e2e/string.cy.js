import { DELAY_IN_MS } from '../../src/constants/delays';

describe ('String page works correct', () => {
  beforeEach(() => {
    cy.visit('/recursion');
  })

  it('if input is empty, action button is disabled', () => {
    cy.get('input').clear();
    cy.get('button[type="submit"]').should('be.disabled');
  })

  it('recursion works correct including styles ', () => {
    cy.get('input').type('abc').should('have.value', 'abc');
    cy.get('button').contains('Развернуть').click();

    cy.clock();

    cy.get('[data-testid="circle"]')
      .eq(0)
      .should("have.css", "border-color", "rgb(210, 82, 225)")
      .contains('a')

    cy.get('[data-testid="circle"]')
      .eq(1)
      .should("have.css", "border-color", "rgb(0, 50, 255)")
      .contains('b')

    cy.get('[data-testid="circle"]')
      .eq(2)
      .should("have.css", "border-color", "rgb(210, 82, 225)")
      .contains('c')

    cy.tick(DELAY_IN_MS);

    cy.get('[data-testid="circle"]')
      .eq(0)
      .should("have.css", "border-color", "rgb(127, 224, 81)")
      .contains('c')

    cy.get('[data-testid="circle"]')
      .eq(1)
      .should("have.css", "border-color", "rgb(210, 82, 225)")
      .contains('b')
 
    cy.get('[data-testid="circle"]')
      .eq(2)
      .should("have.css", "border-color", "rgb(127, 224, 81)")
      .contains('a')

    cy.tick(DELAY_IN_MS);

    cy.get('[data-testid="circle"]')
      .eq(0)
      .should("have.css", "border-color", "rgb(127, 224, 81)")
      .contains('c')

    cy.get('[data-testid="circle"]')
      .eq(1)
      .should("have.css", "border-color", "rgb(127, 224, 81)")
      .contains('b')

    cy.get('[data-testid="circle"]')
      .eq(2)
      .should("have.css", "border-color", "rgb(127, 224, 81)")
      .contains('a')
  })
})
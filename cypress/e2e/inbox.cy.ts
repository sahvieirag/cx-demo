describe('Unified Inbox - LuminaCX', () => {
  beforeEach(() => {
    // Assuming the frontend runs on localhost:4200
    cy.visit('http://localhost:4200');
  });

  it('should display the inbox header', () => {
    cy.get('.inbox-header h1').should('contain', 'Unified Inbox');
    cy.get('.inbox-header p').should('contain', 'Omnisense AI: Enabled');
  });

  it('should list tickets with AI summaries', () => {
    cy.get('.ticket-card').should('have.length.at.least', 1);
    cy.get('.ai-summary').should('be.visible').and('contain', 'Omnisense Insight:');
  });

  it('should log a message when clicking "Responder"', () => {
    cy.window().then((win) => {
      cy.stub(win.console, 'log').as('consoleLog');
    });

    cy.get('.radiant-btn-primary').first().click();
    
    cy.get('@consoleLog').should('be.calledWithMatch', /Abriu ticket/);
  });
});

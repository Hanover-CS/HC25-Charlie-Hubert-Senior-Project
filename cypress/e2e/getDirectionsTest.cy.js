describe('Get Directions Functionality', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/');
    });
  
    it('Opens sidebar on map click and displays Get Directions', () => {
  
      cy.get('#sidebar .sidebar .show').should('be.visible');
  
      // Click "Get Directions" after sidebar appears
      cy.get('#get-directions-button').click();
  
      cy.get('#directions-container').should('be.visible');
    });
  
    it('Submits valid directions and opens Google Maps', () => {
      // Click the map to open the sidebar
      cy.get('#map').click(200, 200);
  
      // Scroll sidebar into view and check if it's visible
      cy.get('#sidebar').scrollIntoView().should('be.visible');
  
      // Click "Get Directions"
      cy.get('#get-directions-button').click();
      cy.get('#directions-container').should('be.visible');
  
      // Enter valid locations
      cy.get('#from-input').type('Duggan Library');
      cy.get('#to-input').type('Horner Center');
  
      // Stub window.open to prevent actual redirection
      cy.window().then((win) => {
        cy.stub(win, 'open').as('windowOpen');
      });
  
      // Click "Submit" and check if Google Maps URL is opened
      cy.get('#submit-directions-button').click();
      cy.get('@windowOpen').should('have.been.calledWithMatch', /https:\/\/www.google.com\/maps\/dir\/\?/);
    });
  
    it('Handles invalid locations with an alert', () => {
      // Click the map to open the sidebar
      cy.get('#map').click(200, 200);
  
      // Scroll sidebar into view and check if it's visible
      cy.get('#sidebar').scrollIntoView().should('be.visible');
  
      cy.get('#get-directions-button').click();
      cy.get('#directions-container').should('be.visible');
  
      // Enter an invalid location
      cy.get('#from-input').type('Fake Place');
      cy.get('#to-input').type('Library');
  
      // Stub alert to prevent Cypress from failing
      cy.window().then((win) => {
        cy.stub(win, 'alert').as('alertStub');
      });
  
      // Click "Submit" and check if an alert appears
      cy.get('#submit-directions-button').click();
      cy.get('@alertStub').should('have.been.calledWith', 'The "From" location "Fake Place" was not found.');
    });
  });
  
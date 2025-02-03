describe('Search Functionality', () => {
    beforeEach(() => {
      cy.visit(' http://localhost:5173/');
    });
  
    it('Displays search dropdown and selects a location', () => {
      cy.get('#location-input').type('Library');
  
      cy.get('#location-dropdown').should('be.visible');
  
      cy.get('#location-dropdown .dropdown-item').first().click();
  
      cy.get('#location-input').should('have.value', 'Duggan Library');
    });
  
    it('Searches for a location and updates the map', () => {
      cy.get('#location-input').type('Library');
  
      cy.get('#search-button').click();
  
      cy.get('#location-dropdown').should('not.be.visible');
  
      //cy.window().its('currentSearchedFeature').should('exist');
      
      cy.window().should('have.property', 'map').then((win) => {
        cy.wrap(win.map).should('have.property', 'getView'); 
        cy.wrap(win.map.getView()).its('getZoom').should('be.greaterThan', 10);
      });
      
    });
  });
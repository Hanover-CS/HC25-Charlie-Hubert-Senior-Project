describe('Search Functionality', () => {
    beforeEach(() => {
      // Visit the app
      cy.visit(' http://localhost:5173/');
    });
  
    it('Displays search dropdown and selects a location', () => {
      // Type into the search box
      cy.get('#location-input').type('Library');
  
      // Verify the dropdown appears
      cy.get('#location-dropdown').should('be.visible');
  
      // Click the first dropdown item
      cy.get('#location-dropdown .dropdown-item').first().click();
  
      // Verify input value updates
      cy.get('#location-input').should('have.value', 'Library');
    });
  
    it('Searches for a location and updates the map', () => {
      // Type into the search box
      cy.get('#location-input').type('Library');
  
      // Click the search button
      cy.get('#search-button').click();
  
      // Verify dropdown disappears
      cy.get('#location-dropdown').should('not.be.visible');
  
      // Ensure search function updates the map by checking for the red marker
      cy.window().its('currentSearchedFeature').should('exist');
      
      // Optionally, verify map zoom
      cy.window().its('map').then((map) => {
        expect(map.getView().getZoom()).to.be.greaterThan(10);
      });
    });
  });
describe('Search Functionality', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('Displays search dropdown and selects a location', () => {
    cy.get('#location-input').type('Library'); // Type 'Library' in the search input
    cy.get('#location-dropdown').should('be.visible'); // Ensure dropdown appears

    cy.get('#location-dropdown .dropdown-item').first().click(); // Click the first dropdown item
    cy.get('#location-input').should('have.value', 'Duggan Library'); // Assert input updates
  });

  it('Searches for a location and updates the map', () => {
    cy.get('#location-input').type('Library'); // Type 'Library' in search input
    cy.get('#search-button').click(); // Click the search button

    cy.get('#location-dropdown').should('not.be.visible'); // Ensure dropdown disappears

    cy.window().its('map').should('exist').then((map) => {
      // Ensure map view exists
      expect(map.getView()).to.exist;

      // Check if the map zoom level is adjusted correctly
      cy.wrap(map.getView()).invoke('getZoom').should('be.greaterThan', 10);
    });
  });
});

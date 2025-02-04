describe('Search Functionality', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('Displays search dropdown and selects a location', () => {
    cy.get('#location-input').type('Library');  // Type 'Library' in the search input
    cy.get('#location-dropdown').should('be.visible');  // Ensure dropdown appears

    cy.get('#location-dropdown .dropdown-item').first().click();  // Click the first dropdown item
    cy.get('#location-input').should('have.value', 'Duggan Library');  // Assert input value
  });

  it('Searches for a location and updates the map', () => {
    cy.get('#location-input').type('Library');  // Type 'Library' in search input
    cy.get('#search-button').click();  // Click the search button

    cy.get('#location-dropdown').should('not.be.visible');  // Assert dropdown is hidden after selection

    cy.window().should('have.property', 'map').then((win) => {
      cy.wrap(win.map).should('have.property', 'getView');  // Ensure map object is loaded
      cy.wrap(win.map.getView()).its('getZoom').should('be.greaterThan', 10);  // Assert zoom level > 10
    });
  });
});
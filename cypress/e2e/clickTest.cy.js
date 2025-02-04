describe('Simulate Map Click', () => {
  it('Simulates a click on the map at specific coordinates and verifies sidebar content', () => {
    cy.visit('http://localhost:5173/');

    const featureCoordinates = [-85.4612150852231, 38.7193707];

    // Wait for map to be initialized properly
    cy.window().its('map').should('exist').then((map) => {
      expect(map).to.have.property('getPixelFromCoordinate');

      cy.wait(1000); // Allow the map to settle

      const pixel = map.getPixelFromCoordinate(featureCoordinates);
      expect(pixel).to.exist; // Ensure pixel conversion works

      // Use OpenLayers native dispatch event
      map.dispatchEvent({
        type: 'click',
        coordinate: featureCoordinates, 
        pixel: pixel,
      });

      // Wait for sidebar content to update
      cy.get('#sidebar').should('have.class', 'open');

      // Validate sidebar content
      cy.get('#name').should('not.be.empty');
      cy.get('#info').should('not.be.empty');
      cy.get('#feature-image').should('be.visible');

      cy.get('#name').should('contain', 'Expected Feature Name');
      cy.get('#info').should('contain', 'Expected Feature Info');
    });
  });
});

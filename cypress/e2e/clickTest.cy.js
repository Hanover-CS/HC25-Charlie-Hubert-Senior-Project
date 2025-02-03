describe('Simulate Map Click', () => {
  it('Simulates a click on the map at specific coordinates and verifies popup', () => {
    cy.visit('http://localhost:5173/');

    // Replace with the coordinates you want to test
    const featureCoordinates = [-85.46330330094801, 38.7210059];

    // Ensure map is initialized
    cy.window().should('have.property', 'map').then((window) => {
      const map = window.map;

      if (!map) {
        throw new Error('Map is not initialized yet!');
      }

      // Simulate the feature click by getting the pixel for the coordinates
      const pixel = map.getPixelFromCoordinate(featureCoordinates);
      if (!pixel) {
        console.error('Pixel could not be determined for the given coordinates:', featureCoordinates);
        return;
      }

      // Dispatch the click event
      map.dispatchEvent({ type: 'click', pixel });
      console.log(`Simulated click at coordinates: ${featureCoordinates}`);
    });

    // Verify if the popup is visible (based on your original implementation)
    cy.get('#popup').should('be.visible');

    // Optionally, check the content inside the popup (adjust the text to match the expected feature info)
    cy.get('#popup').should('contain', 'Expected Feature Name or Info');
  });
});

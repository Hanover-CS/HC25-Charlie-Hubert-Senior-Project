describe('Simulate Map Click', () => {
  it('Simulates a click on the map at specific coordinates and verifies sidebar content', () => {
    cy.visit('http://localhost:5173/');

    const featureCoordinates = [-85.4612150852231, 38.7193707];

    cy.window().then((win) => {
      const map = win.map;

      if (!map || typeof map.getPixelFromCoordinate !== 'function') {
        throw new Error('Map is not initialized properly or missing methods!');
      }

      cy.wrap(map).its('getView').should('be.a', 'function');

      cy.wait(1000);

      const pixel = map.getPixelFromCoordinate(featureCoordinates);
      if (!pixel) {
        console.error('Pixel could not be determined for the given coordinates:', featureCoordinates);
        return;
      }

      console.log('Pixel:', pixel);

      const clickEvent = new MouseEvent('click', {
        clientX: pixel[0],
        clientY: pixel[1],
        bubbles: true,
        cancelable: true,
      });

      const mapViewport = map.getViewport();
      mapViewport.dispatchEvent(clickEvent);
    });

    cy.get('#name').should('not.be.empty'); // Check if the name is populated
    cy.get('#info').should('not.be.empty'); // Check if the info is populated
    cy.get('#feature-image').should('be.visible'); 

    cy.get('#name').should('contain', 'Expected Feature Name');
    cy.get('#info').should('contain', 'Expected Feature Info');

    cy.get('#sidebar').should('have.class', 'open'); 
  });
});
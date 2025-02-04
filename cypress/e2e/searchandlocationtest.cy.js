describe('Location Search and Current Location Functionality', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/');
    });
  
    it('should show the location dropdown as user types', () => {
      cy.get('#location-input').type('Duggan');
      
      cy.get('#location-dropdown').should('be.visible');
  
      cy.get('#location-dropdown .dropdown-item').should('contain', 'Duggan Library');
    });
  
    it('should select a location from the dropdown', () => {
      cy.get('#location-input').type('Duggan');
  
      cy.get('#location-dropdown .dropdown-item').first().click();
  
      cy.get('#location-input').should('have.value', 'Duggan Library');
  
      cy.get('#location-dropdown').should('not.be.visible');
    });
  
    it('should search for a location and update the map', () => {
      cy.get('#location-input').type('Library');
  
      cy.get('#search-button').click();
  
      cy.get('#location-dropdown').should('not.be.visible');
  
      cy.window().its('map').then(map => {
        expect(map.getView().getZoom()).to.be.greaterThan(10);
      });
  
      cy.window().its('map').then(map => {
        const features = map.getLayers().item(0).getSource().getFeatures();
        const searchedFeature = features.find(f => f.get('name') === 'Library');
        expect(searchedFeature).to.exist;
      });
    });
  
    it('should trigger current location functionality', () => {
      cy.get('#current-location-btn').click();
  
      cy.window().its('map').then(map => {
        const features = map.getLayers().item(0).getSource().getFeatures();
        const currentLocationFeature = features.find(f => f.get('name') === 'Current Location');
        expect(currentLocationFeature).to.exist;
      });
  
      cy.window().its('map').then(map => {
        expect(map.getView().getZoom()).to.be.greaterThan(10);
      });
    });
  
    it('should close the dropdown when clicking outside of the search container', () => {
      
      cy.get('#location-input').type('Duggan');
      
      cy.get('body').click(0, 0);
  
      cy.get('#location-dropdown').should('not.be.visible');
    });
  });
  
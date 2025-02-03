describe('Feature Creation Test', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173'); 
    });
  
    it('should create a feature with correct properties', () => {
      const featureName = 'Test Feature';
      const featureType = 'Park';
      const featureCoords = [-85.46330330094801, 38.7210059];
      const featureScheduleLink = 'http://test-schedule.com';
      const featureImageUrl = 'http://test-image.com/image.jpg';
      const featureInfo = 'This is a test feature for Cypress';
  
      cy.window().then((window) => {
        const feature = createFeature(
          featureName,
          featureType,
          featureCoords,
          featureScheduleLink,
          featureImageUrl,
          featureInfo
        );
  
        expect(feature).to.have.property('name', featureName);
        expect(feature).to.have.property('type', featureType);
        expect(feature).to.have.property('scheduleLink', featureScheduleLink);
        expect(feature).to.have.property('imageUrl', featureImageUrl);
        expect(feature).to.have.property('info', featureInfo);
  
        const geometry = feature.getGeometry();
        const coordinates = geometry.getCoordinates();
        expect(coordinates).to.deep.equal(fromLonLat(featureCoords)); // Compare the coordinates
      });
    });
  
    it('should display feature on the map', () => {
      const featureName = 'Test Feature';
      const featureCoords = [-85.46330330094801, 38.7210059]; // Longitude, Latitude
  
      cy.window().then((window) => {
        const feature = window.createFeature(
          featureName,
          'Park',
          featureCoords,
          'http://test-schedule.com',
          'http://test-image.com/image.jpg',
          'This is a test feature for Cypress'
        );
  
        const featureOnMap = window.map.getLayers().getArray().find((layer) => {
          return layer.getSource().getFeatures().includes(feature);
        });
  
        expect(featureOnMap).to.not.be.undefined;
      });
    });
  });
  
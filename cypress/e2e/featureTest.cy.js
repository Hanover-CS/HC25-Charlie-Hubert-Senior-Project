import {createFeature} from './../../features'
import { fromLonLat } from 'ol/proj.js';

describe('Feature Creation Test', () => {
  it('should create a feature with correct properties', () => {
    const featureName = 'Test Feature';
    const featureType = 'Park';
    const featureCoords = [-85.46330330094801, 38.7210059];
    const featureScheduleLink = 'http://test-schedule.com';
    const featureImageUrl = 'http://test-image.com/image.jpg';
    const featureInfo = 'This is a test feature for Cypress';
    
    const feature = createFeature(
      featureName,
      featureType,
      featureCoords,
      featureScheduleLink,
      featureImageUrl,
      featureInfo
    );
    
    // Use get() method to access the feature's properties
    expect(feature.get('name')).to.equal(featureName);
    expect(feature.get('type')).to.equal(featureType);
    expect(feature.get('scheduleLink')).to.equal(featureScheduleLink);
    expect(feature.get('imageUrl')).to.equal(featureImageUrl);
    expect(feature.get('info')).to.equal(featureInfo);
    
    // Check coordinates
    const geometry = feature.getGeometry();
    const coordinates = geometry.getCoordinates();
    
    expect(coordinates).to.deep.equal(fromLonLat(featureCoords)); // Compare the coordinates
  });
});

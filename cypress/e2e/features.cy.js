import { createFeature } from './/../../features'; 

describe('Feature Creation Tests', () => {
  it('should create a feature with the correct properties', () => {
    const name = 'Test Feature';
    const type = 'Building';
    const coords = [-14198.801050682045, 6711510.640113423]; 
    const scheduleLink = 'http://example.com/schedule';
    const imageUrl = 'http://example.com/image.png';
    const info = 'This is a test feature.';

    const feature = createFeature(name, type, coords, scheduleLink, imageUrl, info);

    // Assertions to check that the feature was created correctly
    expect(feature).to.have.property('get');
    expect(feature.get('name')).to.equal(name);
    expect(feature.get('type')).to.equal(type);
    expect(feature.get('scheduleLink')).to.equal(scheduleLink);
    expect(feature.get('imageUrl')).to.equal(imageUrl);
    expect(feature.get('info')).to.equal(info);
  });
});

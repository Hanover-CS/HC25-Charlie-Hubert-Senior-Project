import { setFeatureStyle } from './/../../features';
import Feature from 'ol/Feature.js';
import Point from 'ol/geom/Point.js';
import { fromLonLat } from 'ol/proj.js';
import Icon from 'ol/style/Icon.js';
import Style from 'ol/style/Style.js';

describe('Feature Style Scaling Tests', () => {
  it('should dynamically scale the feature icon based on zoom level', () => {
    const feature = new Feature({
      geometry: new Point(fromLonLat([0, 0])),
    });
    const src = 'path/to/icon.png';  // Use a valid image URL
    const zoomLevel = 16;  // Set a zoom level for testing

    // Call setFeatureStyle to set the feature's style based on zoom level
    setFeatureStyle(feature, src, zoomLevel);

    // Use OpenLayers' methods to check the scale of the icon
    const scale = feature.getStyle().getImage().getScale();

    // Assert that the scale is calculated correctly
    expect(scale).to.be.closeTo(0.4, 0.1);  // Adjust the expected scale if needed
  });
});

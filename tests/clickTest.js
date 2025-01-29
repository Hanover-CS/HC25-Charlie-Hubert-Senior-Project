// Simulate a click on the map at specific coordinates
function simulateFeatureClick(coordinates) {
    const map = window.map; // Ensure the map is globally accessible
    const pixel = map.getPixelFromCoordinate(coordinates);
  
    if (!pixel) {
      console.error('Pixel could not be determined for the given coordinates:', coordinates);
      return;
    }
  
    // Simulate the click event
    map.dispatchEvent({ type: 'click', pixel });
  
    console.log(`Simulated click at coordinates: ${coordinates}`);
  }
  
  // Test specific coordinates
  const featureCoordinates = [-85.46330330094801, 38.7210059]; // Replace with actual feature coordinates
  simulateFeatureClick(featureCoordinates);
import './style.css';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile.js';
import VectorLayer from 'ol/layer/Vector.js';
import VectorSource from 'ol/source/Vector.js';
import Feature from 'ol/Feature.js';
import Point from 'ol/geom/Point.js';
import Icon from 'ol/style/Icon.js';
import Style from 'ol/style/Style.js';
import OSM from 'ol/source/OSM.js';
import { fromLonLat } from 'ol/proj.js';

// Coordinates
const coords = {
  hanoverCollege: [-85.462007, 38.716167],
  stadium: [-85.464088, 38.718699],
  soccer: [-85.464750, 38.721432],
  tennis: [-85.465698, 38.717900],
};

const stadiumFeature = new Feature({
  geometry: new Point(fromLonLat(coords.stadium)), 
  imageUrl: 'images/stadiumSidebar.webp',
  info: "The 4,000-seat venue, with its all-weather artificial surface, is home to Hanover's football, men's and women's lacrosse and men's and women's track & field teams. The stadium is a part of Hanover's Outdoor Athletic Complex, which accommodates facilities for 15 of the College's outdoor sports. <br><br>The stadium features a three-level press box, which includes locker rooms, classrooms, athletic training offices and equipment and offices for the Panther football coaching staff. The College's golf team also has an indoor practice facility located on the first floor of the stadium.",
  name: "Stadium"
});

// Create a feature for the soccer field
const soccerFeature = new Feature({
  geometry: new Point(fromLonLat(coords.soccer)), 
  imageUrl: 'images/soccerSidebar.webp',
  info: "The men's and women's soccer programs use two natural turf fields, including a practice and a game field, and also host occasional matches on Alumni Stadium's artificial surface. <br><br> The game field also features the Hagenah Press Box, sheltered benches for each team, a scoreboard at each end of the field, and seating down the far side.",
  name: "Soccer Fields"
});

// Create a feature for the tennis courts
const tennisFeature = new Feature({
  geometry: new Point(fromLonLat(coords.tennis)),
  imageUrl: 'images/tennisSidebar.webp',
  info: "Completed in 2012, the Zeddies Tennis Center, made possible by a gift from Michael ’77 and Judy Zeddies, features a total of eight courts.<br><br>In addition to the eight courts, Zeddies Tennis Center also consists of an adjacent lighted pavilion and storage space. <br><br> Part of the Panther Athletic Complex, Zeddies Tennis Center sits directly behind Alumni Stadium and is adjacent to grass practice fields that are available for the College’s outdoor teams and intramural sports.",
  name: "Tennis Courts"
});

// Create a vector source and add the feature
const vectorSource = new VectorSource({
  features: [soccerFeature, stadiumFeature, tennisFeature], 
});

// Create a vector layer
const vectorLayer = new VectorLayer({
  source: vectorSource,
});

// Create a tile layer for the base map
const tileLayer = new TileLayer({
  source: new OSM(), // Use OpenStreetMap as the base layer
});

// Initialize the map
const map = new Map({
  layers: [tileLayer, vectorLayer], 
  target: 'map',
  view: new View({
    center: fromLonLat(coords.hanoverCollege), // Center on Hanover College
    zoom: 16,
    minZoom: 16
  }),
});

// Function to set icon styles based on zoom level
const setIconStyle = (feature, src) => {
  const zoom = map.getView().getZoom();
  const scale = 0.4 * Math.pow(2, zoom - 16); // Scale based on zoom level
  feature.setStyle(new Style({
    image: new Icon({
      src: src,
      scale: scale, // Dynamically set scale
    })
  }));
};

// Set styles for both features initially
setIconStyle(soccerFeature, 'images/soccerField.png'); // Soccer Field image
setIconStyle(stadiumFeature, 'images/stadium.png'); // Stadium image
setIconStyle(tennisFeature, 'images/tennis.png'); // tennis image

// Update icon styles on zoom change
map.on('moveend', () => {
  setIconStyle(soccerFeature, 'images/soccerField.png');
  setIconStyle(stadiumFeature, 'images/stadium.png');
  setIconStyle(tennisFeature, 'images/tennis.png');
});


// Popup element
const popup = document.getElementById('popup');

// Handle pointer movement
map.on('pointermove', (evt) => {
  if (evt.dragging) return;

  const pixel = map.getEventPixel(evt.originalEvent);
  const feature = map.forEachFeatureAtPixel(pixel, (feature) => feature);

  if (feature) {
    popup.innerHTML = feature.get('name'); // Show name in popup
    popup.style.display = 'block'; // Show popup
    popup.style.left = `${evt.pixel[0] + 15}px`; // makes the popup shown on the cursor
    popup.style.top = `${evt.pixel[1] - 15}px`; 
  } else {
    popup.style.display = 'none'; // Hide popup if no feature
  }
});

// Handle click events to open the sidebar with feature info
map.on('click', (evt) => {
  // Get the pixel from the click event
  const pixel = map.getEventPixel(evt.originalEvent);

  // Get the feature at that pixel, if any
  const feature = map.forEachFeatureAtPixel(pixel, (feature) => feature);

  // Get the sidebar elements where you want to display feature info
  const name = document.getElementById('name');
  const info = document.getElementById('info');
  const image = document.getElementById('feature-image');

  if (feature) {
    // Update the sidebar content with the feature's name
    name.innerHTML = feature.get('name');
    info.innerHTML = feature.get('info');
    // Get the feature's image URL and update the image element
    const imageUrl = feature.get('imageUrl');
    if (imageUrl) {
      image.src = imageUrl;
      image.style.display = 'block';  // Show the image
    } else {
      image.style.display = 'none';  // Hide the image if no URL is present
    }

    // Open the sidebar when a feature is clicked
    openNav(); 
  } else {
    // Close the sidebar if no feature is clicked
    closeNav();
  }
});


// // GraphHopper API endpoint and key
// const graphHopperUrl = 'https://graphhopper.com/api/1/route';
// const apiKey = 'fb91e7f3-a9d7-432d-8cac-e37e79a33585';

// // Function to calculate route using GraphHopper API
// async function calculateRoute(startCoords, endCoords) {
//   try {
//     const response = await axios.get(graphHopperUrl, {
//       params: {
//         point: [startCoords.join(','),][endCoords.join(',')],
//         vehicle: 'car',
//         locale: 'en',
//         key: apiKey,
//       }
//     });

//     const route = response.data.paths[0].points.coordinates;
//     const routeCoords = route.map(coord => fromLonLat(coord));
//     return routeCoords;
//   } catch (error) {
//     console.error('Error fetching route:', error);
//   }
// }

// // Add route to the map
// async function addRoute(startLonLat, endLonLat) {
//   const routeCoords = await calculateRoute(startLonLat, endLonLat);
  
//   if (routeCoords) {
//     const routeFeature = new Feature({
//       geometry: new LineString(routeCoords),
//     });

//     const vectorSource = map.getLayers().getArray().find(layer => layer instanceof VectorLayer).getSource();
//     vectorSource.clear(); // Clear any existing features
//     vectorSource.addFeature(routeFeature);
//   }
// }

// // Example start and end coordinates
// const startLonLat = toLonLat([-85.462007, 38.716167]);
// const endLonLat = toLonLat([-85.452007, 38.726167]); 

// // Add route to map
// addRoute(startLonLat, endLonLat);

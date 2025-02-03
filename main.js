import './style.css';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile.js';
import VectorLayer from 'ol/layer/Vector.js';
import VectorSource from 'ol/source/Vector.js';
import Feature from 'ol/Feature.js';
import Point from 'ol/geom/Point.js';
import Icon from 'ol/style/Icon.js';
import {Fill, Stroke, Circle as CircleStyle } from 'ol/style';
import Style from 'ol/style/Style.js';
import OSM from 'ol/source/OSM.js';
import { fromLonLat } from 'ol/proj.js';
import stadium from "./assets/images/stadium.png";
import soccerField from "./assets/images/soccerField.png";
import tennis from "./assets/images/tennis.png";
import baseball from "./assets/images/baseball.png";
import softball from "./assets/images/softball.png";
import phidelt from "./assets/images/phidelt.png"
import lambda from "./assets/images/lambda.png"
import sigma from "./assets/images/sigma.png";
import fiji from "./assets/images/fiji.png";
import chio from "./assets/images/chio.png";
import adpi from "./assets/images/adpi.png";
import phimu from "./assets/images/phimu.png";
import theta from "./assets/images/theta.jpg";
import dining from "./assets/images/dining.png"
import residence from "./assets/images/residencehall.png"
import library from "./assets/images/library.png"
import classroom from "./assets/images/classroom.png"
import thepoint from "./assets/images/thepoint.png";
import stars from "./assets/images/stars.png";
import gym from "./assets/images/gym.png";
import basketball from "./assets/images/basketball.jpg";
import { soccerSchedule, stadiumSchedule, tennisSchedule, baseballSchedule, softballSchedule, arenaSchedule, displayGames } from './schedule.js';
import {soccerFeature, stadiumFeature, tennisFeature, softballFeature, baseballFeature, phiDeltaThetaFeature, lambdaChiAlphaFeature,
  sigmaChiFeature, fijiFeature, chiOmegaFeature, adpiFeature, phimuFeature, thetaFeature, shoeboxFeature, ugFeature, greenwoodSuitesFeature, dugganLibraryFeature, 
  coulterFeature, scienceCenterFeature, pointFeature, hornerFeature, arenaFeature, classicHallFeature, scienceHallFeature, lynnHallFeature,
  blytheFeature, croweFeature, donnerFeature, wileyFeature, ideFeature, kpFeature, CulberstonObservatoryFeature, cfaFeature, ccFeature, ogleFeature
 , setFeatureStyle } from './features';
import {coords} from './coords';

const featuresArray = [soccerFeature, stadiumFeature, tennisFeature, softballFeature, baseballFeature, phiDeltaThetaFeature, lambdaChiAlphaFeature,
  sigmaChiFeature, fijiFeature, chiOmegaFeature, adpiFeature, phimuFeature, thetaFeature, shoeboxFeature, ugFeature, greenwoodSuitesFeature, dugganLibraryFeature, 
  coulterFeature, scienceCenterFeature, pointFeature, hornerFeature, arenaFeature, classicHallFeature, scienceHallFeature, lynnHallFeature,
  blytheFeature, croweFeature, donnerFeature, wileyFeature, ideFeature, kpFeature, CulberstonObservatoryFeature, cfaFeature, ccFeature, ogleFeature
];
// for feature of array feature name : feature

// Create a vector source and add the feature
const vectorSource = new VectorSource({
  features: featuresArray, 
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
    minZoom: 16,
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

// Apply styles based on zoom level
// athletic
setFeatureStyle(stadiumFeature, stadium, map.getView().getZoom());
setFeatureStyle(soccerFeature, soccerField, map.getView().getZoom());
setFeatureStyle(tennisFeature, tennis, map.getView().getZoom());
setFeatureStyle(baseballFeature, baseball, map.getView().getZoom());
setFeatureStyle(softballFeature, softball, map.getView().getZoom());
setFeatureStyle(hornerFeature, gym, map.getView().getZoom());
setFeatureStyle(arenaFeature, basketball, map.getView().getZoom());


// greek
setFeatureStyle(phiDeltaThetaFeature, phidelt, map.getView().getZoom());
setFeatureStyle(lambdaChiAlphaFeature, lambda, map.getView().getZoom());
setFeatureStyle(sigmaChiFeature, sigma, map.getView().getZoom());
setFeatureStyle(fijiFeature, fiji, map.getView().getZoom());
setFeatureStyle(chiOmegaFeature, chio, map.getView().getZoom());
setFeatureStyle(adpiFeature, adpi, map.getView().getZoom());
setFeatureStyle(phimuFeature, phimu, map.getView().getZoom());
setFeatureStyle(thetaFeature, theta, map.getView().getZoom());

// misc
setFeatureStyle(pointFeature, thepoint, map.getView().getZoom());
setFeatureStyle(CulberstonObservatoryFeature, stars, map.getView().getZoom());

// dining
setFeatureStyle(shoeboxFeature, dining, map.getView().getZoom());
setFeatureStyle(ugFeature, dining, map.getView().getZoom());
setFeatureStyle(ccFeature, dining, map.getView().getZoom());

// academic
setFeatureStyle(dugganLibraryFeature, library, map.getView().getZoom());
setFeatureStyle(scienceCenterFeature, classroom, map.getView().getZoom());
setFeatureStyle(classicHallFeature, classroom, map.getView().getZoom());
setFeatureStyle(cfaFeature, classroom, map.getView().getZoom());
setFeatureStyle(lynnHallFeature, classroom, map.getView().getZoom());
setFeatureStyle(scienceHallFeature, classroom, map.getView().getZoom());

// residence
setFeatureStyle(greenwoodSuitesFeature, residence, map.getView().getZoom());
setFeatureStyle(ogleFeature, residence, map.getView().getZoom());
setFeatureStyle(coulterFeature, residence, map.getView().getZoom());
setFeatureStyle(blytheFeature, residence, map.getView().getZoom());
setFeatureStyle(donnerFeature, residence, map.getView().getZoom());
setFeatureStyle(croweFeature, residence, map.getView().getZoom());
setFeatureStyle(wileyFeature, residence, map.getView().getZoom());
setFeatureStyle(ideFeature, residence, map.getView().getZoom());
setFeatureStyle(kpFeature, residence, map.getView().getZoom());


// Update icon styles on zoom change
map.on('moveend', () => {
  setIconStyle(soccerFeature, soccerField);
  setIconStyle(stadiumFeature, stadium);
  setIconStyle(tennisFeature, tennis);
  setIconStyle(baseballFeature, baseball);
  setIconStyle(softballFeature, softball);
  setIconStyle(hornerFeature, gym);
  setIconStyle(arenaFeature, basketball);

  setIconStyle(phiDeltaThetaFeature, phidelt);
  setIconStyle(lambdaChiAlphaFeature, lambda);  
  setIconStyle(sigmaChiFeature, sigma);
  setIconStyle(fijiFeature, fiji);
  setIconStyle(chiOmegaFeature, chio);
  setIconStyle(adpiFeature, adpi);
  setIconStyle(phimuFeature, phimu);
  setIconStyle(thetaFeature, theta);

  setIconStyle(pointFeature, thepoint);
  setIconStyle(CulberstonObservatoryFeature, stars)

  setIconStyle(shoeboxFeature, dining);
  setIconStyle(ugFeature, dining);
  setIconStyle(ccFeature, dining);

  setIconStyle(dugganLibraryFeature, library);
  setIconStyle(scienceCenterFeature, classroom);
  setIconStyle(classicHallFeature, classroom);
  setIconStyle(scienceHallFeature, classroom);
  setIconStyle(lynnHallFeature, classroom);
  setIconStyle(cfaFeature, classroom);


  setIconStyle(greenwoodSuitesFeature, residence);  
  setIconStyle(ogleFeature, residence);
  setIconStyle(coulterFeature, residence);
  setIconStyle(blytheFeature, residence);
  setIconStyle(donnerFeature, residence);
  setIconStyle(croweFeature, residence);
  setIconStyle(wileyFeature, residence);
  setIconStyle(ideFeature, residence);
  setIconStyle(kpFeature, residence);

});

// Popup element
const popup = document.getElementById('popup');

// Handle pointer movement
map.on('pointermove', (evt) => {
  if (evt.dragging) return;

  const pixel = map.getEventPixel(evt.originalEvent);
  const feature = map.forEachFeatureAtPixel(pixel, (feature) => feature); // for each pixel the feature is covering then...

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
  const pixel = map.getEventPixel(evt.originalEvent);
  const feature = map.forEachFeatureAtPixel(pixel, (feature) => {if(feature.get('type') == 'red_marker' || feature.get('type') == 'current_location_marker' ) return false; else return feature}); // makes the red and blue markers unclickable

  const name = document.getElementById('name');
  const info = document.getElementById('info');
  const image = document.getElementById('feature-image');
  const events = document.getElementById('events');

  // Clear previous content in the sidebar
  name.innerHTML = '';
  info.innerHTML = '';
  image.style.display = 'none'; // Hide image initially
  events.innerHTML = ''; // Clear events if needed
  if (feature) { // Check if feature is not the red marker
    // Update sidebar with feature details
    name.innerHTML = feature.get('name');
    info.innerHTML = feature.get('info');

    const imageUrl = feature.get('imageUrl');
    if (imageUrl) {
      image.src = imageUrl;
      image.style.display = 'block'; // Show the image
    }

    const featureName = feature.get('name');
    const scheduleLink = feature.get('scheduleLink') || '';

    if (feature.get('type') == 'Athletics') {
      // Call displayGames function for the relevant schedule
      if (featureName === 'Soccer Fields') {
        displayGames(soccerSchedule);
        info.innerHTML += `<p><a href="${scheduleLink[0]}" target="_blank">View Mens Soccer Schedule</a></p>`;
        info.innerHTML += `<p><a href="${scheduleLink[1]}" target="_blank">View Womens Soccer Schedule</a></p>`;
      } else if (featureName === 'Alumni Stadium') {
        displayGames(stadiumSchedule);
        info.innerHTML += `<p><a href="${scheduleLink[0]}" target="_blank">View Football Schedule</a></p>`;
        info.innerHTML += `<p><a href="${scheduleLink[1]}" target="_blank">View Mens Lacrosse Schedule</a></p>`;
        info.innerHTML += `<p><a href="${scheduleLink[2]}" target="_blank">View Womens Lacrosse Schedule</a></p>`;
      } 
      else if (featureName === 'Collier Arena') {
        displayGames(arenaSchedule);
        info.innerHTML += `<p><a href="${scheduleLink[0]}" target="_blank">View Mens Basketball Schedule</a></p>`;
        info.innerHTML += `<p><a href="${scheduleLink[1]}" target="_blank">View Womens Basketball Schedule</a></p>`;
        info.innerHTML += `<p><a href="${scheduleLink[2]}" target="_blank">View Womens Volleyball Schedule</a></p>`;
      }
      else if (featureName === "Zeddies Tennis Center") {
        displayGames(tennisSchedule);
        info.innerHTML += `<p><a href="${scheduleLink[0]}" target="_blank">View Mens Tennis Schedule</a></p>`;
        info.innerHTML += `<p><a href="${scheduleLink[1]}" target="_blank">View Womens Tennis Schedule</a></p>`;
      } else if (featureName === "K.T. Young Ballpark") {
      displayGames(baseballSchedule);
      info.innerHTML += `<p><a href="${scheduleLink}" target="_blank">View Baseball Schedule</a></p>`;
      } else if (featureName === "Kops-Bedel Stadium") {
      displayGames(softballSchedule);
      info.innerHTML += `<p><a href="${scheduleLink}" target="_blank">View Softball Schedule</a></p>`;
      }
    } 
    else if(feature.get('type') == 'Library'){
      info.innerHTML += `<p><a href="${scheduleLink}" target="_blank">View ${featureName} Website</a></p>`;
    }
    else if(feature.get('type') == 'Dining'){
      info.innerHTML += `<p><a href="${scheduleLink}" target="_blank">View ${featureName} Menu</a></p>`;
      // 3D info.innerHTML += `<p><a href="${'https://my.matterport.com/show/?m=uvZL11HVeY5'}" target="_blank">View ${featureName} 3D</a></p>`;
    }
    else if (feature.get('type') == 'Arts'){
      info.innerHTML += `<p><a href="${scheduleLink}" target="_blank">View ${featureName} Performance Schedule</a></p>`;
    }
    else {
      info.innerHTML += '';
    }
    openNav(); // Open sidebar
  } else {
    closeNav(); // Close sidebar if no feature is clicked
  }
});

// Define the bounding box around Hanover College
const boundingBox = {
  southWest: { lat: 38.711676, lon: -85.467831 },
  northEast: { lat: 38.722320, lon: -85.455214 },
};

const locationsInBBox = [
  "Culbertson Observatory", "Soccer Fields", "Zeddies Tennis Center", "K.T. Young Ballpark", "Kops-Bedel Stadium",
  "The Shoebox", "Alumni Stadium", "Phi Delta Theta", "Coulter House", "Lynn Center for Fine Arts", "Greenwood Suites", "File House",
  "Lambda Chi Fraternity", "Sigma Chi Fraternity", "Charters of Freedom", "Wiley Hall", "Horner Center", "Duggan Library", "Blythe Hall", "Newby Hall",
  "Admission", "IT/Academic Computing", "Crowe Hall", "Lynn Hall", "Faculty Office Building", "Science Center", "Science Hall", "Parker Hall", "Classic Hall",
  "Hendricks Hall", "President's Residence", "Brown Chapel", "Brown Campus Center", "The Quad", "Donner Lawn", "Long Adminstration Building",
  "Donner Hall", "Ide Hall", "The Other Place", "Phi Gamma Delta Fraternity", "Ogle Center", "Campus Safety", "Katharine Parker Hall", "Chi Omega Sorority",
  "Alpha Delta Pi Sorority", "Phi Mu Sorority", "Kappa Alpha Theta Sorority", "The Underground", "The Point", "Collier Arena"
]// used in the location dropdown

const locationInput = document.getElementById("location-input");
const locationDropdown = document.getElementById("location-dropdown");

// Function to filter the list of locations based on user input
function filterLocations(query) {
    if (!query) {
        locationDropdown.style.display = "none";
        return;
    }
    const filteredLocations = locationsInBBox.filter(location => {
        return location.toLowerCase().includes(query.toLowerCase());
    });
    locationDropdown.innerHTML = ""; // Clear previous dropdown items
    if (filteredLocations.length > 0) {
        locationDropdown.style.display = "block"; // Show dropdown
        filteredLocations.forEach(location => {
            const item = document.createElement("div");
            item.classList.add("dropdown-item");
            item.textContent = location;
            item.onclick = () => selectLocation(location);
            locationDropdown.appendChild(item);
        });
    } else {
        locationDropdown.style.display = "none"; // Hide dropdown if no matches
    }
}

  // Function to handle the location selection
  function selectLocation(location) {
      locationInput.value = location; // Set input value to the selected location
      locationDropdown.style.display = "none"; // Hide dropdown
      console.log(`Selected location: ${location}`);
  }

  // Event listener for input field
  locationInput.addEventListener("input", (e) => {
      const query = e.target.value;
      filterLocations(query);
  });

  // Event listener for search button
  document.getElementById('search-button').addEventListener('click', () => {
      const query = locationInput.value;
      filterLocations(query);
  });

  // Close dropdown if user clicks outside of the search container
  document.addEventListener("click", (e) => {
      if (!document.getElementById("search-container").contains(e.target)) {
          locationDropdown.style.display = "none";
      }
  });

// Variable to hold the current red marker feature
let currentSearchedFeature = null;

// Function to search for a location
function searchLocation() {
  const location = document.getElementById('location-input').value;

  const bbox = `${boundingBox.southWest.lon},${boundingBox.southWest.lat},${boundingBox.northEast.lon},${boundingBox.northEast.lat}`;

  fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(location)}&format=json&bounded=1&viewbox=${bbox}`)
    .then(response => response.json())
    .then(data => {
      if (data.length > 0) {
        const { lat, lon } = data[0];
        console.log(lon, lat);
        // Remove the existing red marker if it exists
        if (currentSearchedFeature) {
          vectorSource.removeFeature(currentSearchedFeature);
        }

        // Create a new feature for the searched location
        currentSearchedFeature = new Feature({
          geometry: new Point(fromLonLat([lon, lat])),
          name: location,
          type: "red_marker"
        });

        // Style for the red marker
        currentSearchedFeature.setStyle(new Style({
          image: new CircleStyle({
            radius: 10,
            fill: new Fill({ color: 'red' }),
            stroke: new Stroke({ color: 'darkred', width: 2 }),
          }),
        }));

        // Add the new feature to the vector source
        vectorSource.addFeature(currentSearchedFeature);

        // Set the view to the new location and zoom in
        map.getView().setCenter(fromLonLat([lon, lat]));
        map.getView().setZoom(18);

      } else {
        const features = vectorSource.getFeatures();
        const foundFeature = features.find(feature => feature.get('name') === location);

        if (foundFeature) {
          // Remove the existing red marker if it exists
          if (currentSearchedFeature) {
            vectorSource.removeFeature(currentSearchedFeature);
          }

          // Get the coordinates of the found feature
          const coordinates = foundFeature.getGeometry().getCoordinates();

          // Create a red marker feature at the found coordinates
          currentSearchedFeature = new Feature({
            name: location,
            type: 'red_marker',
            geometry: new Point(coordinates),
          });

          // Style for the red marker
          currentSearchedFeature.setStyle(new Style({
            image: new CircleStyle({
              radius: 10,
              fill: new Fill({ color: 'red' }),
              stroke: new Stroke({ color: 'darkred', width: 2 }),
            }),
          }));

          // Add the red marker feature to the vector source
          vectorSource.addFeature(currentSearchedFeature);

          // Center the map on the found feature and zoom in
          map.getView().setCenter(coordinates);
          map.getView().setZoom(18);
        } else {
          throw new Error('Location not found in the specified area or existing features.');
        }
      }
    })
    .catch(error => console.error('Error fetching location:', error));
}

// Function to hide the dropdown
function hideDropdown() {
  document.getElementById('location-dropdown').style.display = 'none';
}

// Event listener for the search button
document.getElementById('search-button').addEventListener('click', function () {
  searchLocation();
  hideDropdown();  // Hide the dropdown when search is clicked
});

// Button to trigger the current location feature
const currentLocationButton = document.getElementById('current-location-btn');

// Variable to store the current location marker
let currentLocationFeature = null;

// Function to get the current location and update the map
function goToCurrentLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      // Remove previous current location feature if it exists
      if (currentLocationFeature) {
        vectorSource.removeFeature(currentLocationFeature);
      }

      // Create a feature for the user's current location
      currentLocationFeature = new Feature({
        geometry: new Point(fromLonLat([longitude, latitude])),
        name: 'Current Location',
        type: 'current_location_marker',
      });

      // Style for the current location marker (blue dot)
      currentLocationFeature.setStyle(new Style({
        image: new CircleStyle({
          radius: 10,
          fill: new Fill({ color: 'blue' }),
          stroke: new Stroke({ color: 'darkblue', width: 2 }),
        }),
      }));

      // Add the current location feature to the vector source
      vectorSource.addFeature(currentLocationFeature);

      // Center the map on the user's current location and zoom in
      map.getView().setCenter(fromLonLat([longitude, latitude]));
      map.getView().setZoom(18); // Adjust zoom level if necessary
    }, (error) => {
      // Handle geolocation errors
      alert('Error getting current location: ' + error.message);
    });
  } else {
    alert('Geolocation is not supported by this browser.');
  }
}

// Event listener for the "current location" button
currentLocationButton.addEventListener('click', goToCurrentLocation);
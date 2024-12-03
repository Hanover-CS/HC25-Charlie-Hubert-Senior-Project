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
import phidelt from "./assets/images/phidelt.png"
import dining from "./assets/images/dining.png"
import residence from "./assets/images/residencehall.png"
import library from "./assets/images/library.png"
import stadiumSidebar from "./assets/images/stadiumSidebar.png";
import soccerSidebar from "./assets/images/soccerSidebar.png";
import tennisSidebar from "./assets/images/tennisSidebar.png";
import phiDeltaThetaSidebar from "./assets/images/phideltSidebar.jpg";
import shoeboxSidebar from "./assets/images/shoeboxSidebar.jpg";
import greenwoodSidebar from "./assets/images/greenwoodSidebar.jpg";
import dugganLibrarySidebar from "./assets/images/librarySidebar.jpg";
import coulterSidebar from "./assets/images/coulterSidebar.jpg";
import blytheSidebar from "./assets/images/blytheSidebar.jpg";

import { soccerSchedule, footballSchedule, tennisSchedule, displayGames } from './schedule.js';
import { createFeature, setFeatureStyle } from './features';
import {coords} from './coords';

// athletic features
const stadiumFeature = createFeature("Alumni Stadium", "Athletics", coords.stadium, 'https://athletics.hanover.edu/sports/football/schedule/2024', stadiumSidebar, "The 4,000-seat venue, with its all-weather artificial surface, is home to Hanover's football, men's and women's lacrosse and men's and women's track & field teams. The stadium is a part of Hanover's Outdoor Athletic Complex, which accommodates facilities for 15 of the College's outdoor sports. <br><br>The stadium features a three-level press box, which includes locker rooms, classrooms, athletic training offices and equipment and offices for the Panther football coaching staff. The College's golf team also has an indoor practice facility located on the first floor of the stadium.");
const soccerFeature = createFeature("Soccer Fields", "Athletics", coords.soccer, 'https://athletics.hanover.edu/sports/mens-soccer/schedule/2024', soccerSidebar, "The men's and women's soccer programs use two natural turf fields, including a practice and a game field, and also host occasional matches on Alumni Stadium's artificial surface. <br><br> The game field also features the Hagenah Press Box, sheltered benches for each team, a scoreboard at each end of the field, and seating down the far side.");
const tennisFeature = createFeature("Tennis Courts", "Athletics", coords.tennis, 'https://athletics.hanover.edu/sports/mens-tennis/schedule/2023-24', tennisSidebar, "Completed in 2012, the Zeddies Tennis Center, made possible by a gift from Michael ’77 and Judy Zeddies, features a total of eight courts.<br><br>In addition to the eight courts, Zeddies Tennis Center also consists of an adjacent lighted pavilion and storage space. <br><br> Part of the Panther Athletic Complex, Zeddies Tennis Center sits directly behind Alumni Stadium and is adjacent to grass practice fields that are available for the College’s outdoor teams and intramural sports.");

// dining features
const shoeboxFeature = createFeature("The Shoebox", "Dining", coords.shoebox, 'https://hanoverdining.catertrax.com/shopportal.asp?pageref=WeeklyMenu&intOrderID=&intCustomerID=', shoeboxSidebar, "The Shoebox is a place where you can kick back and relax with friends while enjoying various activities such as- singing karaoke, listening to DJs and bands or watching sports and your favorite TV shows. <br><br>The menu includes items such as: wraps, burgers, wings/tenders, quesadillas, salads, shakes and more! We also offer beer and wine to those who are 21 years of age and over.<br><br>ACADEMIC YEAR HOURS <br>Monday: Closed<br><br>Tuesday - Sunday: 5pm — 10pm<br><br>Meal Exchange Hours: Tuesday - Sunday: 5pm — 10pm<br>(All Plans limited to 1 swipe per Retail Meal Period)");

// greek features
const phiDeltaThetaFeature = createFeature("Phi Delta Theta", "Greek", coords.PhiDeltaTheta, 'https://hanover.phideltatheta.org/' , phiDeltaThetaSidebar, "Phi Delta Theta is a prominent fraternity at Hanover College, focused on leadership and academic success. The fraternity provides a supportive community for its members.");

// residence features
const greenwoodSuitesFeature = createFeature("Greenwood Suites", "Residence Hall", coords.greenwood, '', greenwoodSidebar, "HOUSES: 72 STUDENTS <br><br>AVERAGE ROOM SIZE: 14’1″ X 12’4″ <br><br>Students living in the Greenwood Suites are more autonomous with only upper-class students living in the complex. The individual suites in Greenwood house students in a suite of three bedrooms. Two bedrooms share a bath, while the third has its own bathroom. Two lower-level suites have roll-in showers to make them handicap-accessible. Each suite has a small efficiency kitchen with a compact refrigerator and a sink. A range is not allowed; however, the residents may bring in a microwave. All suites are air-conditioned with full laundry facilities available onsite.");
const coulterFeature = createFeature("Coulter House", "Residence Hall", coords.coulter, '', coulterSidebar, "HOUSES: 38 STUDENTS<br><br>AVERAGE ROOM SIZE: 13′ X 12′<br><br>Built in 2003 and named for botanists John Merle Coulter and Stanley Moses Coulter, great-grandsons of John Finley Crowe, Hanover’s founder.<br><br>Coulter House houses approximately 38 students in a traditional style. Most rooms are doubles, but there are a few single rooms as well as one triple and one quad. There are common bathrooms for each wing, as well as common lounges and laundry facilities." )
//const croweFeature = createFeature("Crowe Hall", "Residence Hall", coords.coulter, '', coulterSidebar, "HOUSES: 120 STUDENTS<br><br>AVERAGE ROOM SIZE: 13′ X 12′<br><br>Built in 2003 and named for botanists John Merle Coulter and Stanley Moses Coulter, great-grandsons of John Finley Crowe, Hanover’s founder.<br>Coulter House houses approximately 38 students in a traditional style. Most rooms are doubles, but there are a few single rooms as well as one triple and one quad. There are common bathrooms for each wing, as well as common lounges and laundry facilities." )
//const donnerFeature = createFeature("Donner Hall", "Residence Hall", coords.coulter, '', coulterSidebar, "HOUSES: 38 STUDENTS<br><br>AVERAGE ROOM SIZE: 13′ X 12′<br><br>Built in 2003 and named for botanists John Merle Coulter and Stanley Moses Coulter, great-grandsons of John Finley Crowe, Hanover’s founder.<br>Coulter House houses approximately 38 students in a traditional style. Most rooms are doubles, but there are a few single rooms as well as one triple and one quad. There are common bathrooms for each wing, as well as common lounges and laundry facilities." )
const blytheFeature = createFeature("Blythe Hall", "Residence Hall", coords.blythe, '', blytheSidebar, "HOUSES: 40 FIRST-YEAR STUDENTS<br><br>AVERAGE ROOM SIZE: 13′ X 13′2″<br><br>Blythe features double rooms. Each floor has a common bathroom. The basement also houses a common lounge, kitchen and laundry facilities." )



// Academic features
const dugganLibraryFeature = createFeature("Duggan Library", "Library", coords.library, 'https://www.hanover.edu/library', dugganLibrarySidebar, "Duggan Library is the main library at Hanover College, offering a wide selection of books, journals, and digital resources for students and faculty.<br><br>The first floor remains open until closing time. The second and third floors close 15 minutes prior to the listed closing time.<br><br>Monday - Thursday: 7:30 a.m. - 10:00 p.m.<br>Friday: 7:30 a.m. - 5:00 p.m.<br>Saturday: noon - 5:00 p.m.<br>Sunday: 1:00 p.m. - 10:00 p.m.");


const featuresArray = [soccerFeature, stadiumFeature, tennisFeature, phiDeltaThetaFeature, shoeboxFeature, greenwoodSuitesFeature, dugganLibraryFeature, coulterFeature,
  blytheFeature
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
setFeatureStyle(stadiumFeature, stadium, map.getView().getZoom());
setFeatureStyle(soccerFeature, soccerField, map.getView().getZoom());
setFeatureStyle(tennisFeature, tennis, map.getView().getZoom());
setFeatureStyle(phiDeltaThetaFeature, phidelt, map.getView().getZoom());
setFeatureStyle(shoeboxFeature, dining, map.getView().getZoom());
setFeatureStyle(greenwoodSuitesFeature, residence, map.getView().getZoom());
setFeatureStyle(dugganLibraryFeature, library, map.getView().getZoom());
setFeatureStyle(coulterFeature, residence, map.getView().getZoom());
setFeatureStyle(blytheFeature, residence, map.getView().getZoom());


// Update icon styles on zoom change
map.on('moveend', () => {
  setIconStyle(soccerFeature, soccerField);
  setIconStyle(stadiumFeature, stadium);
  setIconStyle(tennisFeature, tennis);
  setIconStyle(phiDeltaThetaFeature, phidelt);
  setIconStyle(shoeboxFeature, dining);
  setIconStyle(greenwoodSuitesFeature, residence);
  setIconStyle(dugganLibraryFeature, library);
  setIconStyle(coulterFeature, residence);
  setIconStyle(blytheFeature, residence);
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
  const pixel = map.getEventPixel(evt.originalEvent);
  const feature = map.forEachFeatureAtPixel(pixel, (feature) => {if(feature.get('type') == 'red_marker' || feature.get('type') == 'current_location_marker' ) return false; else return feature});

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
      info.innerHTML += `<p><a href="${scheduleLink}" target="_blank">View ${featureName} Schedule</a></p>`;
      // Call displayGames function for the relevant schedule
      if (featureName === 'Soccer Fields') {
        displayGames(soccerSchedule);
      } else if (featureName === 'Alumni Stadium') {
        displayGames(footballSchedule);
      } else if (featureName === 'Tennis Courts') {
        displayGames(tennisSchedule);
      }
    } 
    else if(feature.get('type') == 'Library'){
      info.innerHTML += `<p><a href="${scheduleLink}" target="_blank">View ${featureName} Website</a></p>`;
    }
    else if(feature.get('type') == 'Dining'){
      info.innerHTML += `<p><a href="${scheduleLink}" target="_blank">View ${featureName} Menu</a></p>`;
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
  northEast: { lat: 38.721320, lon: -85.455214 },
};

const locationsInBBox = [
  "Culberston Observatory", "The Shoebox", "Alumni Stadium", "Phi Delta Theta", "Coulter House", "Lynn Center for Fine Arts", "Greenwood Suites", "File House",
  "Lambda Chi Fraternity", "Sigma Chi Fraternity", "Charters of Freedom", "Wiley Hall", "Horner Center", "Duggan Library", "Blythe Hall", "Newby Hall",
  "Admission", "IT/Academic Computing", "Crowe Hall", "Lynn Hall", "Faculty Office Building", "Science Center", "Science Hall", "Parker Hall", "Classic Hall",
  "Hendricks Hall", "President's Residence", "Brown Chapel", "Brown Campus Center", "The Quad", "Donner Lawn", "Long Adminstration Building",
  "Donner Hall", "Ide Hall", "The Other Place", "Phi Gamma Delta Fraternity", "Ogle Center", "Campus Safety", "Katharine Parker Hall", "Chi Omega Sorority",
  "Alpha Delta Pi Sorority", "Phi Mu Sorority", "Kappa Alpha Theta Sorority"
]

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
      // You can add additional functionality here, like zooming into the map
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
      filterLocations(query); // Apply the same filtering logic when clicking the search button
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

  // Same bounding box logic as before
  const bbox = `${boundingBox.southWest.lon},${boundingBox.southWest.lat},${boundingBox.northEast.lon},${boundingBox.northEast.lat}`;

  fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(location)}&format=json&bounded=1&viewbox=${bbox}`)
    .then(response => response.json())
    .then(data => {
      if (data.length > 0) {
        const { lat, lon } = data[0];
        console.log(lat, lon);
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
        alert('Location not found in the specified area');
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
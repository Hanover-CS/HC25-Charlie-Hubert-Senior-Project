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
import stadium from "./assets/images/stadium.png";
import soccerField from "./assets/images/soccerField.png";
import tennis from "./assets/images/tennis.png";
import stadiumSidebar from "./assets/images/stadiumSidebar.webp";
import soccerSidebar from "./assets/images/soccerSidebar.webp";
import tennisSidebar from "./assets/images/tennisSidebar.webp";

// Coordinates
const coords = {
  hanoverCollege: [-85.462007, 38.716167],
  stadium: [-85.464088, 38.718699],
  soccer: [-85.464750, 38.721432],
  tennis: [-85.465698, 38.717900],
};

const soccerSchedule = [
  { date: "2024-08-19", time: "5:00 PM CST", location: "Evansville, IN", opponent: "University of Evansville", result: "", type: "Men's Soccer" },
  { date: "2024-08-20", time: "4:30 PM", location: "Columbus, IN", opponent: "IUPUC", result: "", type: "Men's Soccer" },
  { date: "2024-08-30", time: "7:30 PM", location: "Louisville, KY", opponent: "Spalding University (Ky.)", result: "W 3-1", type: "Men's Soccer" },
  { date: "2024-09-01", time: "5:30 PM", location: "Louisville, KY", opponent: "Centre College", result: "L 1-3", type: "Men's Soccer" },
  { date: "2024-09-06", time: "5:00 PM", location: "Westerville, OH", opponent: "Otterbein University", result: "L 0-1", type: "Men's Soccer" },
  { date: "2024-09-07", time: "5:00 PM", location: "Columbus, OH", opponent: "Capital University", result: "T 1-1", type: "Men's Soccer" },
  { date: "2024-09-13", time: "5:00 PM", location: "Greencastle, IN", opponent: "DePauw University", result: "L 0-2", type: "Men's Soccer" },
  { date: "2024-09-14", time: "4:00 PM", location: "Hanover, IN", opponent: "Wilmington College", result: "T 3-3", type: "Men's Soccer" },
  { date: "2024-09-18", time: "5:00 PM", location: "Crawfordsville, IN", opponent: "Wabash College", result: "W 1-0", type: "Men's Soccer" },
  { date: "2024-09-21", time: "3:30 PM", location: "Hanover, IN", opponent: "Asbury University (Ky.)", result: "L 1-2", type: "Men's Soccer" },
  { date: "2024-09-29", time: "5:30 PM", location: "Anderson, IN", opponent: "Anderson University (IN)", result: "L 0-3", type: "Men's Soccer" },
  { date: "2024-10-05", time: "3:30 PM", location: "Hanover, IN", opponent: "Bluffton University", result: "W 2-0", type: "Men's Soccer" },
  { date: "2024-10-09", time: "3:30 PM", location: "Hanover, IN", opponent: "Rose-Hulman", result: "T 0-0", type: "Men's Soccer" },
  { date: "2024-10-12", time: "3:30 PM", location: "North Manchester, IN", opponent: "Manchester University", result: "W 3-1", type: "Men's Soccer" },
  { date: "2024-10-16", time: "3:30 PM", location: "Hanover, IN", opponent: "Mount St. Joseph University", result: "W 9-0", type: "Men's Soccer" },
  { date: "2024-10-19", time: "3:30 PM", location: "Hanover, IN", opponent: "Berea College (Ky.)", result: "W 5-0", type: "Men's Soccer" },
  { date: "2024-10-23", time: "7:00 PM", location: "Lexington, KY", opponent: "Transylvania University", result: "T 0-0", type: "Men's Soccer" },
  { date: "2024-10-26", time: "3:30 PM", location: "Richmond, IN", opponent: "Earlham College", result: "", type: "Men's Soccer" },
  { date: "2024-10-29", time: "7:00 PM", location: "Franklin, IN", opponent: "Franklin College", result: "", type: "Men's Soccer" }
];

const womensSoccerSchedule = [
  { date: "2024-08-20", time: "6:00 PM", location: "Springfield, OH", opponent: "Wittenberg University", result: "" },
  { date: "2024-08-24", time: "2:00 PM", location: "Hanover, IN (Soccer Complex)", opponent: "Ohio Northern University", result: "" },
  { date: "2024-08-30", time: "7:00 PM", location: "Columbus, OH", opponent: "Capital University", result: "W 2-1" },
  { date: "2024-09-01", time: "2:00 PM", location: "Westerville, OH", opponent: "Otterbein University", result: "L 0-1" },
  { date: "2024-09-07", time: "7:00 PM", location: "Wilmington, OH", opponent: "Wilmington College", result: "W 2-1" },
  { date: "2024-09-14", time: "2:00 PM", location: "Hanover, IN (Soccer Complex)", opponent: "Kenyon College", result: "W 6-0" },
  { date: "2024-09-18", time: "5:00 PM", location: "Hanover, IN (Soccer Complex)", opponent: "Asbury University (Ky.)", result: "W 3-1" },
  { date: "2024-09-20", time: "6:00 PM (CST)", location: "Naperville, IL", opponent: "North Central College", result: "L 2-6" },
  { date: "2024-09-24", time: "5:00 PM", location: "Hanover, IN (Soccer Complex)", opponent: "Spalding University (Ky.)", result: "W 5-1" },
  { date: "2024-09-29", time: "3:00 PM", location: "Anderson, IN", opponent: "Anderson University (IN)", result: "W 2-1" },
  { date: "2024-10-05", time: "1:00 PM", location: "Hanover, IN (Soccer Complex)", opponent: "Bluffton University", result: "W 6-0" },
  { date: "2024-10-09", time: "7:00 PM", location: "Terre Haute, IN", opponent: "Rose-Hulman", result: "L 0-1" },
  { date: "2024-10-12", time: "1:00 PM", location: "North Manchester, IN", opponent: "Manchester University", result: "W 5-0" },
  { date: "2024-10-16", time: "7:00 PM", location: "Cincinnati, OH", opponent: "Mount St. Joseph University", result: "L 1-2" },
  { date: "2024-10-19", time: "1:00 PM", location: "Hanover, IN (Soccer Complex)", opponent: "Berea College (Ky.)", result: "W 10-0" },
  { date: "2024-10-23", time: "3:30 PM", location: "Hanover, IN (Soccer Complex)", opponent: "Transylvania University", result: "" },
  { date: "2024-10-26", time: "1:00 PM", location: "Richmond, IN", opponent: "Earlham College", result: "" },
  { date: "2024-10-30", time: "3:30 PM", location: "Hanover, IN (Soccer Complex)", opponent: "Franklin College", result: "" }
];

const footballSchedule = [
  { date: "2024-09-07", time: "1:30 PM", location: "Hanover, IN (Alumni Stadium)", opponent: "Centre College", result: "L 12-27" },
  { date: "2024-09-14", time: "6:00 PM", location: "Indianapolis, IN", opponent: "Butler University", result: "L 0-53" },
  { date: "2024-09-21", time: "1:00 PM", location: "Hanover, IN (Alumni Stadium)", opponent: "The University of Olivet", result: "W 56-14" },
  { date: "2024-10-05", time: "1:30 PM", location: "Hanover, IN (Alumni Stadium)", opponent: "Mount St. Joseph University", result: "L 41-49" },
  { date: "2024-10-12", time: "2:00 PM", location: "Hanover, IN (Alumni Stadium)", opponent: "Rose-Hulman", result: "W 37-16" },
  { date: "2024-10-19", time: "1:30 PM", location: "Anderson, IN", opponent: "Anderson University (IN)", result: "W 35-0" },
  { date: "2024-10-26", time: "1:30 PM", location: "North Manchester, IN", opponent: "Manchester University", result: "" },
  { date: "2024-11-02", time: "1:30 PM", location: "Hanover, IN (Alumni Stadium)", opponent: "Bluffton University", result: "" },
  { date: "2024-11-09", time: "1:30 PM", location: "Defiance, OH", opponent: "Defiance College", result: "" },
  { date: "2024-11-16", time: "1:30 PM", location: "Franklin, IN", opponent: "Franklin College", result: "" }
];

const tennisSchedule = [
  { date: "2024-09-07", time: "TBD", location: "Greencastle, IN", opponent: "DePauw University", result: "", type: "Men's Tennis" },
  { date: "2024-09-20", time: "TBD", location: "St. Louis, MO", opponent: "Washington University in St. Louis", result: "", type: "Men's Tennis" },
  { date: "2024-09-21", time: "TBD", location: "St. Louis, MO", opponent: "Washington University in St. Louis", result: "", type: "Men's Tennis" },
  { date: "2024-10-05", time: "11:00 AM", location: "Hanover, IN", opponent: "Shawnee State University (Ohio)", result: "W 5-2", type: "Men's Tennis" },
  { date: "2024-10-07", time: "3:00 PM", location: "Hanover, IN (Zeddies Tennis Center)", opponent: "Johnson University - Tennessee", result: "L 2-5", type: "Men's Tennis" },
  { date: "2024-10-12", time: "12:00 PM", location: "North Manchester, IN", opponent: "Manchester University", result: "W 7-0", type: "Men's Tennis" },
  { date: "2024-10-19", time: "12:00 PM", location: "Hanover, IN", opponent: "Berea College (Ky.)", result: "W 7-0", type: "Men's Tennis" }
];

const womensTennisSchedule = [];

// Function to get recent and next games for a given schedule
function getRecentAndUpcomingGames(schedule) {
  const now = new Date();
  let recentGame = null;
  let nextGame = null;

  for (const game of schedule) {
    const gameDate = new Date(game.date + ' ' + game.time);
    
    if (gameDate < now && (!recentGame || gameDate > new Date(recentGame.date + ' ' + recentGame.time))) {
      recentGame = game;
    } else if (gameDate >= now && (!nextGame || gameDate < new Date(nextGame.date + ' ' + nextGame.time))) {
      nextGame = game;
    }
  }

  return { recentGame, nextGame };
}

// Function to display games in the sidebar
function displayGames(schedule) {
  const { recentGame, nextGame } = getRecentAndUpcomingGames(schedule);
  const eventsDiv = document.getElementById("events");
  eventsDiv.innerHTML = ""; // Clear existing content

  if (recentGame) {
    eventsDiv.innerHTML += `
      <div class="game">
          <h4>Most Recent Game</h4>
          <p><strong>Date:</strong> ${recentGame.date}<br>
          <strong>Time:</strong> ${recentGame.time}<br>
          <strong>Location:</strong> ${recentGame.location}<br>
          <strong>Opponent:</strong> ${recentGame.opponent}<br>
          <strong>Result:</strong> ${recentGame.result || "Not available"}</p>
      </div>
    `;
  } else {
    eventsDiv.innerHTML += `<p>No recent games found.</p>`;
  }

  if (nextGame) {
    eventsDiv.innerHTML += `
      <div class="game">
          <h4>Next Upcoming Game</h4>
          <p><strong>Date:</strong> ${nextGame.date}<br>
          <strong>Time:</strong> ${nextGame.time}<br>
          <strong>Location:</strong> ${nextGame.location}<br>
          <strong>Opponent:</strong> ${nextGame.opponent}<br>
      </div>
    `;
  } else {
    eventsDiv.innerHTML += `<p>No upcoming games found.</p>`;
  }
}

const stadiumFeature = new Feature({
  geometry: new Point(fromLonLat(coords.stadium)), 
  imageUrl: stadiumSidebar,
  info: "The 4,000-seat venue, with its all-weather artificial surface, is home to Hanover's football, men's and women's lacrosse and men's and women's track & field teams. The stadium is a part of Hanover's Outdoor Athletic Complex, which accommodates facilities for 15 of the College's outdoor sports. <br><br>The stadium features a three-level press box, which includes locker rooms, classrooms, athletic training offices and equipment and offices for the Panther football coaching staff. The College's golf team also has an indoor practice facility located on the first floor of the stadium.",
  name: "Stadium",
});

// Create a feature for the soccer field
const soccerFeature = new Feature({
  geometry: new Point(fromLonLat(coords.soccer)), 
  imageUrl: soccerSidebar,
  info: "The men's and women's soccer programs use two natural turf fields, including a practice and a game field, and also host occasional matches on Alumni Stadium's artificial surface. <br><br> The game field also features the Hagenah Press Box, sheltered benches for each team, a scoreboard at each end of the field, and seating down the far side.",
  name: "Soccer Fields"
});


// Create a feature for the tennis courts
const tennisFeature = new Feature({
  geometry: new Point(fromLonLat(coords.tennis)),
  imageUrl: tennisSidebar,
  info: "Completed in 2012, the Zeddies Tennis Center, made possible by a gift from Michael ’77 and Judy Zeddies, features a total of eight courts.<br><br>In addition to the eight courts, Zeddies Tennis Center also consists of an adjacent lighted pavilion and storage space. <br><br> Part of the Panther Athletic Complex, Zeddies Tennis Center sits directly behind Alumni Stadium and is adjacent to grass practice fields that are available for the College’s outdoor teams and intramural sports.",
  name: "Tennis Courts",
  schedule: 'TBA'
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
setIconStyle(soccerFeature, soccerField); // Soccer Field image
setIconStyle(stadiumFeature, stadium); // Stadium image
setIconStyle(tennisFeature, tennis); // tennis image

// Update icon styles on zoom change
map.on('moveend', () => {
  setIconStyle(soccerFeature, soccerField);
  setIconStyle(stadiumFeature, stadium);
  setIconStyle(tennisFeature, tennis);
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
    //popup.innerHTML += 'Upcoming:';
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
  const events = document.getElementById('events');

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

    if (feature.get('name') === 'Soccer Fields') {
      displayGames(soccerSchedule);  // Load the games
    }
    else if (feature.get('name') === 'Stadium') {
      displayGames(footballSchedule);  // Load the games
    }
    else if (feature.get('name') === 'Tennis Courts'){
      displayGames(tennisSchedule);  // Load the games
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

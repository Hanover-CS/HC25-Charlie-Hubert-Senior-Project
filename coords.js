
// Coordinates and feature data used to place the features in the correct location on the map
export const coords = [
    // coordinates for hanover college used to center the map
    {name: "Hanover College", coordinates: [-85.462007, 38.716167]},

    // athletic coordinates
    {name: "Alumni Stadium", coordinates: [-85.464088, 38.718699]},
    {name: "Soccer Fields", coordinates: [-85.464750, 38.721432]},
    {name: "Zeddies Tennis Center", coordinates: [-85.465698, 38.717900]},
    {name: "Horner Center", coordinates: [-85.46327066795644, 38.71527535]},
    {name: "K.T. Young Ballpark", coordinates: [-85.4653, 38.7202]},
    {name: "Kops-Bedel Stadium", coordinates: [-85.4629, 38.72010]},
    {name: "Collier Arena", coordinates: [-85.4629, 38.71485]},
   
    // greek housing coordinates
    {name: "Phi Delta Theta", coordinates: [-85.46100836657001, 38.71854655]},
    {name: "Sigma Chi Fraternity", coordinates: [-85.46155475, 38.71655055]},
    {name: "Lambda Chi Fraternity", coordinates: [-85.4615448814935, 38.71687375]},
    {name: "Phi Gamma Delta Fraternity", coordinates: [-85.46260123061711, 38.71245905]},
    {name: "Chi Omega Sorority", coordinates: [-85.46297643178808, 38.71388965]},
    {name: "Alpha Delta Pi Sorority", coordinates: [-85.46321019999999, 38.71365865]},
    {name: "Phi Mu Sorority", coordinates: [-85.4634576, 38.7138939]},
    {name: "Kappa Alpha Theta Sorority", coordinates: [-85.46408643860619, 38.71380935]},
    
    // dining coordinates
    {name: "The Shoebox", coordinates: [-85.4612150852231, 38.7193707]},
    {name: "The Underground", coordinates: [-85.4598, 38.71372325]},
    {name: "Brown Campus Center", coordinates: [-85.46019170721485, 38.71372325]},

    // academic building coordinates
    {name: "Duggan Library", coordinates: [-85.45999510569348, 38.715598299999996]},
    
  
  {
      name: "Science Center",
      coordinates: [-85.45825151799684, 38.714097550000005],
  },
  
  {
      name: "Lynn Center for Fine Arts",
      coordinates: [-85.46004045588128, 38.71641765],
  },
  
  {
      name: "Lynn Hall",
      coordinates: [-85.45973670000001, 38.714561200000006],
  },
  
  {
      name: "Science Hall",
      coordinates: [-85.45917817241195, 38.7138031],
  },
  
  {
      name: "Classic Hall",
      coordinates: [-85.45833738360714, 38.712980849999994],
  },
  
  // Residence coordinates
  {
      name: "Greenwood Suites",
      coordinates: [-85.46252658844156, 38.7170645],
  },
  
  {
      name: "Ogle Center",
      coordinates: [-85.46424459217188, 38.71274685],
  },
  
  {
      name: "Coulter House",
      coordinates: [-85.46217086079417, 38.7176427],
  },
  
  {
      name: "Blythe Hall",
      coordinates: [-85.4620851, 38.7146606],
  },
  
  {
      name: "Crowe Hall",
      coordinates: [-85.46078865000001, 38.714702599999995],
  },
  
  {
      name: "Donner Hall",
      coordinates: [-85.46202352224047, 38.71336745],
  },
  
  {
      name: "Wiley Hall",
      coordinates: [-85.46151502875557, 38.71561155],
  },
  
  {
      name: "Ide Hall",
      coordinates: [-85.46246865287782, 38.71333095],
  },
  
  {
      name: "Katherine Parker Hall",
      coordinates: [-85.46303977088687, 38.71315195],
  },
  
  // Misc coordinates
  {
      name: "The Point",
      coordinates: [-85.45772, 38.7123],
  },
  
  {
      name: "Culbertson Observatory",
      coordinates: [-85.46330330094801, 38.7210059],
  }
];

export function getCoordinatesByName(name) {
  // Find the location object by name
  const location = coords.find(location => location.name === name);
  
  if (location) {
    return location.coordinates; // Return the coordinates
  } else {
    console.log('Location not found!');
    return null; // Return null if location is not found
  }
}

export function flipCoordinates(coordinates) {
    if (coordinates && coordinates.length === 2) {
      return [coordinates[1], coordinates[0]]; // Swap the values
    } else {
      console.log('Invalid coordinates');
      return null;
    }
  }
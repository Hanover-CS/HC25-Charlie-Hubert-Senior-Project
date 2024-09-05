# 3D Interactive Map of Hanover College Campus
## Project and Features
This would be an app/part of the Hanover College website that takes your current location on Hanover College Campus and marks it on a 3D map of the campus with the blue dot that you see frequently used on most maps. 
### Features
**1.** The buildings and other key locations can be hovered over or clicked on
    **1.** When hovered over it will show you the name of the building/location and give you important information on that site for the day. (Ex. Hover over the CC and it will tell you the menu for lunch if it is lunch time, or hover over the soccer field and it will show you that there is a womens soccer game at 3:30 tomorrow there)
    **2.** If the building is clicked on it will show you a brief description of the building and a picture of it along with the other information found by hovering.
**2.** You can map how long it would take you to get to your desired location by walking/biking/driving.
**3.** Important Locations on campus would be 3D
**4.** You can search for locations and it will take you to them on the map

The idea for this app is to create a more connected campus and student body. Some of the advertisements posted on walls get walked by without a second thought, emails from faculty get clicked on and clicked off to remove the notification, but if someone was on this app and saw there was bingo at the WAC in 20 minutes or a recital at the CFA tonight, then they would be much more inclined to attend.

## Similar Existing Solutions
### Concept3D
[Concept3D](https://concept3d.com/product-page-interactive-map/features/?_gl=1*12rrgzu*_up*MQ..&gclid=CjwKCAjwuMC2BhA7EiwAmJKRrDZI_3hPRQi6kGLFb-2WP2NFLb8a3ckXBki_dc-FGMmmuSJ-QnnC4RoCwfwQAvD_BwE)

Concept3D serves about 675 college campuses in making an interactive 3D map for their websites'. They did a study on their clients and found that the interactive 3D map that they produce gets the most usage/traffic out of any part of the client's websites. It accomplishes almost everything I would want my map to accomplish except for showcasing campus events at the locations on the map. It highlights key locations in 3D, allows you to click on them, search for specific places, map from your location to another location, and even map one location to a completely different location. It also shows routes, parking lots, buildings, shops, but since it is a third party it does not put in the events going on at the colleges. It is also not a part of the campus website nor is it an installable app. It is its own separate webpage. This forces clients to post a link in order for people to access it. For example, the University of Tennessee has a link on their website to their interactive campus map which takes you to a concept 3D webpage.

### Hanover Campus map
[Hanover Campus Map PDF](https://leap.hanover.edu/campusmap.php)

This map is a PDF that shows the layout of the campus with a number key for important places. It takes forever to find the number of the building you are looking for in the key and then place it with the cooresponding number on the map. This also has no way of showing your current location on the map so you would have to find a reference point outside of the map. It also has no pictures of the buildings, no descriptions, no campus events shown, and no interactivity whatsoever.

[Hanover Campus Map](https://www.hanover.edu/about/campusmap/)

This map allows you to see the layout of the campus and click on key places. However, when clicking on the important locations all you get is a short description and the name of the location along with a picture. It does not allow you to map how far and how long it would take to get places from your current location, it also does not use GPS to show where you are at this moment in time, and it does not show events that are upcoming/ongoing at the locations you can click on. It also has a very poor map that shows black and white, minimal features, and no 3D or anything else of that nature.

## Relevant Technologies
### 1. Front-End Development

- **HTML & CSS**: For structuring and styling my web application. Modern CSS techniques and HTML features will help me create an engaging user experience.
- **JavaScript**: For interactivity, such as handling hover events, clicks, and dynamically updating the UI. 
  - **React.js**: A popular JavaScript library for building user interfaces, which would be useful for creating a responsive and dynamic map interface.
  - **Three.js**: A JavaScript library for rendering 3D graphics in the browser. This would be used to create and display the 3D models of buildings and important locations.

### 2. Mapping and Navigation

- **Mapbox GL JS**: A powerful library for integrating customizable maps. It supports 3D terrain and building features, which would be useful for your 3D campus map.
- **OpenLayers**: Another mapping library, simpler than Mapbox, which can be used for 2D maps if the 3D aspect is not critical for every feature.

### 3. 3D Modeling and Visualization

- **Blender**: For creating and exporting 3D models of buildings and key locations. Blender models can be exported in formats compatible with Three.js or other libraries.
- **Three.js**: As mentioned earlier, for rendering 3D models in the browser. It integrates well with Blender exports.

### 4. Routing and Distance Calculation

- **GraphHopper** or **OpenRouteService**: For routing and distance calculations, these services offer APIs to calculate travel times by walking, biking, or driving.

### 5. Backend and Data Management

- **Node.js**: For server-side JavaScript execution, which can handle API requests, serve data, and manage user interactions.
- **Express.js**: A framework for Node.js that simplifies the creation of server-side routes and handling HTTP requests.
- **MongoDB** or **PostgreSQL**: For storing and managing data about locations, building descriptions, schedules, and user data.

### Planning and Development Outline of Project

1. **Design and Planning**: Create wireframes and mockups for your map and UI.
2. **3D Modeling**: Design 3D models of buildings in Blender, export them to a format compatible with Three.js.
3. **Front-End Development**: Develop the map and interactive elements using React.js and Three.js. Integrate with Mapbox or Leaflet for map functionality.
4. **Backend Development**: Set up a Node.js server with Express.js to handle API requests, manage data, and integrate with Elasticsearch or Algolia for search functionality.
5. **Routing Integration**: Use GraphHopper or Google Maps API to add routing and distance calculation features.
6. **Testing and Deployment**: Test the application thoroughly across different devices and browsers. Deploy using services like Vercel, Netlify, or AWS.

By combining these technologies, I will be able to create an interactive and informative campus map with 3D models, search capabilities, and routing features.

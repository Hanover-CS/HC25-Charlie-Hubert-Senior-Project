import Feature from 'ol/Feature.js';
import Point from 'ol/geom/Point.js';
import { fromLonLat } from 'ol/proj.js';
import Icon from 'ol/style/Icon.js';
import Style from 'ol/style/Style.js';

// Function to create a feature with a specified name, coordinates, and info
export const createFeature = (name, coords, scheduleLink, imageUrl, info) => {
  const feature = new Feature({
    geometry: new Point(fromLonLat(coords)),
    name: name,
    scheduleLink: scheduleLink,
    imageUrl: imageUrl,
    info: info,
  });

  return feature;
};

// Function to set the style of a feature dynamically based on zoom level
export const setFeatureStyle = (feature, src, zoom) => {
  const scale = 0.4 * Math.pow(2, zoom - 16); // Scale based on zoom level
  feature.setStyle(new Style({
    image: new Icon({
      src: src,
      scale: scale, // Dynamically set scale
    })
  }));
};

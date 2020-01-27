const mapboxgl = require("mapbox-gl");

const iconURLs = {
  hotels: "http://i.imgur.com/D9574Cu.png",
  restaurants: "http://i.imgur.com/cqR6pUI.png",
  activity: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = (type, coords) => {
  let markerDomEl = document.createElement('i');
  markerDomEl.setAttribute('class', type);


return new mapboxgl.Marker(markerDomEl).setLngLat(coords);
}


module.exports = {
  buildMarker
}

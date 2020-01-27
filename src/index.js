console.log('test')
const mapboxgl = require("mapbox-gl");
const {buildMarker} = require('./marker.js');



mapboxgl.accessToken = 'pk.eyJ1IjoiYWVkYWxlbmIiLCJhIjoiY2s1d3BkZzQyMDBhYTNrbjE0bGdiZjRxciJ9.scR3Ay-Ne9twvR6O_jzq1w';

const map = new mapboxgl.Map({
  container: "map",
  center:[-74.009, 40.705],
  zoom: 12,
  style: "mapbox://styles/mapbox/streets-v10"
});

const marker = buildMarker("activity", [-74.009151, 40.705086]); // or [-87.6354, 41.8885]
marker.addTo(map);


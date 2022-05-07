//Variables
var lat = 38.712088;
var lng = -9.267999;
var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var sateliteUrl = 'https://api.mapbox.com/styles/v1/frdalmeida/cl1igqvos003f14q42wl56har/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZnJkYWxtZWlkYSIsImEiOiJja3dxZGlpeHowbG5qMnZwbTMwZWtpa2kyIn0.-409cG2gqLjp4MmMll3nwg';
var osmAttrib = 'Project - Oeiras Valley Award';

var coordinates = oeiras.features[0].geometry.coordinates[0];
var latLngs = [];

const view_width = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
if (view_width <= 500) minimo_zoom = 12; else minimo_zoom = 13;


var osm = new L.TileLayer(osmUrl, {
    minZoom: minimo_zoom,
    maxNativeZoom: 19,
    maxZoom: 22,
    attribution: osmAttrib
});
var satelite = new L.TileLayer(sateliteUrl, {
    minZoom: minimo_zoom,
    maxNativeZoom: 19,
    maxZoom: 22,
    attribution: osmAttrib
});


// adicionar markers ao mapa
const geojsonMarkerOptions = {
    radius: 8,
    fillColor: "orange",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
}


var myStyle = {
    "color": "#3b5a87",
    "weight": 2,
    "fillColor": "none",
    "opacity": 1
};

var baseMaps = {
    "Streets": osm,
    "Satelite": satelite
};











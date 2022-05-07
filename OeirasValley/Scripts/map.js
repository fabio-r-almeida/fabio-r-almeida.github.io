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










L.Mask = L.Polygon.extend({
    options: {
        stroke: false,
        color: '#333',
        fillOpacity: 0.8,
        clickable: true,

        outerBounds: new L.LatLngBounds([-90, -360], [90, 360])
    },

    initialize: function(latLngs, options) {

        var outerBoundsLatLngs = [
            this.options.outerBounds.getSouthWest(),
            this.options.outerBounds.getNorthWest(),
            this.options.outerBounds.getNorthEast(),
            this.options.outerBounds.getSouthEast()
        ];
        L.Polygon.prototype.initialize.call(this, [outerBoundsLatLngs, latLngs], options);
    },

});


L.mask = function(latLngs, options) {
    return new L.Mask(latLngs, options);
};







var map = new L.Map('map', {
    maxBounds: [
        [38.6532, -9.1562],
        [38.7716, -9.3846]
    ],
    layers: [satelite]
});


map.on('drag', function() {
    map.panInsideBounds([
        [38.6532, -9.1562],
        [38.7716, -9.3846]
    ], {
        animate: false
    });
});



map.setView(new L.LatLng(lat, lng), 1);




// transform geojson coordinates into an array of L.LatLng


for (i = 0; i < coordinates.length; i++) {
    latLngs.push(new L.LatLng(coordinates[i][1], coordinates[i][0]));
}

L.mask(latLngs).addTo(map);

var myStyle = {
    "color": "#3b5a87",
    "weight": 2,
    "fillColor": "none",
    "opacity": 1
};

var layerpoly = new L.geoJson(oeiras.features, myStyle).addTo(map);


var baseMaps = {
    "Streets": osm,
    "Satelite": satelite
};
 
var layerControl = L.control.layers(baseMaps).addTo(map);





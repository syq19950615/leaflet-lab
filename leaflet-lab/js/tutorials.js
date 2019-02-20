/* //Tutorial JavaScript by Yuqi Shi, 2019
 
 /* Example from Leaflet Quick Start Guide*/

//Instantiates a map with dom id and set up the map with animation options
var mymap = L.map('mapid').setView([51.505, -0.09], 13);

//Instantiates a title layer object with a given URL
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoic2hpeXVxaSIsImEiOiJjanM1NThxN3cwYzZwM3ludG9wN2tqeWJ6In0.nVpI0SflJABVxjyDIaGbEg'
}).addTo(mymap);

//Instantiates a marker object with coordinates
var marker = L.marker([51.5, -0.09]).addTo(mymap);

//Instantiates a circle object with coordinates of center point, and other options
var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);

//Instantiates a polygon object with at least 3 coordinates of points (to form a polygon)
var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(mymap);

//Set up content of popup message
marker.bindPopup("<strong>Hello world!</strong><br />I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

//Instantiates a Popup object with options
var popup = L.popup()
    .setLatLng([51.5, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(mymap);

var popup = L.popup();

//set up a popup function to feature with popup a message with coordinate when click a point
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);
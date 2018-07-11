//declaring variables
var ourLocation;
var map;
var view;

//initializing variables
function init(){
  ourLocation = ol.proj.fromLonLat([-122.416668, 37.777076]);
  // Twitter HQ

  view = new ol.View({
    center: ourLocation,
    zoom:6
  });

  map = new ol.Map({
    target: 'map',
    layers:[
      new ol.layer.Tile({
        source: new ol.source.OSM(),
      })
    ],
    view: view
  });
}

//When window is opened, run the function initializing
window.onload = init;

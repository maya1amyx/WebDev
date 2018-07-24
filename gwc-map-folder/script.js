//declares variables
var ourLocation;
var map;
var view;

//initializesvariables
function init(){
  ourLocation = ol.proj.fromLonLat([-122.416668,
  37.777076]);     //Twitter HQ

  //sets the screen to ourLocation and zoom to 6
  view = new ol.View({
    center: ourLocation,
    zoom: 6
  });

  //opens up map feature and "tile" style
  map = new ol.Map({
    target: 'map',
    layers:[
      new ol.layer.Tile({
        source: new ol.source.OSM(),
      })
    ], view: view
  });
}

//runs program
window.onload = init;

//creates a function to run the button "Pan Back To Home"
function panHome(){
  view.animate({
    center: ourLocation,
    duration:2000
  });
}

//Seach up a country
function panToLocation(){
  var countryName= document.getElementById("country-name").value;

  // three equals checks for data type and if they are equal (the value)
  if(countryName === ""){
    alert("You didn't enter a country!!!!")
    return;
  }
  //uses REST countries API to search for country's location
  var query = "https://restcountries.eu/rest/v2/name/" +countryName;

  var lon = 0.0;
  var lat = 0.0;

  query = query.replace(/ /g, "%20");
  alert(query);

  //make an HTTP Get Request
  var countryRequest = new XMLHttpRequest();
  countryRequest.open('GET', query, false);

  countryRequest.send();
  alert("Ready State" +countryRequest.readyState);
  alert("status" + countryRequest.status);
  alert("Response" + countryRequest.responseText);


  var countryInformation = JSON.parse(countryRequest.responseText);

  //redefine longitude and lattitude
  var lat = countryInformation[0].latlng[0];
  var lon = countryInformation[0].latlng[1];

  var location = ol.proj.fromLonLat([lon,lat]);

  alert("location" + location)

  // if (countryRequest.responseText === "{"status":404,"message":"Not Found"}"){
  //   alert("country not found! Please type in a country");
  // }

  view.animate({
    center: location,
    duration:2000
  });

  // if(CountryRequest.readyState!=4 || ){
  //   alert("You didn't enter a country!!!!")
  //   return;
  // }
}

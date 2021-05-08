var myMap = L.map("map", {
  center: [
    37.09, -95.71
  ],
  zoom: 4,
  preferCanvas: true
});//close out myMap

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);//close out define streetmap

// Store the API endpoint inside queryUrl
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_month.geojson";

// Perform a GET request to the query URL
d3.json(queryUrl, function (data) {

  var earthquakeData=data.features
  
  for(var i = 0; i<earthquakeData.length; i++) {
    var color = "";
    var sizeRadius = ""
    var lat = ''
    var lng = ''

    // Conditionals for circle location, radius and marker color
    sizeRadius = earthquakeData[i].properties.mag
    lng = earthquakeData[i].geometry.coordinates[0]
    lat = earthquakeData[i].geometry.coordinates[1]


    if (earthquakeData[i].geometry.coordinates[2] > 90) {
      color = "Red";
    }
    else if (earthquakeData[i].geometry.coordinates[2] > 70) {
      color = "OrangeRed";
    }
    else if (earthquakeData[i].geometry.coordinates[2] > 50) {
      color = "Orange";
    }
    else if (earthquakeData[i].geometry.coordinates[2] > 30) {
      color = "GoldenRod";
    }
    else if (earthquakeData[i].geometry.coordinates[2] > 10) {
      color = "Yellow";
    }
    else {
      color = "LightGreen";
    };

    var circleSettings= {
      radius: sizeRadius*3,
      fillColor: color,
      color: "gray",
      weight: 1,
      fillOpacity: 0.75
    }//end circle Settings
  
    var marker=(L.circleMarker([lat, lng], circleSettings));

    marker.bindPopup("<h3>" + earthquakeData[i].properties.place +
    "</h3><hr><p>" + "Magnitude: " + earthquakeData[i].properties.mag + "</p>");

    myMap.addLayer(marker);
    }//end loop
 
  }); //end d3

//Add legend//
var legend = L.control({ position: "bottomright" });

legend.onAdd = function(map) {
  var div = L.DomUtil.create("div", "legend");
  div.innerHTML += '<i style="background: LightGreen"></i><span>-10-10</span><br>';
  div.innerHTML += '<i style="background: Yellow"></i><span>10-30</span><br>';
  div.innerHTML += '<i style="background: GoldenRod"></i><span>30-50</span><br>';
  div.innerHTML += '<i style="background: Orange"></i><span>50-70</span><br>';
  div.innerHTML += '<i style="background: OrangeRed"></i><span>70-90</span><br>';
  div.innerHTML += '<i style="background: Red"></i><span>90+</span><br>';  

  return div;
};

legend.addTo(myMap);

# Visualizing Data with Leaflet

## Background

This project involves building tools to visualize USGS (United States Geological Survey) earthquake data.  This project utilizes both **html** and **Javascript**.

- - -

## Visualization

The project involves visualizing an earthquake data set.

1. **Data set**

   The USGS earthquake data is provided in a number of different formats, updated every 5 minutes. The data was pulled from the [USGS GeoJSON Feed](http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) page.  The website provides several options for selecting data, including the Past Hour, Past Day, Past 7 Days, and Past 30 Days.  The data can further be filtered to include all earthquakes or just significant earthquakes.  For this project, "Earthquakes with a Magnitude of 2.5+ within the Past 30 Days" was selected.
   
   The data returned is a JSON representation of that data. The URL of this JSON is used to pull in the data for the visualization.

2. **Import & Visualize the Data**

   A map was created using Leaflet that plots all of the earthquakes from the data set based on their longitude and latitude.

   * The data markers reflect the magnitude of the earthquake by their size and and depth of the earth quake by color. Earthquakes with higher magnitudes appear larger and earthquakes with greater depth appear darker in color.
   
   * The visualization includes popups that provide additional information about the earthquake when a marker is clicked.

   * A legend was created that provides context for the map data.


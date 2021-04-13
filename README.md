# Visualizing Data with Leaflet

## Background

This project involves building tools to visualize USGS (United States Geological Survey) earthquake data.  This project utilizes both **html** and **Javascript**.

- - -

## Visualizations

### Level 1: Basic Visualization

The first part of the project involves visualizing an earthquake data set.

1. **Data set**

   The USGS earthquake data is provided in a number of different formats, updated every 5 minutes. The data was pulled from the [USGS GeoJSON Feed](http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) page.  The website provides several options for selecting data, including the Past Hour, Past Day, Past 7 Days, and Past 30 Days.  The data can further be filtered to include all earthquakes or just significant earthquakes.  For this project, "Significant Earthquakes within the Past 30 Days" was selected.
   
   The data returned is a JSON representation of that data. The URL of this JSON is used to pull in the data for the visualization.

2. **Import & Visualize the Data**

   A map was created using Leaflet that plots all of the earthquakes from the data set based on their longitude and latitude.

   * The data markers reflect the magnitude of the earthquake by their size and and depth of the earth quake by color. Earthquakes with higher magnitudes appear larger and earthquakes with greater depth appear darker in color.
   
   * The visualization includes popups that provide additional information about the earthquake when a marker is clicked.

   * A legend was created that provides context for the map data.

- - -

### Level 2: More Data

This portion of the project involves plotting a second data set on the map to illustrate the relationship between tectonic plates and seismic activity. 

A second data set on tectonic plates was pulled from <https://github.com/fraxen/tectonicplates>.

This portion of the project involves:

* Plotting the second data set on the map.

* Adding a number of base maps to choose from as well as separating out the two different data sets into overlays that can be turned on and off independently.

* Adding layer controls to the map.

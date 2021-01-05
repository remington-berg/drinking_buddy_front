<template>
  <div class="restaurants-show">
    <h1> Restaurant </h1>
      <h2>{{ restaurant.name }}</h2>
      <p>{{ restaurant.address }}</p>
      <p>{{ restaurant.phone_number }}</p>
      <div id="map"></div>
  </div>
</template>

<style>
body { margin: 0; padding: 0; }
	#map { height: 300px;}
</style>

<script>
/* global mapboxgl */
/* global MapboxGeocoder */
import axios from "axios";
export default {
  mounted: function() {
    mapboxgl.accessToken = process.env.VUE_APP_MAPBOX_ACCESS_TOKEN;

     
    var map = new mapboxgl.Map({
      container: 'map', // Container ID
      style: 'mapbox://styles/mapbox/streets-v11', // Map style to use
      center: [-122.25948, 37.87221], // Starting position [lng, lat]
      zoom: 12, // Starting zoom level
    });

    var marker = new mapboxgl.Marker() // Initialize a new marker
      .setLngLat([-122.25948, 37.87221]) // Marker [lng, lat] coordinates
      .addTo(map); // Add the marker to the map

    var geocoder = new MapboxGeocoder({ // Initialize the geocoder
      accessToken: mapboxgl.accessToken, // Set the access token
      mapboxgl: mapboxgl, // Set the mapbox-gl instance
      marker: false, // Do not use the default marker style
      placeholder: 'Search for places in Berkeley', // Placeholder text for the search bar
      address: this.restaurant.address
    });

    // Add the geocoder to the map
    map.addControl(geocoder);

    // After the map style has loaded on the page,
    // add a source layer and default styling for a single point
    map.on('load', function() {
      map.addSource('single-point', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: []
        }
      });

      map.addLayer({
        id: 'point',
        source: 'single-point',
        type: 'circle',
        paint: {
          'circle-radius': 10,
          'circle-color': '#448ee4'
        }
      });

      // Listen for the `result` event from the Geocoder
      // `result` event is triggered when a user makes a selection
      // Add a marker at the result's coordinates
      geocoder.on('result', function(ev) {
        map.getSource('single-point').setData(ev.result.geometry);
      });
    });

  },
  data: function() {
    return {
      restaurant: {},
    };
  },
  created: function() {
    axios.get("api/restaurants/" + this.$route.params.id).then(response => {
      this.restaurant = response.data;
      console.log("Data", this.restaurant);
    });
  },
  methods: {}
};

</script>
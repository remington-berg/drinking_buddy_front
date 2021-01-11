<template>

 <div class="restaurant-show">
    <h1>{{restaurant.name}}</h1>
      <div class="col-sm-12 col-md-4">
        <div class="card">
        <img class="card-img-top" v-bind:src="`${restaurant.image_url}`" alt="">
          <div class="card-body text-center">
            <!-- <h4 class="card-title">{{restaurant.name}}</h4> -->
            <p class="card-text">{{restaurant.address}}
              {{restaurant.phone_number}}
            </p>
            <a href="/" class="btn btn-primary pill">Take Me Home</a>
          </div><!-- / card-body -->
        </div><!-- / card -->
      </div><!-- / column -->
    <div id="map"></div>
  </div>
  
  <!-- <div class="restaurants-show">
    <h1> Restaurant </h1>
      <h2>{{ restaurant.name }}</h2>
      <p>Address: {{ restaurant.address }}</p>
      <p>Phone: {{ restaurant.phone_number }}</p>
      <div id="map"></div>
      <button @click="$router.push('/')" class="btn btn-info">Take Me Home!</button>
  </div> -->
</template>

<style>
body { margin: 0; padding: 0; }
	#map { height: 300px;}
</style>

<script>
/* global mapboxgl */
/* global MapboxGeocoder */
/* global mapboxSdk */
import axios from "axios";
export default {
  data: function() {
    return {
      restaurant: {},
    };
  },
  created: function() {
    axios.get("api/restaurants/" + this.$route.params.id).then(response => {
      this.restaurant = response.data;
      console.log("Data", this.restaurant);
      console.log(this.restaurant.address);
    });
  },
  updated: function() {
    mapboxgl.accessToken = process.env.VUE_APP_MAPBOX_ACCESS_TOKEN;
    var mapboxClient = mapboxSdk({ accessToken: mapboxgl.accessToken });
    mapboxClient.geocoding
      .forwardGeocode({
        query: `${this.restaurant.address}`,
        autocomplete: false,
        limit: 1
      })
      .send()
      .then(function (response) {
        if (
          response &&
response.body &&
response.body.features &&
response.body.features.length
        ) {
          var feature = response.body.features[0];
 
          var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: feature.center,
            zoom: 16
          });
          new mapboxgl.Marker().setLngLat(feature.center).addTo(map);
        }
      });
     
    // var map = new mapboxgl.Map({
    //   container: 'map', // Container ID
    //   style: 'mapbox://styles/mapbox/streets-v11', // Map style to use
    //   center: [-122.25948, 37.87221], // Starting position [lng, lat]
    //   zoom: 12, // Starting zoom level
    // });

    // var marker = new mapboxgl.Marker() // Initialize a new marker
    //   .setLngLat([]) // Marker [lng, lat] coordinates
    //   .addTo(map); // Add the marker to the map

    // var geocoder = new MapboxGeocoder({ // Initialize the geocoder
    //   accessToken: mapboxgl.accessToken, // Set the access token
    //   mapboxgl: mapboxgl, // Set the mapbox-gl instance
    //   marker: false, // Do not use the default marker style
    //   // placeholder: 'Search for places in Berkeley', // Placeholder text for the search bar
    //   query: 'Paris, France',
    //   address: this.restaurant.address
    // });

    // Add the geocoder to the map
    // map.addControl(geocoder);

    // // After the map style has loaded on the page,
    // // add a source layer and default styling for a single point
    // map.on('load', function() {
    //   map.addSource('single-point', {
    //     type: 'geojson',
    //     data: {
    //       type: 'FeatureCollection',
    //       features: []
    //     }
    //   });
    //   // Listen for the `result` event from the Geocoder
    //   // `result` event is triggered when a user makes a selection
    //   // Add a marker at the result's coordinates
    //   geocoder.on('result', function(ev) {
    //     map.getSource('single-point').setData(ev.result.geometry);
    //   });
    // });
    // map.addControl(
    //   new MapboxGeocoder({
    //     accessToken: mapboxgl.accessToken,
    //     mapboxgl: mapboxgl
    //   })
    // );

  },
  // data: function() {
  //   return {
  //     restaurant: {},
  //   };
  // },
  // created: function() {
  //   axios.get("api/restaurants/" + this.$route.params.id).then(response => {
  //     this.restaurant = response.data;
  //     console.log("Data", this.restaurant);
  //     console.log(this.restaurant.address);
  //   });
  // },
  methods: {}
};

</script>
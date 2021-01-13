<template>

 <div class="restaurant-show">
      <div class="container">
    <h1 class="restaurant-name">{{restaurant.name}}</h1>
        <div class="card yellowback">
        <img class="card-img-top" v-bind:src="`${restaurant.image_url}`" alt="">
        <br>
    <div id="map"></div>
          <div class="card-body text-center">
            <!-- <h4 class="card-title">{{restaurant.name}}</h4> -->
            <div v-for="special in specials">
              <div v-if="special.restaurant_id === restaurant.id">
                <h4 class="card-specials">{{special.day}}</h4>
                <p class="card-specials">{{special.description}}</p>
                </div>
              </div>
            <p class="card-text">
              <h5 class="card-specials">Address</h5>
              <p class="card-specials">{{restaurant.address}}</p>
              <h5 class="card-specials">Phone</h5>
              <p class="card-specials">{{restaurant.phone_number}}</p>
            <a href="/" class="btn btn-danger pill ">Take Me Home</a>
          </div><!-- / card-body -->
        </div><!-- / card -->
      </div><!-- / column -->
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
      specials: {},
    };
  },
  created: function() {
    axios.get("api/restaurants/" + this.$route.params.id).then(response => {
      this.restaurant = response.data;
      console.log("Data", this.restaurant);
      console.log(this.restaurant.address);
    });
    axios.get("api/specials/").then(response => {
      this.specials = response.data;
      console.log("Data", this.specials);
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
  },
  methods: {}
};
</script>
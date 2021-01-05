<template>
  <div>
    <h1>Restaurants</h1>
    <div v-for="restaurant in restaurants">
      <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h2 class="card-title">{{restaurant.name}}</h2>
    <h3 class="card-subtitle mb-2 text-muted">{{restaurant.address}}</h3>
    <h4 class="card-text">{{restaurant.phone_number}}</h4>
    <router-link v-bind:to="`/restaurants/${restaurant.id}`">
      </router-link>
  </div>
</div>
    </div>
  </div>
  
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      restaurants: [],
    };
  },
  created: function() {
    this.indexRestaurants();
  },
  methods: {
    indexRestaurants: function() {
      axios.get("api/restaurants").then(response => {
        this.restaurants = response.data;
        console.log(this.restaurants);
      });
    }
  }
};
</script>
<template>
  <div >
    <h1 class="restaurant-name">Restaurants</h1>
      <div class="container">
        <div class="row">
          <div class="col-md-6" v-for="restaurant in restaurants">
        <div class="card">
        <img class="card-img-top" v-bind:src="`${restaurant.image_url}`" alt="">
          <div class="card-body text-center">
            <h4 class="card-title">{{restaurant.name}}</h4>
            <p class="card-text">{{restaurant.address}}
            </p>
            <a href="/" class="btn btn-primary pill">Take Me Home</a>
            <button @click="$router.push({name: 'Restaurants-show', params: {id:restaurant.id },})" class="btn btn-info pill">Tell Me More!</button>
          </div><!-- / card-body -->
        </div><!-- / card -->
      </div><!-- / column -->
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
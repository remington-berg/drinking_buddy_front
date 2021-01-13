<template>
  <div >
    <h1 class="restaurant-name">Restaurants</h1>
      <div class="container">
        <div class="row">
          <div class="col-md-6" v-for="restaurant in restaurants">
        <div class="card yellowback">
        <img class="card-img-top" v-bind:src="`${restaurant.image_url}`" alt="">
          <div class="card-body text-center">
            <h4 class="card-title card-specials">{{restaurant.name}}</h4>
            <p class="card-text card-specials">{{restaurant.address}}
            </p>
            <button @click="$router.push({name: 'Restaurants-show', params: {id:restaurant.id },})" class="btn btn-info pill">Tell Me More!</button>
            <a href="/" class="btn btn-danger pill">Take Me Home</a>
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
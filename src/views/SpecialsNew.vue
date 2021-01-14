<template>
  <div class="specials-new">
      <h1 class="restaurant-name">Create New Special</h1>
    <form v-on:submit.prevent="createSpecial()">
      <ul>
        
        <li class="text-danger yellowback register-titles" v-for="error in errors">
           <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <i class="md-icon dp18 alert-icon mr-3">error</i><strong>Oh snap! </strong>{{ error}}
                    </div><!-- / alert -->
          </li>
      </ul>
      <div class="form-group register-titles">
        <label>Name:</label> 
        <input type="text" class="form-control" v-model="name">
      </div>
      <div class="form-group register-titles">
        <label>Description:</label>
        <input type="text" class="form-control" v-model="description">
      </div>
      <div class="form-group register-titles">
        <label>Day:</label>
        <input type="text" class="form-control" v-model="day">
      </div>
      <div class="form-group register-titles">
        <label>Restaurant ID:</label>


        <button class="btn btn-success" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Restaurant ID Cheat Sheet
  </button>
  <div class="collapse" id="collapseExample">
  <div class="card card-body yellowback">
    <div class="card-specials" v-for="restaurant in restaurants">
    <h4>{{restaurant.name}} - {{restaurant.id}}</h4>
    </div>
  </div>
</div>


        <input type="text" class="form-control" v-model="restaurant_id">
      </div>
      <div class="form-group register-titles">
        <label>Image URL:</label>
        <input type="text" class="form-control" v-model="image_url">
      </div>
      <input type="submit" class="btn btn-info" value="Submit">
    </form>
    
  </div>
  
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      name: "",
      description: "",
      day: "",
      restaurant_id: "",
      image_url: "",
      errors: [],
      status: "",
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
    },
    createSpecial: function() {
      var params = {
        name: this.name,
        description: this.description,
        day: this.day,
        restaurant_id: this.restaurant_id,
        image_url: this.image_url
      };
      
      axios
        .post("/api/specials", params)
        .then(response => {
          this.$router.push("/");
        })
        .catch(error => {
          this.status = error.response.status;
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
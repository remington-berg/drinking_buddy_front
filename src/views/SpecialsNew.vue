<template>
  <div class="specials-new">
      <h1 class="restaurant-name">Create New Special</h1>
    <form v-on:submit.prevent="createSpecial()">
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>Name:</label> 
        <input type="text" class="form-control" v-model="name">
      </div>
      <div class="form-group">
        <label>Description:</label>
        <input type="text" class="form-control" v-model="description">
      </div>
      <div class="form-group">
        <label>Day:</label>
        <input type="text" class="form-control" v-model="day">
      </div>
      <div class="form-group">
        <label>Restaurant ID:</label>
        <input type="text" class="form-control" v-model="restaurant_id">
      </div>
      <div class="form-group">
        <label>Image URL:</label>
        <input type="text" class="form-control" v-model="image_url">
      </div>
      <input type="submit" class="btn btn-primary" value="Submit">
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
    };
  },
  created: function() {},
  methods: {
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
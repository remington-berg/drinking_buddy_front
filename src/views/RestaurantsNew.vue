<template>
  <div class="restaurants-new">
      <h1 class="restaurant-name">Create New Restaurnat</h1>
    <form v-on:submit.prevent="createRestaurant()">
      <ul>
        <li class="text-danger yellowback register-titles" v-for="error in errors">
          <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <i class="md-icon dp18 alert-icon mr-3">error</i><strong>Oh snap! </strong>{{ error}}
                    </div>
        </li>
      </ul>
      <div class="form-group register-titles">
        <label>Name:</label> 
        <input type="text" class="form-control" v-model="name">
      </div>
      <div class="form-group register-titles">
        <label>Address:</label>
        <input type="text" class="form-control" v-model="address">
      </div>
      <div class="form-group register-titles">
        <label>Phone:</label>
        <input type="text" class="form-control" v-model="phone_number">
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
      address: "",
      phone_number: "",
      image_url: "",
      errors: [],
      status: "",
    };
  },
  created: function() {},
  methods: {
    createRestaurant: function() {
      var params = {
        name: this.name,
        address: this.address,
        phone_number: this.phone_number,
        image_url: this.image_url
      };
      axios
        .post("/api/restaurants", params)
        .then(response => {
          this.$router.push("/restaurants");
        })
        .catch(error => {
          this.status = error.response.status;
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
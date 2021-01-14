<template>
  <div class="signup">
    <form v-on:submit.prevent="submit()">
      <h1 class="restaurant-name">Signup</h1>
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
        <label>Username:</label> 
        <input type="text" class="form-control" v-model="user_name">
      </div>
      <div class="form-group register-titles">
        <label>Name:</label> 
        <input type="text" class="form-control" v-model="name">
      </div>
      <div class="form-group register-titles">
        <label>Email:</label>
        <input type="email" class="form-control" v-model="email">
      </div>
      <div class="form-group register-titles">
        <label>Password:</label>
        <input type="password" class="form-control" v-model="password">
      </div>
      <div class="form-group register-titles">
        <label>Password confirmation:</label>
        <input type="password" class="form-control" v-model="passwordConfirmation">
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
      user_name: "",
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        user_name: this.user_name,
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      };
      axios
        .post("/api/users", params)
        .then(response => {
          this.$router.push("/login");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
<template>
  <div class="login">
    <form v-on:submit.prevent="submit()">
      <h1 class="restaurant-name">Login</h1>
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
        <input type="text" class="form-control" v-model="username">
      </div>
      <div class="form-group register-titles">
        <label>Password:</label>
        <input type="password" class="form-control" v-model="password">
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
      username: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        user_name: this.username,
        password: this.password
      };
      axios
        .post("/api/sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/");
        })
        .catch(error => {
          this.errors = ["Invalid email or password."];
          this.username = "";
          this.password = "";
        });
    }
  }
};
</script>
<template>
  <div>
    <h1> Special </h1>
      <h2>{{ special.name }}</h2>
      <p>{{ special.description }}</p>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      special: {},
    };
  },
  created: function() {
    axios.get("api/specials/" + this.$route.params.id).then(response => {
      this.special = response.data;
      console.log("Data", this.special);
    });
  },
  methods: {}
};
</script>
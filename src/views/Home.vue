<template>
  <div class="home">
    <h1>Drinking Buddy!</h1>
    <p>When we drinking?</p>
    <button @click="$router.push({name:'Specials-day', params: {day:'Monday'},})">Monday</button>
    <button @click="$router.push({name:'Specials-day'})">Tuesday</button>
    <button>Wedneday</button>
    <button>Thursday</button>
    <button>Friday</button>
    <button>Saturday</button>
    <router-link v-bind:to="'/day/Sunday'">
    <button>Sunday</button>
    </router-link>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      day: "",
      specials: "",
    };
  },
  created: function() {
    this.indexSpecials();
  },
  methods: {
    indexSpecials: function() {
      axios.get("api/specials").then(response => {
        this.specials = response.data;
        console.log(this.specials);
      });
    },
  },
};
</script>

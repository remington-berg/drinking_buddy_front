<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="special in specials">
      <h1>{{ special.name }}</h1>
      <p>{{ special.restaurant }}</p>
      <button v-on:click="showSpecial(special)">More Info</button>
    </div>
      <dialog id="special-details">
      <form method="dialog">
        <h1>{{ currentSpecial.restaurant}}</h1>
        <p>{{ currentSpecial.name }}</p>
        <p>{{ currentSpecial.description }} </p>
        <p>{{ currentSpecial.day }} </p>
        <button>close</button>
      </form>
    </dialog>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      message: "Drinking Buddy!",
      specials: [],
      currentSpecial: {},
    };
  },
  created: function() {
    this.indexSpecials();
  },
  methods: {
    indexSpecials: function() {
      axios.get("/api/specials").then(response => {
        this.specials = response.data;
        console.log("specials", this.specials);
      });
    },
    showSpecial: function(special) {
      console.log(special);
      this.currentSpecial = special;
      document.querySelector("#special-details").showModal();
    },

    
  },
};
</script>

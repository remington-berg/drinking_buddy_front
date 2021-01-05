<template>
  <div>
    <h1>Drinking Buddy</h1>
    <p>So tell me, when we drinking?</p>

<div class="btn-group btn-group-toggle" data-toggle="buttons">

  

    <button v-on:click="dayFilter='Monday'" class="btn btn-primary" ><input type="radio" name="options" id="option3" autocomplete="off">Monday</button>
    <button v-on:click="dayFilter='Tuesday'" class="btn btn-primary"><input type="radio" name="options" id="option3" autocomplete="off">Tuesday</button>
    <button v-on:click="dayFilter='Wednesday'" class="btn btn-primary"><input type="radio" name="options" id="option3" autocomplete="off">Wednesday</button>
    <button v-on:click="dayFilter='Thursday'" class="btn btn-primary"><input type="radio" name="options" id="option3" autocomplete="off">Thursday</button>
    <button v-on:click="dayFilter='Friday'" class="btn btn-primary"><input type="radio" name="options" id="option3" autocomplete="off">Friday</button>
    <button v-on:click="dayFilter='Saturday'" class="btn btn-primary"><input type="radio" name="options" id="option3" autocomplete="off">Saturday</button>
    <button v-on:click="dayFilter='Sunday'" class="btn btn-primary"><input type="radio" name="options" id="option3" autocomplete="off">Sunday</button>
    <button v-on:click="dayFilter=''" class="btn btn-primary"><input type="radio" name="options" id="option3" autocomplete="off">Clear Filter</button>
</div>


    <div v-for="special in filterBy(specials, dayFilter, 'day')">
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">{{special.name}}</h5>
    <h6 class="card-subtitle mb-2 text-muted">{{special.day}}</h6>
    <p class="card-text">{{special.description}}</p>
    <button @click="$router.push({name: 'Restaurants-show', params: {id:special.restaurant_id },})" class="btn btn-info">Where can I find this?!!?</button>
  </div>
</div>

    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
import Vue2Filters from 'vue2-filters';
export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      specials: [],
      dayFilter: "",
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
    }
  }
};
</script>
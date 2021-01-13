<template>
<div>
    <div class="container">
        <h1 class="restaurant-name">Drinking Buddy</h1>
        <header class="home-header parallax">
            <div class="header-content dark text-center">
                <h1 class="header-title mb-0"></h1>
                <p class="inner-space mb-0"></p>
            </div><!-- / header-content -->
        </header>
    </div><!-- / container -->

    <section id="gallery" class="p-0 line-effect">
        <div class="container">
            <h2 class="restaurant-name">So tell me, when we drinking?</h2>
            <!-- gallery filter -->
            <ul class="gallery-filter list-inline text-center yellowback">
                <li><a href="#" @click='dayFilter=""'>SEE ALL</a></li>
                <li><a href="#" @click='dayFilter="Monday"'>Monday</a></li>
                <li><a href="#" @click='dayFilter="Tuesday"'>Tuesday</a></li>
                <li><a href="#" @click='dayFilter="Wednesday"'>Wednesday</a></li>
                <li><a href="#" @click='dayFilter="Thursday"'>Thursday</a></li>
                <li><a href="#" @click='dayFilter="Friday"'>Friday</a></li>
                <li><a href="#" @click='dayFilter="Saturday"'>Saturday</a></li>
                <li><a href="#" @click='dayFilter="Sunday"'>Sunday</a></li>
            </ul>
        </div>
            <!-- / gallery filter -->
            <!-- / container -->
        <div class="container full-width">
            <div class="row">
                <div class="col-md-6" v-for="special in filterBy(specials, dayFilter, 'day')">
                    <h3 class="section-title hidden">GALLERY</h3>
                    <ul class="row gallery line-effect list-unstyled " id="grid">
                <!-- gallery -->
                    
                        <li class="col-md gallery ">
                            <figure class="gallery-item effect-bubba">
                            <h1 class="special-name">{{special.name}}</h1>
                            <img v-bind:src="`${special.image_url}`" alt="">
                            <figcaption>
                            <div class="hover-content">
                                
                                <h2 class="hover-title text-center text-white">{{special.day}}</h2><!-- / hover-title -->
                                <p class="gallery-info text-center text-white">{{special.description}}
                                    <span class="gallery-icons">
                                        <button @click="$router.push({name: 'Restaurants-show', params: {id:special.restaurant_id },})" class="my-button">Where can I find this?!!?</button>
                                    </span><!--/ gallery-icons -->
                                </p><!-- / gallery-info -->
                            </div><!-- / hover-content -->
                            </figcaption>
                        </figure><!-- / gallery-item -->
                        </li><!-- / gallery -->
                    </ul>
                </div><!-- / gallery -->
            </div><!-- / container -->
        </div>
        <!-- </div> -->
    </section>
    <!-- / gallery -->
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
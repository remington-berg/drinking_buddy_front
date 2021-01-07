<template>
  <div>
<div class="container">
    <h1>Drinking Buddy</h1>
        <header class="home-header parallax">
            <div class="header-content dark text-center">
                <h1 class="header-title mb-0">Drinking Buddy</h1>
                <p class="inner-space mb-0">Cheers!</p>
            </div><!-- / header-content -->
        </header>
    </div><!-- / container -->

            <section id="gallery" class="p-0 line-effect">
        <div class="container">
        <h2>So tell me, when we drinking?</h2>
            <!-- gallery filter -->
            <ul class="gallery-filter list-inline text-center">
                <li><a href="#" data-group="all" class="active ml-2">SEE ALL</a></li>
                <li><a href="#" @click='dayFilter="Monday"'>Monday</a></li>
                <li><a href="#" @click='dayFilter="Tuesday"'>Tuesday</a></li>
                <li><a href="#" @click='dayFilter="Wednesday"'>Wednesday</a></li>
                <li><a href="#" @click='dayFilter="Thursday"'>Thursday</a></li>
                <li><a href="#" @click='dayFilter="Friday"'>Friday</a></li>
                <li><a href="#" @click='dayFilter="Saturday"'>Saturday</a></li>
                <li><a href="#" @click='dayFilter="Sunday"'>Sunday</a></li>
            </ul>
            <!-- / gallery filter -->
        </div><!-- / container -->
        <div class="container full-width">
            <h3 class="section-title hidden">GALLERY</h3>
            <ul class="row gallery line-effect list-unstyled mb-0" id="grid">
                <!-- gallery -->
                <li class="col-md-6 col-lg-4 gallery" data-groups='["framed"]'>
                    <figure class="gallery-item effect-bubba">
                        <img src="images/gallery1.jpg" alt="">
                        <figcaption>
                            <div class="hover-content">
                                <h2 class="hover-title text-center text-white">AMAZING FRAMED ART</h2><!-- / hover-title -->
                                <p class="gallery-info text-center text-white">Framed - From $29.99
                                    <span class="gallery-icons">
                                        <a href="#x" class="gallery-button" data-toggle="modal" data-target=".framed-product"><i class="fas fa-plus"></i></a>
                                        <a href="shopping-cart.html" class="gallery-button"><i class="fas fa-shopping-cart"></i></a>
                                    </span><!--/ gallery-icons -->
                                </p><!-- / gallery-info -->
                            </div><!-- / hover-content -->
                        </figcaption>
                    </figure><!-- / gallery-item -->
                </li><!-- / gallery -->

                <!-- gallery -->
                <li class="col-md-6 col-lg-4 gallery tall-gallery" data-groups='["photography", "print"]'>
                    <figure class="gallery-item effect-bubba">
                        <img src="images/mgallery2.jpg" alt="">
                        <figcaption>
                            <div class="hover-content">
                                <h2 class="hover-title text-center text-white">PRINTED PHOTOGRAPHY</h2><!-- / hover-title -->
                                <p class="gallery-info text-center text-white">Print - From $14.99
                                    <span class="gallery-icons">
                                        <a href="#x" class="gallery-button" data-toggle="modal" data-target=".print-product"><i class="fas fa-plus"></i></a>
                                        <a href="shopping-cart.html" class="gallery-button"><i class="fas fa-shopping-cart"></i></a>
                                    </span><!--/ gallery-icons -->
                                </p><!-- / gallery-info -->
                            </div><!-- / hover-content -->
                        </figcaption>
                    </figure><!-- / gallery-item -->
                </li><!-- / gallery -->

                <!-- gallery -->
                <li class="col-md-6 col-lg-4 gallery" data-groups='["framed"]'>
                    <figure class="gallery-item effect-bubba">
                        <img src="images/gallery3.jpg" alt="">
                        <figcaption>
                            <div class="hover-content">
                                <h2 class="hover-title text-center text-white">ROSE GIRL PAINTING</h2><!-- / hover-title -->
                                <p class="gallery-info text-center text-white">Framed - From $99.99
                                    <span class="gallery-icons">
                                        <a href="#x" class="gallery-button" data-toggle="modal" data-target=".framed-product"><i class="fas fa-plus"></i></a>
                                        <a href="shopping-cart.html" class="gallery-button"><i class="fas fa-shopping-cart"></i></a>
                                    </span><!--/ gallery-icons -->
                                </p><!-- / gallery-info -->
                            </div><!-- / hover-content -->
                        </figcaption>
                    </figure><!-- / gallery-item -->
                </li><!-- / gallery -->

                <!-- gallery -->
                <li class="col-md-6 col-lg-4 gallery" data-groups='["framed"]'>
                    <figure class="gallery-item effect-bubba">
                        <img src="images/gallery4.jpg" alt="">
                        <figcaption>
                            <div class="hover-content">
                                <h2 class="hover-title text-center text-white">COLORFULL PAINTING</h2><!-- / hover-title -->
                                <p class="gallery-info text-center text-white">Framed - From $69.99
                                    <span class="gallery-icons">
                                        <a href="#x" class="gallery-button" data-toggle="modal" data-target=".framed-product"><i class="fas fa-plus"></i></a>
                                        <a href="shopping-cart.html" class="gallery-button"><i class="fas fa-shopping-cart"></i></a>
                                    </span><!--/ gallery-icons -->
                                </p><!-- / gallery-info -->
                            </div><!-- / hover-content -->
                        </figcaption>
                    </figure><!-- / gallery-item -->
                </li><!-- / gallery -->

                <!-- gallery -->
                <li class="col-md-6 col-lg-4 gallery" data-groups='["photography", "print"]'>
                    <figure class="gallery-item effect-bubba">
                        <img src="images/gallery5.jpg" alt="">
                        <figcaption>
                            <div class="hover-content">
                                <h2 class="hover-title text-center text-white">GALLERY PHOTGRAPHY</h2><!-- / hover-title -->
                                <p class="gallery-info text-center text-white">Photography, Print - From $4.99
                                    <span class="gallery-icons">
                                        <a href="#x" class="gallery-button" data-toggle="modal" data-target=".print-product"><i class="fas fa-plus"></i></a>
                                        <a href="shopping-cart.html" class="gallery-button"><i class="fas fa-shopping-cart"></i></a>
                                    </span><!--/ gallery-icons -->
                                </p><!-- / gallery-info -->
                            </div><!-- / hover-content -->
                        </figcaption>
                    </figure><!-- / gallery-item -->
                </li><!-- / gallery -->

                <!-- gallery -->
                <li class="col-md-6 col-lg-4 gallery tall-gallery" data-groups='["photography", "digital"]'>
                    <figure class="gallery-item effect-bubba">
                        <img src="images/mgallery6.jpg" alt="">
                        <figcaption>
                            <div class="hover-content">
                                <h2 class="hover-title text-center text-white">SMOKE PHOTGRAPHY</h2><!-- / hover-title -->
                                <p class="gallery-info text-center text-white">Photography, Framed - From $24.49
                                    <span class="gallery-icons">
                                        <a href="#x" class="gallery-button" data-toggle="modal" data-target=".framed-product"><i class="fas fa-plus"></i></a>
                                        <a href="shopping-cart.html" class="gallery-button"><i class="fas fa-shopping-cart"></i></a>
                                    </span><!--/ gallery-icons -->
                                </p><!-- / gallery-info -->
                            </div><!-- / hover-content -->
                        </figcaption>
                    </figure><!-- / gallery-item -->
                </li><!-- / gallery -->

                <!-- gallery -->
                <li class="col-md-6 col-lg-4 gallery" data-groups='["photography", "digital"]'>
                    <figure class="gallery-item effect-bubba">
                        <img src="images/gallery7.jpg" alt="">
                        <figcaption>
                            <div class="hover-content">
                                <h2 class="hover-title text-center text-white">PORTRAITS COLLECTION</h2><!-- / hover-title -->
                                <p class="gallery-info text-center text-white">Photography, Digital - From $9.99
                                    <span class="gallery-icons">
                                        <a href="#x" class="gallery-button" data-toggle="modal" data-target=".digital-product"><i class="fas fa-plus"></i></a>
                                        <a href="shopping-cart.html" class="gallery-button"><i class="fas fa-shopping-cart"></i></a>
                                    </span><!--/ gallery-icons -->
                                </p><!-- / gallery-info -->
                            </div><!-- / hover-content -->
                        </figcaption>
                    </figure><!-- / gallery-item -->
                </li><!-- / gallery -->

                <!-- gallery -->
                <li class="col-md-6 col-lg-4 gallery" data-groups='["photography", "print", "digital"]'>
                    <figure class="gallery-item effect-bubba">
                        <img src="images/gallery8.jpg" alt="">
                        <figcaption>
                            <div class="hover-content">
                                <h2 class="hover-title text-center text-white">COLORFULL FLOWER</h2><!-- / hover-title -->
                                <p class="gallery-info text-center text-white">Photography, Print, Digital - From $23.99
                                    <span class="gallery-icons">
                                        <a href="#x" class="gallery-button" data-toggle="modal" data-target=".digital-product"><i class="fas fa-plus"></i></a>
                                        <a href="shopping-cart.html" class="gallery-button"><i class="fas fa-shopping-cart"></i></a>
                                    </span><!--/ gallery-icons -->
                                </p><!-- / gallery-info -->
                            </div><!-- / hover-content -->
                        </figcaption>
                    </figure><!-- / gallery-item -->
                </li><!-- / gallery -->

                <!-- gallery -->
                <li class="col-md-6 col-lg-4 gallery" data-groups='["framed"]'>
                    <figure class="gallery-item effect-bubba">
                        <img src="images/gallery9.jpg" alt="">
                        <figcaption>
                            <div class="hover-content">
                                <h2 class="hover-title text-center text-white">REFLECTIONS</h2><!-- / hover-title -->
                                <p class="gallery-info text-center text-white">Framed - From $74.99
                                    <span class="gallery-icons">
                                        <a href="#x" class="gallery-button" data-toggle="modal" data-target=".framed-product"><i class="fas fa-plus"></i></a>
                                        <a href="shopping-cart.html" class="gallery-button"><i class="fas fa-shopping-cart"></i></a>
                                    </span><!--/ gallery-icons -->
                                </p><!-- / gallery-info -->
                            </div><!-- / hover-content -->
                        </figcaption>
                    </figure><!-- / gallery-item -->
                </li><!-- / gallery -->

            </ul><!-- / gallery -->
        </div><!-- / container -->
    </section>
    <!-- / gallery -->
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
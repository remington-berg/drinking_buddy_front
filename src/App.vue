<template>
  <div id="app">
      <div id="preloader">
        <div class="preloader">
            <span></span>
            <span></span>
        </div>
    </div>

    <div class="top-menu top-menu-primary">
        <div class="container">
            <p>
                <span class="social margin-fix left">
                    <a class="no-margin" href="https://www.facebook.com/remington.berg"><i class="fab fa-facebook-f"></i></a>
                    <!-- <a href="#"><i class="fab fa-twitter"></i></a> -->
                    <!-- <a href="#"><i class="fab fa-google-plus-g"></i></a> -->
                    <a href="https://www.instagram.com/remington_b/?hl=en"><i class="fab fa-instagram"></i></a>
                    <!-- <a href="#"><i class="fab fa-pinterest"></i></a> -->
                    Get To Know Me
                </span>
                <span class="right">
                    <a v-if='!isLoggedIn()' href="/login" ><i class="fas fa-user mr-1"></i> <span>Login</span></a>
                    <a v-if='!isLoggedIn()' href="/signup" ><i class="fas fa-lock mr-1"></i> <span>Register</span></a>
                    <a v-if='isLoggedIn()' href="/logout" ><i class="fas fa-user mr-1"></i> <span>Logout</span></a>
                </span>
            </p>
        </div><!-- / container -->
    </div><!-- / top-menu -->

    <nav class="navbar navbar-expand-lg navbar-light bg-white custom-menu split-menu">
        <div class="container">
            <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbar-toggle-1" aria-controls="navbar-toggle-1" aria-expanded="false" aria-label="Toggle navigation">
                <span class="icon-bar top-bar"></span>
                <span class="icon-bar middle-bar"></span>
                <span class="icon-bar bottom-bar"></span>
                <span class="sr-only">Toggle navigation</span>
            </button><!-- / navbar-toggler -->

            <a class="navbar-brand mobile-brand m-auto" href="/"><img src="images/logo-icon.png" alt=""></a>

            <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbar-toggle-2" aria-controls="navbar-toggle-2" aria-expanded="false" aria-label="Toggle navigation">
                <span class="icon-bar top-bar"></span>
                <span class="icon-bar middle-bar"></span>
                <span class="icon-bar bottom-bar"></span>
                <span class="sr-only">Toggle navigation</span>
            </button><!-- / navbar-toggler -->

            <div class="collapse navbar-collapse" id="navbar-toggle-1">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item after-dropdown">
                        <a class="nav-link" href="/">Home</a>
                    </li>
                    <li class="nav-item after-dropdown">
                        <a class="nav-link" href="/restaurants">Restaurants</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#x" id="dropdown2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categories</a>
                        <div class="dropdown-menu drop-to-right animated fadeIn fast" aria-labelledby="dropdown2">
                            <a class="dropdown-item" href="#x">Framed</a>
                            <a class="dropdown-item" href="#x">Print</a>
                            <a class="dropdown-item" href="#x">Digital</a>
                            <a class="dropdown-item" href="#x">Photography</a>
                        </div><!-- / dropdown-menu -->
                    </li><!-- / dropdown -->
                </ul><!-- / navbar-nav -->
            </div><!-- / navbar-collapse -->

            <a class="navbar-brand m-auto" href="/"><img src="images/logo-icon.png" alt=""></a>

            <div class="collapse navbar-collapse" id="navbar-toggle-2">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a v-if='isLoggedIn()' class="nav-link" href="/restaurants/new">New Restaurant</a>
                    </li>
                    <li class="nav-item">
                        <a v-if='isLoggedIn()' class="nav-link before-count" href="/specials/new">New Special</a>
                    </li>
                    <li class="nav-item dropdown extra-dropdowns">
                        <a class="nav-link last-menu-item has-dropdown-toggle dropdown-toggle" href="#x" id="dropdown3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shopping Cart<span class="count count-primary">2</span></a>
                        <div class="dropdown-menu animated fadeIn fast" aria-labelledby="dropdown3">
                            <div class="cart-small">
                                <img src="images/product-small1.jpg" alt="">
                                <p><a href="#x" class="text-black">Amazing Framed Art</a> <br> <span>1 x $29.99</span></p>
                                <a href="#x"> <i class="md-icon dp14 close-icon">close</i></a>
                            </div><!-- / cart-small -->
                            <div class="cart-small">
                                <img src="images/product-small2.jpg" alt="">
                                <p><a href="#x" class="text-black">Printed Photography</a> <br> <span>1 x $14.99</span></p>
                                <a href="#x"> <i class="md-icon dp14 close-icon">close</i></a>
                            </div><!-- / cart-small -->
                            <p class="text-left cart-small-total"><b>Subtotal: $44.98</b></p>
                            <div class="cart-small-footer text-center">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <a href="shopping-cart.html" class="mini-cart-btn"><i class="md-icon dp12 mr-1">shopping_cart</i> <span class="va-middle"><b>VIEW CART</b></span></a>
                                    </div><!-- / column -->
                                    <div class="col-sm-6">
                                        <a href="checkout.html" class="mini-cart-btn mb-0"><i class="md-icon dp12 mr-1">exit_to_app</i> <span class="va-middle"><b>CHECKOUT</b></span></a>
                                    </div><!-- / column -->
                                </div><!-- / row -->
                            </div><!-- / cart-small-footer -->
                        </div><!-- / dropdown-menu -->
                    </li><!-- / dropdown -->
                </ul><!-- / navbar-nav -->
            </div><!-- / navbar-collapse -->
        </div><!-- / container -->
    </nav><!-- / split-navbar -->

 
    
    <router-view/>
    <footer class="bg-white">
        <div class="container-fluid text-center">
            <p>© 2018 <b>Gallerio</b> by <a href="https://kingstudio.ro" target="_blank">KingStudio</a>. All Rights Reserved.</p>
        </div><!-- / container-fluid -->
    </footer>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  methods: {
    isLoggedIn: function() {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
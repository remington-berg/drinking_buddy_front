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
                    <!-- <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#x" id="dropdown2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categories</a>
                        <div class="dropdown-menu drop-to-right animated fadeIn fast" aria-labelledby="dropdown2">
                            <a class="dropdown-item" href="#x">Framed</a>
                            <a class="dropdown-item" href="#x">Print</a>
                            <a class="dropdown-item" href="#x">Digital</a>
                            <a class="dropdown-item" href="#x">Photography</a> -->
                        <!-- </div>/ dropdown-menu -->
                    <!-- </li>/ dropdown -->
                </ul><!-- / navbar-nav -->
            </div><!-- / navbar-collapse -->

            <a class="navbar-brand m-auto" href="/"><img src="images/logo-icon.png" alt=""></a>

            <div class="collapse navbar-collapse" id="navbar-toggle-2">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a v-if='!isLoggedIn()'>You Don't have Access</a>
                        <a v-if='isLoggedIn()' class="nav-link" href="/restaurants/new">New Restaurant</a>
                    </li>
                    <li class="nav-item">
                        <a v-if='isLoggedIn()' class="nav-link before-count" href="/specials/new">New Special</a>
                    </li>    
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
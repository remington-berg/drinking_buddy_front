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

    <nav class="navbar navbar-light  custom-menu split-menu fullyellow">
        <div class="container">
            <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbar-toggle-1" aria-controls="navbar-toggle-1" aria-expanded="false" aria-label="Toggle navigation">
                <span class="icon-bar top-bar"></span>
                <span class="icon-bar middle-bar"></span>
                <span class="icon-bar bottom-bar"></span>
                <span class="sr-only">Toggle navigation</span>
            </button><!-- / navbar-toggler -->

            <a data-toggle="modal" data-target=".default-modal-example" href="#"><img src="https://img.icons8.com/plasticine/100/000000/beer.png" alt=""></a>

<div class="modal fade default-modal-example" tabindex="-1" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class=" cheers ">Cheers!</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div><!-- / modal-header -->
                        <div class="modal-body">
                            <img src="https://images.unsplash.com/photo-1579009120005-df2fd9baf7e5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=699&q=80" alt="">
                        </div><!-- / modal-body -->
                    </div><!-- / modal-content -->
                </div><!-- / modal-dialog -->
            </div><!-- / modal -->
            <!-- / default-modal -->



            
            
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
                </ul><!-- / navbar-nav -->
                
            </div><!-- / navbar-collapse -->

            <div  class="collapse navbar-collapse" id="navbar-toggle-2">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a v-if='!isLoggedIn()'>
                            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <i class="md-icon dp18 alert-icon mr-3">error</i><strong>Oh snap! </strong>You don't have access to this...yet! Please login.
                    </div><!-- / alert -->
                        </a>
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
    <footer class="fullyellow">
        <div class="container-fluid text-center">
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
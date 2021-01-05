import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Signup from '../views/Signup.vue';
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import RestaurantsIndex from "../views/RestaurantsIndex.vue";
import SpecialsIndex from "../views/SpecialsIndex.vue";
// import SpecialsDay from "../views/SpecialsDay.vue";
import RestaurantsNew from "../views/RestaurantsNew.vue";
import SpecialsNew from "../views/SpecialsNew.vue";
import RestaurantsShow from "../views/RestaurantsShow.vue";
import SpecialsShow from "../views/SpecialsShow.vue";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  },
  {
    path: '/restaurants',
    name: 'Restaurants-index',
    component: RestaurantsIndex
  },
  {
    path: '/',
    name: 'Specials-index',
    component: SpecialsIndex
  },
  // {
  //   path: '/day/:day',
  //   name: 'Specials-day',
  //   component: SpecialsDay
  // },
  {
    path: '/specials/new',
    name: 'Specials-new',
    component: SpecialsNew
  },
  {
    path: '/restaurants/new',
    name: 'Restaurants-new',
    component: RestaurantsNew
  },
  {
    path: '/restaurants/:id',
    name: 'Restaurants-show',
    component: RestaurantsShow
  },
  {
    path: '/specials/:id',
    name: 'Specials-show',
    component: SpecialsShow
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;

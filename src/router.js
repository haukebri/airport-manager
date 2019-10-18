import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

const Office = () => import("./views/office/index.vue");
const Flightmanager = () => import("./views/office/FlightManager.vue");

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/office",
      name: "office",
      component: Office
    },
    {
      path: "/office/flightmanager",
      name: "flightmanager",
      component: Flightmanager
    },
    {
      path: "/tours",
      name: "tours",
      component: Home
    }
  ]
});

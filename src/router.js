import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

const Office = () => import("./views/Office.vue");

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
      path: "/tours",
      name: "tours",
      component: Home
    }
  ]
});

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/";

import RouterLink from "./components/RouterLink";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  components: {
    RouterLink
  },
  render: h => h(App)
}).$mount("#app");

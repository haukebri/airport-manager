import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import player from "./player/";

export default new Vuex.Store({
  modules: {
    player
  },
  namespaced: true,
  state: {},
  mutations: {},
  actions: {}
});

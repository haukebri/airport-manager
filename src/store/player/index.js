import flights from "./flights";
import planes from "./planes";

const state = {
  money: 0
};
const getters = {};
const mutations = {};
const actions = {};

export default {
  namespaced: true,
  modules: {
    flights,
    planes
  },
  state,
  getters,
  mutations,
  actions
};

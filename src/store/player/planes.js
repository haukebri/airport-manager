const state = {
  planes: [
    {
      id: 123,
      name: "testplane",
      distance: 3000,
      location: "Berlin",
      fuelEconomy: 1.3,
      passengers: 200,
      weightlimit: 100,
      size: 1,
      speed: 300,
      crew: {
        pilots: 2,
        attendants: 4
      }
    },
    {
      id: 124,
      name: "testplane 2",
      distance: 3000,
      location: "Berlin",
      fuelEconomy: 1.3,
      passengers: 200,
      weightlimit: 100,
      size: 1,
      speed: 300,
      crew: {
        pilots: 2,
        attendants: 4
      }
    }
  ],
  activePlane: null
};
const getters = {};
const mutations = {
  setActivePlane(state, id) {
    state.activePlane = id;
  }
};
const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

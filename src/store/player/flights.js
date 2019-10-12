const state = {
  flights: [
    {
      from: "Berlinx",
      to: "London",
      passengers: 100,
      distance: 900,
      reward: 100000,
      allocated: 0,
      plannedStart: null
    },
    {
      from: "Berliny",
      to: "London",
      passengers: 100,
      distance: 900,
      reward: 100000,
      allocated: 0,
      plannedStart: null
    },
    {
      from: "Berlinc",
      to: "London",
      passengers: 100,
      distance: 900,
      reward: 100000,
      allocated: 0,
      plannedStart: null
    },
    {
      from: "Helsinki",
      to: "New York",
      passengers: 1,
      distance: 1200,
      reward: 1000,
      allocated: 123,
      plannedStart: 1570116663598
    }
  ]
};
const getters = {
  unallocatedFlights() {
    return state.flights.filter(flight => flight.allocated === 0);
  },
  allocatedFlights() {
    return state.flights.filter(flight => flight.allocated !== 0);
  }
};
const mutations = {
  updateUnallocated(store, flights) {
    const allocatedFlights = state.flights.filter(
      flight => flight.allocated !== 0
    );
    state.flights = flights.concat(allocatedFlights);
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

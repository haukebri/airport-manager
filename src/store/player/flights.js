const state = {
  flights: [
    {
      id: 123,
      from: "Berlinx",
      to: "London",
      passengers: 100,
      distance: 900,
      reward: 100000,
      allocated: 0,
      plannedStart: null
    },
    {
      id: 234,
      from: "Warschau",
      to: "New York",
      passengers: 100,
      distance: 12000,
      reward: 100000,
      allocated: 0,
      plannedStart: null
    },
    {
      id: 432,
      from: "Berlinc",
      to: "London",
      passengers: 100,
      distance: 900,
      reward: 100000,
      allocated: 0,
      plannedStart: null
    },
    {
      id: 848,
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
  },
  allocateFlight(store, { flight, planeId }) {
    const index = state.flights.findIndex(
      singleFlight => singleFlight.id === flight.id
    );
    state.flights[index].allocated = planeId;
  },
  updatePlanned(store, flights) {
    const currentId = flights[0].allocated;
    const withoutCurrent = state.flights.filter(
      flight => flight.allocated !== currentId
    );
    state.flights = withoutCurrent.concat(flights);
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

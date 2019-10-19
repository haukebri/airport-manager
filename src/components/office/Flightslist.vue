<template>
  <div class="flightslist">
    <div>
      <flights-list-item
        v-for="(flight, index) in unallocatedFlights"
        :flight="flight"
        :key="index"
        :class="{ unable: !checkFlightPossible(flight) }"
        @click="setFlight(flight)"
      />
    </div>
  </div>
</template>

<script>
import FlightsListItem from "@/components/office/FlightsListItem.vue";
export default {
  name: "flightslist",
  components: {
    FlightsListItem
  },
  computed: {
    unallocatedFlights: {
      get() {
        return this.$store.getters["player/flights/unallocatedFlights"];
      },
      set(value) {
        this.$store.commit("player/flights/updateUnallocated", value);
      }
    },
    activePlane() {
      return this.$store.state.player.planes.activePlane;
    },
    planes() {
      return this.$store.state.player.planes.planes;
    }
  },
  methods: {
    checkFlightPossible(flight) {
      const currentPlane = this.planes.find(
        plane => plane.id === this.activePlane
      );

      return (
        currentPlane.passengers > flight.passengers && // more passengers possible than in flight
        currentPlane.distance > flight.distance // possible distance greater than needed
      );
    },
    setFlight(flight) {
      this.$store.commit("player/flights/allocateFlight", {
        flight,
        planeId: this.activePlane
      });
    }
  }
};
</script>

<style lang="scss">
.flightslist {
  .flights-list-item.unable {
    opacity: 0.3;
    pointer-events: none;
  }
}
</style>

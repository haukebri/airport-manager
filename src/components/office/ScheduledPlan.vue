<template>
  <div class="scheduled-plan">
    <h3>Plan for {{ activePlane }}</h3>
    <draggable v-model="flightsFromPlane" class="draggable" group="flights">
      <flights-list-item
        v-for="(flight, index) in flightsFromPlane"
        :flight="flight"
        :key="index"
      />
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import FlightsListItem from "@/components/office/FlightsListItem.vue";

export default {
  name: "scheduledplan",
  components: {
    draggable,
    FlightsListItem
  },
  computed: {
    flightsFromPlane: {
      get() {
        return this.$store.state.player.flights.flights.filter(
          flight => flight.allocated === this.activePlane
        );
      },
      set(flightList) {
        this.$store.commit("player/flights/updatePlanned", flightList);
      }
    },
    activePlane() {
      return this.$store.state.player.planes.activePlane;
    }
  }
};
</script>

<style lang="scss"></style>

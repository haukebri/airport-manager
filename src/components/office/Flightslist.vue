<template>
  <div class="flightlist">
    <draggable v-model="unallocatedFlights" class="draggable" group="flights">
      <flights-list-item
        v-for="(flight, index) in unallocatedFlights"
        :flight="flight"
        :key="index"
      />
    </draggable>
  </div>
</template>

<script>
import FlightsListItem from "@/components/office/FlightsListItem.vue";
import draggable from "vuedraggable";
export default {
  name: "flightslist",
  components: {
    FlightsListItem,
    draggable
  },
  data() {
    return {};
  },
  computed: {
    unallocatedFlights: {
      get() {
        return this.$store.getters["player/flights/unallocatedFlights"];
      },
      set(value) {
        this.$store.commit("player/flights/updateUnallocated", value);
      }
    }
  }
};
</script>

<style lang="scss"></style>

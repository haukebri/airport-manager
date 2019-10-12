<template>
  <div class="office">
    <div>
      <router-link to="/">zurück</router-link>

      <accordion headline="Planes" :initial-open="!activePlane">
        <div
          class="plane-switch"
          v-for="plane in planes"
          :key="plane.id"
          @click="setPlane(plane.id)"
        >
          {{ plane.name }}<br />
        </div>
      </accordion>
      <accordion headline="Flightplan" :initial-open="!!activePlane">
        <flightplan v-if="activePlane" :plane-id="activePlane" />
      </accordion>
    </div>
    <div>
      <h3>Flights</h3>
      <draggable v-model="unallocatedFlights">
        <transition-group name="fade">
          <flights-list-item
            v-for="(flight, index) in unallocatedFlights"
            :flight="flight"
            :key="index"
          />
        </transition-group>
      </draggable>
    </div>
  </div>
</template>

<script>
import FlightsListItem from "../components/office/FlightsListItem";
import Accordion from "../components/office/Accordion";
import Flightplan from "../components/office/Flightplan";
import draggable from "vuedraggable";

export default {
  name: "office",
  components: {
    FlightsListItem,
    Accordion,
    Flightplan,
    draggable
  },
  data() {
    return {
      activePlane: null
    };
  },
  computed: {
    flights() {
      return this.$store.state.player.flights.flights;
    },
    unallocatedFlights: {
      get() {
        return this.$store.getters["player/flights/unallocatedFlights"];
      },
      set(value) {
        this.$store.commit("player/flights/updateUnallocated", value);
      }
    },
    planes() {
      return this.$store.state.player.planes.planes;
    }
  },
  methods: {
    setPlane(id) {
      this.activePlane = id;
    }
  }
};
</script>

<style lang="scss">
.plane-switch {
  margin-bottom: 20px;
}

.office {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > div {
    max-height: 50%;
  }
}
</style>

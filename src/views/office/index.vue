<template>
  <div class="office">
    <div>
      <router-link to="/">zurück</router-link>
    </div>
    <div>
      <router-link to="/office/flightmanager">Open flight manager</router-link>
    </div>
    <!--
    <div>
      <h3>Flights</h3>
      <draggable v-model="unallocatedFlights" class="draggable" group="flights">
        <transition-group name="fade">
          <flights-list-item
            v-for="(flight, index) in unallocatedFlights"
            :flight="flight"
            :key="index"
          />
        </transition-group>
      </draggable>
    </div>
    -->
  </div>
</template>

<script>
export default {
  name: "office",
  components: {},
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
  .draggable {
    background: lightgray;
    padding: 30px 5px;
  }
}
</style>

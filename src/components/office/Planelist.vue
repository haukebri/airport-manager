<template>
  <div class="planelist">
    <div
      class="plane"
      v-for="(plane, index) in planeList"
      :key="index"
      :class="{ active: plane.id === activePlane }"
      @click="clickOnPlane(plane.id)"
    >
      {{ plane.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "planelist",
  computed: {
    planeList() {
      return this.$store.state.player.planes.planes;
    },
    activePlane: {
      get() {
        return this.$store.state.player.planes.activePlane;
      },
      set(id) {
        this.$store.commit("player/planes/setActivePlane", id);
      }
    }
  },
  methods: {
    clickOnPlane(id) {
      this.activePlane = id;
      this.$emit("click");
    }
  }
};
</script>

<style lang="scss">
.plane {
  padding: 20px;
  border: 1px solid black;
  &.active {
    background: lightcyan;
  }
}
</style>

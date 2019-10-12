<template>
  <div class="flightplan">
    <h3>Plan for {{ planeId }}</h3>
    <div class="days">
      <div class="first">first</div>
      <div class="second">second</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "flightplan",
  props: {
    planeId: {
      required: true,
      type: Number
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss"></style>

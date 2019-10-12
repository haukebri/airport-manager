<template>
  <div class="player" :style="{ left: pos + 'px' }"></div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  props: {
    pos: {
      default: 0,
      type: Number
    }
  }
};
</script>

<style lang="scss">
.player {
  width: 40px;
  height: 90px;
  background: blue;
  position: absolute;
  bottom: 80px;
  margin-left: 100px;
  transition: all 0.8s ease-in-out;
}
</style>

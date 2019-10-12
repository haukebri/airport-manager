<template>
  <div class="vertical-scroll">
    <div class="vertical-scroll__inner" ref="scrollDiv">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "vertical-scroll",
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.vertical-scroll {
  height: 100vh;
  width: 100vw;

  .vertical-scroll__inner {
    overflow-x: scroll;
    height: 100vh;
  }
}
</style>

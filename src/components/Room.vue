<template>
  <div
    class="room"
    @click="clickRoom($event)"
    :style="{ backgroundImage: 'url(' + background + ')' }"
  ></div>
</template>

<script>
export default {
  name: "room",
  data() {
    return {};
  },
  props: {
    to: {
      required: true,
      type: String
    },
    image: {
      default: "office",
      type: String
    }
  },
  computed: {
    background() {
      return require("./../assets/" + this.image + ".png");
    }
  },
  methods: {
    clickRoom(e) {
      // this.$router.push(this.to);
      this.$emit("click", e.target.offsetLeft);
    }
  }
};
</script>

<style lang="scss">
.room {
  width: 230px;
  flex-grow: 0;
  flex-shrink: 0;
  height: 200px;
  margin: 0 30px;
  cursor: pointer;
}
</style>

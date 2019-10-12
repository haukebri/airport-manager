<template>
  <div class="accordion">
    <button class="headline" @click="toggleOpen()">
      {{ headline }}
    </button>
    <div class="content" :class="{ open }">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "accordion",
  props: {
    headline: {
      required: true,
      type: String
    },
    initialOpen: {
      default: false,
      type: Boolean
    }
  },
  data() {
    return {
      open: this.initialOpen
    };
  },
  watch: {
    initialOpen() {
      this.open = this.initialOpen;
    }
  },
  methods: {
    toggleOpen() {
      this.open = !this.open;
    }
  }
};
</script>

<style lang="scss">
.accordion {
  .headline {
    border: none;
    display: block;
    padding: 20px;
    border-bottom: 2px solid grey;
    border-top: 2px solid grey;
    background: lightblue;
    cursor: pointer;
    width: 100%;
    font-size: 1rem;
    text-align: left;
    font-weight: bold;
  }
  .content {
    transition: all 0.3s ease-in-out;
    height: 0;
    overflow: hidden;
    &.open {
      height: auto;
    }
  }
}
</style>

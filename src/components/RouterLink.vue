<template>
  <span @click="$router.push({ path: to })">
    <slot />
  </span>
</template>

<script>
export default {
  name: "link",
  props: {
    to: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped></style>

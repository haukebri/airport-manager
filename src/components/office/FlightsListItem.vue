<template>
  <div class="flights-list-item">
    <div class="flight-infos">
      <div class="flight-name">{{ flight.from }} - {{ flight.to }}</div>
      <div class="flight-details">
        <span> ${{ flight.reward }} </span>
        <span> P{{ flight.passengers }} </span>
        <span> D{{ flight.distance }}km </span>
      </div>
    </div>
    <div class="controls">
      x
    </div>
  </div>
</template>

<script>
export default {
  name: "flights-list-item",
  props: {
    flight: {
      required: true,
      type: Object
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.flights-list-item {
  padding: 20px;
  border-bottom: 2px solid grey;
  display: flex;
  justify-content: space-between;
  &:first-child {
    border-top: 2px solid grey;
  }

  .flight-infos {
    flex-grow: 1;
    margin-right: 15px;
  }

  .flight-name {
    font-size: 1.5em;
    padding-bottom: 2px;
  }

  .flight-details {
    display: flex;
    justify-content: space-between;
  }
}
</style>

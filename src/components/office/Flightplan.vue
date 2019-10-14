<template>
  <div class="flightplan">
    <h3>Plan for {{ planeId }}</h3>
    <div class="days">
      <div class="first">
        <draggable v-model="dayone" group="flights" class="draggable">
          <flights-list-item
            v-for="(flight, index) in dayone"
            :flight="flight"
            :key="index"
          />
        </draggable>
      </div>
      <div class="second">second</div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import FlightsListItem from "../../components/office/FlightsListItem";

export default {
  name: "flightplan",
  components: {
    FlightsListItem,
    draggable
  },
  props: {
    planeId: {
      required: true,
      type: Number
    }
  },
  data() {
    return {
      dayone: []
    };
  }
};
</script>

<style lang="scss">
.days {
  display: flex;
  > div {
    flex-grow: 1;
    .draggable {
      background: lightgray;
      padding: 30px 5px;
    }
    &:first-child {
      border-right: 1px solid black;
    }
  }
}
</style>

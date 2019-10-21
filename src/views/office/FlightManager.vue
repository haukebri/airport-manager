<template>
  <div class="flight-manager">
    <ul class="topnav">
      <li><router-link to="/office">back</router-link></li>
      <li
        :class="{ active: activeView === 'planelist' }"
        @click="changeView('planelist')"
      >
        planes
      </li>
      <li
        :class="{ active: activeView === 'flights' }"
        @click="changeView('flights')"
      >
        flights
      </li>
      <li
        :class="{ active: activeView === 'planner' }"
        @click="changeView('planner')"
      >
        planner
      </li>
    </ul>
    <div>
      <planelist
        v-if="activeView === 'planelist'"
        @click="changeView('flights')"
      />
      <flightslist v-if="activeView === 'flights'" />
      <scheduled-plan v-if="activeView === 'planner'" />
    </div>
  </div>
</template>

<script>
import Planelist from "@/components/office/Planelist.vue";
import Flightslist from "@/components/office/Flightslist.vue";
import ScheduledPlan from "@/components/office/ScheduledPlan.vue";

export default {
  name: "flight-manager",
  components: {
    Planelist,
    Flightslist,
    ScheduledPlan
  },
  data() {
    return {
      activeView: "planelist"
    };
  },
  methods: {
    changeView(to) {
      this.activeView = to;
    }
  }
};
</script>

<style lang="scss">
.topnav {
  display: flex;
  margin: 15px 0;
  padding: 0;
  list-style: none;
  justify-content: space-around;

  li {
    margin: 0;
    padding: 10px;
    background: lightblue;

    &.active {
      background: lightcyan;
    }
  }
}
</style>

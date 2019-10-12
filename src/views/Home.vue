<template>
  <div class="home">
    <vertical-scroll>
      <div class="super-width" :style="{ width: containerWidth + 'px' }">
        <div class="room-container" ref="roomContainer">
          <room @click="movePlayer($event, 'office')" to="office" />
          <room @click="movePlayer($event, 'office')" to="tours" />
          <room @click="movePlayer($event, 'office')" to="xex" />
          <room @click="movePlayer($event, 'office')" to="xtx" />
          <room @click="movePlayer($event, 'office')" to="xrx" />
        </div>
        <div
          class="background"
          ref="background"
          :style="{
            backgroundImage: 'url(' + background + ')',
            backgroundPositionX: scrollPos / 3 + 'px'
          }"
        >
          <div
            class="wall"
            :style="{
              backgroundImage: 'url(' + wall + ')'
            }"
          ></div>
          <div
            class="floor"
            :style="{
              backgroundImage: 'url(' + floor + ')'
            }"
          ></div>
        </div>
        <player :pos="playerPos" />
      </div>
    </vertical-scroll>
  </div>
</template>

<script>
import VerticalScroll from "@/components/VerticalScroll";
import Room from "@/components/Room";
import Player from "@/components/Player";

export default {
  name: "home",
  data() {
    return {
      scrollPos: 0,
      playerPos: parseInt(localStorage.playerPos, 10) || 0
    };
  },
  components: {
    VerticalScroll,
    Room,
    Player
  },
  computed: {
    floor() {
      return require("./../assets/floor.png");
    },
    wall() {
      return require("./../assets/wall.png");
    },
    background() {
      return require("./../assets/dummy-bg.png");
    },
    containerWidth() {
      return 3000;
    }
  },
  mounted() {
    document
      .getElementsByClassName("vertical-scroll__inner")[0]
      .addEventListener("scroll", e => {
        this.scrollPos = e.target.scrollLeft;
      });

    document
      .getElementsByClassName("vertical-scroll__inner")[0]
      .scrollTo(this.playerPos, 0);
  },
  methods: {
    movePlayer(pos, redirect) {
      this.playerPos = pos;
      localStorage.setItem("playerPos", pos);

      window.setTimeout(() => {
        this.$router.push("/" + redirect);
      }, 800);
    }
  }
};
</script>

<style lang="scss">
.super-width {
  height: 100%;
  position: relative;
}

.room-container {
  height: 220px;
  width: 100%;
  bottom: 95px;
  position: absolute;

  & > * {
    float: left;
  }
  &:after {
    content: "";
    clear: both;
  }
}
.background {
  z-index: -10;
  position: absolute;
  background-size: contain;
  background-position-x: 0px -680px;
  height: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  .floor {
    width: 100%;
    height: 181px;
    position: absolute;
    bottom: 0;
    z-index: 10;
    border-top: 5px solid black;
  }
  .wall {
    width: 100%;
    height: 100%;
    z-index: 5;
    position: absolute;
  }
}
</style>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
body,
#app,
#app > * {
  height: 100vh;
}

button:focus {
  outline: 0;
}
</style>

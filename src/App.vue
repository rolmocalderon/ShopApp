<template>
  <div id="app">
    <headerview />
    <router-view />
  </div>
</template>

<script>
import headerview from "./views/Header";

export default {
  components: {
    headerview
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  background: #f9f9f9;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a:link {
  color: inherit;
  text-decoration: none;
}

a:visited {
  color: inherit;
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

a:active {
  text-decoration: none;
}
</style>

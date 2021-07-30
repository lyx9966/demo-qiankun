<template>
  <div id="nav">
    <div>main</div>
    <router-link to="/">Home</router-link> |
    <router-link to="/app2">app2</router-link> |
    <router-link to="/app3">app3</router-link> 
    <!-- <router-link to="/app4">app4</router-link> -->
    <div id="subapp-container"></div>
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

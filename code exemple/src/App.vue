<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/prop">Prop</router-link> |
      <router-link to="/provide">Provide/Inject</router-link> |
      <router-link to="/children">$children</router-link> |
      <router-link to="/emit">Emit</router-link> |
      <router-link to="/parent">$parent</router-link> |
      <router-link to="/v-model">V-model</router-link> |
      <router-link to="/vuex">Vuex</router-link> |
      <router-link to="/event-bus">Event-bus</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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

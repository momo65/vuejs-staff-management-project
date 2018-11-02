<template>
  <div id="appHeaderNav">
    <div id="populateFirebase">
      <PopulateFirebase/>
    </div>
    <!--<div id="headerNav">
      <HeaderNav/>
    </div>
    <div id="app">
      <HelloWorld/>
    </div>-->
  </div>
</template>

<script>
import HeaderNav from './components/HeaderNav.vue'
import HelloWorld from './components/HelloWorld.vue'
import PopulateFirebase from './components/PopulateFirebase'

export default {
  name: 'app',
  components: {
    HeaderNav,
    HelloWorld,
    PopulateFirebase
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px
}
</style>

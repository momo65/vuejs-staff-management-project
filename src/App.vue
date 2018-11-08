<template>
  <div id="appHeaderNav">
    <!--<div id="populateFirebase">
      <PopulateFirebase/>
    </div>--><!--this is for populating the firebase with persons's data-->
    <div id="headerNav">
      <HeaderNav/>
    </div>
    <div id="app">
      <Welcome></Welcome>
    </div> <!--the welcome page-->
  </div>
</template>

<script>
import HeaderNav from './components/HeaderNav.vue'
import PopulateFirebase from './components/PopulateFirebase'
import Welcome from './components/Welcome'

export default {
  name: 'app',
  components: {
    HeaderNav,
    Welcome,
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

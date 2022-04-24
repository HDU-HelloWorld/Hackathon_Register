<template>
  <div id="app">
    <Home />
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './components/Home.vue'
export default {
  name: 'App',
  components: { Home }
}
</script>

<style>
*{
  margin: 0px;
  padding:0px;
}
body{
  box-sizing: border-box;
  background-color: #f4f4f4c4;
  height: 3000px;
  min-width: 1000px;
}
</style>

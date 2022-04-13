<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
//  引入HelloWorld组件

export default {
  name: 'App',
  components: {}
}
</script>

<style>
*{
  margin: 0px;
  padding:0px;
}
body{
  box-sizing: border-box;
  background-color: #f4f4f4;
  height: 1500px;
}
</style>

<template>
  <div class="hello">
    <Top/>
    <div class="banner">
      <BannerLeft/>
      <BannerRight/>
    </div>
    <Bottom/>
  </div>
</template>

<script>
//  引入四个组件
import Top from './Top.vue'
import BannerLeft from './BannerLeft.vue'
import BannerRight from './BannerRight.vue'
import Bottom from './Bottom.vue'
export default {
  name: 'HelloWorld',
  components: { Top, BannerLeft, BannerRight, Bottom }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
    width: 80%;
    margin-left: 10%;
  }
  .banner{
    display: flex;
    justify-content: space-around;
  }
</style>

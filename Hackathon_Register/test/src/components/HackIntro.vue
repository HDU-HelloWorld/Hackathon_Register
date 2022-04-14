<template>
  <div class="hackintro">
    <h1>Hackathon简介
      <hr>
    </h1>
    <div class="exp"></div>
  </div>
</template>

<script>
export default {
  mounted () {
    this.$bus.$on('scrool', this.scrool)
  },
  methods: {
    scrool () {
      window.scrollTo({
        'top': 500, // emmm之后应该是写成一个变量的形式改变
        'behavior': 'smooth'
      })
    }
  }
}
</script>

<style lang='less' scopde>
  .hackintro{
    margin-top: 80px;
    width: 75%;
    margin-left: 15%;
    height: 500px;
    h1{
      margin-bottom: 40px;
      hr{
        margin-top: 9px;
        height: 3px;
        width: 370px;
        background-color: rgb(42,199,180);
      }
    }
    .exp{
      background-color: pink;
      width: 100%;
      height: 1000px;
    }
  }
</style>

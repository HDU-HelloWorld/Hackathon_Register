<template>
  <div class="support">
    <h1 class="title">大赛支持
      <hr>
    </h1>
    <div class="exp">
      <img src="../assets/3.jpeg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    this.$bus.$on('scrool-5', this.scrool)
  },
  methods: {
    scrool () {
      window.scrollTo({
        'top': 5640,
        'behavior': 'smooth'
      })
    }
  }
}
</script>

<style lang="less">
.support{
    margin-top: 100px;
    width: 80%;
    margin-left: 15%;
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
      width: 100%;
      img{
        width: 85%;
      }
    }
}
</style>

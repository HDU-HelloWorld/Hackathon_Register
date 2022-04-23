<template>
  <div class="support">
    <h1 class="title">大赛主办
      <hr>
    </h1>
    <div class="exp">
      <p><img src="../assets/logo.png" alt=""></p>
    </div>
    <h1 class="title">大赛协办
      <hr>
    </h1>
    <div class="exp">
      <p><img src="../assets/log3.png" alt=""><img src="../assets/Ccf.png" alt="" style="margin:50px 100px;"></p>
    </div>
    <h1 class="title">大赛赞助
      <hr>
    </h1>
    <div class="exp">
      <p><img src="../assets/arcsoft.png" alt="" style="width:300px;margin-bottom:200px;"></p>
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
      width: 80%;
      text-align: center;
      img{
        width: 200px;
        margin: 50px auto;
      }
    }
}
</style>

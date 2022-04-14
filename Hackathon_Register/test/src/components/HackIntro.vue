<template>
  <div class="hackintro">
<<<<<<< HEAD
    <h1>Hackathon简介
      <hr>
    </h1>
=======
    <h1>Hackathon简介</h1>
>>>>>>> f32fec34c6783c142321d390fe58d12b6bec9067
    <div class="exp"></div>
  </div>
</template>

<script>
export default {
<<<<<<< HEAD
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
=======

>>>>>>> f32fec34c6783c142321d390fe58d12b6bec9067
}
</script>

<style lang='less' scopde>
  .hackintro{
    margin-top: 80px;
    width: 75%;
    margin-left: 15%;
    height: 500px;
    h1{
<<<<<<< HEAD
      margin-bottom: 40px;
      hr{
        margin-top: 9px;
        height: 3px;
        width: 370px;
        background-color: rgb(42,199,180);
      }
=======
      margin-bottom: 50px;
>>>>>>> f32fec34c6783c142321d390fe58d12b6bec9067
    }
    .exp{
      background-color: pink;
      width: 100%;
      height: 1000px;
    }
  }
</style>

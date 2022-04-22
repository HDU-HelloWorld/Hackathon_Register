<template>
  <div class="pllan">
    <h1 class="title">赛程安排
      <hr>
    </h1>
    <div>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    this.$bus.$on('scrool-4', this.scrool)
  },
  methods: {
    scrool () {
      window.scrollTo({
        'top': 4825,
        'behavior': 'smooth'
      })
    }
  }
}
</script>

<style lang="less">
.pllan{
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
}
</style>

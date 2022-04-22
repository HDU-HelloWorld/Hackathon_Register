<template>
  <div class="top">
    <div class="top-barrer">
      <div class="left">HACKATHON</div>
      <ul class="right">
        <button class="right-btn" @click="showDetail">Hackathon简介</button>
        <button class="right-btn" @click="showDetail02">比赛介绍</button>
        <button class="right-btn" @click="showDetail03">参赛须知</button>
        <button class="right-btn" @click="showDetail04">赛程安排</button>
        <button class="right-btn" @click="showDetail05">大赛支持</button>
      </ul>
    </div>
    <img src="../assets/1.png">
    <div class="top-bottom">
      <button class="bottom-left" @click="goHome">首页</button>
      <button class="bottom-left" @click="changeprocess">比赛流程</button>
      <button class="bottom-left" @click="changeroutercom">比赛规则</button>
      <button class="bottom-left" @click="changeroutermark">评分规则</button>
      <button class="btn" @click="changerouter">点我报名
        <span></span><span></span><span></span><span></span>
      </button>
    </div>
  </div>
  <!-- 测试提交 -->
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    showDetail () {
      this.$bus.$emit('scrool')
      this.$router.replace({
        name: '/'
      })
    },
    goHome () {
      this.$router.replace('/')
    },
    showDetail02 () {
      this.$bus.$emit('scrool-2')
      this.$router.replace({
        name: '/'
      })
    },
    showDetail03 () {
      this.$bus.$emit('scrool-3')
      this.$router.replace({
        name: '/'
      })
    },
    showDetail04 () {
      this.$bus.$emit('scrool-4')
      this.$router.replace({
        name: '/'
      })
    },
    showDetail05 () {
      this.$bus.$emit('scrool-5')
      this.$router.replace({
        name: '/'
      })
    },
    changerouter () {
      this.$router.replace({
        name: 'login'
      })
    },
    changeroutercom () {
      this.$router.replace({
        name: 'competerule'
      })
    },
    changeprocess () {
      this.$router.replace({
        name: 'process'
      })
    },
    changeroutermark () {
      this.$router.replace({
        name: 'evaluaterule'
      })
    },
    retrunrou () {
      this.$router.replace({
        name: '/'
      })
    }
  }
}
</script>

<style lang='less' scoped>
  a {
    text-decoration: none;
    color: black;
  }
  .top{
    min-width: 1000px;
    width: 100%;
    min-width: 800px;
    display: inline-block ;
    background-color: white;
    border-bottom: 1px white solid;
    box-shadow: 0 0 50px rgba(0, 0, 0, .9);
    font-size: 28px;
    .top-barrer{
      min-width: 1000px;
      width: 100%;
      height: 110px;
      line-height: 110px;
      display: flex;
      justify-content: space-between;
      position: fixed;
      top: 0px;
      left: 0px;
      z-index: 999;
      background-color: #fff;
      .left{
        width: 150px;
        margin-left: 50px;
        height: 50px;
        line-height: 50px;
        margin-top: 20px;
        text-align: center;
      }
      .right{
        width: 850px;
        height: 50px;
        // background-color: red;
        display: flex;
        justify-content: space-evenly;
        list-style-type: none;
        line-height: 50px;
        margin-top: 30px;
        .right-btn{
          height: 50px;
          border: none;
          background-color: transparent;
          outline: none;
          cursor: pointer;
          &:hover{
            border-bottom: 5px solid black;
          }
        }
      }
    }
    img{
      margin-top: 110px;
      display: block;
      width: 100%;
      min-width: 1000px;
    }
    .top-bottom{
      min-width: 1000px;
      width: 100%;
      height: 80px;
      display: flex;
      list-style-type: none;
      margin-top: 5px;
      background: linear-gradient(200deg,#00cbf6,#66a6ff);
      margin-bottom: 8px;
      .bottom-left{
        border: none;
        outline: none;
        background-color: transparent ;
        min-width: 130px;
        margin-top: 20px;
        margin-left: 50px;
        height: 40px;
        line-height: 40px;
        width: 130px;
        cursor: pointer;
        text-align: center;
        &:hover{
          border-bottom: 5px solid black;
          transition:0.5;
        }
      }
      .btn{
        font-size: 28px;
        margin-top: 8px;
        width: 240px;
        height: 60px;
        margin-left: 50%;
        color: #fff;
        background: linear-gradient(200deg,#00cbf6,#66a6ff);
        border-radius: 10px;
        border: 3px solid #fff;
        text-align: center;
        line-height: 60px;
        font-weight: bold;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        transition: 0.5s;
        z-index: 1;
        &:hover{
          color: #222;
        }
        &:hover span{
          transform: translateY(0) scale(2);
        }
        span{
          z-index: -1;
          position: absolute;
          width: 25%;
          height: 100%;
          background-color: #fff;
          border-radius: 50%;
          transform: translateY(150%);
          left: calc((var( --n ) - 1) * 25% );
          transition: 0.5s;
          transition-delay: calc((var( --n ) - 1) * 0.1s );
          &:nth-child(1){
            --n:1;
          }
          &:nth-child(2){
            --n:2;
          }
          &:nth-child(3){
            --n:3;
          }
          &:nth-child(4){
            --n:4;
          }
        }
      }
    }
  }
</style>

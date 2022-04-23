<template>
    <div class="top">
      <div class="login">
        <button class="btn" @click="showLogin">我要报名
        </button>
      </div>
      <div class="top-barrer">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        </el-menu>
          <div class="line"></div>
          <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo top"
            mode="horizontal"
            @select="handleSelect"
            background-color="#fff"
            text-color="#171717"
            active-text-color="#63CF79">
            <el-menu-item index="1">Hackathon简介</el-menu-item>
            <el-menu-item index="2">比赛介绍</el-menu-item>
            <el-menu-item index="3">参赛须知</el-menu-item>
            <el-menu-item index="4">赛程安排</el-menu-item>
            <el-menu-item index="5">大赛支持</el-menu-item>
          </el-menu>
      </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
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
    showLogin () {
      this.$bus.$emit('scrool-6')
      this.$router.replace({
        name: '/'
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
    }
  }
}
</script>

<style lang='less' scoped>
  a {
    text-decoration: none;
    color: black;
  }
  .el-menu-item.is-active {
    color: #B6DEDE ;
    font-size: 18px ;
    font-weight: 3px ;
}
.el-menu--horizontal>.el-menu-item.is-active {
  border-bottom: 2px solid #B6DEDE ;
}
  .top{
    position: fixed;
    min-width: 1000px;
    width: 100%;
    min-width: 800px;
    display: inline-block ;
    background-color: white;
    border-bottom: 1px white solid;
    box-shadow: 0 0 10px rgba(0, 0, 0, .9);
    font-size: 28px;
    .top-barrer{
      min-width: 1000px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      position: fixed;
      top: 0px;
      left: 0px;
      z-index: 999;
      background-color: #fff;
    }
    .login{
    position: fixed;
    top: 40%;
    right: 5%;
      .btn{
        font-size: 30px;
        margin-top: 8px;
        width: 65px;
        height: 200px;
        margin-left: 50%;
        color: #fff;
        background: linear-gradient(200deg,#00cbf6,#66a6ff);
        border-radius: 10px;
        border: 4px solid #fff;
        text-align: center;
        line-height: 40px;
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
          transform: translateX(-40%) scale(2);
        }
        span{
          z-index: -1;
          position: absolute;
          width: 100%;
          height: 25%;
          background-color: #fff;
          border-radius: 50%;
          transform: translateY (150%);
          left: calc((var( --n ) - 1) * 25% );
          transform: translateX(150%);
          top: calc((var( --n ) - 1) * 25% );
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

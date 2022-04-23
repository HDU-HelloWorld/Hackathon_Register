<template>
    <div class="top">
      <div class="top-barrer">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1" @click=showDetail>Hackathon简介</el-menu-item>
          <el-menu-item index="2" @click="showDetail02">比赛介绍</el-menu-item>
          <el-submenu index="3">
            <div slot="title">参赛须知</div>
            <el-menu-item index="3-1">比赛流程</el-menu-item>
            <el-menu-item index="3-2">比赛规则</el-menu-item>
            <el-menu-item index="3-3">评分规则</el-menu-item>
          </el-submenu>
          <el-menu-item index="4">赛程安排</el-menu-item>
          <el-menu-item index="5">大赛支持</el-menu-item>
        </el-menu>
          <div class="line"></div>
          <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo top"
            mode="horizontal"
            @select="handleSelect"
            background-color="#fff"
            text-color="#000"
            active-text-color="#ffd04b">
            <el-menu-item index="1" class="topText">Hackathon简介</el-menu-item>
            <el-menu-item index="2" class="topText">比赛介绍</el-menu-item>
            <el-submenu index="3" class="topText">
              <div slot="title" class="topText">参赛须知</div>
              <el-menu-item index="3-1" class="topText">比赛流程</el-menu-item>
              <el-menu-item index="3-2" class="topText">比赛规则</el-menu-item>
              <el-menu-item index="3-3" class="topText">评分规则</el-menu-item>
            </el-submenu>
            <el-menu-item index="4" class="topText">赛程安排</el-menu-item>
            <el-menu-item index="5" class="topText">大赛支持</el-menu-item>
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
  .topText {
    top: 5px;
    margin-top: 5px;
    font-size: 20px;
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
      height: 80px;
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
          transform: translateX(-50%) scale(2);
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

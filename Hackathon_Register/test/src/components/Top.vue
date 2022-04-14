<template>
  <div class="top">
    <div class="top-barrer">
      <div class="left">HACKATHON</div>
      <ul class="right">
        <li @click="showDetail">Hackathon简介</li>
        <li>比赛介绍</li>
        <li>参赛须知</li>
        <li>赛程安排</li>
        <li>大赛支持</li>
      </ul>
    </div>
    <img src="../assets/1.png">
    <div class="top-bottom">
      <li>比赛流程</li>
      <li>比赛规则</li>
      <li>评分规则</li>
      <button class="btn">点我报名
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
    }
  }
}
</script>

<style lang='less' scoped>
  .top{
    width: 100%;
    // height: 440px;
    background-color: white;
    border-bottom: 1px white solid;
    box-shadow: 0 0 50px rgba(0, 0, 0, .9);
    .top-barrer{
      width: 100%;
      height: 110px;
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
        line-height: 90px;
      }
      .right{
        width: 850px;
        display: flex;
        justify-content: space-evenly;
        list-style-type: none;
        line-height: 50px;
        li{
          margin-top: 20px;
          height: 50px;
          transition:0.5;
          &:hover{
            border-bottom: 5px solid black;
            transition:0.5;
          }
        }
      }
    }
    img{
      margin-top: 110px;
      display: block;
      width: 100%;
    }
    .top-bottom{
      width: 100%;
      height: 80px;
      display: flex;
      list-style-type: none;
      margin-top: 5px;
      background: linear-gradient(200deg,#00cbf6,#66a6ff);
      margin-bottom: 8px;
      li{
        margin-top: 20px;
        margin-left: 50px;
        height: 40px;
        width: 130px;
        text-align: center;
        &:hover{
          border-bottom: 5px solid black;
          transition:0.5;
        }
      }
      .btn{
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

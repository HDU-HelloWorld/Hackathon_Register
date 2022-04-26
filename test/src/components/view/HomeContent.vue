<template>
  <div class="wrapper">
    <div class="curtain" :style="'height: ' + Height">
      <div class="enterCurtain" :style="'height: ' + Height">
        <div class="curtainText">
          <div class="text1">Hackathon</div>
          <br />
          <div class="text2">「码」力全开</div>
        </div>
      </div>
      <div class="backCurtain" :style="'height: ' + Height">
        <div class="curtainText">
          <div class="text1">Hackathon</div>
          <br />
          <div class="text2">「码」力全开</div>
        </div>
      </div>
      <div class="backCurtain1">
        <div class="picBox1">
          <img
            src="../../assets/vscode.png"
            alt="vscode"
            id="curtainPic1"
            data-depth="0.6"
          />
        </div>
      </div>
      <el-row class="startExplore">
        <el-col :span="2" :offset="11" data-depth="0.3">
          <el-button
            type="primary"
            class="exploreBtn"
            style="font-family: 'Hackathon'"
          >
            Explore NOW!
          </el-button>
        </el-col>
        <el-col :span="11" :offset="0"></el-col>
      </el-row>
      <HackIntro class="Hackintro"></HackIntro>
    </div>
    <div ref="startPosition" class="componentContainer">
      <div class="whiteblock">???</div>
      <process class="process"></process>
      <Notice class="Notice"></Notice>
      <Plan class="Plan"></Plan>
      <CompitiIntro class="Compitiintro"></CompitiIntro>
      <Support class="Support"></Support>
      <ApplyForm class="ApplyForm"></ApplyForm>
    </div>
  </div>
</template>

<script>
import CompitiIntro from '../CompitiIntro.vue'
import HackIntro from '../HackIntro.vue'
import Notice from '../Notice.vue'
import Plan from '../Plan.vue'
import Support from '../Support.vue'
import ApplyForm from './ApplyForm'
// 引入Parallax.js
import Parallax from 'parallax-js'
// 引入jQuery
import $ from 'jquery'
import Process from './process.vue'
export default {
  components: { HackIntro, CompitiIntro, Plan, Notice, Support, ApplyForm, Process },
  data () {
    return {
      Height: window.innerHeight + 'px',
      btnStatus: 0
    }
  },
  mounted () {
    window.onresize = () => {
      document.querySelector('.enterCurtain').setAttribute('style', 'height: ' + window.innerHeight + 'px')
      document.querySelector('.backCurtain').setAttribute('style', 'height: ' + window.innerHeight + 'px')
    }
    document.querySelector('.exploreBtn').addEventListener('click', () => {
      this.$refs.startPosition.scrollIntoView({
        behavior: 'smooth'
      })
    })
    window.addEventListener('scroll', () => {
      // 判断按钮和介绍组件的高度，同时判断按钮状态来决定按钮是否需要飞入/飞出
      if ($('.exploreBtn').offset().top > $('.componentContainer').offset().top && this.btnStatus === 0) {
        this.btnStatus = 1
        $('.exploreBtn').animate({ left: window.innerWidth + 'px' })
      } else if ($('.exploreBtn').offset().top < $('.componentContainer').offset().top && this.btnStatus === 1) {
        this.btnStatus = 0
        $('.exploreBtn').animate({ left: '50%' })
      }
    })
    let scene = document.querySelector('.startExplore')
    let parallax = new Parallax(scene)
    // parallax.enable()
    // parallax.origin(0.5, 0.5)
    parallax.friction(0.2, 0.8)
    parallax.calibrate(true, true)
    parallax.scalar(3, 10)
    let scene1 = document.querySelector('.picBox1')
    // eslint-disable-next-line
    let parallax1 = new Parallax(scene1)
    // parallax1.friction(0.2, 0.8)
    // parallax1.calibrate(false, false)
    // parallax1.scalar(20, 20)
    // let scene1 = document.querySelectorAll('.curtainText')
    // let parallax1 = new Parallax(scene1[0])
    // let parallax2 = new Parallax(scene1[1])
  }
}
</script>

<style lang="less" scoped>
#curtainPic1 {
  position: fixed;
  // right: -10%;
  margin-left: 90%;
  margin-top: 30%;
}

.picBox1 {
  width: 100%;
}

.wrapper {
  width: 100%;
  overflow: hidden;
}

.exploreBtn {
  position: fixed;
  font-size: 25px;
  background-color: rgb(63, 207, 79);
  border: 0;
  pointer-events: auto; // parallax.js会阻止鼠标事件，重设鼠标事件确保按钮能够正常使用
}

.startExplore {
  position: fixed;
  z-index: 0;
  bottom: 5%;
  width: 100%;
  height: 20%;
}

.enterCurtain {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fff;
  color: rgb(63, 207, 79);
  display: flex;
  z-index: -1;
  justify-content: center;
  align-items: center;
  font-family: 'Hackathon';
  font-size: 80px;
  -webkit-clip-path: polygon(75% 0, 100% 0%, 24% 100%, 0% 100%);
  clip-path: polygon(25% 0, 50% 0%, 24% 100%, 0% 100%);
}

.backCurtain {
  position: fixed;
  top: 0;
  z-index: -3;
  width: 100%;
  // background-color: rgb(17, 17, 17);
  // color: rgb(63, 207, 79);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Hackathon';
  font-size: 80px;
  background: url('../../assets/backgroundPic1.png');
  background-size: 100%;
  margin: 0;
  border: 0;
  padding: 0;
  // -webkit-clip-path: polygon(75% 0, 100% 0%, 24% 100%, 0% 100%);
  // clip-path: polygon(75% 0, 100% 0%, 24% 100%, 0% 100%);
}

// 使用parallax时需要用一个盒子装起所有组件
.backCurtain1 {
  position: fixed;
  right: 40%;
  bottom: -3%;
  z-index: -2;
}

.text1 {
  position: absolute;
  left: 10%;
  top: 20%;
}

.text2 {
  position: absolute;
  left: 15%;
  bottom: 10%;
}

// .curtain {
// }

.componentContainer {
  border-top: 300px;
  background-color: #fff;
  z-index: 2;
}

.whiteblock {
  width: 100%;
  height: 300px;
}
</style>

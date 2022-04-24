<template>
  <div class="wrapper">
    <div class="curtain">
      <div class="enterCurtain" :style="'height: ' + Height" data-depth="0.3">
        Hackathon <br />「码」力全开
      </div>
      <div class="backCurtain" :style="'height: ' + Height" data-depth="0.3">
        Hackathon <br />「码」力全开
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
    </div>
    <div ref="startPosition"></div>
    <HackIntro class="Hackintro" style="position: fixed"></HackIntro>
    <CompitiIntro class="Compitiintro"></CompitiIntro>
    <Notice class="Notice"></Notice>
    <Plan class="Plan"></Plan>
    <Support class="Support"></Support>
    <ApplyForm class="ApplyForm"></ApplyForm>
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
// import Parallax from 'parallax-js'
export default {
  components: { HackIntro, CompitiIntro, Plan, Notice, Support, ApplyForm },
  data () {
    return {
      Height: window.innerHeight + 'px'
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
    // let scene = document.querySelector('.startExplore')
    // let parallax = new Parallax(scene)
    // // parallax.enable()
    // // parallax.origin(0.5, 0.5)
    // parallax.friction(0.2, 0.8)
    // parallax.calibrate(true, true)
    // parallax.scalar(3, 10)
  }
  // methods: {
  //   explore () {
  //     console.log('click')
  //   }
  // }
}
</script>

<style lang="less" scoped>
.wrapper {
  width: 100%;
}

.exploreBtn {
  font-size: 25px;
  background-color: rgb(63, 207, 79);
  border: 0;
}

.startExplore {
  position: absolute;
  bottom: 5%;
  width: 100%;
  height: 20%;
}

.enterCurtain {
  width: 100%;
  background-color: #fff;
  color: rgb(63, 207, 79);
  display: flex;
  z-index: 0;
  justify-content: center;
  align-items: center;
  font-family: 'Hackathon';
  font-size: 200px;
  -webkit-clip-path: polygon(75% 0, 100% 0%, 24% 100%, 0% 100%);
  clip-path: polygon(25% 0, 50% 0%, 24% 100%, 0% 100%);
}

.backCurtain {
  position: absolute;
  top: 0;
  z-index: -1;
  width: 100%;
  background-color: rgb(17, 17, 17);
  // color: rgb(63, 207, 79);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Hackathon';
  font-size: 200px;
  // -webkit-clip-path: polygon(75% 0, 100% 0%, 24% 100%, 0% 100%);
  // clip-path: polygon(75% 0, 100% 0%, 24% 100%, 0% 100%);
}
</style>

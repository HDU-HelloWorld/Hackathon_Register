<template>
  <div class="wrapper">
    <div class="enterCurtain" :style="'height: ' + Height">Hackathon</div>
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
    }
  }
}
</script>

<style lang="less" scoped>
  .wrapper{
    width: 100%;
  }

  .enterCurtain {
    width: 100%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Hackathon";
    font-size: 350px;
  }
</style>

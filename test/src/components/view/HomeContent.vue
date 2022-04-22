<template>
  <div class="wrapper">
    <hack-intro class="hackintro"></hack-intro>
    <compiti-intro class="compitiintro"></compiti-intro>
    <notice class="notice"></notice>
    <plan class="plan"></plan>
    <support class="support"></support>
  </div>
</template>

<script>
import CompitiIntro from '../CompitiIntro.vue'
import HackIntro from '../HackIntro.vue'
import Notice from '../Notice.vue'
import Plan from '../Plan.vue'
import Support from '../Support.vue'
export default {
  components: { HackIntro, CompitiIntro, Plan, Notice, Support }

}
</script>

<style lang="less">
  .wrapper{
    width: 100%;
    margin: 100px auto;
  }
</style>

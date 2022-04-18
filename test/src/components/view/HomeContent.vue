<template>
  <div>
    <hack-intro />
    <compiti-intro />
    <plan />
    <notice />
    <support />
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

<style>

</style>

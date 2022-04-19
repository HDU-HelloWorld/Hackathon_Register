<template>
  <div class="login">
    <ipt
      label="姓名"
      type="text"
      rule="^.{6,16}$"
      style="margin:50px auto"
    />
  </div>
</template>

<script>
import ipt from '../common/ipt.vue'
export default {
  components: { ipt },
  name: 'login'
}
</script>

<style>

</style>

<template>
  <div class="login">
    <div class="wrapper">
      <div class="floor">
        <ipt
          label="姓名"
          type="text"
          rule="^.{6,16}$"
          style="margin:25px 10px "
          />
        <ipt
          label="年龄"
          type="text"
          rule="^.{6,16}$"
          style="margin:25px 10px "
          />
      </div>
      <ipt
          label="电话"
          type="text"
          rule="^.{6,16}$"
          style="margin:25px 10px "
      />
      <ipt
      label="邮箱"
      type="text"
      rule="^.{6,16}$"
      style="margin:25px 10px "
      />
      <div class="floor">
        <ipt
          label="所在学院"
          type="text"
          rule="^.{6,16}$"
          style="margin:25px 10px "
        />
            <ipt
              label="所在年级"
              type="text"
              rule="^.{6,16}$"
              style="margin:25px 10px "
            />
      </div>
      <div class="floor">
        <ipt
          label="是否组队"
          type="checkbox"
          rule="^.{6,16}$"
          style="margin:25px 10px "
<<<<<<< HEAD
          id="checkbox"
          @click="change"
=======
>>>>>>> f4e31c6695306cb79d6a1faa9d6a5c72a28301f3
        />
        <ipt
          label="队名"
          type="text"
          rule="^.{6,16}$"
          style="margin:25px 10px "
          v-show="panduan"
        />
      </div>
       <div class="floor">
        <ipt
          label="你的个人介绍"
          type="text"
          rule="^.{6,16}$"
          style="margin:25px 10px "
        />
      </div>
    </div>
  </div>
</template>

<script>
import ipt from '../common/ipt.vue'
export default {
  components: { ipt },
  name: 'login',
  data () {
    return {
<<<<<<< HEAD
    }
  },
  methods: {
    // change () {
    //   console.log('hello')
    // }
  },
  computed: {
    flag: {
      get () {
        return this.checkbox.checked
      }
=======
      panduan: ''
>>>>>>> f4e31c6695306cb79d6a1faa9d6a5c72a28301f3
    }
  },
  mounted () {
    this.$bus.$on('chaocao', (data) => {
      this.panduan = data
    })
  }
}

</script>

<style>
.login{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.wrapper{
    display: flex;
    flex-direction: column;
    width: 450px;
    background-color: #fff;
    padding: 25px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    border-radius: 8px;
    margin:25px auto;
}
.floor{
  display: flex;
}

</style>

<template>
  <div class="login">
    <div class="wrapper">
      <div class="floor">
        <ipt
          label="姓名"
          type="text"
          rule="^[\u0391-\uFFE5A-Za-z]+$"
          style="margin:25px 10px "
          @inputChange="res => model.name = res "
          />
        <ipt
          label="年龄"
          type="text"
          rule="^\d+$|^\d+[.]?\d+$"
          style="margin:25px 10px "
          @inputChange="res => model.age = res "
          />
      </div>
      <ipt
          label="电话"
          type="text"
          rule="^[1][3,4,5,6,7,8,9][0-9]{9}$"
          style="margin:25px 10px "
          @inputChange="res => model.phone = res "
      />
      <ipt
          label="邮箱"
          type="text"
          rule="^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$"
          style="margin:25px 10px "
          @inputChange="res => model.email = res "
      />
      <div class="floor">
        <ipt
          label="所在学院"
          type="text"
          rule="^[\u0391-\uFFE5A-Za-z]+$"
          style="margin:25px 10px "
          @inputChange="res => model.college = res "
        />
        <ipt
          label="所在年级"
          type="text"
          rule="^[\u0391-\uFFE5A-Za-z]+$"
          style="margin:25px 10px "
          @inputChange="res => model.grader = res "
        />
      </div>
      <div class="floor">
        <ipt
          label="是否组队"
          type="checkbox"
          rule="^.{6,16}$"
          style="margin:25px 10px "
        />
        <ipt
          label="队名"
          type="text"
          rule="^.{6,16}$"
          style="margin:25px 10px "
          v-show="panduan"
          @inputChange="res => model.teamname = res "
        />
      </div>
      <div class="floor">
        <ipt
          label="你的个人介绍"
          type="text"
          rule="^.{0,500}$"
          style="margin:25px 10px "
          @inputChange="res => model.intro = res "
        />
      </div>
    </div>
    <button @click="submit">提交捏</button>
  </div>
</template>

<script>
import ipt from '../common/ipt.vue'
export default {
  components: { ipt },
  name: 'login',
  data () {
    return {
      panduan: '',
      model: {
        name: '',
        age: '',
        phone: '',
        email: '',
        college: '',
        grader: '',
        teamname: '',
        intro: ''
      }
    }
  },
  mounted () {
    this.$bus.$on('chaocao', (data) => {
      this.panduan = data
    })
  },
  methods: {
    submit () {
      let rulg = /^.{6,16}/;
      if (
        rulg.test(this.model.name) &&
        rulg.test(this.model.age) &&
        rulg.test(this.model.phone)&&
        rulg.test(this.model.email)&&
        rulg.test(this.model.college)&&
        rulg.test(this.model.grader)&&
        rulg.test(this.model.teamname)&&
        rulg.test(this.model.intro)
      ) {
        alert("注册成功")
        console.log(this.model)
      } else {
        alert("注册失败")
      }
      
    }
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

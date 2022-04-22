<template>
  <div class="login">
    <div class="wrapper">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="姓名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="form.age"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <div class="floor">
          <el-form-item label="所在学院">
            <el-input v-model="form.college"></el-input>
          </el-form-item>
          <el-form-item label="所在年级">
            <el-input v-model="form.grader"></el-input>
          </el-form-item>
        </div>
        <el-form-item label="是否组队" class="team">
          <el-checkbox v-model="form.team" name="type"></el-checkbox>
          <el-form-item label="队名" v-if="form.team">
            <el-input v-model="form.teamname"></el-input>
          </el-form-item>
        </el-form-item>
        <el-form-item label="个人介绍">
          <el-input type="textarea" v-model="form.intro"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
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
      panduan: '',
      form: {
        name: '',
        age: '',
        phone: '',
        email: '',
        college: '',
        grader: '',
        team: true,
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
    onSubmit () {}
  }
}

</script>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.wrapper {
  display: flex;
  flex-direction: column;
  width: 450px;
  background-color: #fff;
  padding: 25px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin: 25px auto;
}
.floor {
  display: flex;
}
</style>

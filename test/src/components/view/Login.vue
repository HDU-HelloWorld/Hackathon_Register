<template>
  <!-- 在本页尽量使用el-24分栏布局 -->
  <div class="login">
    <div class="wrapper">
      <el-form :model="form" :rules="rules" ref="form" label-width="80px">
        <!-- el-row 和 el-col可以控制表单组件在一行内显示 -->
        <!-- el-col 和 el-col采用24分栏布局，一行的宽度被均分为24份 -->
        <!-- 因此规定一行内两个col的span均为12即可实现等分一行 -->
        <!-- offset控制组件左侧空出的间距，如值为3时即空出这一行3/24的距离 -->
        <!-- 下面为一个行内显示示例 -->
        <el-row>
          <el-col :span="12" :offset="0">
            <el-form-item label="姓名" prop="name">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12" :offset="0" prop="age">
            <el-form-item label="年龄">
              <el-input v-model="form.age"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="电话" prop="phone">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <div class="floor">
          <el-form-item label="所在学院" prop="college">
            <el-input v-model="form.college"></el-input>
          </el-form-item>
          <el-form-item label="所在年级">
            <el-select v-model="form.grader">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.label"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </div>
        <el-row>
          <el-col :span="6">
            <el-form-item label="是否组队" class="team">
              <el-checkbox v-model="form.team" name="type"></el-checkbox>
            </el-form-item>
          </el-col>
          <el-col :span="18">
            <el-form-item label="队名" v-if="form.team">
              <el-input v-model="form.teamname"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item>
          <el-button type="primary" @click="submitForm('form')" :disabled="!agreement">提交</el-button>
          <el-button type="secondary" @click="resetForm('form')" :disabled="!agreement">取消</el-button>
        </el-form-item>
        <el-row>
          <el-col>
            <el-form-item class="requirement">
              <el-checkbox
                v-model="agreement"
                name="agreement"
                label="我已阅读并自觉遵守比赛规则"
              ></el-checkbox>
            </el-form-item>
          </el-col>
        </el-row>
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
      },
      agreement: false,
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 0, max: 15, message: '长度在 0 到 15 个字符', trigger: 'blur' }
        ],
        age: [
          { required: true, message: '请输入年龄', trigger: 'blur' },
          { type: 'number', message: '请输入数字', trigger: 'blur' },
          { min: 0, max: 15, message: '长度在 0 到 15 个字符', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入电话', trigger: 'blur' },
          { pattern: /^1[3-9][0-9]\d{8}$/, message: '请输入正确的电话号码', trigger: 'blur' },
          { min: 0, max: 15, message: '长度在 0 到 15 个字符', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱', trigger: 'blur' },
          { min: 0, max: 20, message: '长度在 0 到 20 个字符', trigger: 'blur' }
        ],
        college: [
          { required: true, message: '请输入大学', trigger: 'blur' },
          { pattern: /^[\u0391-\uFFE5A-Za-z]+$/, message: '请输入大学', trigger: 'blur' },
          { min: 0, max: 15, message: '长度在 0 到 15 个字符', trigger: 'blur' }
        ],
        grader: [
          { required: true, message: '请输入年级', trigger: 'blur' },
          { pattern: /^[\u0391-\uFFE5A-Za-z]+$/, message: '请输入年级', trigger: 'blur' },
          { min: 0, max: 15, message: '长度在 0 到 15 个字符', trigger: 'blur' }
        ],
        team: [],
        teamname: []
      },
      options: [{
        value: '选项1',
        label: '大一'
      }, {
        value: '选项2',
        label: '大二'
      }, {
        value: '选项3',
        label: '大三'
      }, {
        value: '选项4',
        label: '大四'
      }]
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
          console.log(this.form)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
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
.requirement {
  height: 10px;
}
</style>

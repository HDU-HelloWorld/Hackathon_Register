<template>
  <div class="notice">
    <h1>参赛须知
      <hr>
    </h1>
    <div class="exp">
      <h2 class="title">1.参赛报名：</h2>
      <br>
      <b>·</b><span>开发者需以个人身份报名，报名时需提交个人身份信息。需要注意的是，国队参赛每个成员均需单独报
名。若已经有国队，清在报名中备注团队报名。</span>
      <br>
      <br>
      <b>·</b><span>主办方会对报名行筛远，报名注册时附带个人简历、项目经历等资料，可提高筛选通过率。</span>
        <br>
      <br><b>·</b><span>若被筛选通过，参赛者的邮箱将会收由大赛主办方发送的《Hack「中国」2018 Hackathon》参赛邀请
邮件。故请留下有效邮箱地址。</span>
<br>
      <br>
<h2>2.团队规模：</h2>
<br>
      <b>·</b><span>每个团队2-5人，每人最多选择1个团队加入</span>
        <br>
      <br>
      <b>·</b><span>参赛者提前组队，也可到现场自由组队。</span>
      <br>
      <br>
      <h2>3.活动须知：</h2>
      <br>
      <b>·</b><span>参赛者收到的参赛邀请邮件中将附带活动时间表，如无意外，基本活动安排与时间表无异，规定的活动时间内，在具体的活动地点将会有工作人员接应。</span>
    <br>
      <br>
      <b>·</b><span>比赛居时凭借参赛邀请邮件或邀情函进行签到，领取参赛证、身份卡、赛事资料及其他比赛相关物品。</span>
      <br>
      <br>
      <h2>4.现场组队：</h2>
      <br>
      <b>·</b><span>活动场会设有白板，准备现场组队的开发者可以将身份卡放置于白板上，可标注自己能做什么，想做什么，在找怎样的人等等关键词”。不同的身份卡用于区分开发者角色，帮助快速组队。</span>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    this.$bus.$on('scrool-3', this.scrool)
  },
  methods: {
    scrool () {
      window.scrollTo({
        'top': 4040, // emmm之后应该是写成一个变量的形式改变
        'behavior': 'smooth'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.notice{
  margin-top: 100px;
    width: 75%;
    margin-left: 15%;
    h1{
      margin-bottom: 40px;
      hr{
        margin-top: 9px;
        height: 3px;
        width: 370px;
        background-color: rgb(42,199,180);
      }
    }
    h2 {
      font-size: 26px;
      line-height: 45px;
    }
    .exp{
      // background-color: #fff;
      width: 100%;
      b {
        margin-left: 28px;
      }
      span {
        line-height: 38px;
        margin-left: 10px;
        font-size: 24px;
        font-weight: 500;
      }
    }
  }
</style>

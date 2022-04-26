<template>
  <div class="introduce">
    <h2 id="scr">Hackathon比赛介绍</h2>
    <div class="exp">
      <h4 class="title">一、活动要求：</h4>
      <div class="content">本次Hackathon不限制创意类型，支特参赛者进行符合大赛主题的相关开发，赛事包含悬莫命题，悬莫命题在比赛前由赞动商公布。鼓励开发者发挥创新、合作精神，将自己的创意酝酿到极致。</div>
      <br>
      <h4 class="title">二、比赛规则：</h4>
      <div class="content">参赛队伍开发时间为24小时。不能剽窃他人创意、思路。不能以各种方式干扰其他队伍创作。如大声交流。外放噪音、观看视
须、抽烟等不良行为。规场提供网格，但禁止出于被环他人比赛影响网络的行为，如大量下裁无关比赛文件等。比赛以参赛
证、身份卡作为识别证件，请随身携带，并配合工作人员查。现场提供餐饮，请勿携带外来食品、饮品带入会场内，谢谢配
合。如有特殊博况，请及时联系工作人员说明情况。参赛者提前组队，也可到现场自由组队。</div>
      <br>
      <h4 class="title">三、评分规则：</h4>
      <div class="content">1.本国赛事评分包括两部分，基础分数(50%)以及解说/灵感分(50%)口基础评分部分，评分点主要包括：与主题匹配
度，完成度。其中取主导部分为别出心裁的创意。口解说灵感部分，评分点主要包括：产品展示，商业价值，应用前悬。其中取主导部分为炫酷的产品展示</div>
      <div class="content">2.参赛队伍最终得分将综合代码得分、作品完成度得分以及现场展示得分三方面。评委将主要从代码和作品完成度两个方向
司时对提交的作品进行审核。比赛居时凭借参赛邀请邮件或邀情函进行签到，领取参赛证、身份卡、赛事资料及其他比赛相关物品。</div>
      <br>
      <h4 class="title">四、比赛提交：</h4>
      <div class="content">1.每个回队限提交一件作品。</div>
      <div class="content">2.提交作品至少包括：相关代码、文字介绍、产品截图、人员信息。</div>
      <div class="content">3.作品提交时间需在规定时间内（次日9：00一一12：00），其他时间提交无效。</div>
      <div class="content">4.若参赛产品曾被用于其他赛事，需备注说明并附件相关作品。</div>
      <div class="content">5.参赛作显若出现剽窃其他作品行为，取消参赛资格。</div>
      <br>
      <h4 class="title">五、作品展示:</h4>
      <div class="content">1.测试园示项目所需设备，请于主办方咨询处联系工作人员。</div>
      <div class="content">2.测试时间：9：00~12：00。湾提前安排时间，避免拥挤。</div>
      <div class="content">3.若有VGA视频输出、3.5mm标准查频埔出，请尽早则试主办方提供的转接线。</div>
      <div class="content">4.展示需要的局域网需选手自行搭建。</div>
      <div class="content">5.项目展示时间为5分钟，有严格的时间把控，请做好准备。</div>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    this.$bus.$on('scrool-2', this.scrool)
  },
  methods: {
    scrool () {
      let toptwo = document.querySelector('#scr')
      window.scrollTo({
        'top': toptwo.offsetTop,
        'behavior': 'smooth'
      })
    },
    jumpto () {
      document.querySelector('.scr').scrollIntoView()
    }
  }
}
</script>

<style lang="less" scoped>
.introduce{
    margin-top: 100px;
    width: 80%;
    margin: 0 auto;
    min-width: 80%;
    h2{
      width: 100%;
      text-align: center;
    }
    .exp{
      margin-top: 50px;
      width: 100%;
      div {
        width: 100%;
        font-size: 20px;
        line-height: 30px;
        color: #555;
      }
    }
      .content{
        margin-top: 8px;
        font-weight: 900;
        font-size: 24px;
        border-radius: 10px;
      }
    }
</style>

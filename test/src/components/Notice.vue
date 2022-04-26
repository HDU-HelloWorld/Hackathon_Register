<template>
  <div class="notice">
    <div>
    <h2 class="head">比赛流程</h2>
    <br>
  </div>
    <div>
    <el-steps :active="2">
      <el-step title="1.比赛签到" description="参赛选手到达比赛现场，签到并领取相关物资。"></el-step>
      <el-step title="2.现场组队" description="准备现场组队的开发者可以将身份卡放置于现场准备的组队版上，标注自己“能做什么，想做什么，在找怎样的人”等等关键词。调试相关硬件设备。"></el-step>
      <el-step title="3.宣讲阶段" description="大赛主办方进行技术内容宣讲。开发者可选择感兴趣的内容参与，并就自己感兴趣的内容现场提问。"></el-step>
      <el-step title="4.开发阶段" description="参赛队伍进行24小时开发。开发者如果有用到现场技术服务方，可以随时通过赞助商的现场展位向大赛服务提供商询问技术问题。"></el-step>
      <el-step title="5.提交评审" description="参赛队伍可以在比赛开始后的20小时后开始提交产品，提交截止后，大赛评委会将选出80%优秀产品进行产品展示。"></el-step>
      <el-step title="6.观众入场" description="参观比赛人员入场，观看产品展示环节。"></el-step>
      <el-step title="7.产品展示" description="每件产品有5分钟时间，可以通过演说，实物演示等手段进行产品展示，评委会根据产品的创新性、实用性、完成度进行评分。"></el-step>
      <el-step title="8.颁奖典礼" description="大赛评委会将在参加产品展示的产品中选出部分优秀产品，予以奖励。"></el-step>
    </el-steps>
    <br>
    <br>
    <div class="content">大赛评委会将在参加产品展示的产品中选出部分优秀产品，予以奖励。</div>
  </div>
  <div>
    <h2 class="head">参赛须知</h2>
    <br>
  </div>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="参赛流程" name="first">
        <h2 class="title">1.参赛报名：</h2>
        <el-row :gutter="12">
          <el-col :span="20">
            <el-card shadow="always">
              <div class="content">开发者需以个人身份报名，报名时需提交个人身份信息。需要注意的是，国队参赛每个成员均需单独报名。若已经有国队，清在报名中备注团队报名。</div>
              <br>
              <div class="content">主办方会对报名行筛远，报名注册时附带个人简历、项目经历等资料，可提高筛选通过率。</div>
              <br>
              <div class="content">若被筛选通过，参赛者的邮箱将会收由大赛主办方发送的《Hack「中国」2018 Hackathon》参赛邀请邮件。故请留下有效邮箱地址。</div>
            </el-card>
          </el-col>
        </el-row>
        <br>
        <h2 class="title">2.团队规模：</h2>
        <el-row :gutter="12">
          <el-col :span="20">
            <el-card shadow="always">
              <div class="content">每个团队2-5人，每人最多选择1个团队加入</div>
              <br>
              <div class="content">参赛者提前组队，也可到现场自由组队。</div>
            </el-card>
          </el-col>
        </el-row>
        <br>
        <h2 class="title">3.活动须知：</h2>
        <el-row :gutter="12">
          <el-col :span="20">
            <el-card shadow="always">
              <div class="content">参赛者收到的参赛邀请邮件中将附带活动时间表，如无意外，基本活动安排与时间表无异，规定的活动时间内，在具体的活动地点将会有工作人员接应。</div>
              <br>
              <div class="content">比赛居时凭借参赛邀请邮件或邀情函进行签到，领取参赛证、身份卡、赛事资料及其他比赛相关物品。</div>
            </el-card>
          </el-col>
        </el-row>
        <br>
        <h2 class="title">4.现场组队：</h2>
        <el-row :gutter="12">
          <el-col :span="20">
            <el-card shadow="always">
              <div class="content">活动场会设有白板，准备现场组队的开发者可以将身份卡放置于白板上，可标注自己“能做什么，想做什么，在找怎样的人”等等关键词。不同的身份卡用于区分开发者角色，帮助快速组队。</div>
            </el-card>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="比赛规则" name="third">
        <h2 class="title">赛前规定</h2>
        <el-row :gutter="12">
          <el-col :span="20">
            <el-card shadow="always">
              <div class="content">参赛选手请根据邮件中时间表与指定时间到达指定地点，主办方将派工作人员于此接应。</div>
              <br>
              <div class="content">参赛选手因故无法按时到达、参加比赛，应尽快联系主办方，并告知详情协商解决方案。</div>
            </el-card>
          </el-col>
        </el-row>
        <br>
        <h2 class="title">现场规则</h2>
        <el-row :gutter="12">
          <el-col :span="20">
            <el-card shadow="always">
              <div class="content">参赛队伍进行24小时开发，不能剽窃他人创意、思路。</div>
              <br>
              <div class="content">现场自由交流不能干扰其他队伍开发，禁止大音量外放音乐、观看视频、禁止抽烟。</div>
              <br>
              <div class="content">现场提供网络，禁止类似于大流量下载等影响网络的行为。</div>
              <br>
              <div class="content">参赛证、身份卡作为识别证件，请随身携带，配合工作人员检查。</div>
              <br>
              <div class="content">现场提供餐饮，请勿携带外来食品、饮品带入会场内。</div>
              <br>
              <div class="content">测试展示项目所需设备，请于主办方咨询处联系工作人员。</div>
              <br>
              <div class="content">测试时间:9:00~12:00。请自行安排时间，避免拥挤。</div>
              <br>
              <div class="content">若有VGA视频输出、3.5mm标准音频输出，请尽早测试主办方提供的转接线。</div>
              <br>
              <div class="content">展示需要的局域网需选手自行搭建</div>
              <br>
              <div class="content">项目展示时间为5分钟，届时我们将有严格的时间把控，请各位参赛队伍提前做好相应准备.</div>
            </el-card>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="评分规则" name="fourth">
        <h2 class="title">本届赛事评分包括两部分，基础分数（40%）、灵感分数（40%）以及解说分数（20%）。</h2>
          <div class="content">灵感评分部分，评分点主要包括:创意新颖度，重在别出心裁。</div>
          <br>
          <div class="content">灵感评分部分，评分点主要包括:创意新颖度，重在别出心裁。</div>
          <br>
          <div class="content">解说评分部分，评分点主要包括:产品展示流畅度，产品实用性。</div>
          <br>
          <el-row :gutter="12">
          <el-col :span="20">
            <el-card shadow="always">
              <h2 class="title">技术</h2>
              <div class="content">产品所需技术难度。</div>
              <br>
              <h2 class="title">影响力</h2>
              <div class="content">产品所解决问题的影响规模。</div>
              <br>
              <h2 class="title">实用</h2>
              <div class="content">产品在现实生活中的实用性。</div>
              <br>
              <h2 class="title">设计</h2>
              <div class="content">产品外观、用户界面和用户体验。</div>
              <br>
              <h2 class="title">展示度</h2>
              <div class="content">团队对产品展示的清晰有条理性。</div>
              <br>
              <h2 class="title">创意性</h2>
              <div class="content">产品的新颖度。是否已有同类产品？差别在哪里？</div>
              <br>
              <h2 class="title">作品完成度</h2>
              <div class="content">评委将根据Demo最终完成情况对作品完成度进行评判。</div>
              <br>
              <h2 class="title">代码</h2>
              <div class="content">参赛队伍将代码提交到活动官方提交平台，在作品提交阶段需向评委组提交作品代码。</div>
            </el-card>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'second'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style lang="less">
.el-tabs__item:hover {
  /** 鼠标滑过 item 的样式 */
  color: #63cf79;
  }
.el-tabs__item.is-active {
  /**高亮的 tab 样式 */
  color: #63cf79;
  background: #0e7071 linear-gradient(to left, rgba(0, 255, 0, 0), rgb(47, 42, 98));
}
.el-tabs__item{
font-size:25px;
font-family: "Hackathon";
}
.notice{
  margin-top: 100px;
    width: 80%;
    margin-left: 15%;
    h1{
      margin-bottom: 40px;
      hr{
        margin-top: 9px;
        height: 3px;
        width: 370px;
      }
    }
    h2 {
      font-size: 26px;
      line-height: 45px;
    }
    .head{
      font-size: 40px;
      font-family: "Hackathon";
      color: #63cf79;
    }
    .title{
        width: 80%;
        font-size: 20px;
      }
    .content{
      border-radius: 10px;
    }
  }
</style>

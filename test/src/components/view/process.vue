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
</div>
</template>

<script>
export default {
  name: 'process'
}
</script>

<style lang="less">
.notice{
  margin-top: 100px;
    width: 80%;
    margin-left: 15%;
    .head{
      font-size: 40px;
      font-family: "Hackathon";
      color: #63cf79;
    }
  }
</style>

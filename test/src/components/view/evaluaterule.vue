<template>
  <div class="rule1">
    <span id="title">评分规则</span>
    <ul class="detail1">
      <ul>
        <span class="detitle">本届赛事评分包括两部分，基础分数（40%）、灵感分数（40%）以及解说分数（20%）。</span>
        <li>基础评分部分，评分点主要包括:与主题匹配度，完成度。</li>
        <li>灵感评分部分，评分点主要包括:创意新颖度，重在别出心裁。</li>
        <li>解说评分部分，评分点主要包括:产品展示流畅度，产品实用性。</li>
      </ul>
      <ul class="detail">
        <span class="detitle">技术</span>
        <li>产品所需技术难度。</li>
      </ul>
      <ul class="detail">
        <span class="detitle">影响力</span>
        <li>产品所解决问题的影响规模。</li>
      </ul>
      <ul class="detail">
        <span class="detitle">实用性</span>
        <li>产品在现实生活中的实用性。</li>
      </ul>
      <ul class="detail">
        <span class="detitle">设计</span>
        <li>产品外观、用户界面和用户体验。</li>
      </ul>
      <ul class="detail">
        <span class="detitle">展示度</span>
        <li>团队对产品展示的清晰有条理性。</li>
      </ul>
      <ul class="detail">
        <span class="detitle">创意性</span>
        <li>产品的新颖度。是否已有同类产品？差别在哪里？</li>
      </ul>
      <ul class="detail">
        <span class="detitle">作品完成度</span>
        <li>评委将根据Demo最终完成情况对作品完成度进行评判。</li>
      </ul>
      <ul class="detail">
        <span class="detitle">代码</span>
        <li>参赛队伍将代码提交到活动官方提交平台，在作品提交阶段需向评委组提交作品代码。</li>
      </ul>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .rule1 {
    display: flex;
    width: 70%;
    height: 100vh;
    margin-left: 15%;
    border-top: 5px solid rgb(231, 62, 62);
  }

  #title {
    display: flex;
    font-size: 25px;
    font-weight: 600;
    margin: 20px 100px 0 20px;
  }

  .detitle {
    font-size: 20px;
    font-weight: 600;
  }

  .detail1 {
    margin: 25px 0 0 0;
    height: 200px;
    height: 0;
  }

  li {
    font-size: 18px;
    padding: 10px 0;
    margin-left: 50px;
    list-style-type: square;
  }

  * {
    margin: 0;
    padding: 0;
  }
</style>

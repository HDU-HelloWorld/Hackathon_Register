<template>
  <div class="rule">
    <h1 id="title">评分规则</h1>
      <ul class="detail1-top">
        <h3 class="detitle">本届赛事评分包括两部分，基础分数（40%）、灵感分数（40%）以及解说分数（20%）。</h3>
        <li>基础评分部分，评分点主要包括:与主题匹配度，完成度。</li>
        <li>灵感评分部分，评分点主要包括:创意新颖度，重在别出心裁。</li>
        <li>解说评分部分，评分点主要包括:产品展示流畅度，产品实用性。</li>
      </ul>
      <div class="content">
      <div class="top">
        <ul class="detail">
          <h3 class="detitle">技术</h3>
          <li>产品所需技术难度。</li>
        </ul>
        <ul class="detail">
          <h3 class="detitle">影响力</h3>
          <li>产品所解决问题的影响规模。</li>
        </ul>
        <ul class="detail">
          <h3 class="detitle">实用性</h3>
          <li>产品在现实生活中的实用性。</li>
        </ul>
        <ul class="detail">
          <h3 class="detitle">设计</h3>
          <li>产品外观、用户界面和用户体验。</li>
        </ul>
      </div>
        <div class="bottom">
          <ul class="detail">
            <h3 class="detitle">展示度</h3>
            <li>团队对产品展示的清晰有条理性。</li>
          </ul>
          <ul class="detail">
            <h3 class="detitle">创意性</h3>
            <li>产品的新颖度。是否已有同类产品？差别在哪里？</li>
          </ul>
          <ul class="detail">
            <h3 class="detitle">作品完成度</h3>
            <li>评委将根据Demo最终完成情况对作品完成度进行评判。</li>
          </ul>
          <ul class="detail">
            <h3 class="detitle">代码</h3>
            <li>参赛队伍将代码提交到活动官方提交平台，在作品提交阶段需向评委组提交作品代码。</li>
          </ul>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
.rule{
  width: 80%;
  margin: 100px auto;
  h1{
    width: 100%;
    text-align: center;
    margin-bottom: 25px;
  }
  .detail1-top{
    width: 100%;
    text-align: center;
    padding: 15px 0;
    border-radius: 25px;
    li{
      line-height: 55px;
    }
  }
  .content{
  width: 100%;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  font-size: 28px;
  .top{
    margin-top: 20px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    .detail{
      border-radius: 15px;
      width: 22%;
      padding: 0 15px;
      h3{
        margin-top: 5%;
        text-align: center;
      }
      .contentsize{
        line-height: 43px;
      }
    }
  }
  .bottom{
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 20px;
    .detail{
      border-radius: 15px ;
      width: 22%;
      padding: 25px;
      h3{
        margin-top: 5%;
        text-align: center;
      }
      .contentsize{
        line-height: 43px;
      }
    }
  }
}
}
</style>

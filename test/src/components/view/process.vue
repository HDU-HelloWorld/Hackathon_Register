<template>
  <div class="rule1">
    <div class="rule2">
      <span id="title" class="flexfix">比赛流程</span>
      <ul class="detail1">
        <ul class="detail2">
          <span class="detitle">1.比赛签到：</span>
          <span class="contentsize">参赛选手到达比赛现场，签到并领取相关物资。</span>
        </ul>
        <ul class="detail2">
          <span class="detitle">2.现场组队：</span>
          <span class="contentsize">准备现场组队的开发者可以将身份卡放置于现场准备的组队版上，标注自己“能做什么，想做什么，在找怎样的人”等等关键词。调试相关硬件设备。</span>
        </ul>
        <ul class="detail2">
          <span class="detitle">3.宣讲阶段：</span>
          <span class="contentsize">大赛主办方进行技术内容宣讲。开发者可选择感兴趣的内容参与，并就自己感兴趣的内容现场提问。</span>
        </ul>
        <ul class="detail2">
          <span class="detitle">4.开发阶段：</span>
          <span class="contentsize">参赛队伍进行24小时开发。开发者如果有用到现场技术服务方，可以随时通过赞助商的现场展位向大赛服务提供商询问技术问题。</span>
        </ul>
        <ul class="detail2">
          <span class="detitle">5.提交评审：</span>
          <span class="contentsize">参赛队伍可以在比赛开始后的20小时后开始提交产品，提交截止后，大赛评委会将选出80%优秀产品进行产品展示</span>
        </ul>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'process'
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

  .rule2{
    display: flex;
    height: 100vh;
  }

  #title {
    display: flex;
    font-size: 25px;
    font-weight: 600;
    margin: 20px 100px 0 20px;
  }

  .flexfix{
    flex: 174px;
  }

  .detitle {
    font-size: 20px;
    font-weight: 600;
    padding: 10px 0;
  }

  .contentsize{
    font-size: 18px;
    line-height: 40px;
    padding-bottom: 10px;
  }

  .detail1 {
    margin: 25px 0 0 0;
    height: 200px;
    height: 0;
  }

  .detail2{
    padding-bottom: 10px;
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

<template>
  <div class="rule1">
    <span id="title">比赛规则</span>
    <ul class="detail1">
      <ul>
        <span class="detitle">1.赛前规定:</span>
        <li>参赛选手请根据邮件中时间表与指定时间到达指定地点，主办方将派工作人员于此接应。</li>
        <li>参赛选手因故无法按时到达、参加比赛，应尽快联系主办方，并告知详情协商解决方案。</li>
      </ul>
      <ul class="detail">
        <span class="detitle">2.现场规则:</span>
        <li>参赛队伍进行24小时开发，不能剽窃他人创意、思路。</li>
        <li>现场自由交流不能干扰其他队伍开发，禁止大音量外放音乐、观看视频、禁止抽烟。</li>
        <li>现场提供网络，禁止类似于大流量下载等影响网络的行为。</li>
        <li>参赛证、身份卡作为识别证件，请随身携带，配合工作人员检查。</li>
        <li>现场提供餐饮，请勿携带外来食品、饮品带入会场内。</li>
      </ul>
      <ul class="detail">
        <span class="detitle">3.现场规则:</span>
        <li>测试展示项目所需设备，请于主办方咨询处联系工作人员。</li>
        <li>测试时间:9:00~12:00。请自行安排时间，避免拥挤。</li>
        <li>若有VGA视频输出、3.5mm标准音频输出，请尽早测试主办方提供的转接线。</li>
        <li>展示需要的局域网需选手自行搭建</li>
        <li>项目展示时间为5分钟，届时我们将有严格的时间把控，请各位参赛队伍提前做好相应准备.</li>
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

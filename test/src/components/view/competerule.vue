<template>
  <div class="rule">
    <h1 class="title">比赛规则</h1>
    <div class="content">
      <ul class="detail-left">
        <h3>赛前规定</h3>
        <br>
        <li>参赛选手请根据邮件中时间表与指定时间到达指定地点，主办方将派工作人员于此接应。</li>
        <br>
        <li>参赛选手因故无法按时到达、参加比赛，应尽快联系主办方，并告知详情协商解决方案。</li>
      </ul>
      <ul class="detail-middle">
        <h3>现场规则</h3>
        <li>参赛队伍进行24小时开发，不能剽窃他人创意、思路。</li>
        <li>现场自由交流不能干扰其他队伍开发，禁止大音量外放音乐、观看视频、禁止抽烟。</li>
        <li>现场提供网络，禁止类似于大流量下载等影响网络的行为。</li>
        <li>参赛证、身份卡作为识别证件，请随身携带，配合工作人员检查。</li>
        <li>现场提供餐饮，请勿携带外来食品、饮品带入会场内。</li>
      </ul>
      <ul class="detail-right">
        <h3>现场规则</h3>
        <li>测试展示项目所需设备，请于主办方咨询处联系工作人员。</li>
        <li>测试时间:9:00~12:00。请自行安排时间，避免拥挤。</li>
        <li>若有VGA视频输出、3.5mm标准音频输出，请尽早测试主办方提供的转接线。</li>
        <li>展示需要的局域网需选手自行搭建</li>
        <li>项目展示时间为5分钟，届时我们将有严格的时间把控，请各位参赛队伍提前做好相应准备.</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
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
  .content{
    width: 100%;
    justify-content: space-between;
    display: flex;
    font-size: 28px;
      .detail-left{
        padding: 0 20px;
        width: 28%;
        height: 600px;
        border-radius: 20px;
        box-shadow: 5px 5px 10px rgba(0,0,0,0.3);
        h3{
          margin-top: 5%;
          text-align: center;
        }
        li{
          line-height: 45px;
        }
    }
      .detail-middle{
      width: 28%;
      height: 600px;
      padding: 0 20px;
      border-radius: 20px;
      box-shadow: 5px 5px 10px rgba(0,0,0,0.3);
      h3{
          margin-top: 5%;
          text-align: center;
          margin-bottom: 10px;
        }
        li{
          line-height: 43px;
        }
    }
      .detail-right{
      width: 29%;
      height: 600px;
      padding: 25px;
      border-radius: 20px;
      box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
      h3{
        margin-top: 5%;
        text-align: center;
        margin-bottom: 10px;
      }
      li{
        line-height: 44px;
      }
    }
  }
}
</style>

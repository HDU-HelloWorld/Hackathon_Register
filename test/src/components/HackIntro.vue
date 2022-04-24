<template>
  <div class="hackintro">
    <h1 id="title">Hackathon简介
      <hr>
    </h1>
    <div class="exp">
      编程马拉松(Hackathon,又名黑客松)，也称为黑客日(Hack Day)。编程马拉松是一种活动。Hackathon常常
开始于某个事件或主题，程序员以及其他与软件发展相关的人员相聚在一起，由参与者提出思路和组建队伍，并根据个
人兴趣和技能，以紧密合作的形式去进行某项软件专案。编程马拉松的精髓在于：很多人，在一段特定的时间内，相聚
在一起，以他们想要的方式，去做他们想做的事情一一整个编程的过程几乎没有任何限制或者方向。
  </div>
    <br>
    <br>
  <div class="exp">
在1999年的JavaOne大会上，Hackathon首次被Sun提出，从此以后各项相关赛事衍生出来，进而形成一股席卷全球
之势。近年来，Hackathon的主题和类型越来越广泛，有使用特定编程语言、框架或API的，比如Yahoo的“Open
Hack Day”以及Foursquare举办的Hackathon都在使用特定API:有出于某种原因或目的，比如英国政府与
HackerNest联合举办的DementiaHack,NASA每年举办的the International Space Apps Challenge;以及公
司、组织举办的，例如Facebook的Like button,宾夕法尼亚大学的Pen nApps。这项赛事，正在世界范围内被追求
Hack精神的软件发展相关人员所热衷。
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      location: ''
    }
  },
  mounted () {
    this.$bus.$on('scrool', this.scrool)
  },
  methods: {
    scrool () {
      let top = document.querySelector('#title')
      window.scrollTo({
        'top': top.offsetTop - 300, // emmm之后应该是写成一个变量的形式改变
        'behavior': 'smooth'
      })
    }
  }
}
</script>

<style lang='less' scopde>
  .hackintro{
    margin-top: 80px;
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
    .exp{
      font-size: 24px;
      font-weight: 500;
      line-height: 45px;
      width: 100%;
      border-radius: 10px;
    }
  }
</style>

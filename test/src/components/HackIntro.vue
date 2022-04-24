<template>
  <div class="hackintro">
    <h1 id="title">Hackathon简介</h1>
    <div class="exp">
      编程马拉松(Hackathon,又名黑客松)，也称为黑客日(Hack Day)。Hackathon常常
      开始于某个事件或主题，程序员以及其他与软件发展相关的人员相聚在一起，
      以紧密合作的形式去进行某项软件专案。
    </div>
    <div class="exp">
      编程马拉松的精髓在于：很多人，在一段特定的时间内，相聚
      在一起，以他们想要的方式，去做他们想做的事情一一整个编程的过程几乎没有任何限制或者方向。
    </div>
    <div class="exp">
      在1999年的JavaOne大会上，Hackathon首次被Sun提出，从此以后各项相关赛事衍生出来，进而形成一股席卷全球
      之势。
    </div>
    <div class="exp">
      近年来，Hackathon的主题和类型越来越广泛，同时也在世界范围内被追求
      Hack精神的软件发展相关人员所热衷。
    </div>
    <div class="exp">
       近年来，Hackathon的主题和类型越来越广泛，
       有使用特定编程语言、框架或API的，比如Yahoo的“OpenHack Day”;
       有出于某种原因或目的，比如英国政府与HackerNest联合举办的DementiaHack;
       以及公司、组织举办的，例如Facebook的Like button.
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
<<<<<<< HEAD
  opacity: 0.75;
  position: relative;
  z-index: -1;
  width: 35%;
  height: 70%;
  margin: 20px 5%;
  background: black;
  border: 4px solid transparent;
  border-image: linear-gradient(
  to right;rgba(63,207,79), rgb(0,73,255)
  )5 5;
  h1{
    margin-top:20px;
    color:white;
    text-align: center;
  }
  // span{
  //   color: black;
  //   border: none;
  // }
  .exp{
    font-size: 15px;
    margin: 30px auto;
    width: 70%;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    // border-radius: 10px;
    color:white;
=======
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
>>>>>>> 832bd390c2b26c65a109418c2ceea292879ede53
    }
  }

</style>

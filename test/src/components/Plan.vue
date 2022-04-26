<template>
  <div class="pllan">
    <h1>赛程安排
      <hr></h1>
    <div class="day12">
      <el-timeline>
        <el-timeline-item timestamp="5/12 8:00-9:00" placement="top" size="large" color="green" class="left1">
          <div class="card">
            <h4>参赛人员签到、自由组队</h4>
          </div>
        </el-timeline-item>
        <el-timeline-item timestamp="5/12 9:00-9:40" placement="top" class="right">
          <div class="card">
            <h4>参赛队伍调试设备，解决相关问题；相关媒体人员入场</h4>
          </div>
        </el-timeline-item>
        <el-timeline-item timestamp="5/12 9:40-10:00" placement="top" class="left2">
          <div class="card">
            <h4>接待嘉宾入场</h4>
          </div>
        </el-timeline-item>
        <el-timeline-item timestamp="5/12 10:00-10:30" placement="top" class="right">
          <div class="card">
            <h4>主持人致辞</h4>
          </div>
        </el-timeline-item>
        <el-timeline-item timestamp="5/12 10:30-12:00" placement="top" class="left3">
          <div class="card">
            <h4>嘉宾致辞</h4>
          </div>
        </el-timeline-item>
        <el-timeline-item timestamp="5/12 12:00-12:10" placement="top" class="right">
          <div class="card">
            <h4>赞助商公布全部悬赏任务，主持人宣布比赛正式开始</h4>
          </div>
        </el-timeline-item>
        <el-timeline-item timestamp="5/12 12:10-23:30" placement="top" class="left3">
          <div class="card">
            <h4>选手开发时间(17:00-18:00:主办方提供晚餐)线上宣传人对比赛活动进行直播宣传</h4>
          </div>
        </el-timeline-item>
        <el-timeline-item timestamp="5/12 23:30-00:30" placement="top" class="right">
          <div class="card">
            <h4>夜宵时间+互动小游戏</h4>
          </div>
        </el-timeline-item>
        <el-timeline-item timestamp="5/13 00:30-9:30" placement="top" size="large" color="blue" class="left2">
          <div class="card">
            <h4>选手开发时间（7:30-8:30：主办方提供早餐）</h4>
          </div>
        </el-timeline-item>
        <el-timeline-item timestamp="5/13 9:30-12:00</th>" placement="top" class="right">
          <div class="card">
            <h4>作品及相关文档提交</h4>
          </div>
        </el-timeline-item>
        <el-timeline-item timestamp="5/13 12:00-13:00" placement="top" class="left3">
          <div class="card">
            <h4>评审组浏览作品，给予“作品：基础分数”（12:00-13:00：主办方提供午餐）比赛观众入场</h4>
          </div>
        </el-timeline-item>
        <el-timeline-item timestamp="5/13 13:00-13:10" placement="top" class="right">
          <div class="card">
            <h4>主办方公布答案，获奖者领取趣味</h4>
          </div>
        </el-timeline-item>
        <el-timeline-item timestamp="5/13 13:10-15:00" placement="top" class="left3">
          <div class="card">
            <h4>参赛队伍作品解说，评审组给予“作品：解说/灵感分数”赞助商选择“悬赏任务”完成者</h4>
          </div>
        </el-timeline-item>
        <el-timeline-item timestamp="5/13 15:00-15:20" placement="top" class="right">
          <div class="card">
            <h4>嘉宾致辞，主办方计算参赛选手得分</h4>
          </div>
        </el-timeline-item>
        <el-timeline-item timestamp="5/13 15:20-15:50" placement="top" class="left3">
          <div class="card">
            <h4>主办方宣布三等奖/二等奖/一等奖获得者，嘉宾领奖</h4>
          </div>
        </el-timeline-item>
        <el-timeline-item timestamp="5/13 15:50-16:00" placement="top" class="right">
          <div class="card">
            <h4>全体参赛人员同嘉宾合影，参赛选手领取赛事纪念奖</h4>
          </div>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    this.$bus.$on('scrool-4', this.scrool)
  },
  methods: {
    scrool () {
      window.scrollTo({
        top: 4825,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style lang="less">
.card{
  margin:5px 0;
}
.el-timeline {
  width: 80%;
  position: relative;
  left: 45%;
}
.left1 {
  .card {
    position: relative;
    left: -48%;
    width: 43%;
    text-align: right;
  }
    .el-timeline-item__timestamp {
      position: relative;
      right: 138px;
    }
}
.left2 {
  .card {
    position: relative;
    left: -48%;
    width: 43%;
    text-align: right;
  }
    .el-timeline-item__timestamp {
      position: relative;
      right: 145px;
    }
}
.left3 {
  .card {
    position: relative;
    left: -48%;
    width: 43%;
    text-align: right;
  }
    .el-timeline-item__timestamp {
      position: relative;
      right: 153px;
    }
}
.right {
  .card {
    width: 43%;
    text-align: left;
  }
}
.day12 {
  width: 100%;
  display: inline-block;
  margin-right: 10%;
}
.day13 {
  width: 40%;
  display: inline-block;
}
.pllan {
  margin-top: 100px;
  width: 80%;
  margin-left: 15%;
  h1 {
    margin-bottom: 40px;
    hr {
      margin-top: 9px;
      height: 3px;
      width: 370px;
      background-color: rgb(42, 199, 180);
    }
  }
}
</style>

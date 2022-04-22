<template>
  <div class="pllan">
    <h1 class="title">赛程安排
      <hr>
    </h1>
    <div class="table">
      <table>
        <tr>
          <th class="oddnumth">时间</th>
          <th class="evennumth">8:00-9:00</th>
          <th class="oddnumth">9:00-9:40</th>
          <th class="evennumth">9:40-10:00</th>
          <th class="oddnumth">10:00-10:30</th>
          <th class="evennumth">10:30-12:00</th>
          <th class="oddnumth">12:00-12:10</th>
          <th class="evennumth">12:10-23:30</th>
          <th class="oddnumth">23:30-00:30</th>
        </tr>
        <tr>
          <td class="tabletd">5.12</td>
          <td class="evennumtd">参赛人员签到、自由组队</td>
          <td class="oddnumtd">参赛队伍调试设备，解决相关问题；相关媒体人员入场</td>
          <td class="evennumtd">接待嘉宾入场</td>
          <td class="oddnumtd">主持人致辞</td>
          <td class="evennumtd">嘉宾致辞</td>
          <td class="oddnumtd">赞助商公布全部悬赏任务，主持人宣布比赛正式开始</td>
          <td class="evennumtd">选手开发时间（17:00-18:00:主办方提供晚餐）线上宣传人对比赛活动进行直播宣传</td>
          <td class="oddnumtd">夜宵时间+互动小游戏</td>
        </tr>
      </table>
      <table>
        <tr>
          <th class="oddnumth">时间</th>
          <th class="evennumth">00:30-9:30</th>
          <th class="oddnumth">9:30-12:00</th>
          <th class="evennumth">12:00-13:00</th>
          <th class="oddnumth">13:00-13:10</th>
          <th class="evennumth">13:10-15:00</th>
          <th class="oddnumth">15:00-15:20</th>
          <th class="evennumth">15:20-15:50</th>
          <th class="oddnumth">15:50-16:00</th>
        </tr>
        <tr>
          <td class="tabletd">5.13</td>
          <td class="evennumtd">选手开发时间（7:30-8:30：主办方提供早餐）</td>
          <td class="oddnumtd">作品及相关文档提交</td>
          <td class="evennumtd">评审组浏览作品，给予“作品：基础分数”（12:00-13:00：主办方提供午餐）比赛观众入场</td>
          <td class="oddnumtd">主办方公布答案，获奖者领取趣味奖</td>
          <td class="evennumtd">参赛队伍作品解说，评审组给予“作品：解说/灵感分数”赞助商选择“悬赏任务”完成者</td>
          <td class="oddnumtd">嘉宾致辞，主办方计算参赛选手得分</td>
          <td class="evennumtd">主办方宣布三等奖/二等奖/一等奖获得者，嘉宾领奖</td>
          <td class="oddnumtd">全体参赛人员同嘉宾合影，参赛选手领取赛事纪念奖</td>
        </tr>
      </table>
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
        'top': 4825,
        'behavior': 'smooth'
      })
    }
  }
}
</script>

<style lang="less">
.pllan{
  margin-top: 100px;
    width: 80%;
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
}

.table{
  width: 1080px;
  table{
    border-collapse: separate;/*此处两个语句是使表格单元格之间没有空隙*/
    border-spacing: 0 0;/*第一个设置水平方向，第二个是竖直方向的*/
  }
  th{
    width: 120px;
    height: 90px;
  }
  td{
    width: 120px;
    height: 200px;
  }
}

.oddnumth{
  background-color: red;
  color: #fff;
  padding: 5px;
}

.evennumth{
  background-color: rgb(157, 5, 5);
  color: #fff;
  padding: 5px;
}
.tabletd{
  background-color: rgba(255, 0, 0, 0.5);
  font-weight: 700;
  color: #fff;
  text-align: center;
}

.evennumtd{
  background-color: rgb(187, 187, 187);
  text-align: center;
  padding: 5px;
  font-size: 14px;
}

.oddnumtd{
  background-color: #fff;
  text-align: center;
  padding: 5px;
  font-size: 14px;
}
</style>

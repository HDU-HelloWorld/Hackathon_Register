<template>
  <div class="top">
    <div class="login">
      <button class="btn" @click="showLogin">Sign up→</button>
    </div>
    <div class="top-barrer">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
      </el-menu>
      <div class="line"></div>
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo top"
        mode="horizontal"
        @select="handleSelect"
        background-color="#fff"
        text-color="#171717"
        active-text-color="#63CF79"
      >
        <el-menu-item index="1" class="navText">Hackathon简介</el-menu-item>
        <el-menu-item index="2" class="navText">比赛介绍</el-menu-item>
        <el-menu-item index="3" class="navText">参赛须知</el-menu-item>
        <el-menu-item index="4" class="navText">赛程安排</el-menu-item>
        <el-menu-item index="5" class="navText">大赛支持</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    showDetail () {
      this.$bus.$emit('scrool')
      this.$router.replace({
        name: '/'
      })
    },
    goHome () {
      this.$router.replace('/')
    },
    showDetail02 () {
      this.$bus.$emit('scrool-2')
      this.$router.replace({
        name: '/'
      })
    },
    showDetail03 () {
      this.$bus.$emit('scrool-3')
      this.$router.replace({
        name: '/'
      })
    },
    showDetail04 () {
      this.$bus.$emit('scrool-4')
      this.$router.replace({
        name: '/'
      })
    },
    showDetail05 () {
      this.$bus.$emit('scrool-5')
      this.$router.replace({
        name: '/'
      })
    },
    showLogin () {
      this.$bus.$emit('scrool-6')
      this.$router.replace({
        name: '/'
      })
    },
    changeroutercom () {
      this.$router.replace({
        name: 'competerule'
      })
    },
    changeprocess () {
      this.$router.replace({
        name: 'process'
      })
    },
    changeroutermark () {
      this.$router.replace({
        name: 'evaluaterule'
      })
    }
  }
}
</script>

<style lang='less' scoped>
.el-menu-demo {
  background-image: linear-gradient(
    to right; rgba(0, 0, 0, 0.8),
    rgba(80, 168, 131, 0.7),
    rgb(7, 42, 28)
  );
}
a {
  text-decoration: none;
  color: black;
}
.navText {
  font-family: "Hackathon";
  font-size: 20px;
}
.el-menu-item.is-active {
  color: #b6dede;
  font-size: 18px;
  font-weight: 3px;
}
.el-menu-item.is-active {
  color: #b6dede;
  font-size: 18px;
  font-weight: 3px;
}
.top {
  position: fixed;
  z-index: 999;
  min-width: 1000px;
  width: 100%;
  min-width: 800px;
  display: inline-block;
  background-color: white;
  font-size: 28px;
  .top-barrer {
    min-width: 1000px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 999;
  }
}
img {
  margin-top: 110px;
  display: block;
  width: 100%;
  min-width: 1000px;
}
.top-bottom {
  min-width: 1000px;
  width: 100%;
  height: 80px;
  display: flex;
  list-style-type: none;
  margin-top: 5px;
  .bottom-left {
    border: none;
    outline: none;
    background-color: transparent;
    min-width: 130px;
    margin-top: 20px;
    margin-left: 50px;
    height: 40px;
    line-height: 40px;
    width: 130px;
    cursor: pointer;
    text-align: center;
    &:hover {
      border-bottom: 5px solid black;
      transition: 0.5;
    }
  }
}
.login {
  position: fixed;
  bottom: 10%;
  right: 5%;
  .btn {
    border: 0;
    font-family: 'Hackathon';
    font-size: 50px;
    // color: rgb(63,207,79);
    color: rgb(63, 207, 79);
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: 0.5s;
    z-index: 1;
    &:hover {
      color: #fff;
    }
    &:hover span {
      transform: translateX(-40%) scale(2);
    }
  }
}
</style>

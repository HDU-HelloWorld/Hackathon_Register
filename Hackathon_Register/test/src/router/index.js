import Vue from 'vue'
import Router from 'vue-router'
//  引入路由文件
import Home from '../components/view/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    }
  ]
})

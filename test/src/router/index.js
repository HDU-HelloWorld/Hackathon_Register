import Vue from 'vue'
import Router from 'vue-router'
//  引入路由文件
import HomeContent from '../components/view/HomeContent'
import login from '../components/view/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HomeContent
    },
    {
      name: 'login',
      path: '/login',
      component: login
    }
  ]
})

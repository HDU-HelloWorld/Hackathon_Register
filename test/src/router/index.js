import Vue from 'vue'
import Router from 'vue-router'
//  引入路由文件
import HomeContent from '../components/view/HomeContent'
import login from '../components/view/login'
import competerule from '../components/view/competerule'
import evaluaterule from '../components/view/evaluaterule'
import process from '../components/view/process'
Vue.use(Router)

export default new Router({
  routes: [
    {
      name: '/',
      path: '/',
      component: HomeContent
    },
    {
      name: 'login',
      path: '/login',
      component: login
    },
    {
      name: 'competerule',
      path: '/competerule',
      component: competerule
    },
    {
      name: 'evaluaterule',
      path: '/evaluaterule',
      component: evaluaterule
    },
    {
      name: 'process',
      path: '/process',
      component: process
    }
  ]
})
//  解决重复跳转路由的问题
const VueRouterPush = Router.prototype.push
Router.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

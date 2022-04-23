import Vue from 'vue'
import Router from 'vue-router'
//  引入路由文件
import HomeContent from '../components/view/HomeContent'
import ApplyForm from '../components/view/ApplyForm'
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
      name: 'ApplyForm',
      path: '/ApplyForm',
      component: ApplyForm
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

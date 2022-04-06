import Vue from 'vue'
import Router from 'vue-router'
//  引入路由文件
import HelloWorld from '../components/HelloWorld.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloworld',
      component: HelloWorld
    }
  ]
})

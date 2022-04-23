import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/fonts/text.css'

// 引入Element UI库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  beforeCreate () {
    Vue.prototype.$bus = this// 安装全局事件总线负责组件与组件间的通信
  },
  template: '<App/>',
  render: h => h(App)
})

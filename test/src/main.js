import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  beforeCreate () {
    Vue.prototype.$bus = this// 安装全局事件总线负责组件与组件间的通信
  },
  template: '<App/>'
})

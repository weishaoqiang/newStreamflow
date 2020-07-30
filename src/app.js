import Vue from 'vue'
import App from '@/App.vue'
import router from '@/routers/index'
import I18n from '@/i18n/index'

// 注册element组件
import '@/element.config.js'
import 'element-ui/lib/theme-chalk/index.css'
Vue.prototype.$t = (key, value) => I18n.t(key, value)

const vm = new Vue({
  el: '#app',
  I18n,
  router,
  render: h => h(App)
})
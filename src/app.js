import Vue from 'vue'
import App from '@/App.vue'
import router from '@/routers/index'

// 注册element组件
import '@/element.config.js'
import 'element-ui/lib/theme-chalk/index.css'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

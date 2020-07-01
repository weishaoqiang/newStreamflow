import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

// 处理路由跳转，这里可以用于判断token是否生效等
router.beforeEach((to, from, next)=> {
  console.log(to, from)
  next()
})

export default router
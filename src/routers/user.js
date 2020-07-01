export default [
  {
    path: '/login',
    name: 'Login',
    meta: {
      keepAlive: true
    },
    component: () => import(/* webpackChunkName: "login" */ 'views/Login/login.vue')
  }
]
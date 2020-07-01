export default [
  {
    path: '/',
    redirect: {
      name: 'Index'
    }
  }, {
    path: '/index',
    name: 'Index',
    meta: {},
    component: () => import(/* webpackChunkName: "operation" */  '@/views/Operation/index.vue')
  }
]
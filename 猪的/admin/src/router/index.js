import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/Layout/index.vue'
import user from './userAdmin'
import power from './powerAdmin'
// import Login from './login'
const routerBox = [user, power]
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    hidden: true,
    children: [
      {
        path: '/home',
        meta: {
          title: '首页'
        },
        component: () => import('@/views/Home')
      },
      ...routerBox
    ]
  },
  {
    path: '*',
    component: Layout,
    redirect: '/notFound',
    hidden: true,
    children: [
      {
        path: '/notFound',
        component: () => import('@/Layout/404')
      },
      ...routerBox
    ]
  },
  // {
  //   path: '/login',
  //   name: 'Login',
  //   component: Login
  // },
]

const router = new VueRouter({
  routes
})
export const routerBoxs = routerBox
export default router

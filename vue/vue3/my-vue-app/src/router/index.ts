import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/pages/home.vue'),
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('@/pages/detail.vue'),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


export default router
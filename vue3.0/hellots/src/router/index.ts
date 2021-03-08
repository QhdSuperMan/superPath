import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'
import layout from '@/layout/index.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    name: 'Home',
    redirect: '/home',
    component: layout,
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../layout/Home.vue'),
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue'),
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

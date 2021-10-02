import React from 'react'
export default [
  {
    path: '/',
    children: [
      {
        path: '/home',
        component: React.lazy(() => import('@/layout/home'))
      },
      {
        path: '/user',
        component: React.lazy(() => import('@/page/user'))
      },
    ]
  },
  {
    path: '/login',
    component: React.lazy(() => import('@/layout/login'))
  },
]
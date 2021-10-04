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
      {
        path: '/role',
        children: [
          {
            path: '/role/roleList',
            component: React.lazy(() => import('@/page/role/roleList'))
          },
          {
            path: '/role/roleAdd',
            component: React.lazy(() => import('@/page/role/roleAdd'))
          },
        ]
      },
    ]
  },
  {
    path: '/login',
    component: React.lazy(() => import('@/layout/login'))
  },
]
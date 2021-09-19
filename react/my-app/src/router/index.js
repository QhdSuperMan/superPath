/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-05-11 10:40:23
 * @LastEditTime: 2021-05-11 17:05:16
 * @info: 路由
 */
import React from 'react'
// import about from '../page/about'
// import info from '../page/info'


const routers = [
  {
    path: '/info',
    comments: React.lazy(() => import('../page/info')) 
  },
  {
    path: '/context',
    comments:  React.lazy(() => import('../page/context')) 
  },
  {
    path: '/ref',
    comments:  React.lazy(() => import('../page/ref')) 
  },
  {
    path: '/Fragments',
    comments:  React.lazy(() => import('../page/Fragments')) 
  },
  {
    path: '/inDepth',
    comments:  React.lazy(() => import('../page/inDepth')) 
  },
  {
    path: '/hooks',
    comments:  React.lazy(() => import('../page/hooks')) 
  },
  {
    path: '/redux',
    comments:  React.lazy(() => import('../page/redux')) 
  },
  {
    path: '/handRedux',
    comments:  React.lazy(() => import('../page/handRedux')) 
  },
]

export default routers
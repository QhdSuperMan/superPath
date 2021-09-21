import React from 'react'
// import about from '../page/about'
// import info from '../page/info'
const routers = [
  {
    path: '/info',
    comments: React.lazy(() => import('../page/info')) 
  }
]

export default routers
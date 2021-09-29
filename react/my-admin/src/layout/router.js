import React from 'react'
import { Router, Route, IndexRoute, hashHistory/* , Redirect */ } from 'react-router'
const login = React.lazy(() => import('@/layout/login')) 
const container = React.lazy(() => import('@/layout/container'))
const isLogin = function() {}
export default () => (
  <Router history={hashHistory}>
    <Route path="/" component={container} onEnter={isLogin}>
      <IndexRoute component={base.example} />
    </Route>
    <Route path="/login" component={login} />
    {/* <Route path="*" component={base.notfound} /> */}
  </Router>
)

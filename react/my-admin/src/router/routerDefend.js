import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import routerConfig from './router.config'
const Container = React.lazy(() => import('@/layout/container'))
const NotFound = React.lazy(() => import('@/layout/notFound'))
@connect((state, props) => {
  console.log(state)
  return {
    userinfo: state.userinfo
  }
})
class RouterDefend extends React.Component {
  constructor(props) {
    super(props)
  }
  getRouter (pathname) {
    var path = '/'
    for (var i = 0; i < routerConfig.length; i++) {
      path = routerConfig[i].path
      if (routerConfig[i].children) {
        for (var j = 0; j < routerConfig[i].children.length; j++) {
          if (routerConfig[i].children[j].path === pathname) {
            return {
              path: path,
              component: routerConfig[i].children[j]
            }
          }
        }
      } else if (routerConfig[i].path === pathname) {
        return {
          path: path,
          component: routerConfig[i]
        }
      }
    }
  }
  render () {
    console.log(this.props, this)
    const { location, config } = this.props;
    const routerObj = this.getRouter(location.pathname)
    console.log(routerObj)
    if (routerObj.path === '/') {
      if (this.userinfo && this.userinfo.token) {
        return <div>
          <Route path='/' >
            <Container >
              <Switch>
                <Route path={routerObj.path} component={routerObj.component.component} />
                <Redirect path="/" exact to="/home" />
                <Route path="*" component={NotFound} />
              </Switch>
            </Container>
          </Route>
        </div>
      } else {
        return <Redirect path="/" exact to="/login" />
      }
    } else {
      return <Route path={routerObj.path} component={routerObj.component.component} />
    }
  }
}
export default RouterDefend
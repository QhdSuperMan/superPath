import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import routerConfig from './router.config'
const Container = React.lazy(() => import('@/layout/container'))
const NotFound = React.lazy(() => import('@/layout/notFound'))
@connect((state, props) => {
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
    return {
      path: '/',
      component: {
        component: NotFound
      }
    }
  }
  render () {
    const { location, config } = this.props;
    const routerObj = this.getRouter(location.pathname)
    if (routerObj.path === '/') {
      if (this.props.userinfo && this.props.userinfo.token) {
        return <div>
          <Route path='/' >
            <Container >
              <Switch>
                <Route path={routerObj.path} component={routerObj.component.component} />
                <Redirect path="/" exact to="/home" />
              </Switch>
            </Container>
          </Route>
        </div>
      } else {
        return <Redirect path="/" exact to="/login" />
      }
    } else if (routerObj.path === '/login' && this.props.userinfo && this.props.userinfo.token) {
      return <Redirect path="/login" exact to="/home" />
    } else {
      return <div>
        <Switch>
          <Route path={routerObj.path} component={routerObj.component.component} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    }
  }
}
export default RouterDefend
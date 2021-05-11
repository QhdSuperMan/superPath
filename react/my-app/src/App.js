import './App.css';
import React from 'react'
import { Router, Route, Link, HashRouter } from 'react-router-dom'
import routers from './router/index.js'
console.log(routers)
class App extends React.Component {
  render() {
    return (
      <HashRouter> {
        routers.map(router => {
          return (
            <Route
              path={router.path}
              key={router.path}
              component={router.component}
            ></Route>
          )
        })
      }
      </HashRouter>
    );
  }
}

export default App;

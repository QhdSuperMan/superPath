import './App.css';
import React, {Suspense } from 'react'
import { Route, HashRouter } from 'react-router-dom'
import routers from './router/index.js'
console.log(routers)
class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Suspense  fallback={<div>Loading...</div>}>
          {
            routers.map(router => {
              return (
                <Route
                  path={router.path}
                  key={router.path}
                  component={router.comments}
                ></Route>
              )
            })
          }
        </Suspense >
      </HashRouter>
    );
  }
}

export default App;

import React, { Suspense } from 'react'
import { HashRouter, Switch } from 'react-router-dom'
import RouterDefend from './routerDefend'

export default () => (
  <div>
    <HashRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <RouterDefend></RouterDefend>
        </Switch>
      </Suspense>
    </HashRouter>
  </div>

)

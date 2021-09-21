import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

import * as userinfo from './userinfo'
import * as role from './role'

const rootReducer = combineReducers({
  routing,
  config: (state = {}) => state,
  ...userinfo,
  ...role
})

export default rootReducer

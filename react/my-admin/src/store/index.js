import { createStore, applyMiddleware } from 'redux'
import rootReducer from '@/reducer/index.js'
import thunkMiddleware from 'redux-thunk'
import { logger, /* router, */  } from './middleware/index'
const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  logger,
  // router,
)(createStore)
const store = createStoreWithMiddleware(rootReducer, {})
console.log(store)
export default store
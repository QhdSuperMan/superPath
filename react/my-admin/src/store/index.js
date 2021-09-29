import { createStore, applyMiddleware } from 'redux'
import rootReducer from '@/reducer/index.js'
import thunkMiddleware from 'redux-thunk'
import { logger, /* router, */  } from './middleware/index'
const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  logger,
  // router,
)(createStore)

export default createStoreWithMiddleware(rootReducer, {})
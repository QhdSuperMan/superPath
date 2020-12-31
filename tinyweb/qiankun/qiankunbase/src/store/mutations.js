// import * as type from './mutationsType'
import actions from './global.js'
const mutations = {  //SET_POWERBOX
  setToken(state, token) {
    state.token = token
  },
  setTokenGlobal(state, token) {
    state.token = token
    actions.setGlobalState(state)
  }
}
export default mutations

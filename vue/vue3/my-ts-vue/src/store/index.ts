import { createStore } from 'vuex'
import { modules } from './modules'
import { userState } from './modules/user/store'
type State = {
  user: userState
}
import { useHStore } from './hook'
const store = createStore<State>({
  modules
})
export { State }
export default store

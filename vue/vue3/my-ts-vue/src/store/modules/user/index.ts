import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"
import { createState } from "./store"
const state = createState()
export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
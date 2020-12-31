import Vuex from 'vuex'
import Vue from 'vue'
import * as getters from './getter'
import mutations from './mutations'
import state from './state'
Vue.use(Vuex)
export default new Vuex.Store({
  getters,
  state,
  mutations
})

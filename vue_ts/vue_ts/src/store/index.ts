import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    itemIndex: 0
  },
  mutations: {
    changeIndex(state, num: number): void {
      state.itemIndex = num;
    }
  },
  actions: {
  },
  modules: {
  }
})

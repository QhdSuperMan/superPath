import { createStore } from 'vuex'
import user from './user/index'
// export default createStore({
//   state: {
//     ceshi: 5555555555
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })

export default createStore({
  modules: {
    user
  }
})

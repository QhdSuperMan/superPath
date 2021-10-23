/*components/index.js*/
import buttoner from './buttoner.js'
import inputer from './inputer.js'


export default {
  install (Vue) {
    Vue.use(buttoner)
    Vue.use(inputer)
  },
  buttoner,
  inputer
}


import Vue from 'vue'
import Router from 'vue-router'
import buttoner from '@/components/buttoner/buttoner'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'buttoner',
      component: buttoner
    }
  ]
})

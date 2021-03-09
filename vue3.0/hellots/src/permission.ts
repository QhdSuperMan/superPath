import router from '@/router'
import store from '@/store/index'


router.beforeEach((to: any, from: any, next: Function) => {
    console.log(from, to)
    console.log(store)
    next()
})
import router from '@/router'
console.log(router)

router.beforeEach((to: any, from: any, next: Function) => {
    console.log(from, to)
    next()
})
/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-03-09 10:37:52
 * @LastEditTime: 2021-03-11 17:53:26
 * @info: 描述
 */
import router from '@/router'
console.log(router)

router.beforeEach((to: any, from: any, next: Function) => {
    next()
})
/*
 * @Author: 吴玉荣
 * @LastEditors: Please set LastEditors
 * @Date: 2021-03-09 10:37:52
 * @LastEditTime: 2021-07-05 23:51:09
 * @info: 描述
 */
import router from '@/router'
import store from '@/store/index'
import axios from '@/server/server'

router.beforeEach((to: any, from: any, next: Function) => {
    if (to.path !== "/login") {
        if (!store.getters.getToken.usename) {
            next('/login?fullPath=' + to.fullPath)
        } else {
            next()
            if (store.getters.getRouters.length === 0) {
                axios.get('/getNav').then(({ data }) => {
                    if (data.code == 200) {
                        store.dispatch('dealRouter', data.data)
                        next(to.path)
                    }
                })
            } else {
                next()
            }
        }
    } else {
        next()
    }
})
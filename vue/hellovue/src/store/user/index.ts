/*
 * @Author: 吴玉荣
 * @LastEditors: Please set LastEditors
 * @Date: 2021-03-09 10:37:52
 * @LastEditTime: 2021-07-05 23:55:20
 * @info: 描述
 */

import { Module } from 'vuex'
import router from '@/router/index'
import { ref } from 'vue'
import { RouteRecordRaw } from 'vue-router'
import layout from '@/layout/index.vue'
interface UserInterface {
    userData: any,
    routerBox: Array<any>
}
// const loadView  = (str:string) => {
//   console.log()
//   return () => import('@/views/'+ str)
// }
// setTimeout(() => {
//   var obj:RouteRecordRaw= {
//     path: '/test',
//     name: 'test',
//     component: loadView('index'),
//   }
//   router.addRoute(obj)
// }, 2000)
const user: Module<UserInterface, any> = {
    state: {
        userData: JSON.parse(localStorage.getItem('userData') || "{}"),
        routerBox: []
    },
    mutations: {
        SET_TOKEN(state, obj) {
            state.userData = obj
            localStorage.setItem('userData', JSON.stringify(obj))
        },
        SET_ROUTER(state, arr: Array<any>) {
            state.routerBox = arr
        }
    },
    actions: {
        dealRouter(store, router: Array<any>) {
            store.commit('SET_ROUTER', dealRouter(router))
            // return new Promise((resolve,reject) => {
            //     resolve()
            // })
        }
    },
    getters: {
        getToken: (state => state.userData),
        getRouters: (state => state.routerBox)
    }
}
function dealRouter(arr: Array<any>) {
    var result: Array<RouteRecordRaw> = []
    arr.forEach(val => {
        var obj: RouteRecordRaw = {
            path: val.comments,
            name: val.name,
            children: val.children && val.children.length ? dealRouter(val.children) : [],
            component: val.children && val.children.length ? layout : loadView(val.comments),
        }
        router.addRoute(obj)
        result.push(obj)
    })
    return result
}
let modules = import.meta.glob('../../views/**')
function loadView(str: string) {
    for (const path in modules) {
        if ('../../views' + str + '.vue' === path) {
            return modules[path]
        }
    }
}
export default user
/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-03-09 10:37:52
 * @LastEditTime: 2021-03-30 19:51:06
 * @info: 描述
 */

import { Module } from 'vuex'
interface UserInterface {
    userData: {
        usename: string
    },
}
interface userDataInterface {
    usename: string,
}
const user: Module<UserInterface, any> = {
    state: {
        userData: {
            usename: ""
        }
    },
    mutations: {
        SET_TOKEN(state, obj) {
            state.userData.usename = ''
        }
    },
    actions: {
        getToken(state, obj) {

        }
    },
    getters: {
        getToken: (state => state.userData)
    }
}
export default user
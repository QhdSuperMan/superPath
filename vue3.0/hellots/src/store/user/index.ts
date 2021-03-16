
import { Module } from 'vuex'
interface UserInterface {
    token: string
}
const user: Module<UserInterface, any> = {
    state: {
        token: '666'
    },
    mutations: {
        SET_TOKEN(state, obj) {
            state.token = obj
        }
    },
    actions: {
        getToken(state,obj) {

        }
    },
    getters: {
        getToken: (state=> state.token)
    }
}
export default user
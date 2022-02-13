import { userState } from "./store"

const getters = {
  isLogin: (state: userState): string => {
    return `嘿嘿${state.loading}`
  }
}

export default getters
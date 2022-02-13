import { GET_DATA } from "./constant";
import { ActionContext } from 'vuex'
import { userState } from "./store";
export default {
  [GET_DATA]({ commit }: ActionContext<userState, unknown>): void {
    console.log('执行成功');
    setTimeout(() => {
      const payLoad = true
      commit(GET_DATA, payLoad)
    }, 2000)
  }
}
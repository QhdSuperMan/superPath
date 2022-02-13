import { GET_DATA } from "./constant";
import { userState } from "./store";

const mutations = {
  [GET_DATA](state:userState,payLoad:boolean):void {
    console.log('mutations执行成功');
    state.loading = payLoad
  }
}


export default mutations
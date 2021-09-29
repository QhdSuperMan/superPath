import { handleActions } from 'redux-actions'

// 登陆返回结果
const userInfoObj = {
  username: '嘿嘿'
}
export const userinfo = handleActions({
  'set username' (state, data) {
    return { ...state, username:data.payload  }
  }
}, userInfoObj)
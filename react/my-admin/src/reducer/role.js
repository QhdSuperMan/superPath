import { handleActions } from 'redux-actions'

// 登陆返回结果
const userInfoObj = {
  role: '超级管理员'
}
export const role = handleActions({
  'set role' (state, data) {
    return { ...state, role: data.payload }
  }
}, userInfoObj)
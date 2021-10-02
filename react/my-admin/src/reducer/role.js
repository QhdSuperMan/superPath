import { handleActions } from 'redux-actions'

// 登陆返回结果
const userInfoObj = {
  role: '',
  token: localStorage.getItem('token')
}
export const role = handleActions({
  'set role' (state, data) {
    return { ...state, role: data.payload }
  },
  'set token' (state, data) {
    localStorage.setItem('token', data.payload)
    return { ...state, token: data.payload }
  }
}, userInfoObj)
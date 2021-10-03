import { handleActions } from 'redux-actions'

// 登陆返回结果
const userInfoObj = {
  username: localStorage.getItem('username'),
  token: localStorage.getItem('token'),

}
export const userinfo = handleActions({
  'set username' (state, data) {
    localStorage.setItem('username', data.payload)
    return { ...state, username: data.payload }
  },
  'set token' (state, data) {
    localStorage.setItem('token', data.payload)
    return { ...state, token: data.payload }
  },
  'login out' (state, data) {
    console.lohg(111)
    localStorage.setItem('token', '')
    localStorage.setItem('username', '')
    return { ...state, token: data.payload }
    // return {
    //   username: '',
    //   token: ''
    // }
  },
}, userInfoObj)
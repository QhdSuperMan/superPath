import { handleActions } from 'redux-actions'

// 登陆返回结果
const userInfoObj = {
  username: '',
  token: localStorage.getItem('token'),
  
}
export const userinfo = handleActions({
  'set username' (state, data) {
    return { ...state, username:data.payload  }
  },
  'set token' (state, data) {
    localStorage.setItem('token', data.payload)
    console.log('操作')
    return { ...state, token: data.payload }
  }
}, userInfoObj)
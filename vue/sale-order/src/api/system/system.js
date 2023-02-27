import axios from "@/utils/service.js";
// 登录
export function login (data) {
  return axios({
    method: 'post',
    url: '/admin/login/login',
    data
  })
}
// 发送验证码
export function sendCode (data) {
  return axios({
    method: 'post',
    url: '/admin/open/sendSmsCode',
    data
  })
}

// 发送验证码
export function register (data) {
  return axios({
    method: 'post',
    url: '/admin/open/companyRegister',
    data
  })
}

// 拨号
export function dialing (data) {
  return axios({
    method: 'post',
    url: '/admin/call/dialing',
    data
  })
}


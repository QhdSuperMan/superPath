/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-03-02 16:27:08
 * @LastEditTime: 2021-03-02 16:33:29
 * @info: 描述
 */
import axios from 'axios'
import router from '../router/index'
const server = axios.create({
    // baseURL: "http://192.168.1.133:10010", // https://jms.juranguanjia.com  // https://uat-jms.juranguanjia.com
    timeout: 5000,
    withCredentials: true // 允许携带cookie
})
// 添加请求拦截器
server.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
})
server.interceptors.response.use(function (res) {
    // 对响应数据做点什么
    // if (localStorage.getItem('token')) { // 查询本地存储信息是否已经登陆
    // } else {
    //     router.push({ path: '/login' })
    // }
    console.log(res, 'resresres')
    if (res.data.code && res.data.code == -202) {
        // console.log('重新登录')
        router.push({ path: '/login' })
    } 
    return res
}, function (error) {
    console.log(error)
})
export default server

/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-03-09 11:39:14
 * @LastEditTime: 2021-03-24 16:43:20
 * @info: 封装axios
 */
import axios from 'axios'
const baseURL: string = '/api/'
const server = axios.create({
  baseURL: baseURL,
  timeout: 1000,
  // headers: { 'X-Custom-Header': 'foobar' }
});
// 添加请求拦截器
server.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
server.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});



export default function inItAxios(app: any) {
  app.config.globalProperties.$axios = server
}
/*
 * @Description:
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2022-11-27 14:04:58
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-03-06 16:55:19
 */
import axios from "axios";
import type { AxiosRequestConfig, CreateAxiosDefaults } from "axios";
import { ElMessage } from "element-plus";
import { logout } from "@/utils";
import { getToken } from "@/utils/store.js";


/**
 * config参数
 * @param {*} config.downloadName 下载二进制文件的名字
 */
type a = Exclude<keyof CreateAxiosDefaults<any>, 'headers'>
export function createAxios(config :any) {
  const instance = axios.create({
    timeout: 30000, //超时配置
    baseURL: process.env.VUE_APP_HOST,
    headers: {
      "Content-Type": "multipart/form-data"
    },
    // withCredentials: true, //跨域携带cookie
    // ...config, // 自定义配置覆盖基本配置
  });

  let configCopy = Object.assign(
    {
      formatterParams: true, // 格式化参数  删除 undefined null '' 参数
    },
    config
  );

  // 添加请求拦截器
  instance.interceptors.request.use(
    function (config) {
      return config;
    },
    function (error) {
      // 对请求错误做些什么
      return Promise.reject(error);
    }
  );

  // 添加响应拦截器
  instance.interceptors.response.use(
    function (response) {
      switch (response.data.code) {
        case 401:
          ElMessage.error(response.data.msg || "登录已失效，请重新登录！");
          logout();
          return;
          break;
      }
      // // 下载二进制文件
      // if (configCopy.downloadName && response.config.responseType === "blob") {
      //   let res = response.headers['content-disposition'].match(/filename="(\S*)"/)
      //   downloadFile(response.data, res && decodeURIComponent(res[1]) || configCopy.downloadName);
      //   return response;
      // }

      if (response.data.code !== 200) {
        ElMessage.error(response.data.msg || "请联系系统管理员");
      }
      return response;
    },
    function (error) {
      console.log('error: ', error);
      // message.error("请联系系统管理员");
      return Promise.reject(error);
    }
  );
  return instance;
}
/**
 *
 * @param { object } config 请求数据
 * @param { object } axiosConfig 创建axios配置
 * @returns
 */
export default function server(config: AxiosRequestConfig, axiosConfig = {}) {
  let axiosHander = createAxios(axiosConfig);
  return axiosHander(config);
}

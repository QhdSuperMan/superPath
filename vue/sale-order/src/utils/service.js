/*
 * @Description:
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2022-11-27 14:04:58
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-03-25 16:17:33
 */
import axios from "axios";
import store from '@/store/index.js'
import { message } from "ant-design-vue";
import { downloadFile, logout, formatterObj, getUrlQuery } from "@/utils";
import { getToken } from "@/utils/store.js";

// import { Loading } from "ant-design-vue";
/**
 * config参数
 * @param {*} config.downloadName 下载二进制文件的名字
 */
export function createAxios(config) {
  const instance = axios.create({
    timeout: 30000, //超时配置
    baseURL: process.env.VUE_APP_HOST,
    ContentType: "multipart/form-data",
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
      if (config.method === "post") {
        if (!config.data) {
          config.data = {};
        }
        if (config.data instanceof FormData) {
          config.data.append("token", getToken());
          if (store.state.device === 'h5') {
            config.data.append("platform", getUrlQuery('platform'));
            config.data.append("version", getUrlQuery('version'));
          }
        } else {
          config.data.token = getToken();
          if (store.state.device === 'h5') {
            config.data.platform = getUrlQuery('platform') 
            config.data.version = getUrlQuery('version') 
          }
        }
        if (configCopy.formatterParams) {
          formatterObj(config.data);
        }
      } else if (config.method === "get") {
        if (!config.params) {
          config.params.token = getToken();
        }
        config.params.token = getToken();
        if (configCopy.formatterParams) {
          formatterObj(config.params);
        }
      }

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
          // message.error(response.data.msg || "登录已失效，请重新登录！");
          // logout();
          return;
          break;
      }
      // 下载二进制文件
      if (configCopy.downloadName && response.config.responseType === "blob") {
        let res = response.headers['content-disposition'].match(/filename="(\S*)"/)
        downloadFile(response.data, res && decodeURIComponent(res[1]) || configCopy.downloadName);
        return response;
      }

      if (response.data.code !== 200) {
        // message.error(response.data.msg || "请联系系统管理员");
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
export default function server(config, axiosConfig = {}) {
  let axiosHander = createAxios(axiosConfig);
  return axiosHander(config);
}

/*
 * @Description: 
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-01-04 22:49:04
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-01-30 22:05:50
 */
import axios from "@/utils/service.js";

// 获取任务列表
export function getList(data) {
  return axios({
    method: "post",
    url: "/admin/task/getList",
    data,
  });
}

// 保存任务
export function saveTask(data) {
  return axios({
    method: "post",
    url: "/admin/task/saveTask",
    data,
  });
}

// 获取我的任务列表
export function getMyList(data) {
  return axios({
    method: "post",
    url: "/admin/task/getMyList",
    data,
  });
}

// 切换启停
export function toggleEnable(data) {
  return axios({
    method: "post",
    url: "/admin/task/toggleEnable",
    data,
  });
}



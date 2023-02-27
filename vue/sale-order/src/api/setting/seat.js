/*
 * @Description: 坐席
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-01-31 20:27:30
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-02-01 21:18:58
 */

import axios from "@/utils/service.js";

export const getList = "/admin/seat/getList"; // 获取全部角色列表
export const getLogList = "/admin/seat/getLogList"; // 获取日志列表

// 绑定员工
export function bind(data) {
  return axios({
    method: "post",
    url: "/admin/seat/bind",
    data,
  });
}

// 解绑员工
export function unbind(data) {
  return axios({
    method: "post",
    url: "/admin/seat/unbind",
    data,
  });
}

// 变更员工
export function change(data) {
  return axios({
    method: "post",
    url: "/admin/seat/change",
    data,
  });
}

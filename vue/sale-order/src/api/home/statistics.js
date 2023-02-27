/*
 * @Description: 统计
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-01-29 21:22:10
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-01-29 22:18:36
 */
import axios from "@/utils/service.js";

// 获取客户统计
export function getCustomerStatistics(data) {
  return axios({
    method: "post",
    url: "/admin/data_core/getCustomerStatistics",
    data,
  });
}

// 获取通话统计
export function getCallStatistics(data) {
  return axios({
    method: "post",
    url: "/admin/data_core/getCallStatistics",
    data,
  });
}

// 获取订单统计
export function getOrderStatistics(data) {
  return axios({
    method: "post",
    url: "/admin/data_core/getOrderStatistics",
    data,
  });
}


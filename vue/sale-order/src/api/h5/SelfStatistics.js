/*
 * @Description: h5通用接口
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-01-11 23:42:05
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-01-30 19:49:58
 */
import axios from "@/utils/service.js";

// 获取通话统计
export function getCallStatistics(data) {
  return axios({
    method: "post",
    url: "/api/statistics/getCallStatistics",
    data,
  });
}

// 获取客户统计
export function getCustomerStatistics(data) {
  return axios({
    method: "post",
    url: "/api/statistics/getCustomerStatistics",
    data,
  });
}

// 获取订单统计
export function getOrderStatistics(data) {
  return axios({
    method: "post",
    url: "/api/statistics/getOrderStatistics",
    data,
  });
}

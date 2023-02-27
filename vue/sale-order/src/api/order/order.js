import axios from "@/utils/service.js";

export const getList = "/admin/sales_order/getlist"; // 获取全部订单列表
export const getMyList = "/admin/sales_order/getMyList"; // 我的订单

// 添加订单
export function addSalesOrder(data) {
  return axios({
    method: "post",
    url: "/admin/sales_order/add",
    data,
  });
}
// 编辑订单
export function editSalesOrder(data) {
  return axios({
    method: "post",
    url: "/admin/sales_order/edit",
    data,
  });
}

// 订单详情
export function getInfo(data) {
  return axios({
    method: "post",
    url: "/admin/sales_order/getInfo",
    data,
  });
}

// 审核订单
export function auditorPass(data) {
  return axios({
    method: "post",
    url: "/admin/sales_order/auditorPass",
    data,
  });
}

// 弃审订单
export function auditorNoPass(data) {
  return axios({
    method: "post",
    url: "/admin/sales_order/auditorNoPass",
    data,
  });
}

// 驳回订单
export function reject(data) {
  return axios({
    method: "post",
    url: "/admin/sales_order/reject",
    data,
  });
}

// 作废订单
export function auditorInvalid(data) {
  return axios({
    method: "post",
    url: "/admin/sales_order/auditorInvalid",
    data,
  });
}

// 删除订单
export function deleteOrder(data) {
  return axios({
    method: "post",
    url: "/admin/sales_order/delete",
    data,
  });
}

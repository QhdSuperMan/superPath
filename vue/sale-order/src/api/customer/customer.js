import axios from "@/utils/service.js";

export const getList = "/admin/customer/getList"; // 获取全部客户列表
export const getRecycleList = "/admin/customer/getRecycleList"; // 回收站
export const getHighSeaList = "/admin/customer/getHighSeaList"; // 客户公海
export const getMyList = "/admin/customer/getMyList"; // 我的客户
export const getCallDetail = "/admin/customer/getCallDetail"; // 获取通话明细

// 添加为客户
export function addCustomer(data) {
  return axios({
    method: "post",
    url: "/admin/customer/add",
    data,
  });
}
// 编辑客户
export function editCustomer(data) {
  return axios({
    method: "post",
    url: "/admin/customer/edit",
    data,
  });
}

// 客户详情
export function getInfo(data) {
  return axios({
    method: "post",
    url: "/admin/customer/getInfo",
    data,
  });
}

// 领取客户
export function receive(data) {
  return axios({
    method: "post",
    url: "/admin/customer/receive",
    data,
  });
}

// 释放客户
export function release(data) {
  return axios({
    method: "post",
    url: "/admin/customer/release",
    data,
  });
}

// 释放全部客户
export function releaseAll(data) {
  return axios({
    method: "post",
    url: "/admin/customer/releaseAll",
    data,
  });
}

// 释放我的客户
export function releaseMy(data) {
  return axios({
    method: "post",
    url: "/admin/customer/releaseMy",
    data,
  });
}

// 释放我的全部客户
export function releaseMyAll(data) {
  return axios({
    method: "post",
    url: "/admin/customer/releaseMyAll",
    data,
  });
}

// 转交
export function transfer(data) {
  return axios({
    method: "post",
    url: "/admin/customer/transfer",
    data,
  });
}

// 派发
export function dispatch(data) {
  return axios({
    method: "post",
    url: "/admin/customer/dispatch",
    data,
  });
}

// 删除客户
export function deleteCustomer(data) {
  return axios({
    method: "post",
    url: "/admin/customer/delete",
    data,
  });
}

// 恢复
export function recovery(data) {
  return axios({
    method: "post",
    url: "/admin/customer/recovery",
    data,
  });
}

// 加入回收站
export function putRecycle(data) {
  return axios({
    method: "post",
    url: "/admin/customer/putRecycle",
    data,
  });
}

// 更改客户状态
export function changeStatus(data) {
  return axios({
    method: "post",
    url: "/admin/customer/changeStatus",
    data,
  });
}

// 添加跟进记录
export function addFollowLog(data) {
  return axios({
    method: "post",
    url: "/admin/customer/addFollowLog",
    data,
  });
}


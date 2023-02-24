import axios from "@/utils/service.js";

export const getList = "/admin/resource/getList"; // 获取全部资源列表
export const getRecycleList = "/admin/resource/getRecycleList"; // 回收站
export const getHighSeaList = "/admin/resource/getHighSeaList"; // 资源公海
export const getMyList = "/admin/resource/getMyList"; // 我的资源

// 添加为客户
export function addCustomer(data) {
  return axios({
    method: "post",
    url: "/admin/resource/addCustomer",
    data,
  });
}

// 资源详情
export function getInfo(data) {
  return axios({
    method: "post",
    url: "/admin/resource/getInfo",
    data,
  });
}

// 获取可领取数量
export function getCanReceiveCount(data) {
  return axios({
    method: "post",
    url: "/admin/resource/getCanReceiveCount",
    data,
  });
}

// 导入资源
export function importTemplate(data) {
  return axios({
    method: "post",
    url: "/admin/resource/importTemplate",
    data,
  });
}

// 导出资源
export function exportTemplate(data) {
  return axios(
    {
      method: "post",
      url: "/admin/resource/export",
      data,
      responseType: "blob",
    },
    {
      downloadName: "导出资源",
    }
  );
}

// 转交
export function transfer(data) {
  return axios({
    method: "post",
    url: "/admin/resource/transfer",
    data,
  });
}

// 派发
export function dispatch(data) {
  return axios({
    method: "post",
    url: "/admin/resource/dispatch",
    data,
  });
}

// 删除资源
export function deleteResource(data) {
  return axios({
    method: "post",
    url: "/admin/resource/delete",
    data,
  });
}

// 恢复
export function recovery(data) {
  return axios({
    method: "post",
    url: "/admin/resource/recovery",
    data,
  });
}

// 标记
export function mark(data) {
  return axios({
    method: "post",
    url: "/admin/resource/mark",
    data,
  });
}

// 加入回收站
export function putRecycle(data) {
  return axios({
    method: "post",
    url: "/admin/resource/putRecycle",
    data,
  });
}

// 领取资源
export function receive(data) {
  return axios({
    method: "post",
    url: "/admin/resource/receive",
    data,
  });
}

// 释放资源
export function release(data) {
  return axios({
    method: "post",
    url: "/admin/resource/release",
    data,
  });
}

// 释放全部资源
export function releaseAll(data) {
  return axios({
    method: "post",
    url: "/admin/resource/releaseAll",
    data,
  });
}

// 释放我的资源
export function releaseMy(data) {
  return axios({
    method: "post",
    url: "/admin/resource/releaseMy",
    data,
  });
}

// 释放我的全部资源
export function releaseMyAll(data) {
  return axios({
    method: "post",
    url: "/admin/resource/releaseMyAll",
    data,
  });
}

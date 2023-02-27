import axios from "@/utils/service.js";

export const getList = "/admin/staff/getList"; // 获取全部员工列表

// 添加员工
export function addStaff(data) {
  return axios({
    method: "post",
    url: "/admin/staff/add",
    data,
  });
}

// 编辑员工
export function editStaff(data) {
  return axios({
    method: "post",
    url: "/admin/staff/edit",
    data,
  });
}

// 切换启停
export function togglePause(data) {
  return axios({
    method: "post",
    url: "/admin/staff/togglePause",
    data,
  });
}

// 获取员工详情
export function getInfo(data) {
  return axios({
    method: "post",
    url: "/admin/staff/getInfo",
    data,
  });
}

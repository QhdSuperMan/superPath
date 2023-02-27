import axios from "@/utils/service.js";

export const getList = "/admin/role/getList"; // 获取全部角色列表
export const getStaffList = "/admin/role/getStaffList"; // 获取员工

// 添加角色
export function addRole(data) {
  return axios({
    method: "post",
    url: "/admin/role/add",
    data,
  });
}

// 获取菜单权限列表
export function getMenuAuthList(data) {
  return axios({
    method: "post",
    url: "/admin/role/getMenuAuthList",
    data,
  });
}

// 保存权限
export function saveAuth(data) {
  return axios({
    method: "post",
    url: "/admin/role/saveAuth",
    data,
  });
}

// 编辑角色
export function editRole(data) {
  return axios({
    method: "post",
    url: "/admin/role/edit",
    data,
  });
}


// 删除角色
export function deleteRole(data) {
  return axios({
    method: "post",
    url: "/admin/role/delete",
    data,
  });
}


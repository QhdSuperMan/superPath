import axios from "@/utils/service.js";

export const getList = "/admin/department/getList"; // 获取全部部门列表
export const getStaffList = "/admin/department/getStaffList"; // 获取员工

// 添加部门
export function addDepartment(data) {
  return axios({
    method: "post",
    url: "/admin/department/add",
    data,
  });
}

// 编辑部门
export function editDepartment(data) {
  return axios({
    method: "post",
    url: "/admin/department/edit",
    data,
  });
}

// 删除部门
export function deleteDepartment(data) {
  return axios({
    method: "post",
    url: "/admin/department/delete",
    data,
  });
}

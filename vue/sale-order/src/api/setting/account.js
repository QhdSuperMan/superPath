import axios from "@/utils/service.js";

// 修改密码
export function changePassword(data) {
  return axios({
    method: "post",
    url: "/admin/setting/changePassword",
    data,
  });
}

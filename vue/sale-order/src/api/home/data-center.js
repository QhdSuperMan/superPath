import axios from "@/utils/service.js";

// 获取任务总览
export function getTaskOverview(data) {
  return axios({
    method: "post",
    url: "/admin/task/getTaskOverview",
    data,
  });
}

import axios from "@/utils/service.js";

// 获取资源设置
export function getResourceSetting(data) {
  return axios({
    method: "post",
    url: "/admin/setting/getResourceSetting",
    data,
  });
}

// 保存资源设置
export function saveResourceSetting(data) {
  return axios({
    method: "post",
    url: "/admin/setting/saveResourceSetting",
    data,
  });
}

// 获取龙虎榜设置
export function getLhRankSetting(data) {
  return axios({
    method: "post",
    url: "/admin/setting/getLhRankSetting",
    data,
  });
}

// 保存龙虎榜设置
export function saveLhRankSetting(data) {
  return axios({
    method: "post",
    url: "/admin/setting/saveLhRankSetting",
    data,
  });
}




/*
 * @Description: 龙虎榜
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-01-29 20:57:42
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-01-29 20:57:54
 */
import axios from "@/utils/service.js";

// 获取列表
export function getList(data) {
  return axios({
    method: "post",
    url: "/admin/lh_ranking/getList",
    data,
  });
}

// 保存
export function saveRank(data) {
  return axios({
    method: "post",
    url: "/admin/lh_ranking/save",
    data,
  });
}

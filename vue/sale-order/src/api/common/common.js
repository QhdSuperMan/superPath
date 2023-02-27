/*
 * @Description: 公共接口
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-01-11 23:42:05
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-01-11 23:42:11
 */
import axios from "@/utils/service.js";

// 上传头像
export function upload(data) {
  return axios({
    method: "post",
    url: "/admin/upload/headPicture",
    data,
  });
}
// 获取菜单列表
export function getMenuList(data) {
  return axios({
    method: "post",
    url: "/admin/publics/getMenuList",
    data,
  });
}

// 获取菜单行为操作码列表
export function getOperateAuth(data) {
  return axios({
    method: "post",
    url: "/admin/publics/getOperateAuth",
    data,
  });
}

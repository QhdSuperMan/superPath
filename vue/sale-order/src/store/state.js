/*
 * @Description:
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2022-11-20 14:56:38
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-01-30 22:44:48
 */
import { getLocalStorage } from "@/store/storage.js";
export default {
  token: "",
  device: "pc", // 设备
  routes: [],
  btnAuthority: {}, // 按钮权限
  sidebarMenu: [], // 侧边栏菜单
  userInfo: getLocalStorage("userInfo") || {},
  routesSourceData: [],
};

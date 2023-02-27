import { setLocalStorage } from "@/store/storage.js";

export default {
  // 设置用户信息
  setUserInfo(state, userInfo) {
    state.userInfo = userInfo;
    setLocalStorage("userInfo", userInfo);
  },

  setDevice(state, device) {
    state.device = device;
  },
  setRoutes(state, routes) {
    state.routes = routes;
  },
  setRoutesSourceData(state, routesSourceData) {
    state.routesSourceData = routesSourceData;
  },
  setSidebarMenu(state, sidebarMenu) {
    state.sidebarMenu = sidebarMenu;
  },
  setBtnAuthority(state, btnAuthority) {
    state.btnAuthority = btnAuthority;
  },
};

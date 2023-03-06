// 获取激活路由
import store from "@/store/index.js";
// vue使用的路由
export function getActiveRoute(path) {
  let index = store.state.routes.findIndex((val) => {
    for (const iterator of val.children) {
      if (iterator.path === path) {
        return val;
      }
    }
  });

  return {
    index,
    route: store.state.routes[index],
  };
}
// 路由原始数据  页面使用的结构
export function getActiveSourceDate(path) {
  let { index } = getActiveRoute(path);
  return store.state.routesSourceData[index];
}

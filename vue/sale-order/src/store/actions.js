/*
 * @Description:
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2022-11-20 14:57:01
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-01-09 21:21:54
 */
import { getMenuList } from "@/api/common/common.js";
import {
  routesSourceData,
  dealRouter,
  filteRouter,
  notFound,
} from "@/router/utils.js";
import { deepCopy } from "@/utils/index.js";

export default {
  Logout(context) {
    context.commit("setUserInfo", {});
    context.commit("setRoutes", []);
    context.commit("setRoutesSourceData", []);
  },
  getMenus(context) {
    return getMenuList().then(({ data }) => {
      if (data.code === 200) {
        const sourceRoute = filteRouter(deepCopy(routesSourceData), data.data);

        // 多层级router数据转换为两层router 拼接path 并且拼接name 保证唯一性
        let route = dealRouter(sourceRoute);
        context.commit("setRoutesSourceData", sourceRoute);
        context.commit("setRoutes", route);
        route.push(notFound);
        return route;
      }
    });
  },
};

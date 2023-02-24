let page = [];
const requireComponents = require.context("./page", true, /\.js/);
requireComponents.keys().forEach((fileName) => {
  // 组件实例
  const reqCom = requireComponents(fileName);
  page.push(reqCom.default);
});

export const routesSourceData = page;

export const notFound = {
  path: "*",
  name: "*",
  component: () => import("@/layout/Layout.vue"),
  redirect: "/not-found",
  meta: {
    hidden: true,
    title: "404",
  },
  children: [
    {
      path: "not-found",
      name: "not-found",
      meta: {
        hidden: true,
        title: "404",
      },
      component: () => import("@/components/NotFound.vue"),
    },
  ],
};

//  处理菜单路由为vue路由
function dealAction(arr, result, father = []) {
  arr.forEach((item) => {
    if (item.children && item.children.length) {
      dealAction(item.children, result, father.concat(item));
    } else {
      let path = "";
      if (item.path.indexOf("/") !== 0) {
        path = "/";
        father.forEach((val) => {
          if (val.path !== "/") {
            path = path + val.path.replace("/", "") + "/";
          }
        });
      }
      // 菜单路由储存vue路由路径
      item.routePath = path + item.path;

      result.push({
        ...item,
        meta: {
          ...item.meta,
          // vue路由储存菜单路由层级
          sourceRoute: father.concat(item),
        },
        path: path + item.path,
      });
    }
  });

  return result;
}
//  处理菜单路由为vue路由
export function dealRouter(router) {
  return router.map((item) => {
    let result = {
      ...item,
      children: dealAction(item.children, [], [item]),
    }
    result.redirect = result?.children[0]?.path || result.redirect

    return result;
  });
}

/**
 * 根据权限筛选路由
 * @param {*} routesSourceData  路由表
 * @param {*} data 后台返回的路由数组
 * @returns 
 */
export function filteRouter(routesSourceData, data = []) {
  let result = [];
  for (let i = 0; i < data.length; i++) {
    const route = data[i];
    // 同层次对比path
    const sourceRoute = routesSourceData.find(
      (item) => item.path === route.path
    );
    if (sourceRoute) {
      if (route.children && sourceRoute.children) {
        route.children = filteRouter(sourceRoute.children, route.children);
      }
      sourceRoute.meta = Object.assign(sourceRoute.meta, {
        title: route.menu_name,
        ...route,
        children: null,
      });
      sourceRoute.children = route.children || [];
      result.push(sourceRoute);
    }
  }
  return result;
}

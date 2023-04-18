

import { deepCopy } from '@/utils/index.js'
const routePages: any = import.meta.glob('./page/*.ts', { eager: true })
let routes = []
for (const item in routePages) {
  routes.push(routePages[item].default)
}

export const baseRoutes = routes

export const menuRoutes = dealMenuRouter(routes, [])
console.log('menuRoutes: ', menuRoutes);


//  处理菜单路由的path 拼接name  拼接path
export function dealMenuRouter(router: any, fatherRoutes: unknown[]) {
  return router.map((item: any) => {
    let routeArray = deepCopy(fatherRoutes)
    let route = routeArray[routeArray.length - 1] || {
      paths: [],
      names: []
    }
    if (item.path === '/') {
      route.paths.push('')
    } else {
      if (item.path.indexOf('/') === -1) {
        route.paths.push(item.path)
      } else {
        route.paths = [item.path]
      }
    }

    route.names.push(item.name)
    routeArray.push(route)

    let result = {
      ...item,
      sourcePath: item.path,
      name: route.names.join('-'),
      path: route.paths.join('/'),
      children: dealMenuRouter(item.children || [], routeArray),
    }
    // result.redirect = result?.children[0]?r(item..path || result.redirect
    return result;
  });
}


// export const notFound = {
//   path: "*",
//   name: "*",
//   component: () => import("@/layout/Layout.vue"),
//   redirect: "/not-found",
//   meta: {
//     hidden: true,
//     title: "404",
//   },
//   children: [
//     {
//       path: "not-found",
//       name: "not-found",
//       meta: {
//         hidden: true,
//         title: "404",
//       },
//       component: () => import("@/components/NotFound.vue"),
//     },
//   ],
// };

         
//  处理菜单路由为vue路由
function dealAction(arr: any, result: any, father = []) {
  arr.forEach((item: any) => {
    if (item.children && item.children.length) {
      dealAction(item.children, result, father.concat(item));
    } else {
      let path = "";
      if (item.path.indexOf("/") !== 0) {
        path = "/";
        father.forEach((val: any) => {
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
// //  处理菜单路由为vue路由
export function dealRouter(router: any) {
  return router.map((item: any) => {
    let result = {
      ...item,
      children: dealAction(item.children, [], [item as never]),
    }
    result.redirect = result?.children[0]?.path || result.redirect

    return result;
  });
}

// /**
//  * 根据权限筛选路由
//  * @param {*} routesSourceData  路由表
//  * @param {*} data 后台返回的路由数组
//  * @returns
//  */
// export function filteRouter(routesSourceData, data = []) {
//   let result = [];
//   for (let i = 0; i < data.length; i++) {
//     const route = data[i];
//     // 同层次对比path
//     const sourceRoute = routesSourceData.find(
//       (item) => item.path === route.path
//     );
//     if (sourceRoute) {
//       if (route.children && sourceRoute.children) {
//         route.children = filteRouter(sourceRoute.children, route.children);
//       }
//       sourceRoute.meta = Object.assign(sourceRoute.meta, {
//         title: route.menu_name,
//         ...route,
//         children: null,
//       });
//       sourceRoute.children = route.children || [];
//       result.push(sourceRoute);
//     }
//   }
//   return result;
// }

/*
 * @Description:
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2022-11-20 14:36:29
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-03-25 16:15:19
 */
import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/index.js";
import { getToken } from "@/utils/store.js";
import { getOperateAuth } from "@/api/common/common.js";

let h5Page = [];
const h5RequireComponents = require.context("./h5", true, /\.js/);
h5RequireComponents.keys().forEach((fileName) => {
  // 组件实例
  const reqCom = h5RequireComponents(fileName);
  h5Page.push(reqCom.default);
});

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/login",
      name: "login",
      meta: {
        title: "登录",
        noToken: true,
      },
      component: () => import("@/views/login/Login.vue"),
    },
    {
      path: "/register",
      name: "register",
      meta: {
        title: "注册",
        noToken: true,
      },
      component: () => import("@/views/register/register.vue"),
    },
    ...h5Page,
  ],
});

// 解决报错
const originalPush = VueRouter.prototype.push;
const originalReplace = VueRouter.prototype.replace;
// push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch((err) => err);
};
// replace
VueRouter.prototype.replace = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalReplace.call(this, location, onResolve, onReject);
  return originalReplace.call(this, location).catch((err) => err);
};

router.beforeEach((to, from, next) => {
  if (to.meta) {
    document.title = to.meta.title || "";
  }
  if (!getToken() && !to.meta.noToken && false) {
    next("login");
  } else {
    if (!to.meta.noToken) {
      if (store.state.routes.length === 0) {
        // 获取路由
        store.dispatch("getMenus").then((result) => {
          router.addRoutes(result);
        });
        next();
        return;
      }
      if (to.meta.action_code) {
        // 获取按钮权限
        getOperateAuth({ action_code: to.meta.action_code }).then(({ data }) => {
          if (data.code === 200) {
            let obj = Object.values(data.data).reduce((a, b) => {
              return Object.assign(a, b);
            }, {});
            store.commit("setBtnAuthority", obj);
          }
        });
      }
    }
    next();
  }
});
export default router;

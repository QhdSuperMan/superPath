/*
 * @Description: 
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-03-07 09:49:43
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-03-25 16:30:33
 */
export default {
  path: "/order",
  name: "order",
  meta: {
    title: "订单",
  },
  redirect: "/order/my-order",
  component: () => import("@/layout/Layout.vue"),
  children: [
    {
      path: "my-order",
      name: "my-order",
      meta: {
        title: "菜单1",
        keepAlive: true
      },
      component: () => import("@/views/order/order/My.vue"),
    },
    {
      path: "all-order",
      name: "all-order",
      meta: {
        title: "菜单2",
        keepAlive: true
      },
      component: () => import("@/views/order/order/All.vue"),
    },
  ],
};

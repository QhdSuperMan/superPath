/*
 * @Description:
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-01-04 20:35:09
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-01-09 22:32:00
 */
export default {
  path: "/call-order",
  meta: {
    title: "话单",
  },
  redirect: "/call-order/my-call",
  component: () => import("@/layout/Layout.vue"),
  children: [
    {
      path: "my-call",
      name: "call-order-my-call",
      meta: {
        title: "我的通话",
      },
      component: () => import("@/views/call-order/call/My.vue"),
    },
    {
      path: "all-call",
      name: "call-order-all-call",
      meta: {
        title: "全部通话",
      },
      component: () => import("@/views/call-order/call/All.vue"),
    },
  ],
};

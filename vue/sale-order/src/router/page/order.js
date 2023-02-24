export default {
  path: "/order",
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
        title: "我的订单",
      },
      component: () => import("@/views/order/order/My.vue"),
    },
    {
      path: "all-order",
      name: "all-order",
      meta: {
        title: "全部订单",
      },
      component: () => import("@/views/order/order/All.vue"),
    },
  ],
};

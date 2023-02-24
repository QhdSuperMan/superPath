export default {
  path: "/customer",
  meta: {
    title: "客户管理",
  },
  redirect: "/customer/my-customer",
  component: () => import("@/layout/Layout.vue"),
  children: [
    {
      path: "my-customer",
      name: "customer-my-customer",
      meta: {
        title: "我的客户",
      },
      component: () => import("@/views/customer/customer/My.vue"),
    },
    {
      path: "all-management",
      name: "resource-all-management",
      meta: {
        title: "全部客户",
      },
      component: () => import("@/views/customer/customer/All.vue"),
    },
    {
      path: "recycling-bin",
      name: "resource-recycling-bin",
      meta: {
        title: "回收站",
      },
      component: () => import("@/views/customer/customer/RecyclingBin.vue"),
    },
    {
      path: "high-seas",
      name: "resource-high-seas",
      meta: {
        title: "客户公海",
      },
      component: () => import("@/views/customer/customer/HighSeas.vue"),
    },
  ],
};

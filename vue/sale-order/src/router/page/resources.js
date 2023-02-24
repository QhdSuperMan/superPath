export default {
  path: "/resource",
  meta: {
    title: "资源管理",
  },
  redirect: "/resource/my-management",
  component: () => import("@/layout/Layout.vue"),
  children: [
    {
      path: "my-management",
      name: "resource-my-management",
      meta: {
        title: "我的资源",
      },
      component: () => import("@/views/resource-management/resource/My.vue"),
    },
    {
      path: "all-management",
      name: "resource-all-management",
      meta: {
        title: "全部资源",
      },
      component: () => import("@/views/resource-management/resource/All.vue"),
    },
    {
      path: "recycling-bin",
      name: "resource-recycling-bin",
      meta: {
        title: "回收站",
      },
      component: () =>
        import("@/views/resource-management/resource/RecyclingBin.vue"),
    },
    {
      path: "high-seas",
      name: "resource-high-seas",
      meta: {
        title: "资源公海",
      },
      component: () =>
        import("@/views/resource-management/resource/HighSeas.vue"),
    },
  ],
};

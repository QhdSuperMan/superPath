/*
 * @Description: 
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2022-11-20 15:30:13
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-01-29 21:27:44
 */
export default {
  path: "/",
  meta: {
    title: "首页",
  },
  redirect: "/data-center/order-statistics",
  component: () => import("@/layout/Layout.vue"),
  children: [
    {
      path: "data-center",
      name: "data-center",
      meta: {
        title: "数据中心",
        icon: "zhihu",
      },
      children: [
        {
          path: "dialing-statistics",
          name: "data-center-dialing-statistics",
          meta: {
            title: "拨号统计",
          },
          component: () =>
            import("@/views/home/data-center/dialing-statistics/Index.vue"),
        },
        {
          path: "customer-statistics",
          name: "data-center-customer-statistics",
          meta: {
            title: "客户统计",
          },
          component: () =>
            import("@/views/home/data-center/customer-statistics/Index.vue"),
        },
        {
          path: "order-statistics",
          name: "data-center-order-statistics",
          meta: {
            title: "订单统计",
          },
          component: () =>
            import("@/views/home/data-center/order-statistics/Index.vue"),
        },
      ],
    },
    // {
    //   path: "call-management",
    //   name: "call-management",
    //   meta: {
    //     title: "通话管理",
    //   },
    //   children: [
    //     {
    //       path: "my-call",
    //       name: "call-management-my-call",
    //       meta: {
    //         title: "我的通话",
    //       },
    //       component: () => import("@/views/home/call-management/call/My.vue"),
    //     },
    //     {
    //       path: "all-call",
    //       name: "call-management-all-call",
    //       meta: {
    //         title: "全部通话",
    //       },
    //       component: () => import("@/views/home/call-management/call/All.vue"),
    //     },
    //   ],
    // },

    {
      path: "function-desc",
      name: "function-desc",
      meta: {
        title: "功能介绍",
      },
      component: () => import("@/views/home/function-desc/Index.vue"),
    },
    {
      path: "mission-overview",
      name: "data-center-mission-overview",
      meta: {
        title: "任务总览",
      },
      component: () =>
        import("@/views/home/data-center/mission-overview/Index.vue"),
    },
  ],
};

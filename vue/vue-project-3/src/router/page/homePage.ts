/*
 * @Description: 
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2022-11-20 15:30:13
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-03-24 15:01:01
 */
export default {
  path: "/",
  name: '',
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
        title: "菜单0",
      },
      children: [
        {
          path: "dialing-statistics",
          name: "data-center-dialing-statistics",
          meta: {
            title: "菜单1",
          },
          component: () =>
            import("@/views/home/data-center/dialing-statistics/Index.vue"),
        },
        {
          path: "customer-statistics",
          name: "data-center-customer-statistics",
          meta: {
            title: "菜单2",
          },
          component: () =>
            import("@/views/home/data-center/customer-statistics/Index.vue"),
        },
      ],
    },
    {
      path: "mission-overview",
      name: "data-center-mission-overview",
      meta: {
        title: "菜单3",
      },
      component: () =>
        import("@/views/home/data-center/mission-overview/Index.vue"),
    },
  ],
};

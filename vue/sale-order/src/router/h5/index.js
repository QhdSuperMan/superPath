/*
 * @Description:
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-01-04 20:35:09
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-01-29 23:20:33
 */

export default {
  path: "/h5",
  meta: {
    title: "h5",
  },
  component: () => import("@/layout/h5/Layout.vue"),
  children: [
    {
      path: "self-statistics",
      name: "self-statistics",
      meta: {
        title: "个人统计",
      },
      component: () => import("@/views/h5/statistics/SelfStatistics.vue"),
    },
  ],
};

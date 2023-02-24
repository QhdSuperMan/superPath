export default {
  path: "/setting",
  meta: {
    title: "设置",
  },
  redirect: "/setting/account-setting",
  component: () => import("@/layout/Layout.vue"),
  children: [
    {
      path: "organization",
      name: "organization",
      meta: {
        title: "组织架构",
      },
      children: [
        {
          path: "role",
          name: "organization-role",
          meta: {
            title: "角色管理",
          },
          component: () => import("@/views/setting/role/Index.vue"),
        },
        {
          path: "department",
          name: "organization-department",
          meta: {
            title: "部门管理",
          },
          component: () => import("@/views/setting/department/Index.vue"),
        },
        {
          path: "employee",
          name: "organization-employee",
          meta: {
            title: "员工管理",
          },
          component: () => import("@/views/setting/employee/Index.vue"),
        },
        {
          path: "seat",
          name: "organization-seat",
          meta: {
            title: "坐席管理",
          },
          component: () => import("@/views/setting/seat/Index.vue"),
        },
      ],
    },
    {
      path: "balance",
      name: "balance",
      meta: {
        title: "余额管理",
      },
      component: () => import("@/views/setting/balance/Index.vue"),
      // children: [
      //   {
      //     path: "consumption",
      //     name: "balance-consumption",
      //     meta: {
      //       title: "消费记录",
      //     },
      //     component: () =>
      //       import("@/views/setting/balance/consumption/Index.vue"),
      //   },
      //   {
      //     path: "charge",
      //     name: "balance-charge",
      //     meta: {
      //       title: "充值记录",
      //     },
      //     component: () => import("@/views/setting/balance/charge/Index.vue"),
      //   },
      // ],
    },
    {
      path: "consumption",
      name: "balance-consumption",
      meta: {
        title: "消费记录",
        hidden: true,
      },
      component: () => import("@/views/setting/balance/consumption/Index.vue"),
    },
    {
      path: "charge",
      name: "balance-charge",
      meta: {
        hidden: true,
        title: "充值记录",
      },
      component: () => import("@/views/setting/balance/charge/Index.vue"),
    },
    {
      path: "task",
      name: "task",
      meta: {
        title: "任务管理",
      },
      component: () => import("@/views/setting/task/task-setting/Index.vue"),
    },
    {
      path: "rank",
      name: "rank",
      meta: {
        title: "龙虎榜管理",
      },
      component: () => import("@/views/setting/rank/rank-setting/Index.vue"),
    },
    {
      path: "my-task",
      name: "my-task",
      meta: {
        title: "我的任务",
      },
      component: () => import("@/views/setting/task/my-task/MyTask.vue"),
    },
    {
      path: "account-setting",
      name: "account-setting",
      meta: {
        title: "账号设置",
      },
      component: () => import("@/views/setting/account-setting/Index.vue"),
    },
    {
      path: "system",
      name: "system",
      meta: {
        title: "系统设置",
      },
      children: [
        {
          path: "resources",
          name: "resources",
          meta: {
            title: "资源设置",
          },
          component: () =>
            import("@/views/setting/system/resources/Index.vue"),
        },
        {
          path: "lh-Rank",
          name: "lh-Rank",
          meta: {
            title: "龙虎榜",
          },
          component: () => import("@/views/setting/system/lh-rank/Index.vue"),
        },
      ],
    },
  ],
};

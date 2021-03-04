export default {
  path: '/user',
  name: 'userAdmin',
  redirect: '/user/list',
  meta: {
    title: '用户管理'
  },
  component: () => import('@/components/twoFather'),
  children: [
    {
      path: '/user/list',
      name: 'userList',
      meta: {
        title: '用户列表',
        affix: true // 为true tag标签不能删除
      },
      component: () => import('@/views/userAdmin/userLIst')
    },
    {
      path: '/user/add',
      name: 'userAdd',
      meta: {
        title: '用户新增'
      },
      component: () => import('@/views/userAdmin/userAdd')
    }
  ]
}
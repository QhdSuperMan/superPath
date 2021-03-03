export default {
  path: '/power',
  name: 'powerAdmin',
  redirect: '/power/list',
  meta: {
    title: '权限管理'
  },
  component: () => import('@/components/twoFather'),
  children: [
    {
      path: '/power/list',
      name: 'powerList',
      meta: {
        title: '权限列表'
      },
      component: () => import('@/views/powerAdmin/powerLIst')
    },
    {
      path: '/power/add',
      name: 'powerAdd',
      meta: {
        title: '权限新增'
      },
      component: () => import('@/views/powerAdmin/powerAdd')
    }
  ]
}
const Layout = () => import('@/layout/index.vue')

export default {
  path: '/base',
  name: 'Base',
  component: Layout,
  redirect: '/base/index',
  meta: {
    title: '基础',
    rank: 2,
  },
  children: [
    {
      path: '/base/index',
      name: 'VModalInComp',
      component: () => import('@/views/base/index.vue'),
      meta: {
        title: '在组件上使用 v-modal',
      },
    },
  ],
}

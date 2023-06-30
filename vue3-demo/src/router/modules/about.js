const Layout = () => import('@/layout/index.vue')

export default {
  path: '/about',
  name: 'About',
  component: Layout,
  meta: {
    title: '关于',
    rank: 99,
  },
  children: [
    {
      path: '/about',
      name: 'About',
      component: () => import('@/views/about/index.vue'),
      meta: {
        title: '在组件上使用 v-modal',
      },
    },
  ],
}

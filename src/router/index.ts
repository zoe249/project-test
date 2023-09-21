import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/point',
      component: () => import('@/views/Point/index.vue'),
    },
    {
      path: '/',
      component: () => import('@/views/Login/index.vue'),
    },
  ],
})

export default router

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
      children: [
        {
          name: 'home',
          path: '',
          meta: {
            keepAlive: false
          },
          component: () => import('@/views/app-home.vue')
        },
        {
          name: 'hello-world',
          path: 'demo/hello-world',
          meta: {
            keepAlive: true
          },
          component: () => import('@/views/demo/hello-world.vue')
        }
      ]
    }
  ]
})

export default router

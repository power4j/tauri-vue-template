import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../layouts/MainLayout.vue'),
      children: [
        {
          name: 'home',
          path: '',
          component: () => import('../views/AppHome.vue')
        },
        {
          name: 'page1',
          path: 'page1',
          component: () => import('../views/AppPage1.vue')
        },
        {
          name: 'page2',
          path: 'page2',
          component: () => import('../views/AppPage2.vue')
        },
        {
          name: 'page3',
          path: 'page3',
          component: () => import('../views/AppPage3.vue')
        }
      ]
    }
  ]
})

export default router

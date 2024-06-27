import { createRouter, createWebHistory } from 'vue-router'
import Default from '../layout/layout-default/index.vue'
import Login from '@/layout/login/index.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Default
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})

export default router

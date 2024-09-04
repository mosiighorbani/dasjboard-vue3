import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Register from '@/pages/auth/Register.vue'
import Login from '@/pages/auth/Login.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'home', component: Home},
    {path: '/auth/register', name: 'register', component: Register},
    {path: '/auth/login', name: 'login', component: Login},
  ]
})

export default router

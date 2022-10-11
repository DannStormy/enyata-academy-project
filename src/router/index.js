import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'landingPage',
    component: () => import('../views/LandingPageView.vue')
  },
  {
    path: '/signup',
    name: 'Sign-Up',
    component: () => import('../views/SignUpView.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

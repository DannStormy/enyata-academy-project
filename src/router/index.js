import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'landingPage',
    component: () => import('../views/user_views/LandingPageView.vue')
  },
  {
    path: '/signup',
    name: 'Sign-Up',
    component: () => import('../views/user_views/SignUpView.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/user_views/LoginView.vue')
  },
  {
    path: '/forgotpassword',
    name: 'ForgotPassword',
    component: () => import('../views/user_views/ForgotPasswordView.vue')
  },
  {
    path: '/applicationform',
    name: 'ApplicationForm',
    component: () => import('../views/user_views/ApplicationForm.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/user_views/Dashboard.vue')
  },
  {
    path: '/admin-login',
    name: 'AdminLogin',
    component: () => import('../views/admin_views/AdminLogin.vue')
  },
  {
    path: '/create-application',
    name: 'CreateApplication',
    component: () => import('../views/admin_views/CreateApplication.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

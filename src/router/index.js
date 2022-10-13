import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/assessment',
    name: 'TakeAssessment',
    component: () => import('../views/TakeAssessment.vue')
  },
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
    path: '/compose-assessment',
    name: 'ComposeAssessment',
    component: () => import('../views/admin_views/ComposeAssessmentView.vue')
  },
  {
    path: '/create-application',
    name: 'CreateApplication',
    component: () => import('../views/admin_views/CreateApplication.vue')
  },
  {
    path: '/assessment-history',
    name: 'AssessmentHistory',
    component: () => import('../views/admin_views/AssessmentHistory.vue')
  },
  {
    path: '/settings',
    name: 'Profile-Settings',
    component: () => import('../views/admin_views/Profile-Settings.vue')
  },
  {
    path: '/questions',
    name: 'QuestionsView',
    component: () => import('../views/QuestionsView.vue')
  },
  {
    path: '/success',
    name: 'SuccessfulView',
    component: () => import('../views/SuccessfulView.vue')
  },
  {
    path: '/admin-dashboard',
    name: 'AdminsDashboard',
    component: () => import('../views/admin_views/AdminDashboard.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
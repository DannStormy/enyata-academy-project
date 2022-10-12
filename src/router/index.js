import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/assessment',
    name: 'TakeAssessment',
    component: ()=> import('../views/TakeAssessment.vue')
  },
  { 
    path:'/',
    name: 'landingPage',
    component: () => import('../views/LandingPageView.vue')
  },
  {
    path:'/dashboard',
    name: 'Dashboard',
    component: ()=> import('../views/Dashboard.vue')
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
  },
  {
    path: '/forgotpassword',
    name: 'ForgotPassword',
    component: () => import('../views/ForgotPasswordView.vue')
  },
  { 
    path:'/questions',
    name: 'QuestionsView',
    component: () => import('../views/QuestionsView.vue')
  },
  { 
    path:'/success',
    name: 'SuccessfulView',
    component: () => import('../views/SuccessfulView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

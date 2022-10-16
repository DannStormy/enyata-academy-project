import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store';
const ifNotAuthenticated = (to, from, next) => {
  store.dispatch('fetchAccessToken');
  if (store.state.user_dashboard.accessToken) {
    next()
    return
  }
  next('/login')
}

const routes = [
  {
    path: '/assessment',
    name: 'TakeAssessment',
    component: () => import('../views/user_views/TakeAssessment.vue')
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
    component: () => import('../views/user_views/LoginView.vue'),
  },
  {
    path: '/forgotpassword',
    name: 'ForgotPassword',
    component: () => import('../views/user_views/ForgotPasswordView.vue')
  },
  {
    path: '/applicationform',
    name: 'ApplicationForm',
    component: () => import('../views/user_views/ApplicationForm.vue'),
    beforeEnter: ifNotAuthenticated
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/user_views/Dashboard.vue'),
    beforeEnter: ifNotAuthenticated
  },
  {
    path: '/admin-login',
    name: 'AdminLogin',
    component: () => import('../views/admin_views/AdminLogin.vue')
  },
  {
    path: '/compose-assessment',
    name: 'ComposeAssessment2',
    component: () => import('../views/admin_views/ComposeAssessment2.vue')
  },
  {
    path: '/application-entries',
    name: 'EntriesBatch',
    component: () => import('../views/admin_views/EntriesBatchView.vue')
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
    component: () => import('../views/user_views/QuestionsView.vue')
  },
  {
    path: '/success',
    name: 'SuccessfulView',
    component: () => import('../views/user_views/SuccessfulView.vue')
  },
  {
    path: '/dash',
    name: 'SideBarEntry',
    component: () => import('../components/SideBarEntry.vue')
  },
  {
    path: '/admin-dashboard',
    name: 'AdminsDashboard',
    component: () => import('../views/admin_views/AdminDashboard.vue')
  },
  {
    path: '/results',
    name: 'ResultsView',
    component: () => import('../views/admin_views/ResultsView.vue')
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


// router.beforeEach((to, from, next) => {
//   store.dispatch('fetchAccessToken')
//   if (to.fullPath === '/dashboard') {
//     if (!store.state.user_dashboard.accessToken) {
//       next({ name: 'Login' })
//       return
//     }
//   }
//   next();
//   return
// });


// export default {
//   computed: {
//     ...mapState(['userToken'])
//   }
// }
export default router

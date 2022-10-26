import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store';

const ifNotAuthenticated = (to, from, next) => {
  store.dispatch('fetchAccessToken');
  if (store.state.user_dashboard.accessToken) {
    next()
    return
  }
  alert('Access Denied')
  next('/login')
}

// const checkAssessmentStatus = (to, from, next) => {
//   if (!store.state.user_dashboard.taken_assessment) {
//     next()
//     return
//   }
//   alert('Assessment already taken for this Batch')
//   next('/dashboard')
// }

const adminAuthenticated = (to, from, next) => {
  store.dispatch('adminAuth');
  if (store.state.admin.adminAuth) {
    next()
    return
  }
  next('/admin-login')
}

const routes = [
  {
    path: '/assessment',
    name: 'TakeAssessment',
    component: () => import('../views/user_views/TakeAssessment.vue'),
    // beforeEnter: checkAssessmentStatus
  },
  {
    path: '/test-result',
    name: 'TestResults',
    component: () => import('../views/admin_views/TestResults.vue'),
    // beforeEnter: checkAssessmentStatus
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
    // beforeEnter: ifNotAuthenticated
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
    name: 'ComposeAssessment',
    component: () => import('../views/admin_views/ComposeAssessment2.vue'),
    beforeEnter: adminAuthenticated

  },
  {
    path: '/create-application',
    name: 'CreateApplication',
    component: () => import('../views/admin_views/CreateApplication.vue'),
    beforeEnter: adminAuthenticated

  },
  {
    path: '/assessment-history',
    name: 'AssessmentHistory',
    component: () => import('../views/admin_views/AssessmentHistory.vue'),
    beforeEnter: adminAuthenticated

  },
  {
    path: '/settings',
    name: 'Profile-Settings',
    component: () => import('../views/admin_views/Profile-Settings.vue'),
    beforeEnter: adminAuthenticated

  },
  {
    path: '/questions',
    name: 'QuestionsView',
    component: () => import('../views/user_views/QuestionsView.vue'),
    // beforeEnter: checkAssessmentStatus
  },
  {
    path: '/success',
    name: 'SuccessfulView',
    component: () => import('../views/user_views/SuccessfulView.vue')
  },
  {
    path: '/admin-dashboard',
    name: 'AdminsDashboard',
    component: () => import('../views/admin_views/AdminDashboard.vue'),
    beforeEnter: adminAuthenticated
  },
  {
    path: '/results',
    name: 'ResultsView',
    component: () => import('../views/admin_views/ResultsView.vue'),
    beforeEnter: adminAuthenticated

  },
  {
    path: '/application-entries',
    name: 'EntriesBatchView',
    component: () => import('../views/admin_views/EntriesBatchView.vue'),
    beforeEnter: adminAuthenticated

  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

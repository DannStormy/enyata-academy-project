import { createRouter, createWebHistory } from 'vue-router'

import TakeAssessment from "@/views/TakeAssessment.vue"

const routes = [
  {
    path: '/',
    name: 'TakeAssessment',
    component: TakeAssessment
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

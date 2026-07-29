import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CrossHeatView from '@/views/CrossHeatView.vue'
import FaqView from '@/views/FaqView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cross-heat',
    name: 'cross-heat',
    component: CrossHeatView
  },
  {
    path: '/entreprise',
    name: 'entreprise',
    component: () => import('@/views/EntrepriseView.vue')
  },
  {
    path: '/territoire',
    name: 'territoire',
    component: () => import('@/views/TerritoireView.vue')
  },
  {
    path: '/mentions-legales',
    name: 'mentions-legales',
    component: () => import('@/views/MentionsLegalesView.vue')
  },
  {
    path: '/plan-du-site',
    name: 'plan-du-site',
    component: () => import('@/views/PlanDuSiteView.vue')
  },
  {
    path: '/politique-de-confidentialite',
    name: 'politique-de-confidentialite',
    component: () => import('@/views/PolitiqueConfidentialiteView.vue')
  },
  {
    path: '/faq',
    name: 'faq',
    component: FaqView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

export default router

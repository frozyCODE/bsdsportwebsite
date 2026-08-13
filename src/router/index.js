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
    path: '/stepp-training',
    name: 'stepp-training',
    component: () => import('@/views/SteppView.vue')
  },
  {
    path: '/combat',
    name: 'combat',
    component: () => import('@/views/CombatView.vue')
  },
  {
    path: '/omnisport-outdoor',
    name: 'omnisport-outdoor',
    component: () => import('@/views/OutdoorView.vue')
  },
  {
    path: '/particuliers',
    name: 'particuliers',
    component: () => import('@/views/ParticuliersView.vue')
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
    }
    // Si la page est rafraîchie directement (pas de navigation inter-route 'from.name'), nettoyer le hash et revenir en haut
    if (!from.name && to.hash) {
      if (window.location.hash) {
        window.history.replaceState(null, null, window.location.pathname)
      }
      return { top: 0, left: 0 }
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0, left: 0 }
  }
})

export default router

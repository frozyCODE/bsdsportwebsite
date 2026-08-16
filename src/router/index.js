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
    path: '/horizon-sport',
    name: 'horizon-sport',
    component: () => import('@/views/HorizonView.vue')
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
    // Si la route change (page différente), aller tout en haut de la page sélectionnée (top: 0)
    if (to.path !== from.path) {
      return { top: 0, left: 0 }
    }
    // Ancre interne sur la même page
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0, left: 0 }
  }
})

// Forcer le retour tout en haut de la page sélectionnée à chaque changement de page
router.afterEach((to, from) => {
  if (to.path !== from.path) {
    if (window.__lenis__) {
      window.__lenis__.scrollTo(0, { immediate: true })
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }
})

export default router

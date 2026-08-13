<template>
  <div ref="sectionRef" id="partenaires" class="relative py-16 sm:py-24 border-t border-white/10">
    
    <div class="max-w-6xl mx-auto px-4 sm:px-8">
      
      <!-- Section Header -->
      <div
        class="text-center mb-10 sm:mb-14 transition-all duration-1000 transform ease-out"
        :class="isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <!-- Pill Tag -->
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111111] border border-white/15 text-white/80 font-display text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-4 shadow-sm">
          <span>ILS NOUS FONT CONFIANCE</span>
        </div>

        <h3 class="font-display text-3xl sm:text-5xl uppercase tracking-tight text-white mb-3 leading-none">
          NOS PARTENAIRES
        </h3>
        <p class="text-xs sm:text-sm text-white/60 font-body max-w-xl mx-auto">
          Institutions, collectivités, fondations et entreprises engagées à nos côtés.
        </p>
      </div>

      <!-- Pro & Sober Partners Grid avec Animation Bi-directionnelle au Scroll & Logos en Filigrane Grisé -->
      <div class="partners-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        <a
          v-for="partner in partnersWithDelay"
          :key="partner.name"
          :href="partner.url !== '#' ? partner.url : undefined"
          :target="partner.url !== '#' ? '_blank' : undefined"
          rel="noopener noreferrer"
          @click="handlePartnerClick(partner, $event)"
          :style="{ transitionDelay: partner.delay + 's' }"
          :class="[
            'partner-tile group relative overflow-hidden p-4 sm:p-5 rounded-2xl bg-[#111111] border border-white/10 cursor-pointer flex flex-col justify-between transform h-28 sm:h-36',
            isRevealed ? 'opacity-100 translate-y-0 scale-100 rotate-0' : 'opacity-0 translate-y-12 scale-90 -rotate-1'
          ]"
        >
          <!-- Logo en filigrane d'arrière-plan grisé en haut à droite -->
          <img 
            v-if="partner.logo"
            :src="partner.logo" 
            :alt="partner.name" 
            class="absolute -top-2 -right-2 w-24 h-24 sm:w-32 sm:h-32 object-contain p-2 opacity-30 filter grayscale brightness-125 contrast-125 group-hover:opacity-95 group-hover:grayscale-0 group-hover:brightness-150 group-hover:scale-110 transition-all duration-500 pointer-events-none z-0"
          />

          <!-- Top Row: Category & Link Arrow -->
          <div class="flex items-center justify-between relative z-10">
            <span class="text-[10px] font-body uppercase tracking-wider text-white/50 group-hover:text-white transition-colors duration-300 font-medium">
              {{ partner.category }}
            </span>
            <span v-if="partner.url && partner.url !== '#'" class="text-xs text-white/50 group-hover:text-[#ff7043] transition-colors duration-300 font-mono">
              ↗
            </span>
          </div>

          <!-- Nom du Partenaire superposé -->
          <div class="relative z-10 mt-auto">
            <h4 class="font-display text-xs sm:text-sm uppercase text-white group-hover:text-[#ff7043] transition-colors duration-300 leading-tight drop-shadow-md">
              {{ partner.name }}
            </h4>
          </div>
        </a>
      </div>

    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useUiStore } from '@/stores/uiStore'

const uiStore = useUiStore()
const sectionRef = ref(null)
const isRevealed = ref(false)
let observer = null

function handlePartnerClick(partner, event) {
  if (!partner.url || partner.url === '#') {
    event?.preventDefault()
  }
}

// Délais étalés dynamiques pour une apparition galerie photo élégante
const delays = [0.08, 0.42, 0.18, 0.55, 0.28, 0.10, 0.62, 0.22, 0.48, 0.14, 0.35, 0.58]

const rawPartners = [
  { name: "Prefet de l'Isere", category: 'Institution', url: 'https://www.isere.gouv.fr/', logo: '/logo-partenaires/logo-prefecture.png' },
  { name: "France Travail", category: 'Institution', url: 'https://www.francetravail.fr/' },
  { name: "Grenoble Alpes Metropole", category: 'Collectivite', url: 'https://www.grenoblealpesmetropole.fr/', logo: '/logo-partenaires/logo-grenoble-alpes.png' },
  { name: "Ville de Pont-de-Claix", category: 'Ville', url: 'https://www.pontdeclaix.fr/', logo: '/logo-partenaires/VillePontdeClaix.png' },
  { name: "Fondation Decathlon", category: 'Fondation', url: 'https://www.fondationdecathlon.com/', logo: '/logo-partenaires/logo-decathlon.png' },
  { name: "CAF Isere", category: 'Institution', url: 'https://www.caf.fr/allocataires/caf-de-l-isere', logo: '/logo-partenaires/logo-caf.png' },
  { name: 'HB38', category: 'Entreprise', url: '#' },
  { name: 'Crousti Satai', category: 'Entreprise', url: 'https://www.instagram.com/crousti.satai/?hl=fr' },
  { name: 'LCMI', category: 'Entreprise', url: '#' },
  { name: 'Street-Fight', category: 'Partenaire', url: 'https://street-fight-shop.com/', logo: '/logo-partenaires/logo-streetfight.png' },
  { name: 'GUC Formation', category: 'Formation', url: 'https://formation.guc.asso.fr/', logo: '/logo-partenaires/logo-guc.png' },
  { name: 'La Petite Poussee', category: 'Association', url: 'https://lapetitepoussee.com/' },
  { name: 'Ass. Familiale St-Egreve', category: 'Social', url: 'https://www.af-st-egreve.org/' }
]

const partnersWithDelay = rawPartners.map((p, idx) => ({
  ...p,
  delay: delays[idx % delays.length]
}))

onMounted(() => {
  if (typeof IntersectionObserver !== 'undefined' && sectionRef.value) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isRevealed.value = entry.isIntersecting
        })
      },
      { threshold: 0.15 }
    )
    observer.observe(sectionRef.value)
  } else {
    isRevealed.value = true
  }
})

onUnmounted(() => {
  if (observer && sectionRef.value) {
    observer.unobserve(sectionRef.value)
  }
})
</script>

<style scoped>
.partner-tile {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.3s ease,
              background-color 0.3s ease,
              border-color 0.3s ease,
              box-shadow 0.3s ease;
  will-change: opacity, transform;
}

/* Survol monochrome élégant, sobre et sans couleur */
.partner-tile:hover {
  transform: translateY(-3px) !important;
  border-color: rgba(255, 255, 255, 0.35) !important;
  background-color: #1a1a1a !important;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.6) !important;
}
</style>

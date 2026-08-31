<template>
  <div class="min-h-screen bg-[#080808] text-[#F1E7D0] relative overflow-x-hidden font-body select-none flex flex-col justify-between">
    
    <!-- Texture de Grain Argentique Brutaliste -->
    <div 
      class="fixed inset-0 z-0 opacity-25 mix-blend-overlay pointer-events-none bg-repeat"
      style="background-image: url('data:image/svg+xml,%3Csvg width=\'256\' height=\'256\' viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'heavyGrain\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.95\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23heavyGrain)\'/%3E%3C/svg%3E');"
      aria-hidden="true"
    ></div>

    <!-- Glow Orange Subtil -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[500px] bg-[#ff7043]/15 blur-[170px] pointer-events-none z-0"></div>

    <!-- Header Navigation Globale -->
    <NavbarHeader />

    <!-- BOUTON RETOUR EN HAUT À DROITE -->
    <div class="pt-24 sm:pt-28 px-6 sm:px-12 max-w-7xl mx-auto flex justify-end relative z-20 w-full">
      <router-link 
        to="/" 
        class="inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#111111] border border-white/15 text-white/80 hover:text-white hover:border-white/40 transition-all duration-300 shadow-lg"
        title="Retour aux univers"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </router-link>
    </div>

    <!-- MAIN CARROUSEL HYPER DYNAMIQUE DEFILEMENT INFINI -->
    <main class="relative z-10 my-auto py-12 sm:py-20 w-full overflow-hidden space-y-12">
      
      <!-- Titre d'en-tête de Carrousel Nette -->
      <div class="text-center max-w-4xl mx-auto px-6 space-y-3">
        <div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#111111] border border-white/15 text-[#ff7043] font-display text-[10px] sm:text-xs uppercase tracking-[0.2em] shadow-xl backdrop-blur-md font-bold">
          <span class="w-2 h-2 rounded-full bg-[#ff7043] animate-pulse"></span>
          <span>DISCIPLINES ENTRAINEMENTS DE GROUPE</span>
        </div>
        <h1 class="font-display text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-tight drop-shadow-2xl">
          SPORTS <span class="chrome-silver-text text-[#ff7043]">COLLECTIFS</span>
        </h1>
      </div>

      <!-- CARROUSEL SANS HOVER AVEC DÉFILLEMENT CONTINU INFINI ET FLÈCHES -->
      <div class="relative w-full overflow-hidden">
        
        <!-- Track de défillement infini en CSS continu -->
        <div class="marquee-track flex gap-6 sm:gap-8 w-max">
          <!-- Duplication x3 des cartes pour assurer la continuité infinie sans coupure -->
          <div 
            v-for="(sport, index) in sportsQuad" 
            :key="index"
            class="w-[320px] sm:w-[380px] lg:w-[420px] shrink-0 rounded-3xl overflow-hidden border border-white/15 bg-[#111111] p-6 sm:p-8 flex flex-col justify-between h-[520px] sm:h-[560px] shadow-2xl relative"
          >
            <!-- Background Image -->
            <img 
              :src="sport.image" 
              :alt="sport.title" 
              class="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/35 pointer-events-none"></div>

            <!-- Top Tag -->
            <div class="relative z-10 flex items-center justify-between">
              <span class="px-3.5 py-1 rounded-full bg-black/80 border border-white/20 text-[#ff7043] font-display text-[10px] sm:text-xs uppercase font-bold backdrop-blur-md">
                {{ sport.badge }}
              </span>
            </div>

            <!-- Infos Contenu Complètes (Affichées directement sans besoin de retourner ou toucher) -->
            <div class="relative z-10 space-y-4">
              <h2 class="font-display text-2xl sm:text-3xl text-white uppercase tracking-tight leading-none drop-shadow-md">
                {{ sport.title }}
              </h2>
              
              <p class="text-xs sm:text-sm text-white/80 font-body leading-relaxed">
                {{ sport.fullDesc }}
              </p>

              <!-- Lieu & Adresse -->
              <div class="p-3 rounded-2xl bg-black/60 border border-white/15 backdrop-blur-md space-y-1">
                <span class="text-[10px] font-display uppercase tracking-widest text-[#ff7043] font-bold block">📍 {{ sport.location }}</span>
                <p class="text-[11px] text-white/70">{{ sport.address }}</p>
              </div>

              <!-- Horaires -->
              <div class="p-3 rounded-2xl bg-black/60 border border-white/15 backdrop-blur-md space-y-1">
                <span class="text-[10px] font-display uppercase tracking-widest text-[#ff7043] font-bold block">⏰ CRÉNEAUX</span>
                <ul class="space-y-1 text-xs text-white font-body">
                  <li v-for="(h, idx) in sport.schedules" :key="idx" class="flex justify-between">
                    <span class="font-bold text-white/90">{{ h.day }} :</span>
                    <span class="text-[#ff7043] font-display font-bold">{{ h.time }}</span>
                  </li>
                </ul>
              </div>

              <!-- CTA Bouton vers Page Dédiée -->
              <div class="pt-2">
                <router-link 
                  :to="sport.route"
                  class="block w-full text-center py-3 rounded-full bg-[#ff7043] text-black font-display text-xs uppercase tracking-wider font-bold shadow-xl transition-colors"
                >
                  DECOUVRIR LA PAGE DEDIEE →
                </router-link>
              </div>
            </div>

          </div>
        </div>

      </div>

    </main>

    <!-- Footer universel -->
    <SiteFooter class="border-t border-white/10 relative z-10" />

  </div>
</template>

<script setup>
import { computed } from 'vue'
import NavbarHeader from '@/components/common/NavbarHeader.vue'
import SiteFooter from '@/components/common/SiteFooter.vue'

const sportsCollectifsData = [
  {
    id: 'omnisport',
    route: '/omnisport-outdoor',
    title: 'OMNISPORTS',
    badge: 'MULTISPORTS',
    image: '/omnisport.jpeg',
    fullDesc: 'Priorité aux sports de ballon (lundi) et aux sports de raquette avec stretching (mardi).',
    location: 'Gymnase Malik Cherchari',
    address: '28 Rue des Cités Mon Logis, 38800 Pont de Claix',
    schedules: [
      { day: 'Lundi (Futsal / Basket)', time: '19h00 - 20h30' },
      { day: 'Mardi (Badminton / Stretch)', time: '19h00 - 20h30' }
    ]
  },
  {
    id: 'crossheat',
    route: '/cross-heat',
    title: 'CROSS HEAT & STEPP',
    badge: 'CARDIO & RENFO',
    image: '/crossheat.jpeg',
    fullDesc: 'Combinaison de WODs Cross Training, Haltérophilie et Stepp Cardio intense.',
    location: 'Parc Auguste Borel',
    address: 'Montée Georges Tord, 38800 Pont de Claix',
    schedules: [
      { day: 'Jeudi (Adultes Mixte)', time: '19h30 - 20h30' },
      { day: 'Dimanche (100% Femmes)', time: '11h00 - 12h00' }
    ]
  },
  {
    id: 'combat',
    route: '/combat',
    title: 'SPORTS DE COMBAT',
    badge: 'BOXE & GRAPPLING',
    image: '/dojo.jpeg',
    fullDesc: 'Boxe anglaise, grappling et self-défense encadrés par des éducateurs diplômés d\'État.',
    location: 'Complexe Malik Cherchari',
    address: '28 Rue des Cités Mon Logis, 38800 Pont de Claix',
    schedules: [
      { day: 'Lundi (Libre / Tech)', time: '20h30 - 22h00' },
      { day: 'Vendredi (Sparring / Tech)', time: '20h00 - 22h00' }
    ]
  },
  {
    id: 'aquatraining',
    route: '/aquatraining',
    title: 'AQUA-TRAINING',
    badge: 'SESSION MENSUELLE',
    image: '/piscine.jpeg',
    fullDesc: 'Aquabike, renforcement musculaire aquatique et natation pour un entraînement complet.',
    location: 'Piscine Flotibulle',
    address: 'Rue de la Liberté, 38800 Pont de Claix',
    schedules: [
      { day: '1 Dimanche / Mois', time: '09h00 - 10h30' }
    ]
  }
]

// Quadruplication des données pour le carrousel infini fluide sans trou
const sportsQuad = computed(() => [
  ...sportsCollectifsData,
  ...sportsCollectifsData,
  ...sportsCollectifsData,
  ...sportsCollectifsData
])
</script>

<style scoped>
/* Animation de défillement continu hyper dynamique et fluide */
.marquee-track {
  animation: infiniteMarquee 28s linear infinite;
  will-change: transform;
}

@keyframes infiniteMarquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>

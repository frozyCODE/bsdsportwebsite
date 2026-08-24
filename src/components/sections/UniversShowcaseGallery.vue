<template>
  <section class="relative bg-[#0d0d0d] text-[#F1E7D0] font-body select-none overflow-hidden">
    
    <!-- Texture de Grain Argentique Global -->
    <div 
      class="fixed inset-0 z-10 opacity-25 mix-blend-overlay pointer-events-none bg-repeat"
      style="background-image: url('data:image/svg+xml,%3Csvg width=\'256\' height=\'256\' viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'heavyGrain\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.95\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23heavyGrain)\'/%3E%3C/svg%3E');"
      aria-hidden="true"
    ></div>

    <!-- EN-TÊTE DE PRESENTATION DES UNIVERS -->
    <div class="relative z-20 pt-28 pb-12 px-4 sm:px-8 text-center max-w-4xl mx-auto space-y-4">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111111] border border-white/15 text-white/80 font-display text-[10px] sm:text-xs uppercase tracking-[0.2em] shadow-sm">
        <span>LES 4 UNIVERS BSD SPORT</span>
      </div>

      <h1 class="font-display text-3xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-none">
        PLONGEZ DANS <br />
        <span class="text-[#ff7043]">NOS TERRAINS DE JEU</span>
      </h1>

      <p class="text-xs sm:text-base text-white/70 font-body max-w-xl mx-auto leading-relaxed">
        Découvrez nos 4 univers sportifs à travers des visuels authentiques et réalisez votre réservation.
      </p>
    </div>

    <!-- BARRE DE NAVIGATION STICKY DES 4 UNIVERS -->
    <div class="sticky top-20 z-40 max-w-3xl mx-auto px-4 mb-8">
      <div class="p-2 rounded-full bg-[#111111]/90 backdrop-blur-xl border border-white/20 flex items-center justify-between shadow-2xl">
        <button 
          v-for="(u, idx) in universList" 
          :key="u.id"
          @click="scrollToUnivers(u.id)"
          class="flex-1 text-center py-2 sm:py-2.5 px-2 rounded-full font-display text-[10px] sm:text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer"
          :class="activeUniversId === u.id ? 'bg-white text-black font-bold shadow-xl scale-105' : 'text-white/60 hover:text-white'"
        >
          <span 
            class="w-2 h-2 rounded-full transition-all"
            :class="activeUniversId === u.id ? 'bg-[#ff7043]' : 'bg-white/30'"
          ></span>
          <span class="truncate">0{{ idx + 1 }}. {{ u.shortTitle }}</span>
        </button>
      </div>
    </div>

    <!-- LES 4 UNIVERS EN IMMERSION PHOTO NATURELLE SANS COLORIMÉTRIE SATUREE -->
    <div class="relative z-20 space-y-0">
      
      <div 
        v-for="(u, index) in universList" 
        :key="u.id"
        :id="u.id"
        class="univers-fullscreen-section relative w-full min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-12 py-20 scroll-mt-0 overflow-hidden"
      >
        <!-- IMAGE DE FOND COULEUR NATURELLE NETTE -->
        <div class="absolute inset-0 z-0">
          <img 
            :src="activePhotos[u.id] || u.gallery[0]" 
            :alt="u.title" 
            class="w-full h-full object-cover brightness-90 transition-all duration-700 transform scale-105"
          />
          <!-- Dégradé sombre propre pour la lisibilité -->
          <div class="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-black/40 to-black/60"></div>
          <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/60"></div>
        </div>

        <!-- WATERMARK DISCRET EN FOND (Akira font - SANS ACCENT) -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-10 opacity-10 select-none overflow-hidden">
          <span class="font-display text-[12vw] sm:text-[14vw] uppercase tracking-tighter text-white whitespace-nowrap leading-none">
            0{{ index + 1 }} {{ u.watermarkText }}
          </span>
        </div>

        <!-- CONTENU FLOTTANT ÉPURÉ (CARTE SOMBRE NORMALE) -->
        <div class="max-w-6xl w-full mx-auto relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          
          <!-- FICHE ÉDITORIALE GAUCHE -->
          <div class="lg:col-span-7 bg-[#111111]/90 backdrop-blur-xl border border-white/15 p-6 sm:p-10 lg:p-12 rounded-3xl sm:rounded-[36px] shadow-2xl space-y-6">
            
            <div class="space-y-3">
              <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-white font-display text-[10px] uppercase tracking-widest">
                <span class="w-2 h-2 rounded-full bg-[#ff7043]"></span>
                <span>UNIVERS 0{{ index + 1 }} · {{ u.categoryBadge }}</span>
              </div>

              <h2 class="font-display text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-none">
                {{ u.title }}
              </h2>

              <p class="text-xs sm:text-base text-white/80 font-body leading-relaxed max-w-xl">
                {{ u.description }}
              </p>
            </div>

            <!-- Disciplines incluses -->
            <div class="space-y-2 pt-2 border-t border-white/10">
              <span class="text-[10px] font-display uppercase tracking-wider text-white/50 block">Disciplines regroupees</span>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="sport in u.sports" 
                  :key="sport"
                  class="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 text-white text-xs font-medium font-body"
                >
                  • {{ sport }}
                </span>
              </div>
                 <!-- Boutons d'Action CTA -->
            <div class="pt-4 flex flex-wrap gap-4 items-center">
              <a 
                href="#contact-particuliers" 
                @click.prevent="scrollToContact"
                class="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#ff7043] hover:bg-white text-black font-display text-xs uppercase tracking-wider shadow-2xl transition-all duration-300 group"
              >
                <span>REJOINDRE LE CLUB</span>
                <span class="transition-transform group-hover:translate-x-1">→</span>
              </a>

              <router-link 
                v-if="u.link"
                :to="u.link"
                class="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-display text-xs uppercase tracking-wider transition-all duration-300"
              >
                <span>PAGE DEDIEE ↗</span>
              </router-link>
            </div>

          </div>

          <!-- GALERIE DES 3 VIGNETTES PHOTO EN BORDURE DROITE -->
          <div class="lg:col-span-5 flex flex-col gap-3 justify-end">
            <span class="text-xs font-display uppercase tracking-widest text-white/70 block pl-1">
              PHOTOS NATURELLES DU CLUB
            </span>

            <div class="grid grid-cols-3 gap-3">
              <button
                v-for="(img, i) in u.gallery"
                :key="i"
                @click="changePhoto(u.id, img)"
                :class="[
                  'h-24 sm:h-32 rounded-2xl overflow-hidden border-2 transition-all duration-300 relative cursor-pointer group shadow-xl',
                  activePhotos[u.id] === img || (!activePhotos[u.id] && i === 0)
                    ? 'border-[#ff7043] scale-105 ring-2 ring-[#ff7043]/50' 
                    : 'border-white/20 opacity-70 hover:opacity-100'
                ]"
              >
                <img :src="img" alt="" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'

const activeUniversId = ref('u-cross-heat')
const activePhotos = reactive({})

const universList = [
  {
    id: 'u-cross-heat',
    shortTitle: 'CROSS HEAT',
    watermarkText: 'CROSS HEAT',
    categoryBadge: 'FORCE ET CONDITIONING',
    title: 'CROSS HEAT ET PREPARATION',
    description: 'Immersion totale dans le Cross Training. Haltérophilie, gymnastique et WODs collectifs intenses sur le campus pour repousser vos limites.',
    sports: ['Cross Training', 'WOD Collectif', 'Haltérophilie', 'Gainage Core'],
    link: '/cross-heat',
    gallery: [
      '/crossheat.jpeg',
      '/crossheat1.JPG',
      '/crossheat2.JPG'
    ]
  },
  {
    id: 'u-stepp-training',
    shortTitle: 'STEPP TRAINING',
    watermarkText: 'STEPP CARDIO',
    categoryBadge: 'CARDIO ET FIT',
    title: 'STEPP ET PERFORMANCE CARDIO',
    description: 'Musique, rythme et haute dépense calorique. Des cours collectifs stimulants pour renforcer le bas du corps et sculpter votre silhouette.',
    sports: ['Stepp Performance', 'Cardio Fitness', 'Renforcement Cuisses-Fessiers'],
    gallery: [
      '/stepp.png',
      '/stepman.png',
      '/coach.png'
    ]
  },
  {
    id: 'u-combat',
    shortTitle: 'COMBAT & BOXE',
    watermarkText: 'COMBAT BOXE',
    categoryBadge: 'MAITRISE ET DISCIPLINE',
    title: 'SPORTS DE COMBAT',
    description: 'Boxe anglaise, arts martiaux et self-défense. Maîtrise des frappes, vitesse et résistance physique sous la direction de coachs diplômés.',
    sports: ['Boxe Anglaise', 'Arts Martiaux', 'Self-Défense', 'Kick Training'],
    gallery: [
      '/dojo.jpeg',
      '/art-martiaux.webp',
      '/boxe-emoji.png'
    ]
  },
  {
    id: 'u-omnisport-outdoor',
    shortTitle: 'OMNISPORTS',
    watermarkText: 'OMNISPORTS',
    categoryBadge: 'NATURE ET AVENTURE',
    title: 'OMNISPORTS',
    description: 'Escalade de bloc, VTT et sorties outdoor. Une pratique variée au cœur des paysages alpins grenoblois.',
    sports: ['Escalade Bloc', 'VTT & Trail Isère', 'Omnisports'],
    gallery: [
      '/omnisport.jpeg',
      '/montagne.jpg',
      '/escalade.png'
    ]
  }
]

universList.forEach(u => {
  activePhotos[u.id] = u.gallery[0]
})

function changePhoto(uId, img) {
  activePhotos[uId] = img
}

function scrollToUnivers(id) {
  activeUniversId.value = id
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

function scrollToContact() {
  const el = document.getElementById('contact-particuliers') || document.getElementById('contact')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

function handleScrollObserver() {
  const ids = ['u-cross-heat', 'u-stepp-training', 'u-combat', 'u-omnisport-outdoor']
  for (const id of ids) {
    const el = document.getElementById(id)
    if (el) {
      const rect = el.getBoundingClientRect()
      if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.3) {
        activeUniversId.value = id
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScrollObserver, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScrollObserver)
})
</script>

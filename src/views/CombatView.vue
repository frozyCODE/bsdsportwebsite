<template>
  <div 
    @wheel="handleWheel"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
    class="fixed inset-0 w-screen h-screen bg-[#080808] text-white overflow-hidden font-body select-none z-50"
  >
    
    <!-- Texture Grain Argentique Brutaliste -->
    <div 
      class="fixed inset-0 z-30 opacity-40 mix-blend-overlay pointer-events-none bg-repeat"
      style="background-image: url('data:image/svg+xml,%3Csvg width=\'256\' height=\'256\' viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'heavyGrain\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.95\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23heavyGrain)\'/%3E%3C/svg%3E');"
      aria-hidden="true"
    ></div>

    <!-- Léger dégradé noir vers transparent de haut vers le bas -->
    <div class="fixed top-0 inset-x-0 h-40 bg-gradient-to-b from-black/60 via-black/20 to-transparent pointer-events-none z-40"></div>

    <!-- Header du site principal -->
    <NavbarHeader />

    <!-- Bouton Retour Flottant en Haut à Droite -->
    <div class="fixed top-20 sm:top-24 right-4 sm:right-8 z-50">
      <router-link 
        to="/particuliers" 
        class="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2.5 rounded-full bg-black/80 hover:bg-[#ff7043] border border-white/20 text-white hover:text-black font-display text-[10px] sm:text-xs uppercase tracking-widest transition-all duration-300 font-bold backdrop-blur-xl shadow-2xl group cursor-pointer"
      >
        <span class="transition-transform group-hover:-translate-x-1">←</span>
        <span>RETOUR</span>
      </router-link>
    </div>

    <!-- CONTENEUR SCROLL HORIZONTAL : IMAGE FIGHTING.PNG EN ARRIÈRE-PLAN PLEIN ÉCRAN -->
    <div 
      ref="scrollTrackRef"
      class="fixed inset-0 z-10 w-full h-full overflow-x-auto overflow-y-hidden scrollbar-none flex items-center justify-start cursor-grab active:cursor-grabbing"
    >
      <div class="relative h-screen flex items-center shrink-0">
        
        <!-- Image Combat lumineuse naturelle 100vh h-screen -->
        <img 
          src="/fighting.png" 
          alt="Sports de Combat & Maîtrise BSD Sport" 
          class="h-screen w-auto max-w-none object-cover brightness-105 contrast-105 block shrink-0"
        />

      </div>
    </div>

    <!-- TEXTE CENTRÉ FLOTTANT QUI TRANSITIONNE SANS FLICKER (01: DÉBUT, 02: MILIEU, 03: FIN) -->
    <div class="fixed inset-0 z-20 pointer-events-none flex items-center justify-center">
      <transition name="fade-slide" mode="out-in">
        
        <!-- Section 1 : DÉBUT -->
        <div 
          v-if="currentIndex === 0" 
          key="sec-combat-0"
          class="flex flex-col items-center justify-center text-center px-4 sm:px-12 space-y-4 sm:space-y-6 pointer-events-auto max-w-5xl"
        >
          <span class="px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-black/60 border border-white/20 text-[#ff7043] font-display text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold backdrop-blur-md shadow-xl">
            01 // SPORTS DE COMBAT & MAITRISE
          </span>
          <h1 class="font-display text-2xl xs:text-3xl sm:text-6xl lg:text-7xl xl:text-8xl text-white uppercase tracking-tight leading-tight sm:leading-none drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)] max-w-xs xs:max-w-md sm:max-w-5xl">
            LOREM IPSUM DOLOR SIT AMET
          </h1>
          <p class="text-xs sm:text-xl text-white font-body max-w-xs sm:max-w-2xl leading-relaxed drop-shadow-[0_4px_15px_rgba(0,0,0,0.95)]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <!-- Section 2 : MILIEU -->
        <div 
          v-else-if="currentIndex === 1" 
          key="sec-combat-1"
          class="flex flex-col items-center justify-center text-center px-4 sm:px-12 space-y-4 sm:space-y-6 pointer-events-auto max-w-5xl"
        >
          <span class="px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-black/60 border border-white/20 text-[#ff7043] font-display text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold backdrop-blur-md shadow-xl">
            02 // DISCIPLINE & PERFORMANCE
          </span>
          <h2 class="font-display text-2xl xs:text-3xl sm:text-6xl lg:text-7xl xl:text-8xl text-white uppercase tracking-tight leading-tight sm:leading-none drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)] max-w-xs xs:max-w-md sm:max-w-5xl">
            CONSECTETUR ADIPISCING ELIT
          </h2>
          <p class="text-xs sm:text-xl text-white font-body max-w-xs sm:max-w-2xl leading-relaxed drop-shadow-[0_4px_15px_rgba(0,0,0,0.95)]">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>

        <!-- Section 3 : FIN -->
        <div 
          v-else-if="currentIndex === 2" 
          key="sec-combat-2"
          class="flex flex-col items-center justify-center text-center px-4 sm:px-12 space-y-4 sm:space-y-6 pointer-events-auto max-w-5xl"
        >
          <span class="px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-black/60 border border-white/20 text-[#ff7043] font-display text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold backdrop-blur-md shadow-xl">
            03 // RING & OCTOGONE BSD
          </span>
          <h2 class="font-display text-2xl xs:text-3xl sm:text-6xl lg:text-7xl xl:text-8xl text-white uppercase tracking-tight leading-tight sm:leading-none drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)] max-w-xs xs:max-w-md sm:max-w-5xl">
            MAGNA ALIQUA & COMBAT
          </h2>
          <p class="text-xs sm:text-xl text-white font-body max-w-xs sm:max-w-2xl leading-relaxed drop-shadow-[0_4px_15px_rgba(0,0,0,0.95)]">
            Sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus.
          </p>
        </div>

      </transition>
    </div>

    <!-- CONTROLEUR DE NAVIGATION EN BAS UNIQUE ET STABLE -->
    <div class="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 sm:gap-3 p-1.5 sm:p-2 rounded-full bg-black/85 border border-white/20 backdrop-blur-2xl shadow-2xl">
      
      <!-- Bouton Précédent -->
      <button 
        @click="goToPrev"
        :disabled="currentIndex === 0"
        aria-label="Section précédente"
        class="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 cursor-pointer active:scale-90"
        :class="currentIndex === 0 ? 'bg-white/5 text-white/20 cursor-not-allowed' : 'bg-white/10 hover:bg-[#ff7043] text-white hover:text-black'"
      >
        ←
      </button>

      <!-- Compteur 01 / 03 -->
      <div class="px-3 py-1 flex items-center gap-1.5 text-white font-display text-[10px] sm:text-xs tracking-wider uppercase font-bold select-none">
        <span class="text-[#ff7043]">0{{ currentIndex + 1 }}</span>
        <span class="text-white/30">/</span>
        <span class="text-white/50">03</span>
      </div>

      <!-- Bouton Suivant -->
      <button 
        @click="goToNext"
        :disabled="currentIndex === 2"
        aria-label="Section suivante"
        class="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-display text-[10px] sm:text-xs uppercase tracking-wider font-bold shadow-lg flex items-center gap-2 transition-all duration-300 cursor-pointer active:scale-95 group"
        :class="currentIndex === 2 ? 'bg-white/10 text-white/30 cursor-not-allowed' : 'bg-[#ff7043] hover:bg-white text-black'"
      >
        <span>SUIVANT</span>
        <span class="text-sm font-bold transition-transform group-hover:translate-x-1">→</span>
      </button>

    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import NavbarHeader from '@/components/common/NavbarHeader.vue'

const scrollTrackRef = ref(null)
const currentIndex = ref(0)

let targetScrollLeft = 0
let currentScrollLeft = 0
let animFrameId = null

// Tactical Touch variables
let touchStartX = 0
let touchEndX = 0

onMounted(() => {
  if (scrollTrackRef.value) {
    scrollTrackRef.value.scrollLeft = 0
    targetScrollLeft = 0
    currentScrollLeft = 0
  }
  startSmoothScrollLoop()
})

onUnmounted(() => {
  if (animFrameId) {
    cancelAnimationFrame(animFrameId)
  }
})

function getMaxScroll() {
  if (!scrollTrackRef.value) return 0
  return scrollTrackRef.value.scrollWidth - scrollTrackRef.value.clientWidth
}

function updateScrollToIndex(idx) {
  const maxScroll = getMaxScroll()
  if (idx === 0) {
    targetScrollLeft = 0
  } else if (idx === 1) {
    targetScrollLeft = maxScroll / 2
  } else if (idx === 2) {
    targetScrollLeft = maxScroll
  }
}

function goToNext() {
  if (currentIndex.value < 2) {
    currentIndex.value++
    updateScrollToIndex(currentIndex.value)
  }
}

function goToPrev() {
  if (currentIndex.value > 0) {
    currentIndex.value--
    updateScrollToIndex(currentIndex.value)
  }
}

function startSmoothScrollLoop() {
  const updateScroll = () => {
    if (scrollTrackRef.value) {
      const maxScroll = getMaxScroll()
      targetScrollLeft = Math.max(0, Math.min(targetScrollLeft, maxScroll))
      
      // LERP (Linear Interpolation)
      currentScrollLeft += (targetScrollLeft - currentScrollLeft) * 0.08
      scrollTrackRef.value.scrollLeft = currentScrollLeft

      // Synchroniser le texte actif (01, 02, 03) avec la position réelle de l'image
      if (maxScroll > 0) {
        const ratio = currentScrollLeft / maxScroll
        if (ratio < 0.3) {
          currentIndex.value = 0
        } else if (ratio < 0.7) {
          currentIndex.value = 1
        } else {
          currentIndex.value = 2
        }
      }
    }
    animFrameId = requestAnimationFrame(updateScroll)
  }
  animFrameId = requestAnimationFrame(updateScroll)
}

function handleWheel(event) {
  const delta = (event.deltaY || event.deltaX)
  if (delta > 30) {
    goToNext()
  } else if (delta < -30) {
    goToPrev()
  }
}

function handleTouchStart(e) {
  if (e.touches && e.touches.length > 0) {
    touchStartX = e.touches[0].clientX
    touchEndX = touchStartX
  }
}

function handleTouchMove(e) {
  if (e.touches && e.touches.length > 0) {
    touchEndX = e.touches[0].clientX
  }
}

function handleTouchEnd() {
  const diff = touchStartX - touchEndX
  if (Math.abs(diff) > 35) {
    if (diff > 0) {
      goToNext()
    } else {
      goToPrev()
    }
  }
}
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(8px) scale(0.98);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-8px) scale(0.98);
}
</style>

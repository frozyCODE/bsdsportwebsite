<template>
  <section 
    id="terrains" 
    class="relative py-12 sm:py-20 lg:py-24 px-3 sm:px-8 lg:px-12 transition-colors duration-700 overflow-hidden z-[10000] shadow-[0_-20px_50px_rgba(0,0,0,0.15)]"
    :class="activeBgVideo ? 'bg-[#0A0E16] text-white' : 'bg-[#E3E3E0] text-[#111111]'"
  >
    
    <!-- Concrete Grain Texture Overlay -->
    <div 
      class="absolute inset-0 z-0 opacity-[0.25] mix-blend-multiply pointer-events-none transition-opacity duration-700"
      :class="activeBgVideo ? 'opacity-0' : 'opacity-[0.25]'"
      style="background-image: url('data:image/svg+xml,%3Csvg width=\'256\' height=\'256\' viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'lightNoise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23lightNoise)\'/%3E%3C/svg%3E');"
      aria-hidden="true"
    ></div>

    <!-- FULL-SECTION VIDEO BACKGROUND (Clair, Lisible + Grain Argentique au survol) -->
    <div 
      class="absolute inset-0 z-0 overflow-hidden pointer-events-none transition-all duration-700 ease-out"
      :class="activeBgVideo ? 'opacity-100 scale-100' : 'opacity-0 scale-105'"
    >
      <video 
        v-if="activeBgVideo"
        :key="activeBgVideo"
        :src="activeBgVideo"
        class="w-full h-full object-cover filter grayscale contrast-[1.15] brightness-[0.72]"
        autoplay 
        loop 
        muted 
        playsinline
      ></video>
      <div class="absolute inset-0 bg-black/25 backdrop-blur-[1px]"></div>
      
      <!-- Grain Argentique sur la vidéo de fond -->
      <div 
        class="absolute inset-0 mix-blend-overlay opacity-55 pointer-events-none bg-repeat" 
        style="background-image: url('data:image/svg+xml,%3Csvg width=\'256\' height=\'256\' viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'heavyNoise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.95\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23heavyNoise)\'/%3E%3C/svg%3E');"
      ></div>
    </div>

    <!-- Background Decorative Videos (Disponibles sur MacBook et PC de bureau dès lg / 1024px) -->
    <!-- Left Video 1 (Top Left - Vidéo 4.mov) -->
    <div 
      class="hidden lg:block absolute top-[14%] left-[2%] w-[150px] xl:w-[180px] 2xl:w-[200px] aspect-[4/5] rounded-[20px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.15)] z-0 cursor-pointer border border-transparent hover:border-white/40 transition-all duration-500"
      :class="activeBgVideo ? 'opacity-0 scale-95 pointer-events-auto' : 'opacity-90 scale-100 hover:scale-108'"
      @mouseenter="activeBgVideo = '/4.mov'"
      @mouseleave="activeBgVideo = null"
    >
      <video :src="'/4.mov'" class="w-full h-full object-cover filter grayscale contrast-[1.1] opacity-90" autoplay loop muted playsinline></video>
      <div class="absolute inset-0 mix-blend-overlay pointer-events-none opacity-40" style="background-image: url('data:image/svg+xml,%3Csvg width=\'256\' height=\'256\' viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'videoNoise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23videoNoise)\'/%3E%3C/svg%3E');"></div>
    </div>

    <!-- Left Video 2 (Bottom Left - Vidéo 1.mov) -->
    <div 
      class="hidden lg:block absolute bottom-[14%] left-[3%] w-[150px] xl:w-[180px] 2xl:w-[200px] aspect-[4/5] rounded-[20px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.15)] z-0 cursor-pointer border border-transparent hover:border-white/40 transition-all duration-500"
      :class="activeBgVideo ? 'opacity-0 scale-95 pointer-events-auto' : 'opacity-90 scale-100 hover:scale-108'"
      @mouseenter="activeBgVideo = '/1.mov'"
      @mouseleave="activeBgVideo = null"
    >
      <video :src="'/1.mov'" class="w-full h-full object-cover filter grayscale contrast-[1.1] opacity-90" autoplay loop muted playsinline></video>
      <div class="absolute inset-0 mix-blend-overlay pointer-events-none opacity-40" style="background-image: url('data:image/svg+xml,%3Csvg width=\'256\' height=\'256\' viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'videoNoise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23videoNoise)\'/%3E%3C/svg%3E');"></div>
    </div>

    <!-- Left Video 3 (Middle Left - Vidéo 7.mov) -->
    <div 
      class="hidden lg:block absolute top-[39%] left-[6%] xl:left-[8%] w-[140px] xl:w-[160px] 2xl:w-[180px] aspect-[4/5] rounded-[20px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.15)] z-0 cursor-pointer border border-transparent hover:border-white/40 transition-all duration-500"
      :class="activeBgVideo ? 'opacity-0 scale-95 pointer-events-auto' : 'opacity-90 scale-100 hover:scale-108'"
      @mouseenter="activeBgVideo = '/7.mov'"
      @mouseleave="activeBgVideo = null"
    >
      <video :src="'/7.mov'" class="w-full h-full object-cover filter grayscale contrast-[1.1] opacity-90" autoplay loop muted playsinline></video>
      <div class="absolute inset-0 mix-blend-overlay pointer-events-none opacity-40" style="background-image: url('data:image/svg+xml,%3Csvg width=\'256\' height=\'256\' viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'videoNoise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23videoNoise)\'/%3E%3C/svg%3E');"></div>
    </div>

    <!-- Right Video 1 (Top Right - Vidéo 2.mov) -->
    <div 
      class="hidden lg:block absolute top-[14%] right-[2%] w-[150px] xl:w-[180px] 2xl:w-[200px] aspect-[4/5] rounded-[20px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.15)] z-0 cursor-pointer border border-transparent hover:border-white/40 transition-all duration-500"
      :class="activeBgVideo ? 'opacity-0 scale-95 pointer-events-auto' : 'opacity-90 scale-100 hover:scale-108'"
      @mouseenter="activeBgVideo = '/2.mov'"
      @mouseleave="activeBgVideo = null"
    >
      <video :src="'/2.mov'" class="w-full h-full object-cover filter grayscale contrast-[1.1] opacity-90" autoplay loop muted playsinline></video>
      <div class="absolute inset-0 mix-blend-overlay pointer-events-none opacity-40" style="background-image: url('data:image/svg+xml,%3Csvg width=\'256\' height=\'256\' viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'videoNoise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23videoNoise)\'/%3E%3C/svg%3E');"></div>
    </div>

    <!-- Right Video 2 (Middle Right - Vidéo 6.mov) -->
    <div 
      class="hidden lg:block absolute top-[39%] right-[6%] xl:right-[8%] w-[140px] xl:w-[160px] 2xl:w-[180px] aspect-[4/5] rounded-[20px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.15)] z-0 cursor-pointer border border-transparent hover:border-white/40 transition-all duration-500"
      :class="activeBgVideo ? 'opacity-0 scale-95 pointer-events-auto' : 'opacity-90 scale-100 hover:scale-108'"
      @mouseenter="activeBgVideo = '/6.mov'"
      @mouseleave="activeBgVideo = null"
    >
      <video :src="'/6.mov'" class="w-full h-full object-cover filter grayscale contrast-[1.1] opacity-90" autoplay loop muted playsinline></video>
      <div class="absolute inset-0 mix-blend-overlay pointer-events-none opacity-40" style="background-image: url('data:image/svg+xml,%3Csvg width=\'256\' height=\'256\' viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'videoNoise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23videoNoise)\'/%3E%3C/svg%3E');"></div>
    </div>

    <!-- Right Video 3 (Bottom Right - Vidéo 3.mov) -->
    <div 
      class="hidden lg:block absolute bottom-[12%] right-[3%] w-[150px] xl:w-[180px] 2xl:w-[200px] aspect-[4/5] rounded-[20px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.15)] z-0 cursor-pointer border border-transparent hover:border-white/40 transition-all duration-500"
      :class="activeBgVideo ? 'opacity-0 scale-95 pointer-events-auto' : 'opacity-90 scale-100 hover:scale-108'"
      @mouseenter="activeBgVideo = '/3.mov'"
      @mouseleave="activeBgVideo = null"
    >
      <video :src="'/3.mov'" class="w-full h-full object-cover filter grayscale contrast-[1.1] opacity-90" autoplay loop muted playsinline></video>
      <div class="absolute inset-0 mix-blend-overlay pointer-events-none opacity-40" style="background-image: url('data:image/svg+xml,%3Csvg width=\'256\' height=\'256\' viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'videoNoise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23videoNoise)\'/%3E%3C/svg%3E');"></div>
    </div>

    <!-- Conteneur Central UI -->
    <div 
      class="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8 relative z-10 text-center transition-all duration-500 ease-out"
      :class="activeBgVideo ? 'opacity-0 pointer-events-none scale-95' : 'opacity-100 scale-100'"
    >
      
      <!-- Top Tag Badge -->
      <div class="inline-flex items-center gap-2 px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white border border-black/10 text-[#111111] font-display text-[9px] xs:text-[10px] sm:text-xs uppercase tracking-widest mb-3 sm:mb-5 shadow-sm">
        <span class="skew-x-[-6deg] font-bold">PARCOURS & PROFILS BSD</span>
      </div>

      <!-- Main Heading (Impactant sur mobile, 100% lisible et sans aucun tronquage sur PC) -->
      <h2 class="font-display uppercase text-[#111111] mb-3 sm:mb-4 leading-[1.1] text-center tracking-tight flex flex-wrap items-center justify-center gap-x-2.5 sm:gap-x-4 gap-y-1 text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold max-w-full px-2">
        <span class="inline-block">SELECTIONNE</span>
        <span class="inline-block">TON</span>
        <span class="text-[#ff7043] inline-block">TERRAIN</span>
      </h2>
      
      <!-- Subtitle Description -->
      <p class="text-xs sm:text-base lg:text-lg font-body font-medium text-[#111111]/70 max-w-xl mx-auto mb-6 sm:mb-10 leading-relaxed px-2">
        Glissez la carte ou cliquez sur un profil ci-dessous pour acceder a votre espace.
      </p>

      <!-- Filter Buttons: Responsive 3 colonnes flexibles sans tronquature -->
      <div class="profile-tabs flex items-center justify-center gap-1.5 xs:gap-2 sm:gap-3 mb-6 sm:mb-12 flex-nowrap sm:flex-wrap w-full max-w-sm sm:max-w-none mx-auto px-1 reveal d2">
        <button
          v-for="(p, index) in profiles"
          :key="p.id"
          :class="['filter-btn-combo flex-1 sm:flex-none text-center min-w-0', { active: activeIndex === index }]"
          @click="selectCardIndex(index)"
        >
          <span class="filter-dot-dynamic shrink-0" :class="{ 'is-active-dot': activeIndex === index }"></span>
          <span class="skew-x-[-6deg] font-display inline-block truncate max-w-full px-0.5">{{ p.title }}</span>
        </button>
      </div>

      <!-- Central Profile Card Container -->
      <div class="deck-container relative w-full max-w-[290px] xs:max-w-[340px] sm:max-w-[360px] mx-auto h-[430px] sm:h-[470px] flex items-center justify-center reveal d3">
        
        <!-- Navigation Arrow Left (Rouge vif avec contour rouge) -->
        <button 
          class="nav-btn-red-light prev-btn-red-light" 
          @click="prevCard" 
          aria-label="Carte precedente"
        >
          <svg class="w-4 h-4 sm:w-5 sm:h-5 stroke-current" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <!-- Card Stack (Cartes Noires avec texte Blanc et lueur rouge) -->
        <div 
          class="card-stack-viewport relative w-full h-full flex items-center justify-center select-none"
          @mousedown="onMouseDown"
          @mousemove="onMouseMove"
          @mouseup="onMouseUp"
          @mouseleave="onMouseUp"
          @touchstart="onTouchStart"
          @touchmove="onTouchMove"
          @touchend="onTouchEnd"
        >
          <div
            v-for="(p, index) in profiles"
            :key="p.id"
            :class="[
              'stack-card-black', 
              { 
                'is-front': getStackPos(index) === 0,
                'is-dragging': isDragging && getStackPos(index) === 0
              }
            ]"
            :style="getCardStyle(index)"
            @click="onCardClick(index, p)"
          >
            <!-- Inner Card Surface -->
            <div class="card-inner-surface relative flex flex-col justify-between h-full p-4 sm:p-6 text-center text-white rounded-[26px] overflow-hidden">
              
              <!-- Ambient Background Video for Active Card Surface (MOBILE UNIQUEMENT : 2xl:hidden) -->
              <div 
                v-if="getStackPos(index) === 0" 
                class="2xl:hidden absolute inset-0 z-0 opacity-20 pointer-events-none transition-opacity duration-700 overflow-hidden"
              >
                <video 
                  :src="getProfileVideo(p.id)" 
                  class="w-full h-full object-cover filter grayscale contrast-125 brightness-90"
                  autoplay 
                  loop 
                  muted 
                  playsinline
                ></video>
                <div class="absolute inset-0 bg-gradient-to-b from-[#1E1C1A]/80 via-[#1E1C1A]/90 to-[#1E1C1A]"></div>
              </div>

              <!-- Card Top Header Bar -->
              <div class="relative z-10 flex items-center justify-center pb-2.5 sm:pb-3 border-b border-white/15">
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#ff7043] animate-pulse"></span>
                  <span class="font-display text-[10px] sm:text-xs text-white/80 uppercase tracking-widest">PROFIL {{ index + 1 }}/{{ profiles.length }}</span>
                </div>
              </div>

              <!-- Center Artwork Box with Animated Video Thumbnail (MOBILE UNIQUEMENT : 2xl:hidden / Sur PC : Icone propre épurée) -->
              <div class="relative z-10 my-2 sm:my-3 flex flex-col items-center justify-center">
                <div class="icon-wrap relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-black/40 2xl:bg-white/10 border border-white/30 2xl:border-white/20 flex items-center justify-center mb-2.5 sm:mb-3 shadow-xl 2xl:backdrop-blur-md overflow-hidden group">
                  <video 
                    :src="getProfileVideo(p.id)" 
                    class="2xl:hidden absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 opacity-75 transition-transform duration-500 group-hover:scale-110"
                    autoplay 
                    loop 
                    muted 
                    playsinline
                  ></video>
                  <div class="2xl:hidden absolute inset-0 bg-black/20 backdrop-blur-[0.5px]"></div>
                  <span v-html="p.icon" class="relative z-10 text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"></span>
                </div>

                <h3 class="font-display text-2xl sm:text-3xl uppercase text-white tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                  {{ p.title }}
                </h3>

                <span class="font-display text-[10px] sm:text-xs uppercase tracking-widest mt-1 sm:mt-1.5 text-[#ff7043] font-bold skew-x-[-6deg]">
                  {{ p.baseline }}
                </span>
              </div>

              <!-- Short Description -->
              <p class="relative z-10 text-[11px] sm:text-sm text-[#F1E7D0]/90 font-body leading-relaxed mb-3 sm:mb-4 px-1">
                {{ p.description }}
              </p>

              <!-- Action Button -->
              <button 
                class="relative z-10 card-action-btn-black w-full py-2.5 sm:py-3.5 px-3 sm:px-6 rounded-full font-display text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-widest transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 shadow-xl"
                @click.stop="goToProfile(p)"
              >
                <span class="truncate">ACCEDER A L'ESPACE {{ p.title }}</span>
                <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 transition-transform group-hover:translate-x-1 stroke-current" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>

            </div>
          </div>
        </div>

        <!-- Navigation Arrow Right -->
        <button 
          class="nav-btn-red-light next-btn-red-light" 
          @click="nextCard" 
          aria-label="Carte suivante"
        >
          <svg class="w-4 h-4 sm:w-5 sm:h-5 stroke-current" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <!-- Pagination Dots -->
      <div class="mt-8 flex justify-center reveal d3">
        <div class="flex items-center gap-2">
          <button 
            v-for="(p, idx) in profiles" 
            :key="'dot-' + p.id"
            :class="['dot-btn-editorial', { active: activeIndex === idx }]"
            @click="selectCardIndex(idx)"
            :aria-label="'Aller a la carte ' + p.title"
          ></button>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useReveal } from '@/composables/useReveal'
import { useProfile } from '@/composables/useProfile'
import { useUiStore } from '@/stores/uiStore'

useReveal()

const router = useRouter()
const { profiles, currentProfileId, setProfile } = useProfile()
const uiStore = useUiStore()

const activeIndex = ref(0)
const isDragging = ref(false)
const hasMoved = ref(false)
const startX = ref(0)
const currentX = ref(0)
const deltaX = ref(0)
const startTime = ref(0)

const activeBgVideo = ref(null)

const profileVideos = {
  particuliers: '/4.mov',
  entreprises: '/2.mov',
  territoires: '/3.mov'
}

function getProfileVideo(id) {
  return profileVideos[id] || '/1.mov'
}

onMounted(() => {
  if (currentProfileId.value) {
    const idx = profiles.findIndex(p => p.id === currentProfileId.value)
    if (idx !== -1) activeIndex.value = idx
  }
})

function getStackPos(index) {
  const count = profiles.length
  return (index - activeIndex.value + count) % count
}

function getCardStyle(index) {
  const pos = getStackPos(index)
  const isFront = pos === 0

  let transform = ''
  let zIndex = 10
  let opacity = 1
  let filter = 'none'

  if (isFront) {
    const offset = isDragging.value ? deltaX.value : 0
    const rot = offset * 0.08
    transform = `translate3d(${offset}px, 0px, 0px) rotate(${rot}deg) scale(1)`
    zIndex = 30
    opacity = Math.max(0.3, 1 - Math.abs(offset) / 280)
    filter = 'none'
  } else if (pos === 1) {
    transform = `translate3d(26px, 16px, -30px) rotate(5deg) scale(0.93)`
    zIndex = 20
    opacity = 0.82
    filter = 'brightness(0.88)'
  } else {
    transform = `translate3d(-26px, 28px, -60px) rotate(-5deg) scale(0.86)`
    zIndex = 10
    opacity = 0.58
    filter = 'brightness(0.75)'
  }

  return {
    transform,
    zIndex,
    opacity,
    filter,
    borderColor: 'rgba(255, 255, 255, 0.25)',
    boxShadow: isFront 
      ? '0 20px 50px rgba(0,0,0,0.35), 0 0 25px rgba(255, 112, 67, 0.25)' 
      : '0 12px 30px rgba(0,0,0,0.15)',
    transition: isDragging.value && isFront ? 'none' : 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease, filter 0.4s ease'
  }
}

// Mouse Event Handlers
function onMouseDown(e) {
  isDragging.value = true
  hasMoved.value = false
  startX.value = e.clientX
  currentX.value = e.clientX
  deltaX.value = 0
  startTime.value = Date.now()
}

function onMouseMove(e) {
  if (!isDragging.value) return
  currentX.value = e.clientX
  deltaX.value = currentX.value - startX.value
  if (Math.abs(deltaX.value) > 6) {
    hasMoved.value = true
  }
}

function onMouseUp() {
  if (!isDragging.value) return
  finishDrag()
}

// Touch Event Handlers
function onTouchStart(e) {
  if (e.touches && e.touches[0]) {
    isDragging.value = true
    hasMoved.value = false
    startX.value = e.touches[0].clientX
    currentX.value = e.touches[0].clientX
    deltaX.value = 0
    startTime.value = Date.now()
  }
}

function onTouchMove(e) {
  if (!isDragging.value) return
  if (e.touches && e.touches[0]) {
    currentX.value = e.touches[0].clientX
    deltaX.value = currentX.value - startX.value
    if (Math.abs(deltaX.value) > 6) {
      hasMoved.value = true
    }
  }
}

function onTouchEnd() {
  if (!isDragging.value) return
  finishDrag()
}

function finishDrag() {
  isDragging.value = false
  const dt = Date.now() - startTime.value
  const d = deltaX.value
  const absD = Math.abs(d)
  const speed = absD / (dt || 1)

  if (absD > 35 || (speed > 0.2 && absD > 12)) {
    if (d < 0) {
      nextCard()
    } else {
      prevCard()
    }
  }
  deltaX.value = 0
}

function nextCard() {
  activeIndex.value = (activeIndex.value + 1) % profiles.length
  syncProfile()
}

function prevCard() {
  activeIndex.value = (activeIndex.value - 1 + profiles.length) % profiles.length
  syncProfile()
}

function selectCardIndex(idx) {
  activeIndex.value = idx
  syncProfile()
}

function onCardClick(index, profile) {
  if (hasMoved.value) return
  const pos = getStackPos(index)
  if (pos !== 0) {
    selectCardIndex(index)
  }
}

function syncProfile() {
  const p = profiles[activeIndex.value]
  if (p) {
    setProfile(p.id)
  }
}

function goToProfile(p) {
  setProfile(p.id)
  if (p.id === 'entreprises') {
    router.push('/entreprise')
  } else if (p.id === 'territoires') {
    router.push('/territoire')
  } else {
    router.push('/particuliers')
  }
}
</script>

<style scoped>
/* Filter Buttons: Active is White with Red Dot & Black text, Inactive is Dark with White Text */
.filter-btn-combo {
  background: #1E1C1A;
  border: 1.5px solid #1E1C1A;
  color: #ffffff;
  padding: 0.4rem 0.5rem;
  border-radius: 999px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  font-size: 0.625rem;
  line-height: 1.2;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  transition: all 0.3s ease;
  box-shadow: 0 4px 14px rgba(0,0,0,0.1);
  box-sizing: border-box;
  max-width: 100%;
}

@media (min-width: 400px) {
  .filter-btn-combo {
    padding: 0.45rem 0.85rem;
    gap: 0.4rem;
    font-size: 0.68rem;
    letter-spacing: 0.05em;
  }
}

@media (min-width: 640px) {
  .filter-btn-combo {
    padding: 0.65rem 1.4rem;
    gap: 0.55rem;
    font-size: 0.75rem;
    letter-spacing: 0.12em;
  }
}

.filter-btn-combo:hover {
  background: #111111;
  border-color: #111111;
  color: #ffffff;
}

.filter-btn-combo.active {
  background: #ffffff;
  border-color: #1E1C1A;
  color: #1E1C1A;
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
}

.filter-dot-dynamic {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.filter-btn-combo.active .filter-dot-dynamic {
  background: #ff7043;
}

/* Black Stack Card with Fine Border and Subtle Red Glow on Greyish Background */
.stack-card-black {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #1E1C1A;
  background-image: url("data:image/svg+xml,%3Csvg width='256' height='256' viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='cardNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23cardNoise)' opacity='0.15'/%3E%3C/svg%3E");
  background-blend-mode: overlay;
  border: 1.5px solid rgba(255, 255, 255, 0.15);
  border-radius: 32px;
  padding: 0.65rem;
  cursor: grab;
  user-select: none;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  isolation: isolate;
  box-shadow: 0 20px 50px rgba(0,0,0,0.35), 0 0 25px rgba(255, 112, 67, 0.25);
}

.stack-card-black.is-dragging {
  cursor: grabbing;
}

/* Red Navigation Arrow Buttons (Rouge vif sur fond blanc/gris) */
.nav-btn-red-light {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #ffffff;
  border: 2px solid #ff7043;
  color: #ff7043;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 40;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.prev-btn-red-light {
  left: -26px;
}

.next-btn-red-light {
  right: -26px;
}

@media (max-width: 520px) {
  .nav-btn-red-light {
    width: 36px;
    height: 36px;
  }
  .prev-btn-red-light {
    left: -10px;
  }
  .next-btn-red-light {
    right: -10px;
  }
  .deck-container {
    max-width: min(92vw, 340px);
    height: 430px;
  }
}

.nav-btn-red-light:hover {
  background: #ff7043;
  color: #ffffff;
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 12px 28px rgba(255, 112, 67, 0.4);
}

/* Card Action Button (Noir contour blanc, texte blanc) */
.card-action-btn-black {
  background: rgba(30, 28, 26, 0.5);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  font-weight: 700;
  transition: all 0.3s ease;
}

.card-action-btn-black:hover {
  background: #ffffff;
  color: #1E1C1A;
  border-color: #ffffff;
}

/* Pagination Dots */
.dot-btn-editorial {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.25);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot-btn-editorial.active {
  width: 24px;
  border-radius: 99px;
  background: #ff7043;
}

.card-action-btn-black::after {
  content: none !important;
  display: none !important;
}
</style>

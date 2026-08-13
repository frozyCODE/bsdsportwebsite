<template>
  <section 
    ref="gallerySection" 
    class="relative bg-[#0d0d0d] text-[#F1E7D0] overflow-hidden z-10 font-body py-24 sm:py-36 min-h-screen"
  >
    
    <!-- Texture de Grain Argentique -->
    <div 
      class="absolute inset-0 z-0 opacity-35 mix-blend-overlay pointer-events-none bg-repeat"
      style="background-image: url('data:image/svg+xml,%3Csvg width=\'256\' height=\'256\' viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'heavyGrain\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.95\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23heavyGrain)\'/%3E%3C/svg%3E');"
      aria-hidden="true"
    ></div>

    <!-- Glow Orange central -->
    <div 
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1100px] h-[600px] bg-[#ff7043]/12 blur-[180px] pointer-events-none"
      aria-hidden="true"
    ></div>

    <!-- EN-TÊTE DE LA GALERIE (Fixed overlay) -->
    <div class="max-w-4xl mx-auto text-center px-4 sm:px-8 mb-12 sm:mb-16 relative z-30 space-y-4">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111111] border border-white/15 text-white/80 font-display text-[10px] sm:text-xs uppercase tracking-[0.2em] shadow-sm">
        <span>EXPERIENCE VISUELLE IMMERSIVE</span>
      </div>

      <h2 class="font-display text-3xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-none">
        LE SPORT <br />
        <span class="text-[#ff7043]">EN MOVEMENT</span>
      </h2>

      <p class="text-xs sm:text-base text-white/70 font-body max-w-xl mx-auto leading-relaxed">
        Faites défiler vers le bas pour déployer la galerie photo interactive BSD Sport.
      </p>
    </div>

    <!-- ============================================================ -->
    <!-- CONTENEUR ÉPINGLÉ GSAP DE L'EXPLOSION 3D DES PHOTOS (SCROLL PIN) -->
    <!-- ============================================================ -->
    <div ref="pinnedExplosionContainer" class="relative w-full h-screen flex items-center justify-center overflow-hidden">
      
      <!-- CARTE RECTANGULAIRE CENTRALE (INITIAL FOCUS) -->
      <div 
        ref="centralHeroCard"
        class="central-card absolute z-30 w-[300px] sm:w-[460px] lg:w-[540px] h-[360px] sm:h-[480px] rounded-[32px] sm:rounded-[44px] overflow-hidden border-2 border-[#ff7043] shadow-[0_0_50px_rgba(255,112,67,0.3)] bg-[#111111] cursor-pointer group"
      >
        <img 
          :src="'/crossheat.png'" 
          alt="BSD Sport Action" 
          class="w-full h-full object-cover filter grayscale contrast-125 brightness-90 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10"></div>

        <!-- Red Accent Dot Top Right -->
        <span class="absolute top-5 right-5 z-20 w-4 h-4 rounded-full bg-[#ff7043] shadow-[0_0_16px_#ff7043] animate-pulse"></span>

        <!-- Giant Typography Overlay (Akira font - SANS ACCENT) -->
        <div class="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <span class="text-[#ff7043] font-display text-xs sm:text-sm uppercase tracking-[0.3em] mb-3">
            BSD ATHLETIC PROGRAM
          </span>
          <h3 class="font-display text-3xl sm:text-5xl uppercase tracking-tight text-white leading-none drop-shadow-2xl">
            INTENSITE & <br /> <span class="text-[#ff7043]">FORCE</span>
          </h3>
        </div>
      </div>

      <!-- CARTES VOLANTES AUTOUR EN EXPLOSION 3D AU SCROLL -->
      <div 
        v-for="(card, index) in explosionCards" 
        :key="card.id"
        :ref="el => setCardRef(el, index)"
        class="fly-card absolute z-20 w-[200px] sm:w-[280px] lg:w-[340px] h-[260px] sm:h-[360px] rounded-[28px] overflow-hidden border border-white/20 bg-[#111111] shadow-2xl cursor-pointer group hover:z-40 hover:border-[#ff7043] hover:scale-110 transition-all duration-500"
      >
        <img 
          :src="card.image" 
          :alt="card.title" 
          class="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

        <!-- Tag Top Left -->
        <div class="absolute top-4 left-4 z-20">
          <span class="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white font-display text-[9px] sm:text-[10px] uppercase tracking-wider">
            {{ card.tag }}
          </span>
        </div>

        <!-- Red Accent Dot Top Right -->
        <span class="absolute top-4 right-4 z-20 w-3 h-3 rounded-full bg-[#ff7043] shadow-[0_0_10px_#ff7043]"></span>

        <!-- Bottom Title -->
        <div class="absolute bottom-4 left-4 right-4 z-20">
          <h4 class="font-display text-sm sm:text-lg text-white uppercase tracking-tight leading-tight group-hover:text-[#ff7043] transition-colors">
            {{ card.title }}
          </h4>
        </div>
      </div>

    </div>

    <!-- ============================================================ -->
    <!-- SECTION 3 : SHOWCASE COACHING SPLIT AVEC ANNEAUX ROUGES DÉCORATIFS -->
    <!-- ============================================================ -->
    <div class="max-w-7xl mx-auto px-4 sm:px-8 pt-24 sm:pt-36 space-y-24 relative z-20">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        <div class="lg:col-span-6 space-y-6">
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full bg-[#ff7043] shadow-[0_0_12px_#ff7043]"></span>
            <span class="font-display text-xs uppercase tracking-widest text-[#ff7043]">1 SUR 1 COACHING</span>
          </div>

          <h3 class="font-display text-3xl sm:text-5xl lg:text-6xl uppercase text-white tracking-tight leading-[1.05]">
            VRAI ACCOMPAGNEMENT, <br />
            <span class="text-[#ff7043]">PAS DE FAUSSES PROMESSES</span>
          </h3>

          <p class="text-sm sm:text-base text-white/75 font-body leading-relaxed max-w-lg">
            Chez BSD Sport, votre coach personnel s'adapte à vous. Correction de posture, ajustement des charges et plan d'entraînement sur-mesure pour atteindre vos objectifs sans perte de temps.
          </p>

          <div class="pt-4">
            <a 
              href="#contact-particuliers" 
              class="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#ff7043] hover:bg-white text-black font-display text-xs uppercase tracking-wider shadow-xl transition-all duration-300 group"
            >
              <span>DEMANDER UN BILAN GRATUIT</span>
              <span class="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

        <div class="lg:col-span-6 relative">
          <div class="relative h-[440px] sm:h-[520px] rounded-[36px] overflow-hidden border border-white/20 bg-[#111111] shadow-2xl group">
            <div class="absolute top-6 left-6 z-20">
              <span class="px-4 py-2 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white font-display text-xs uppercase tracking-wider">
                COACHING INDIVIDUEL
              </span>
            </div>

            <img :src="'/coach.png'" alt="Coaching BSD Sport" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>

          <!-- Cercles rouges superposés en bas à droite -->
          <div class="absolute -bottom-6 -right-6 w-16 h-16 rounded-full border-2 border-[#ff7043] pointer-events-none opacity-90 z-20"></div>
          <div class="absolute -bottom-10 -right-2 w-16 h-16 rounded-full border-2 border-[#ff7043] pointer-events-none opacity-90 z-20"></div>
        </div>

      </div>
    </div>

  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const gallerySection = ref(null)
const pinnedExplosionContainer = ref(null)
const centralHeroCard = ref(null)
const cardRefs = ref([])

function setCardRef(el, index) {
  if (el) cardRefs.value[index] = el
}

let ctx = null

const explosionCards = [
  {
    id: 1,
    image: '/crossheat1.JPG',
    tag: 'CROSS TRAINING',
    title: 'WOD INTENSE',
    targetX: -380,
    targetY: -220,
    targetRotate: 0,
    targetScale: 0.95
  },
  {
    id: 2,
    image: '/stepp.png',
    tag: 'STEPP TRAINING',
    title: 'CARDIO RUN',
    targetX: 380,
    targetY: -210,
    targetRotate: 0,
    targetScale: 0.95
  },
  {
    id: 3,
    image: '/art-martiaux.webp',
    tag: 'COMBAT',
    title: 'BOXE & AUTO-DEFENSE',
    targetX: -420,
    targetY: 200,
    targetRotate: 0,
    targetScale: 0.9
  },
  {
    id: 4,
    image: '/aqua-training.png',
    tag: 'AQUA SPORT',
    title: 'RENFORCEMENT AQUA',
    targetX: 420,
    targetY: 220,
    targetRotate: 0,
    targetScale: 0.9
  },
  {
    id: 5,
    image: '/escalade.png',
    tag: 'ESCALADE BLOC',
    title: 'AGILITE & GAINAGE',
    targetX: -580,
    targetY: -10,
    targetRotate: 0,
    targetScale: 0.85
  },
  {
    id: 6,
    image: '/montagne.jpg',
    tag: 'OUTDOOR ISERE',
    title: 'TRAIL & ALTITUDE',
    targetX: 580,
    targetY: 10,
    targetRotate: 0,
    targetScale: 0.85
  },
  {
    id: 7,
    image: '/crossheat2.JPG',
    tag: 'COMMUNAUTE',
    title: 'WOD EN GROUPE',
    targetX: 0,
    targetY: -320,
    targetRotate: 0,
    targetScale: 0.85
  },
  {
    id: 8,
    image: '/senior-woman-electric-mountainbike.jpg',
    tag: 'VTT & NATURE',
    title: 'RANDONNEE ACTIVE',
    targetX: 0,
    targetY: 330,
    targetRotate: 0,
    targetScale: 0.85
  }
]

onMounted(() => {
  ctx = gsap.context(() => {
    
    if (pinnedExplosionContainer.value && cardRefs.value.length > 0) {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinnedExplosionContainer.value,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: '+=1500',
          invalidateOnRefresh: true
        }
      })

      // 1. Expansion droite de la carte centrale (0 rotation)
      tl.to(centralHeroCard.value, {
        scale: 1.08,
        rotateZ: 0,
        duration: 1,
        ease: 'power2.out'
      }, 0)

      // 2. Déploiement 100% droit et symétrique des cartes volantes
      cardRefs.value.forEach((cardEl, idx) => {
        const config = explosionCards[idx]
        if (cardEl && config) {
          gsap.set(cardEl, {
            x: 0,
            y: 0,
            scale: 0.2,
            opacity: 0,
            rotateZ: 0
          })

          tl.to(cardEl, {
            x: config.targetX,
            y: config.targetY,
            rotateZ: 0,
            scale: config.targetScale,
            opacity: 1,
            duration: 1,
            ease: 'power3.out'
          }, 0)
        }
      })

    }

  }, gallerySection.value)
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})
</script>

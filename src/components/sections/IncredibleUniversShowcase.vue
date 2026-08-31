<template>
  <section id="sports-collectifs" class="relative bg-[#080808] text-[#F1E7D0] font-body select-none overflow-hidden py-16 sm:py-24">
    
    <!-- Texture Grain Argentique Brutaliste -->
    <div 
      class="absolute inset-0 z-0 opacity-25 mix-blend-overlay pointer-events-none bg-repeat"
      style="background-image: url('data:image/svg+xml,%3Csvg width=\'256\' height=\'256\' viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'heavyGrain\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.95\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23heavyGrain)\'/%3E%3C/svg%3E');"
      aria-hidden="true"
    ></div>

    <!-- Glow Orange Subtil en Arrière-Plan -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#ff7043]/10 blur-[160px] pointer-events-none" aria-hidden="true"></div>

    <div class="space-y-16 relative z-10">

      <!-- ============================================================ -->
      <!-- 1. SECTION TITRE & BOUTON "SPORTS COLLECTIFS" -->
      <!-- ============================================================ -->
      <div class="univers-landscape-section relative w-full h-[56.25vw] min-h-[500px] sm:min-h-[620px] lg:min-h-[750px] max-h-[850px] flex items-center overflow-hidden border-y border-white/10 transition-all duration-500 block">
        <!-- Photo d'arrière-plan Paysage -->
        <img 
          src="/crossheat.jpeg" 
          alt="Sports Collectifs BSD Sport" 
          class="absolute inset-0 w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/40 to-black/25"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>

        <!-- Contenu de la bannière principal -->
        <div class="max-w-7xl mx-auto w-full px-6 sm:px-12 py-12 sm:py-16 relative z-10 flex flex-col justify-center h-full">
          <div class="max-w-4xl space-y-4 sm:space-y-6">
            <div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#111111]/90 border border-white/15 text-[#ff7043] font-display text-[10px] sm:text-xs uppercase tracking-[0.2em] shadow-xl backdrop-blur-md font-bold">
              <span class="w-2 h-2 rounded-full bg-[#ff7043] animate-pulse"></span>
              <span>ENTRAINEMENTS DE GROUPE & COHESION</span>
            </div>

            <h3 class="font-display text-4xl xs:text-5xl sm:text-7xl lg:text-8xl text-white uppercase tracking-tight leading-none drop-shadow-2xl">
              SPORTS COLLECTIFS
            </h3>

            <p class="text-sm sm:text-lg lg:text-xl text-white/80 font-body leading-relaxed max-w-3xl drop-shadow-md">
              Omnisports, Cross Training, Stepp, Arts Martiaux, Boxe & Aqua-Training. Cliquez sur "Découvrir" pour explorer le carrousel interactif et retourner chaque carte d'activité.
            </p>

            <!-- Bouton Découvrir qui ouvre/scrolle le carrousel -->
            <div class="pt-4 flex items-center gap-4 flex-wrap">
              <button
                @click="toggleCarousel"
                class="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#ff7043] hover:bg-white text-black font-display text-xs uppercase tracking-wider shadow-2xl transition-all duration-300 font-bold group/btn cursor-pointer"
              >
                <span>{{ isCarouselOpen ? 'MASQUER LE CARROUSEL' : 'DECOUVRIR NOS DISCIPLINES' }}</span>
                <svg class="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- ============================================================ -->
      <!-- 2. CARROUSEL DYNAMIQUE DE CARTES INTERACTIVES À RETOURNEMENT -->
      <!-- ============================================================ -->
      <div 
        ref="carouselSection"
        v-if="isCarouselOpen" 
        class="max-w-7xl mx-auto px-4 sm:px-8 space-y-8 animate-fadeIn"
      >
        <!-- Inscription & Instructions -->
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div class="text-center sm:text-left">
            <span class="font-display text-xs uppercase tracking-widest text-[#ff7043] font-bold block mb-1">CARROUSEL INTERACTIF</span>
            <h4 class="font-display text-2xl sm:text-4xl text-white uppercase tracking-tight">
              SÉLECTIONNEZ UNE DISCIPLINE
            </h4>
          </div>
          <div class="flex items-center gap-2 text-xs font-display text-white/60 uppercase tracking-wider bg-white/5 border border-white/10 px-4 py-2 rounded-full">
            <span>💡 CLIQUEZ SUR UNE CARTE POUR VOIR LES INFOS DÉTAILLÉES</span>
          </div>
        </div>

        <!-- Carrousel de cartes -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div 
            v-for="sport in sportsCollectifsData" 
            :key="sport.id"
            class="flip-card-container h-[520px] cursor-pointer group"
            @click="flipCard(sport.id)"
          >
            <div 
              class="flip-card-inner relative w-full h-full transition-transform duration-700 transform-style-3d shadow-2xl rounded-3xl"
              :class="{ 'is-flipped': flippedCards[sport.id] }"
            >
              <!-- RECTO (Face Avant) -->
              <div class="flip-card-front absolute inset-0 w-full h-full rounded-3xl overflow-hidden border border-white/15 bg-[#111111] flex flex-col justify-between p-6 sm:p-8 backface-hidden">
                <img 
                  :src="sport.image" 
                  :alt="sport.title" 
                  class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30"></div>

                <!-- Tag Haut -->
                <div class="relative z-10 flex items-center justify-between">
                  <span class="px-3 py-1 rounded-full bg-[#111111]/80 border border-white/20 text-[#ff7043] font-display text-[10px] uppercase font-bold backdrop-blur-md">
                    {{ sport.badge }}
                  </span>
                  <span class="w-8 h-8 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center font-display text-xs">
                    ↺
                  </span>
                </div>

                <!-- Info Bas Recto -->
                <div class="relative z-10 space-y-3">
                  <h5 class="font-display text-2xl sm:text-3xl text-white uppercase tracking-tight leading-none drop-shadow-md">
                    {{ sport.title }}
                  </h5>
                  <p class="text-xs text-white/80 font-body line-clamp-2 leading-relaxed">
                    {{ sport.shortDesc }}
                  </p>
                  
                  <div class="pt-2 flex items-center justify-between text-xs font-display text-[#ff7043] font-bold uppercase tracking-wider border-t border-white/15">
                    <span>VOIR HORAIRES & LIEU</span>
                    <span>→</span>
                  </div>
                </div>
              </div>

              <!-- VERSO (Face Arrière retournée) -->
              <div class="flip-card-back absolute inset-0 w-full h-full rounded-3xl overflow-hidden border border-[#ff7043]/40 bg-[#0d0d0d] p-6 sm:p-8 flex flex-col justify-between backface-hidden transform-rotate-y-180">
                <div class="space-y-4">
                  <div class="flex items-center justify-between border-b border-white/10 pb-3">
                    <span class="font-display text-xs uppercase tracking-widest text-[#ff7043] font-bold">
                      DÉTAILS DISCIPLINE
                    </span>
                    <span class="text-xs font-display text-white/60">RETOURNER ↺</span>
                  </div>

                  <h5 class="font-display text-xl text-white uppercase tracking-tight">
                    {{ sport.title }}
                  </h5>

                  <p class="text-xs text-white/80 font-body leading-relaxed">
                    {{ sport.fullDesc }}
                  </p>

                  <!-- Lieu -->
                  <div class="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <span class="text-[10px] font-display uppercase tracking-widest text-[#ff7043] font-bold block">LIEU</span>
                    <p class="text-xs text-white font-medium">{{ sport.location }}</p>
                    <p class="text-[10px] text-white/60">{{ sport.address }}</p>
                  </div>

                  <!-- Horaires -->
                  <div class="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <span class="text-[10px] font-display uppercase tracking-widest text-[#ff7043] font-bold block">HORAIRES & CRÉNEAUX</span>
                    <ul class="space-y-1 text-xs text-white/90 font-body">
                      <li v-for="(h, idx) in sport.schedules" :key="idx" class="flex justify-between">
                        <span class="font-bold text-white">{{ h.day }} :</span>
                        <span class="text-[#ff7043] font-display">{{ h.time }}</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <!-- CTA Verso -->
                <div class="pt-3 border-t border-white/10 flex items-center justify-between">
                  <router-link 
                    :to="sport.route"
                    @click.stop
                    class="w-full text-center py-2.5 rounded-full bg-[#ff7043] hover:bg-white text-black font-display text-xs uppercase tracking-wider font-bold transition-all"
                  >
                    PAGE COMPLÈTE →
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ============================================================ -->
      <!-- 3. AUTRES UNIVERS (HORIZON SPORT & COACHING PERSONNALISÉ) -->
      <!-- ============================================================ -->
      <div 
        v-for="u in otherUniversData" 
        :key="u.id"
        class="univers-landscape-section relative w-full h-[56.25vw] min-h-[500px] sm:min-h-[620px] lg:min-h-[750px] max-h-[850px] flex items-center overflow-hidden border-y border-white/10 transition-all duration-500 block"
      >
        <img 
          :src="u.bgImage" 
          :alt="u.title" 
          class="absolute inset-0 w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/35 to-black/20"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent"></div>

        <div class="max-w-7xl mx-auto w-full px-6 sm:px-12 py-12 sm:py-16 relative z-10 flex flex-col justify-center h-full">
          <div class="max-w-4xl space-y-4 sm:space-y-6">
            <h3 class="font-display text-3xl xs:text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-white uppercase tracking-tight leading-none drop-shadow-2xl">
              {{ u.title }}
            </h3>

            <p class="text-sm sm:text-lg lg:text-xl text-white/80 font-body leading-relaxed max-w-3xl drop-shadow-md">
              {{ u.description }}
            </p>

            <div class="pt-4">
              <router-link
                :to="u.route"
                class="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#ff7043] hover:bg-white text-black font-display text-xs uppercase tracking-wider shadow-2xl transition-all duration-300 font-bold group/btn cursor-pointer"
              >
                <span>DECOUVRIR L'ESPACE DEDIE</span>
                <span class="transition-transform group-hover/btn:translate-x-1">→</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>

    </div>

  </section>
</template>

<script setup>
import { ref, nextTick } from 'vue'

const isCarouselOpen = ref(false)
const carouselSection = ref(null)
const flippedCards = ref({})

const toggleCarousel = () => {
  isCarouselOpen.value = !isCarouselOpen.value
  if (isCarouselOpen.value) {
    nextTick(() => {
      carouselSection.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }
}

const flipCard = (id) => {
  flippedCards.value[id] = !flippedCards.value[id]
}

// Données consolidées des 4 disciplines sous "Sports Collectifs"
const sportsCollectifsData = [
  {
    id: 'omnisport',
    route: '/omnisport-outdoor',
    title: 'OMNISPORTS',
    badge: 'MULTISPORTS',
    image: '/omnisport.jpeg',
    shortDesc: 'Basket-ball, Badminton, Futsal et séances de stretching de récupération.',
    fullDesc: 'Priorité aux sports de ballon collectifs (lundi) et aux sports de raquette avec stretching (mardi).',
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
    shortDesc: 'Combinaison ultime de WODs Cross Training, Haltérophilie et Stepp Cardio.',
    fullDesc: 'Cardio intense, renforcement musculaire et exercices fonctionnels en groupe.',
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
    shortDesc: 'Boxe anglaise, grappling et self-défense sous la conduite de coachs certifiés.',
    fullDesc: 'Maîtrise des frappes, vitesse, stratégie, corps à corps et résistance physique.',
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
    shortDesc: 'Combinaison d\'aquabike, renforcement musculaire aquatique et natation.',
    fullDesc: 'Séance exclusive un dimanche par mois à la Piscine Flotibulle.',
    location: 'Piscine Flotibulle',
    address: 'Rue de la Liberté, 38800 Pont de Claix',
    schedules: [
      { day: '1 Dimanche / Mois', time: '09h00 - 10h30' }
    ]
  }
]

// Autres univers conservés
const otherUniversData = [
  {
    id: 'horizon-sport',
    route: '/horizon-sport',
    title: 'HORIZON SPORT : SEJOURS & VOYAGES',
    description: 'Stages Muay Thai en Thailande, expeditions trekking dans les Alpes, ocean bootcamps et raids multi-sports. Vivez des evasions sportives et culturelles inoubliables.',
    bgImage: '/horizon-2.jpg'
  },
  {
    id: 'coaching-personnalise',
    route: '/programme-personnalise',
    title: 'PROGRAMMES & ACCOMPAGNEMENT PERSONNALISE',
    description: 'Suivi individuel par nos préparateurs physiques certifiés. Élaboration de votre plan d\'entraînement sur-mesure, objectifs d\'athlète ou de remise en forme.',
    bgImage: '/training.jpg'
  }
]
</script>

<style scoped>
.transform-style-3d {
  transform-style: preserve-3d;
}

.backface-hidden {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.transform-rotate-y-180 {
  transform: rotateY(180deg);
}

.is-flipped {
  transform: rotateY(180deg);
}
</style>

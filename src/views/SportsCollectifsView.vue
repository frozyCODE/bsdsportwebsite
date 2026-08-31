<template>
  <div class="min-h-screen bg-[#080808] text-[#F1E7D0] relative overflow-x-hidden font-body select-none">
    
    <!-- Texture de Grain Argentique Brutaliste -->
    <div 
      class="fixed inset-0 z-0 opacity-25 mix-blend-overlay pointer-events-none bg-repeat"
      style="background-image: url('data:image/svg+xml,%3Csvg width=\'256\' height=\'256\' viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'heavyGrain\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.95\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23heavyGrain)\'/%3E%3C/svg%3E');"
      aria-hidden="true"
    ></div>

    <!-- Image de fond du Hero avec fondu sombre -->
    <div class="absolute top-0 inset-x-0 h-[600px] sm:h-[750px] pointer-events-none overflow-hidden select-none z-0">
      <img 
        src="/crossheat.jpeg" 
        alt="Sports Collectifs Fond Hero" 
        class="w-full h-full object-cover object-center filter brightness-75 contrast-110 opacity-50"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-[#080808]/40 via-[#080808]/70 to-[#080808]"></div>
    </div>

    <!-- Glow Orange Subtil -->
    <div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] bg-[#ff7043]/15 blur-[160px] pointer-events-none z-0"></div>

    <!-- Header Navigation Globale -->
    <NavbarHeader />

    <!-- BOUTON RETOUR EN HAUT À DROITE -->
    <div class="pt-24 sm:pt-28 px-6 sm:px-12 max-w-7xl mx-auto flex justify-end relative z-20">
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

    <!-- HERO HEADER ACCROCHEUR -->
    <section class="relative pt-4 sm:pt-8 pb-12 sm:pb-16 px-4 sm:px-8 max-w-5xl mx-auto text-center z-10 space-y-6">
      <div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#111111] border border-white/15 text-[#ff7043] font-display text-[10px] sm:text-xs uppercase tracking-[0.2em] shadow-xl backdrop-blur-md font-bold">
        <span class="w-2 h-2 rounded-full bg-[#ff7043] animate-pulse"></span>
        <span>ENTRAÎNEMENTS DE GROUPE & ESPRIT D'ÉQUIPE</span>
      </div>

      <h1 class="font-display text-4xl sm:text-6xl lg:text-7xl xl:text-8xl uppercase tracking-tight text-white leading-tight drop-shadow-2xl">
        SPORTS <span class="chrome-silver-text text-[#ff7043]">COLLECTIFS</span>
      </h1>

      <p class="text-base sm:text-xl text-white/80 font-body max-w-3xl mx-auto leading-relaxed">
        Découvrez toutes nos disciplines collectives : Omnisports, Cross Training & Stepp, Arts Martiaux et Aqua-Training. <br class="hidden sm:block" />
        <span class="text-[#ff7043] font-bold">Cliquez sur une carte du carrousel pour la retourner</span> et afficher le lieu, les horaires et les détails des cours !
      </p>
    </section>

    <!-- SECTION CARROUSEL DYNAMIQUE DE CARTES 3D RETOURNABLES -->
    <section class="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 pb-24 sm:pb-36 space-y-12">
      
      <!-- En-tête de section -->
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <span class="font-display text-xs uppercase tracking-widest text-[#ff7043] font-bold block mb-1">CARROUSEL INTERACTIF</span>
          <h2 class="font-display text-2xl sm:text-4xl text-white uppercase tracking-tight">
            VOS 4 DISCIPLINES COLLECTIVES
          </h2>
        </div>
        <div class="flex items-center gap-2 text-xs font-display text-white/70 uppercase tracking-wider bg-white/5 border border-white/10 px-4 py-2 rounded-full">
          <span>💡 TOUCHER / CLIQUER SUR UNE CARTE POUR RETOURNER ↺</span>
        </div>
      </div>

      <!-- Carrousel Grille dynamique -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        <div 
          v-for="sport in sportsCollectifsData" 
          :key="sport.id"
          class="flip-card-container h-[540px] cursor-pointer group"
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
                <span class="px-3 py-1 rounded-full bg-[#111111]/90 border border-white/20 text-[#ff7043] font-display text-[10px] uppercase font-bold backdrop-blur-md">
                  {{ sport.badge }}
                </span>
                <span class="w-8 h-8 rounded-full bg-black/70 border border-white/20 text-white flex items-center justify-center font-display text-xs shadow-lg">
                  ↺
                </span>
              </div>

              <!-- Info Bas Recto -->
              <div class="relative z-10 space-y-3">
                <h3 class="font-display text-2xl sm:text-3xl text-white uppercase tracking-tight leading-none drop-shadow-md">
                  {{ sport.title }}
                </h3>
                <p class="text-xs text-white/80 font-body line-clamp-3 leading-relaxed">
                  {{ sport.shortDesc }}
                </p>
                
                <div class="pt-2 flex items-center justify-between text-xs font-display text-[#ff7043] font-bold uppercase tracking-wider border-t border-white/15">
                  <span>VOIR INFOS & HORAIRES</span>
                  <span>→</span>
                </div>
              </div>
            </div>

            <!-- VERSO (Face Arrière retournée) -->
            <div class="flip-card-back absolute inset-0 w-full h-full rounded-3xl overflow-hidden border border-[#ff7043]/50 bg-[#0d0d0d] p-6 sm:p-8 flex flex-col justify-between backface-hidden transform-rotate-y-180 shadow-2xl">
              <div class="space-y-4">
                <div class="flex items-center justify-between border-b border-white/10 pb-3">
                  <span class="font-display text-xs uppercase tracking-widest text-[#ff7043] font-bold">
                    DÉTAILS DISCIPLINE
                  </span>
                  <span class="text-xs font-display text-white/60">RETOURNER ↺</span>
                </div>

                <h3 class="font-display text-xl text-white uppercase tracking-tight">
                  {{ sport.title }}
                </h3>

                <p class="text-xs text-white/80 font-body leading-relaxed">
                  {{ sport.fullDesc }}
                </p>

                <!-- Lieu -->
                <div class="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <span class="text-[10px] font-display uppercase tracking-widest text-[#ff7043] font-bold block">LIEU D'ENTRAÎNEMENT</span>
                  <p class="text-xs text-white font-medium">{{ sport.location }}</p>
                  <p class="text-[10px] text-white/60">{{ sport.address }}</p>
                </div>

                <!-- Horaires -->
                <div class="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <span class="text-[10px] font-display uppercase tracking-widest text-[#ff7043] font-bold block">HORAIRES & CRÉNEAUX</span>
                  <ul class="space-y-1 text-xs text-white/90 font-body">
                    <li v-for="(h, idx) in sport.schedules" :key="idx" class="flex justify-between">
                      <span class="font-bold text-white">{{ h.day }} :</span>
                      <span class="text-[#ff7043] font-display font-bold">{{ h.time }}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- CTA Verso -->
              <div class="pt-3 border-t border-white/10">
                <router-link 
                  :to="sport.route"
                  @click.stop
                  class="block w-full text-center py-3 rounded-full bg-[#ff7043] hover:bg-white text-black font-display text-xs uppercase tracking-wider font-bold transition-all shadow-lg"
                >
                  DECOUVRIR LA PAGE DEDIEE →
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bouton d'action bas de page -->
      <div class="text-center pt-8 border-t border-white/10">
        <router-link 
          to="/particuliers#contact-particuliers"
          class="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white/10 hover:bg-[#ff7043] border border-white/20 text-white hover:text-black font-display text-xs uppercase tracking-wider font-bold transition-all duration-300"
        >
          <span>S'INSCRIRE OU DEMANDER UNE SEANCE D'ESSAI</span>
        </router-link>
      </div>

    </section>

    <!-- Footer universel -->
    <SiteFooter class="border-t border-white/10" />

  </div>
</template>

<script setup>
import { ref } from 'vue'
import NavbarHeader from '@/components/common/NavbarHeader.vue'
import SiteFooter from '@/components/common/SiteFooter.vue'

const flippedCards = ref({})

const flipCard = (id) => {
  flippedCards.value[id] = !flippedCards.value[id]
}

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

<template>
  <section class="relative bg-[#080808] text-[#F1E7D0] font-body select-none overflow-hidden py-12 sm:py-20">
    
    <!-- Texture Grain Argentique Brutaliste -->
    <div 
      class="absolute inset-0 z-0 opacity-25 mix-blend-overlay pointer-events-none bg-repeat"
      style="background-image: url('data:image/svg+xml,%3Csvg width=\'256\' height=\'256\' viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'heavyGrain\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.95\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23heavyGrain)\'/%3E%3C/svg%3E');"
      aria-hidden="true"
    ></div>

    <!-- ============================================================ -->
    <!-- 3 UNIVERS EN GRAND FORMAT PAYSAGE PLEIN ÉCRAN -->
    <!-- ============================================================ -->
    <div class="space-y-12 sm:space-y-16 relative z-10">
      
      <div 
        v-for="u in universData" 
        :key="u.id"
        class="univers-landscape-section relative w-full h-[56.25vw] min-h-[500px] sm:min-h-[620px] lg:min-h-[750px] max-h-[900px] flex items-center overflow-hidden border-y border-white/10 group transition-all duration-500 block"
      >
        <!-- Photo d'arrière-plan paysage 16:9 naturelle (1920x1080) -->
        <img 
          :src="u.bgImage" 
          :alt="u.title" 
          class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/35 to-black/20"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent"></div>

        <!-- Contenu superposé en paysage -->
        <div class="max-w-7xl mx-auto w-full px-6 sm:px-12 py-12 sm:py-16 relative z-10 flex flex-col justify-center h-full">
          
          <!-- Titre & Description de l'univers -->
          <div class="max-w-4xl space-y-4 sm:space-y-6">
            <h3 class="font-display text-3xl xs:text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-white uppercase tracking-tight leading-none drop-shadow-2xl">
              {{ u.title }}
            </h3>

            <p class="text-sm sm:text-lg lg:text-xl text-white/80 font-body leading-relaxed max-w-3xl drop-shadow-md">
              {{ u.description }}
            </p>

            <!-- Bouton Cliquable unique vers Page Dédiée -->
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
const universData = [
  {
    id: 'omnisport-outdoor',
    route: '/omnisport-outdoor',
    title: 'OMNISPORTS ET AVENTURE OUTDOOR',
    description: 'Aqua-training dynamique, escalade de bloc, VTT et sorties trail en montagne au cœur des magnifiques paysages alpins grenoblois.',
    bgImage: '/man-jumping-into-natural-pond.jpg',
    infoItems: [
      'Aqua Training',
      'Escalade Bloc',
      'VTT & Trail Isère'
    ]
  },
  {
    id: 'cross-heat',
    route: '/cross-heat',
    title: 'CROSS HEAT & STEPP TRAINING',
    description: 'Combinaison ultime du Cross Training et du Stepp Cardio. WODs intenses, haltérophilie, gymnastique et tempo cardio entraînant pour une préparation physique complète.',
    bgImage: '/crossheat.png',
    infoItems: [
      'Cross Training & WODs',
      'Stepp Cardio',
      'Haltérophilie & Core'
    ]
  },
  {
    id: 'combat',
    route: '/combat',
    title: 'SPORTS DE COMBAT ET MAITRISE',
    description: 'Boxe anglaise, arts martiaux et self-défense. Maîtrise des frappes, vitesse, stratégie et résistance physique sous la conduite d\'éducateurs diplômés d\'État.',
    bgImage: '/01-sitjemam-muay-thai.png',
    infoItems: [
      'Boxe Anglaise',
      'Arts Martiaux',
      'Self-Défense'
    ]
  }
]
</script>

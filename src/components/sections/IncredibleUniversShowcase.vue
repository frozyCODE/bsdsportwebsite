<template>
  <section class="relative bg-[#080808] text-[#F1E7D0] font-body select-none overflow-hidden py-12 sm:py-20">
    
    <!-- Texture Grain Argentique Brutaliste -->
    <div 
      class="absolute inset-0 z-0 opacity-25 mix-blend-overlay pointer-events-none bg-repeat"
      style="background-image: url('data:image/svg+xml,%3Csvg width=\'256\' height=\'256\' viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'heavyGrain\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.95\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23heavyGrain)\'/%3E%3C/svg%3E');"
      aria-hidden="true"
    ></div>

    <!-- ============================================================ -->
    <!-- UNIVERS EN GRAND FORMAT PAYSAGE PLEIN ÉCRAN -->
    <!-- ============================================================ -->
    <div class="space-y-12 sm:space-y-16 relative z-10">
      
      <div 
        v-for="u in universData" 
        :key="u.id"
        class="univers-landscape-section relative w-full h-[56.25vw] min-h-[500px] sm:min-h-[620px] lg:min-h-[750px] max-h-[900px] flex items-center overflow-hidden border-y border-white/10 transition-all duration-500 block"
      >
        <!-- Photo d'arrière-plan paysage 16:9 naturelle (1920x1080) -->
        <img 
          :src="u.bgImage" 
          :alt="u.title" 
          class="absolute inset-0 w-full h-full object-cover"
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
    title: 'OMNISPORTS',
    description: 'Escalade de bloc, VTT et sorties trail en montagne au cœur des magnifiques paysages alpins grenoblois.',
    bgImage: '/omnisport.jpeg',
    infoItems: [
      'Escalade Bloc',
      'VTT & Trail Isère',
      'Sports de Nature'
    ]
  },
  {
    id: 'cross-heat',
    route: '/cross-heat',
    title: 'CROSS HEAT & STEPP TRAINING',
    description: 'Combinaison ultime du Cross Training et du Stepp Cardio. WODs intenses, haltérophilie, gymnastique et tempo cardio entraînant pour une préparation physique complète.',
    bgImage: '/crossheat.jpeg',
    infoItems: [
      'Cross Training & WODs',
      'Stepp Cardio',
      'Haltérophilie & Core'
    ]
  },
  {
    id: 'combat',
    route: '/combat',
    title: 'SPORTS DE COMBAT',
    description: 'Boxe anglaise, arts martiaux et self-défense. Maîtrise des frappes, vitesse, stratégie et résistance physique sous la conduite d\'éducateurs diplômés d\'État.',
    bgImage: '/dojo.jpeg',
    infoItems: [
      'Boxe Anglaise',
      'Arts Martiaux',
      'Self-Défense'
    ]
  },
  {
    id: 'aquatraining',
    route: '/aquatraining',
    title: 'AQUA-TRAINING',
    description: 'Allie aquabike, renforcement musculaire et natation pour un entraînement complet. Séance proposée un dimanche par mois à la Piscine Flotibulle.',
    bgImage: '/piscine.jpeg',
    infoItems: [
      'Aquabike & Cardio',
      'Renforcement Musculaire',
      'Piscine Flotibulle'
    ]
  },
  {
    id: 'horizon-sport',
    route: '/horizon-sport',
    title: 'HORIZON SPORT : SEJOURS & VOYAGES',
    description: 'Stages Muay Thai en Thailande, expeditions trekking dans les Alpes, ocean bootcamps et raids multi-sports. Vivez des evasions sportives et culturelles inoubliables.',
    bgImage: '/montagne.jpg',
    infoItems: [
      'Stage Muay Thai Thailande',
      'Expedition Alpine Isere',
      'Ocean Bootcamp Beach'
    ]
  },
  {
    id: 'coaching-personnalise',
    route: '/programme-personnalise',
    title: 'PROGRAMMES & ACCOMPAGNEMENT PERSONNALISE',
    description: 'Suivi individuel par nos préparateurs physiques certifiés. Élaboration de votre plan d\'entraînement sur-mesure, objectifs d\'athlète ou de remise en forme.',
    bgImage: '',
    infoItems: [
      'Coaching Individuel',
      'Programmation Sur-Mesure',
      'Suivi Réathlétisation'
    ]
  }
]
</script>

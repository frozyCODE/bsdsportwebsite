<template>
  <section id="horizon-section" class="relative bg-[#080808] text-[#F1E7D0] font-body select-none overflow-hidden py-16 sm:py-24 border-t border-white/10">
    
    <!-- Texture de Grain Argentique Brutaliste -->
    <div 
      class="absolute inset-0 z-0 opacity-25 mix-blend-overlay pointer-events-none bg-repeat"
      style="background-image: url('data:image/svg+xml,%3Csvg width=\'256\' height=\'256\' viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'heavyGrain\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.95\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23heavyGrain)\'/%3E%3C/svg%3E');"
      aria-hidden="true"
    ></div>

    <!-- Radial Oranges & Ambient Glows -->
    <div class="absolute top-0 right-1/4 w-[600px] h-[400px] bg-[#ff7043]/10 blur-[150px] pointer-events-none" aria-hidden="true"></div>
    <div class="absolute bottom-0 left-1/4 w-[500px] h-[400px] bg-[#ff7043]/10 blur-[140px] pointer-events-none" aria-hidden="true"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
      
      <!-- EN-TETE HORIZON SPORT -->
      <div class="text-center max-w-4xl mx-auto space-y-4 mb-14 sm:mb-20">
        <div class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#141414] border border-[#ff7043]/40 text-[#ff7043] font-display text-[10px] sm:text-xs uppercase tracking-[0.25em] font-bold shadow-lg">
          <span class="w-2 h-2 rounded-full bg-[#ff7043] animate-pulse"></span>
          <span>HORIZON BY BSD SPORT · VOYAGES & SEJOURS ATHLETIQUES</span>
        </div>

        <h2 class="font-display text-3xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-none">
          EMBARQUEZ POUR NOS <br class="hidden sm:inline" />
          <span class="text-[#ff7043]">SEJOURS & VOYAGES</span> SPORTIFS
        </h2>

        <p class="text-xs sm:text-base lg:text-lg text-white/80 font-body max-w-2xl mx-auto leading-relaxed">
          Repoussez vos limites hors des frontieres. BSD Sport organise des expeditions et des bootcamps d'exception a l'etranger et en pleine nature, combinant entrainement intensif, aventure et immersion culturelle.
        </p>
      </div>

      <!-- FILTRES DE DESTINATIONS -->
      <div class="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
        <button
          v-for="cat in categories"
          :key="cat.id"
          @click="selectedCategory = cat.id"
          class="px-4 py-2 rounded-full font-display text-[11px] sm:text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer border"
          :class="selectedCategory === cat.id 
            ? 'bg-[#ff7043] text-black border-[#ff7043] font-bold shadow-lg scale-105' 
            : 'bg-white/5 hover:bg-white/10 text-white/70 border-white/15 hover:text-white'"
        >
          {{ cat.label }}
        </button>
      </div>

      <!-- GRILLE DES VOYAGES & EXPEDITIONS -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16 sm:mb-24">
        <div 
          v-for="trip in filteredTrips" 
          :key="trip.id"
          class="group relative bg-[#111111] border border-white/15 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:border-[#ff7043]/60 flex flex-col justify-between"
        >
          <!-- Photo du sejour avec Overlay -->
          <div class="relative h-64 sm:h-80 overflow-hidden">
            <img 
              :src="trip.image" 
              :alt="trip.title"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/40 to-transparent"></div>
            
            <!-- Badges Haut -->
            <div class="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
              <span class="px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-[#ff7043] font-display text-[10px] uppercase tracking-widest font-bold">
                {{ trip.tag }}
              </span>
              <span class="px-3 py-1.5 rounded-full bg-[#ff7043] text-black font-display text-[10px] uppercase tracking-widest font-bold shadow-md">
                {{ trip.duration }}
              </span>
            </div>

            <!-- Titre sur l'image -->
            <div class="absolute bottom-4 left-6 right-6">
              <span class="text-xs font-display uppercase tracking-widest text-[#ff7043] font-bold block mb-1">
                📍 {{ trip.location }}
              </span>
              <h3 class="font-display text-xl sm:text-3xl text-white uppercase tracking-tight leading-tight">
                {{ trip.title }}
              </h3>
            </div>
          </div>

          <!-- Corps de carte -->
          <div class="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
            <p class="text-xs sm:text-sm text-white/80 font-body leading-relaxed">
              {{ trip.description }}
            </p>

            <!-- Points Forts Inclus -->
            <div class="space-y-2 pt-4 border-t border-white/10">
              <span class="text-[10px] font-display uppercase tracking-wider text-white/50 block font-bold">Ce qui vous attend :</span>
              <div class="grid grid-cols-2 gap-2">
                <div 
                  v-for="(feature, idx) in trip.features" 
                  :key="idx"
                  class="flex items-center gap-2 text-xs text-white/90 font-body"
                >
                  <span class="w-1.5 h-1.5 rounded-full bg-[#ff7043] shrink-0"></span>
                  <span>{{ feature }}</span>
                </div>
              </div>
            </div>

            <!-- Footer Carte & CTA -->
            <div class="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div class="flex flex-col">
                <span class="text-[10px] uppercase font-display tracking-wider text-white/50">Prochaine Session</span>
                <span class="text-xs font-bold text-white font-body">{{ trip.nextSession }}</span>
              </div>

              <a 
                href="#contact-particuliers"
                @click.prevent="selectTripAndScroll(trip)"
                class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#ff7043] hover:bg-white text-black font-display text-[11px] uppercase tracking-wider font-bold transition-all duration-300 group/btn shadow-lg cursor-pointer"
              >
                <span>RESERVER CE VOYAGE</span>
                <span class="transition-transform group-hover/btn:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- BANNIERE ENGAGEMENT & POURQUOI PARTIR AVEC BSD -->
      <div class="bg-[#141414] border border-white/15 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
        <div class="absolute -right-20 -bottom-20 w-80 h-80 bg-[#ff7043]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div class="lg:col-span-7 space-y-4">
            <span class="text-xs font-display uppercase tracking-widest text-[#ff7043] font-bold">
              LA PROMESSE BSD HORIZON
            </span>
            <h3 class="font-display text-2xl sm:text-4xl text-white uppercase tracking-tight leading-tight">
              UNE IMMERSION SPORTIVE CLES EN MAIN & SANS COMPROMIS
            </h3>
            <p class="text-xs sm:text-base text-white/75 font-body leading-relaxed">
              Que vous veniez seul(e) ou en groupe, nos sejours sont concus pour vous faire vivre des aventures inoubliables. Encadrement professionnel par vos coachs diplomes BSD Sport, logistique complete, hebergements premium et esprit de groupe soude.
            </p>
          </div>

          <div class="lg:col-span-5 grid grid-cols-2 gap-4">
            <div class="bg-black/50 border border-white/10 p-4 rounded-2xl space-y-1">
              <span class="text-xl sm:text-2xl">🏆</span>
              <h4 class="font-display text-xs uppercase text-white font-bold">Coachs BSD</h4>
              <p class="text-[11px] text-white/60">Accompagnement continu sur le terrain</p>
            </div>
            <div class="bg-black/50 border border-white/10 p-4 rounded-2xl space-y-1">
              <span class="text-xl sm:text-2xl">🤝</span>
              <h4 class="font-display text-xs uppercase text-white font-bold">Esprit Tribu</h4>
              <p class="text-[11px] text-white/60">Cohesion et moments meprises</p>
            </div>
            <div class="bg-black/50 border border-white/10 p-4 rounded-2xl space-y-1">
              <span class="text-xl sm:text-2xl">🎒</span>
              <h4 class="font-display text-xs uppercase text-white font-bold">Logistique Totale</h4>
              <p class="text-[11px] text-white/60">Logement, transport & programmes</p>
            </div>
            <div class="bg-black/50 border border-white/10 p-4 rounded-2xl space-y-1">
              <span class="text-xl sm:text-2xl">⚡</span>
              <h4 class="font-display text-xs uppercase text-white font-bold">Depassement</h4>
              <p class="text-[11px] text-white/60">Progression garantie & souvenirs uniques</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const selectedCategory = ref('all')

const categories = [
  { id: 'all', label: 'Toutes les Expeditions' },
  { id: 'international', label: 'International & Thailande' },
  { id: 'montagne', label: 'Montagne & Trek' },
  { id: 'ocean', label: 'Surf & Ocean Bootcamp' }
]

const trips = [
  {
    id: 'expedition-alpine',
    category: 'montagne',
    title: 'EXPEDITION ALPINE & TREKKING BIVOUAC',
    location: 'Massif de Belledonne & Ecrins, Isere',
    tag: 'Montagne · Outdoor',
    duration: '4 Jours / 3 Nuits',
    image: '/horizon-1.jpg',
    description: 'Une aventure grandeur nature au depart de Grenoble. Trail running en altitude, franchissement de cols mythiques, bivouac sous les etoiles et cohesion autour du feu de camp.',
    features: [
      'Guide de haute montagne & Coach BSD',
      'Materiel de bivouac & Repas traiteur',
      'Renforcement fonctionnel en altitude',
      'Ascension de sommets alpins'
    ],
    nextSession: 'Ete 2026 (Session Juin & Juillet)'
  },
  {
    id: 'stage-bootcamp-nature',
    category: 'montagne',
    title: 'STAGE IMMERSION & HARD TRAINING OUTDOOR',
    location: 'Grands Espaces & Lacs Alpins',
    tag: 'Bootcamp · Performance',
    duration: '3 Jours / 2 Nuits',
    image: '/horizon-2.jpg',
    description: 'Immersion totale en pleine nature combinant ateliers de depassement, franchissement d\'obstacles et cohésion de groupe au cœur des montagnes.',
    features: [
      'Sessions d\'entrainement commando outdoor',
      'Traversees de lacs & Trail d\'altitude',
      'Hebergement en chalet traditionnel',
      'Encadrement dedie par l\'equipe BSD'
    ],
    nextSession: 'Printemps & Ete 2026'
  },
  {
    id: 'muay-thai-thailande',
    category: 'international',
    title: 'STAGE MUAY THAI & IMMERSION THAILANDE',
    location: 'Phuket & Chiang Mai, Thailande',
    tag: 'International · Immersion',
    duration: '10 Jours / 9 Nuits',
    image: '/horizon-3.jpg',
    description: 'Vivez l\'intensite d\'un entrainement traditionnel au coeur de la Thailande. Deux sessions quotidiennes en camp de boxe professionnel, preparation physique sur plage tropicale, recuperation et decouverte culturelle.',
    features: [
      'Entrainement biquotidien avec masters',
      'WODs sur la plage & Cardiotraining',
      'Hebergement & Transferts inclus',
      'Soins de recuperation & Massage thai'
    ],
    nextSession: 'Automne 2026 (Inscriptions ouvertes)'
  },
  {
    id: 'ocean-bootcamp',
    category: 'ocean',
    title: 'OCEAN BOOTCAMP & CROSS RETREAT',
    location: 'Cote Basque / Portugal',
    tag: 'Evasion · Surf & Fit',
    duration: '7 Jours / 6 Nuits',
    image: '/horizon-4.jpg',
    description: 'Combinez la puissance du Cross-Training avec l\'energie de l\'ocean. WODs explosifs sur le sable, cours de surf quotidien, nutrition sportive et session Mindset & Recovery.',
    features: [
      'WODs quotidiens sur la plage',
      'Cours de Surf tous niveaux avec pro',
      'Villa de standing vue ocean',
      'Ateliers dietetique & Recuperation'
    ],
    nextSession: 'Septembre 2026 (Places limitees)'
  }
]

const filteredTrips = computed(() => {
  if (selectedCategory.value === 'all') return trips
  return trips.filter(t => t.category === selectedCategory.value)
})

function selectTripAndScroll(trip) {
  const contactEl = document.getElementById('contact-particuliers') || document.getElementById('contact')
  if (contactEl) {
    contactEl.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

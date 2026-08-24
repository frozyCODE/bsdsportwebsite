<template>
  <section id="faq" class="relative py-20 sm:py-28 px-4 sm:px-8 bg-[#0d0d0d] text-[#F1E7D0] overflow-hidden min-h-screen">
    
    <!-- Texture de Grain Argentique Signature -->
    <div 
      class="fixed inset-0 z-0 opacity-35 mix-blend-overlay pointer-events-none bg-repeat"
      style="background-image: url('data:image/svg+xml,%3Csvg width=\'256\' height=\'256\' viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'heavyGrain\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.95\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23heavyGrain)\'/%3E%3C/svg%3E');"
      aria-hidden="true"
    ></div>

    <!-- Logo FAQ Spécifique en Filigrane Géant en Fond -->
    <div class="fixed top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] lg:w-[1200px] max-w-none pointer-events-none overflow-hidden z-0 opacity-[0.06] select-none" aria-hidden="true">
      <img 
        :src="'/01-logoFAQ.png'" 
        alt="BSD Logo FAQ Filigrane" 
        class="w-full h-auto object-contain select-none filter brightness-120"
      />
    </div>

    <div class="max-w-4xl mx-auto relative z-10">
      
      <!-- HERO HEADER (Sans accent sur Akira font-display) -->
      <div class="text-center mb-12 sm:mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111111] border border-white/15 text-white/80 font-display text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-5 shadow-sm">
          <span>QUESTIONS ET REPONSES FREQUENTES</span>
        </div>

        <h1 class="font-display text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white mb-4 leading-none">
          FOIRE AUX <span class="text-[#ff7043]">QUESTIONS</span>
        </h1>

        <p class="text-xs sm:text-base text-white/60 font-body max-w-xl mx-auto leading-relaxed">
          Tout ce que vous devez savoir sur nos séances, nos créneaux, les niveaux requis et les modalités d'inscription.
        </p>
      </div>

      <!-- BARRE DE RECHERCHE DYNAMIQUE -->
      <div class="mb-8 sm:mb-12 max-w-xl mx-auto relative">
        <div class="relative flex items-center">
          <input 
            v-model="searchQuery" 
            type="text" 
            placeholder="Rechercher une question, une activité..." 
            class="w-full py-3.5 pl-12 pr-4 bg-[#111111] border border-white/15 rounded-full text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#ff7043] transition-all shadow-xl font-body"
          />
          <svg class="w-5 h-5 absolute left-4 text-white/40 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <button 
            v-if="searchQuery" 
            @click="searchQuery = ''" 
            class="absolute right-4 text-xs text-white/40 hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>
      </div>

      <!-- FILTRES DE CATÉGORIES (Sleek Pills) -->
      <div class="flex items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-14 flex-wrap">
        <button 
          v-for="cat in categories" 
          :key="cat"
          @click="selectedCategory = cat"
          :class="[
            'px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-display text-[10px] sm:text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2',
            selectedCategory === cat 
              ? 'bg-white text-black font-bold shadow-lg' 
              : 'bg-[#111111] text-white/70 border border-white/10 hover:border-white/30 hover:text-white'
          ]"
        >
          <span 
            class="w-1.5 h-1.5 rounded-full transition-all"
            :class="selectedCategory === cat ? 'bg-[#ff7043]' : 'bg-white/30'"
          ></span>
          <span>{{ cat }}</span>
        </button>
      </div>

      <!-- LISTE DES ACCORDÉONS FAQ (Design Aéré sans blocs lourds) -->
      <div class="space-y-4">
        <div 
          v-for="(item, index) in filteredFaq" 
          :key="item.question"
          class="border-b border-white/10 pb-4 transition-all duration-300"
        >
          <button 
            @click="toggleItem(index)"
            class="w-full flex items-center justify-between gap-4 py-4 text-left group cursor-pointer focus:outline-none"
          >
            <span class="font-body text-base sm:text-lg font-semibold text-white group-hover:text-[#ff7043] transition-colors leading-snug">
              {{ item.question }}
            </span>

            <div 
              class="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:border-[#ff7043] group-hover:text-[#ff7043]"
              :class="openIndexes.includes(index) ? 'bg-[#ff7043] text-black border-[#ff7043] rotate-45' : 'bg-transparent text-white/60'"
            >
              <svg class="w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 5v14M5 12h14"/>
              </svg>
            </div>
          </button>

          <transition
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="opacity-0 -translate-y-2 max-h-0"
            enter-to-class="opacity-100 translate-y-0 max-h-[400px]"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="opacity-100 translate-y-0 max-h-[400px]"
            leave-to-class="opacity-0 -translate-y-2 max-h-0"
          >
            <div 
              v-show="openIndexes.includes(index)" 
              class="pt-1 pb-3 pr-10 text-xs sm:text-sm text-white/75 font-body leading-relaxed max-w-3xl"
            >
              {{ item.answer }}
            </div>
          </transition>
        </div>

        <div v-if="filteredFaq.length === 0" class="text-center py-12 text-white/50 font-body">
          Aucune question ne correspond à votre recherche "{{ searchQuery }}".
        </div>
      </div>

      <!-- CTA BAS DE PAGE DE CONTACT -->
      <div class="mt-16 sm:mt-24 p-8 sm:p-12 rounded-3xl bg-[#111111] border border-white/12 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-2xl">
        <div>
          <h3 class="font-display text-lg sm:text-xl uppercase text-white tracking-tight mb-2">
            UNE AUTRE QUESTION EN TETE ?
          </h3>
          <p class="text-xs sm:text-sm text-white/60 font-body">
            Nos éducateurs diplômés vous répondent directement en moins de 24h.
          </p>
        </div>

        <a 
          href="#contact" 
          @click.prevent="scrollToContact"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#ff7043] hover:bg-white text-black font-display text-xs tracking-wider uppercase shadow-xl transition-all duration-300 shrink-0 group"
        >
          <span>NOUS CONTACTER</span>
          <svg class="w-4 h-4 transition-transform group-hover:translate-x-1 stroke-current" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7-7 7M5 12h16"/>
          </svg>
        </a>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const categories = ['Tous', 'Séances & WODs', 'Niveaux & Publics', 'Inscriptions & Tarifs', 'Entreprises & Territoires']
const selectedCategory = ref('Tous')
const searchQuery = ref('')
const openIndexes = ref([0])

const faqData = [
  {
    category: 'Niveaux & Publics',
    question: 'Faut-il être un athlète confirmé pour rejoindre BSD Sport ?',
    answer: 'Absolument pas. Nos séances collectives, WODs et programmes sont conçus pour tous les niveaux. Chaque exercice est adapté (scaled) en fonction de vos capacités individuelles par nos coachs diplômés d\'État.'
  },
  {
    category: 'Séances & WODs',
    question: 'Comment rejoindre nos séances et s\'inscrire ?',
    answer: 'Rendez-vous directement dans le formulaire de contact en bas de page ou contactez le club. Notre équipe vous accompagnera pour valider votre inscription et choisir vos créneaux.'
  },
  {
    category: 'Séances & WODs',
    question: 'Quels équipements dois-je apporter lors d\'un entraînement ?',
    answer: 'Apportez simplement une tenue de sport confortable, des baskets de salle propres, une bouteille d\'eau et une serviette. Tout le matériel spécifique (cordes, kettlebells, steps, gants) est fourni par le club.'
  },
  {
    category: 'Inscriptions & Tarifs',
    question: 'Quels sont les créneaux des entraînements ?',
    answer: 'Les cours ont lieu du lundi au samedi avec des créneaux en soirée (18h30–20h30) et le samedi matin (10h30). Consultez les plannings détaillés sur les espaces dédiés.'
  },
  {
    category: 'Inscriptions & Tarifs',
    question: 'Peut-on s\'inscrire en cours d\'année ?',
    answer: 'Oui ! Les inscriptions sont ouvertes tout au long de l\'année. Les cotisations sont calculées au prorata des mois restants.'
  },
  {
    category: 'Inscriptions & Tarifs',
    question: 'Quels sont les modes de paiement acceptés ?',
    answer: 'Nous acceptons les règlements par carte bancaire, chèques, Pass Sport, chèques vacances ANC structure et les paiements échelonnés en plusieurs fois sans frais.'
  },
  {
    category: 'Entreprises & Territoires',
    question: 'Proposez-vous des interventions et événements pour les entreprises ?',
    answer: 'Oui. BSD Sport élabore des programmes de bien-être au travail, pauses actives, team building et offres CE sur-mesure pour les salariés et dirigeants.'
  },
  {
    category: 'Entreprises & Territoires',
    question: 'Comment soumettre un projet territorial ou partenarial ?',
    answer: 'Sélectionnez le profil "Territoires & Collectivités" dans notre formulaire de contact. Nos responsables d\'action sociale vous recontacteront sous 24h pour co-construire votre projet.'
  }
]

const filteredFaq = computed(() => {
  return faqData.filter(item => {
    const matchesCategory = selectedCategory.value === 'Tous' || item.category === selectedCategory.value
    const matchesSearch = !searchQuery.value || 
      item.question.toLowerCase().includes(searchQuery.value.toLowerCase()) || 
      item.answer.toLowerCase().includes(searchQuery.value.toLowerCase())
    return matchesCategory && matchesSearch
  })
})

function toggleItem(index) {
  const pos = openIndexes.value.indexOf(index)
  if (pos > -1) {
    openIndexes.value.splice(pos, 1)
  } else {
    openIndexes.value.push(index)
  }
}

function scrollToContact() {
  const el = document.getElementById('contact')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  } else {
    window.location.href = '/#contact'
  }
}
</script>

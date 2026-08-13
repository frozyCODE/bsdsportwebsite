<template>
  <div class="min-h-screen bg-[#080808] text-[#F1E7D0] font-body select-none relative overflow-hidden">
    
    <!-- Texture Grain Argentique Brutaliste -->
    <div 
      class="fixed inset-0 z-0 opacity-20 mix-blend-overlay pointer-events-none bg-repeat"
      style="background-image: url('data:image/svg+xml,%3Csvg width=\'256\' height=\'256\' viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'heavyGrain\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.95\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23heavyGrain)\'/%3E%3C/svg%3E');"
      aria-hidden="true"
    ></div>

    <!-- Header Navigation Globale -->
    <NavbarHeader />

    <!-- HERO SECTION TERRITOIRES -->
    <section class="relative pt-32 sm:pt-44 pb-20 sm:pb-28 px-4 sm:px-8 max-w-6xl mx-auto text-center z-10">
      <!-- Glow Orange Subtil -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[800px] h-[300px] bg-[#ff7043]/15 blur-[140px] pointer-events-none" aria-hidden="true"></div>

      <div class="relative z-10 space-y-6">
        <!-- Pill Badge -->
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/80 border border-white/20 text-[#ff7043] font-display text-[10px] sm:text-xs uppercase tracking-[0.2em] shadow-lg backdrop-blur-md font-bold">
          <span class="w-2 h-2 rounded-full bg-[#ff7043] animate-pulse"></span>
          <span>BSD TERRITOIRE DIVISION // ACTION SOCIALE & INCLUSION</span>
        </div>

        <!-- Titre Principal Akira Sans Accent avec Apostrophes -->
        <h1 class="font-display text-3xl xs:text-4xl sm:text-6xl lg:text-7xl xl:text-8xl uppercase tracking-tight text-white leading-none drop-shadow-2xl">
          ESPACE TERRITOIRES <span class="text-[#ff7043] block sm:inline mt-1 sm:mt-0">& SOCIAL</span>
        </h1>

        <!-- Sous-titre -->
        <p class="text-sm sm:text-base lg:text-lg text-white/80 font-body max-w-3xl mx-auto leading-relaxed px-2">
          BSD Sport déploie des actions sportives et de santé au cœur des collectivités iséroises. Un sport accessible à tous, vecteur de lien social, de santé et d'inclusion territoriales.
        </p>

        <!-- CTA Action Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a 
            href="#contact-terr" 
            @click.prevent="scrollToSection('contact-terr')"
            class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#ff7043] hover:bg-white text-black font-display text-xs tracking-wider uppercase shadow-xl transition-all duration-300 group font-bold"
          >
            <span>CO-CONSTRUIRE UN PROJET</span>
            <span class="transition-transform group-hover:translate-x-1">→</span>
          </a>

          <a 
            href="#actions" 
            @click.prevent="scrollToSection('actions')"
            class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white/10 hover:bg-[#ff7043] border border-white/20 hover:border-[#ff7043] text-white hover:text-black font-display text-xs uppercase tracking-wider backdrop-blur-md transition-all duration-300 font-bold"
          >
            <span>NOS ACTIONS SOCIALES</span>
          </a>
        </div>

        <!-- Key Metrics Bar Minimaliste Dark -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-white/10 pt-10 mt-12">
          <div class="p-4 rounded-2xl bg-[#111111] border border-white/10 text-center">
            <span class="font-display text-2xl sm:text-3xl text-[#ff7043] block font-bold">10+ ANS</span>
            <span class="text-[10px] sm:text-xs text-white/70 uppercase tracking-wider font-display">D'ANCRAGE ISEROIS</span>
          </div>
          <div class="p-4 rounded-2xl bg-[#111111] border border-white/10 text-center">
            <span class="font-display text-2xl sm:text-3xl text-white block font-bold">0</span>
            <span class="text-[10px] sm:text-xs text-white/70 uppercase tracking-wider font-display">CONDITION DE NIVEAU</span>
          </div>
          <div class="p-4 rounded-2xl bg-[#111111] border border-white/10 text-center">
            <span class="font-display text-2xl sm:text-3xl text-[#ff7043] block font-bold">9+</span>
            <span class="text-[10px] sm:text-xs text-white/70 uppercase tracking-wider font-display">PUBLICS ACCOMPAGNES</span>
          </div>
          <div class="p-4 rounded-2xl bg-[#111111] border border-white/10 text-center">
            <span class="font-display text-2xl sm:text-3xl text-white block font-bold">100%</span>
            <span class="text-[10px] sm:text-xs text-white/70 uppercase tracking-wider font-display">CO-CONSTRUIT LOCALEMENT</span>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 1: NOS ACTIONS SOCIALES SUR LE TERRITOIRE -->
    <section id="actions" class="relative z-10 py-16 sm:py-24 border-t border-white/10 bg-[#0a0a0a]">
      <div class="max-w-7xl mx-auto px-6 sm:px-12 space-y-12">
        
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <span class="text-[#ff7043] font-display text-xs uppercase tracking-widest block font-bold">
            IMPACT SOCIAL & ANCRAGE ISEROIS
          </span>
          <h2 class="font-display text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-none">
            NOS ACTIONS DISPOSITIFS
          </h2>
          <p class="text-sm sm:text-base text-white/70 font-body">
            Des programmes sportifs co-construits avec la Préfecture, la Métropole et les villes de l'Isère.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <!-- Card 1 -->
          <div class="bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#ff7043]/50 transition-all duration-300 group">
            <div class="space-y-4">
              <span class="w-10 h-10 rounded-xl bg-white/10 text-[#ff7043] flex items-center justify-center font-display text-sm font-bold">01</span>
              <h3 class="font-display text-lg text-white uppercase tracking-tight leading-snug group-hover:text-[#ff7043] transition-colors">
                SPORT SANTE & ALIMENTATION
              </h3>
              <p class="text-xs sm:text-sm text-white/70 font-body leading-relaxed">
                Ateliers de sensibilisation à la santé, nutrition équilibrée et activités physiques douces pour tous les âges.
              </p>
            </div>
            <a href="#contact-terr" @click.prevent="scrollToSection('contact-terr')" class="mt-6 inline-flex items-center gap-2 font-display text-xs text-[#ff7043] uppercase tracking-wider font-bold">
              <span>EN SAVOIR PLUS</span>
              <span class="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>

          <!-- Card 2 -->
          <div class="bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#ff7043]/50 transition-all duration-300 group">
            <div class="space-y-4">
              <span class="w-10 h-10 rounded-xl bg-white/10 text-[#ff7043] flex items-center justify-center font-display text-sm font-bold">02</span>
              <h3 class="font-display text-lg text-white uppercase tracking-tight leading-snug group-hover:text-[#ff7043] transition-colors">
                QUARTIERS PRIORITAIRES (QPV)
              </h3>
              <p class="text-xs sm:text-sm text-white/70 font-body leading-relaxed">
                Animations sportives de proximité au pied des immeubles pour créer du lien social et valoriser la jeunesse.
              </p>
            </div>
            <a href="#contact-terr" @click.prevent="scrollToSection('contact-terr')" class="mt-6 inline-flex items-center gap-2 font-display text-xs text-[#ff7043] uppercase tracking-wider font-bold">
              <span>EN SAVOIR PLUS</span>
              <span class="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>

          <!-- Card 3 -->
          <div class="bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#ff7043]/50 transition-all duration-300 group">
            <div class="space-y-4">
              <span class="w-10 h-10 rounded-xl bg-white/10 text-[#ff7043] flex items-center justify-center font-display text-sm font-bold">03</span>
              <h3 class="font-display text-lg text-white uppercase tracking-tight leading-snug group-hover:text-[#ff7043] transition-colors">
                SPORT SUR ORDONNANCE (APA)
              </h3>
              <p class="text-xs sm:text-sm text-white/70 font-body leading-relaxed">
                Prise en charge personnalisée de personnes souffrant d'affections de longue durée par des éducateurs spécialisés.
              </p>
            </div>
            <a href="#contact-terr" @click.prevent="scrollToSection('contact-terr')" class="mt-6 inline-flex items-center gap-2 font-display text-xs text-[#ff7043] uppercase tracking-wider font-bold">
              <span>EN SAVOIR PLUS</span>
              <span class="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>

          <!-- Card 4 -->
          <div class="bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#ff7043]/50 transition-all duration-300 group">
            <div class="space-y-4">
              <span class="w-10 h-10 rounded-xl bg-white/10 text-[#ff7043] flex items-center justify-center font-display text-sm font-bold">04</span>
              <h3 class="font-display text-lg text-white uppercase tracking-tight leading-snug group-hover:text-[#ff7043] transition-colors">
                INCLUSION & SENIORS
              </h3>
              <p class="text-xs sm:text-sm text-white/70 font-body leading-relaxed">
                Maintien de l'autonomie, ateliers mémoire/mobilité et rupture de l'isolement chez les personnes âgées.
              </p>
            </div>
            <a href="#contact-terr" @click.prevent="scrollToSection('contact-terr')" class="mt-6 inline-flex items-center gap-2 font-display text-xs text-[#ff7043] uppercase tracking-wider font-bold">
              <span>EN SAVOIR PLUS</span>
              <span class="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>

        </div>

      </div>
    </section>

    <!-- SECTION FORMULAIRE DE CONTACT TERRITOIRE -->
    <div id="contact-terr">
      <ContactSection />
    </div>

  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import NavbarHeader from '@/components/common/NavbarHeader.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import { useProfile } from '@/composables/useProfile'

const { setProfile } = useProfile()

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  // Pré-sélectionne le profil Territoires pour le formulaire de contact
  setProfile('territoires')
})
</script>

<template>
  <div class="particuliers-page min-h-screen bg-[#0d0d0d] text-[#F1E7D0] font-body relative overflow-x-hidden selection:bg-[#ff7043] selection:text-black">
    <!-- Navbar Site Officiel BSD -->
    <NavbarHeader />

    <!-- Texture de Grain Argentique Signature -->
    <div 
      class="fixed inset-0 z-0 opacity-35 mix-blend-overlay pointer-events-none bg-repeat"
      style="background-image: url('data:image/svg+xml,%3Csvg width=\'256\' height=\'256\' viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'heavyGrain\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.95\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23heavyGrain)\'/%3E%3C/svg%3E');"
      aria-hidden="true"
    ></div>

    <!-- Logo BSD Filigrane Géant avec Vidéo intégrée dans le logo BSD TM (Agdandi & Intensité adoucie) -->
    <div class="fixed top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] sm:w-[1700px] lg:w-[2400px] max-w-none aspect-square pointer-events-none overflow-hidden z-0 opacity-20 select-none" aria-hidden="true">
      <div 
        class="w-full h-full transform rotate-3 transition-transform duration-1000"
        style="
          -webkit-mask-image: url('/BSD LOGO PNG.png');
          mask-image: url('/BSD LOGO PNG.png');
          -webkit-mask-size: contain;
          mask-size: contain;
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-position: center;
          mask-position: center;
        "
      >
        <video 
          src="/4.mov" 
          autoplay 
          loop 
          muted 
          playsinline
          class="w-full h-full object-cover filter grayscale contrast-105 brightness-75 opacity-75 scale-105"
        ></video>
      </div>
    </div>

    <!-- DEDICATED HERO HEADER (Épuré sans cadre, sans encadrement) -->
    <section class="relative pt-32 sm:pt-44 pb-16 sm:pb-24 px-4 sm:px-8 max-w-5xl mx-auto text-center z-10">
      <!-- Glow orange subtil -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[800px] h-[300px] bg-[#ff7043]/15 blur-[140px] pointer-events-none" aria-hidden="true"></div>

      <div class="relative z-10">
        <!-- Titre principal -->
        <h1 class="font-display text-3xl xs:text-4xl sm:text-6xl lg:text-7xl xl:text-8xl uppercase tracking-tight text-white mb-6 leading-none drop-shadow-lg">
          ESPACE PARTICULIERS <span class="text-[#ff7043] block sm:inline mt-1 sm:mt-0">& ATHLETES</span>
        </h1>

        <p class="text-xs sm:text-base lg:text-lg text-white/80 font-body max-w-3xl mx-auto mb-10 leading-relaxed px-2">
          Trouvez la discipline qui resonne en vous parmi nos <strong class="text-white">univers d'exception & sejours Horizon</strong>. Du Cross Heat & Stepp Cardio aux sports de combat, de l'aventure outdoor jusqu'aux <strong class="text-[#ff7043]">voyages sportifs internationaux</strong>, vivez une pratique sans compromis.
        </p>

        <!-- CTA Action Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#univers-particuliers" 
            @click.prevent="scrollToSection('univers-particuliers')"
            class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#ff7043] hover:bg-white text-black font-display text-xs tracking-wider uppercase shadow-xl transition-all duration-300 group font-bold"
          >
            <span>EXPLORER NOS UNIVERS</span>
            <svg class="w-4 h-4 transition-transform group-hover:translate-y-1 stroke-current" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
            </svg>
          </a>

          <router-link 
            to="/horizon-sport" 
            class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white/10 hover:bg-[#ff7043] border border-white/20 hover:border-[#ff7043] text-white hover:text-black font-display text-xs uppercase tracking-wider backdrop-blur-md transition-all duration-300 font-bold group"
          >
            <span>VOYAGES & SEJOURS HORIZON</span>
          </router-link>

          <a 
            href="#contact-particuliers" 
            @click.prevent="scrollToSection('contact-particuliers')"
            class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white/5 hover:bg-white/20 border border-white/15 text-white/90 hover:text-white font-display text-xs uppercase tracking-wider backdrop-blur-md transition-all duration-300 font-bold"
          >
            <span>RESERVER UNE SEANCE</span>
          </a>
        </div>
      </div>
    </section>

    <!-- SECTION 1: L'Expérience Horizontale Inédite des 3 Univers BSD -->
    <div id="univers-particuliers" class="relative z-10">
      <IncredibleUniversShowcase />
    </div>

    <!-- Séparateur Orange Grainé -->
    <OrangeSeparatorSection />

    <!-- SECTION AVIS GOOGLE MEMBRES BSD SPORT -->
    <GoogleReviewsSection />

    <!-- SECTION 2: Contact Form pour Particuliers (Rejoignez-nous) -->
    <div id="contact-particuliers" class="relative z-10">
      <ContactSection />
    </div>

    <!-- Footer Universel (Automatiquement dans ContactSection) -->
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import NavbarHeader from '@/components/common/NavbarHeader.vue'
import IncredibleUniversShowcase from '@/components/sections/IncredibleUniversShowcase.vue'
import OrangeSeparatorSection from '@/components/sections/OrangeSeparatorSection.vue'
import GoogleReviewsSection from '@/components/sections/GoogleReviewsSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import { useProfile } from '@/composables/useProfile'

const { setProfile } = useProfile()

onMounted(() => {
  setProfile('particuliers')
})

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

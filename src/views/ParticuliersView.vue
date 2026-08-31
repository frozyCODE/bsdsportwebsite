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
          ESPACE <span class="chrome-silver-text">PARTICULIERS</span> <span class="text-[#ff7043] block sm:inline mt-1 sm:mt-0">& ATHLETES</span>
        </h1>

        <p class="text-xs sm:text-base lg:text-lg text-white/80 font-body max-w-3xl mx-auto mb-10 leading-relaxed px-2">
          Trouvez la discipline qui resonne en vous parmi nos <strong class="text-white">univers d'exception & sejours Horizon</strong>. Du Cross Heat & Stepp Cardio aux sports de combat, vivez une pratique sans compromis.
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
        </div>
      </div>
    </section>

    <!-- BANDEAU RÈGLEMENT INTÉRIEUR & TARIFS (Épuré sans contour orange ni badge) -->
    <section class="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 mt-4 mb-12">
      <div class="p-6 sm:p-8 rounded-3xl bg-[#111111]/90 border border-white/15 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left transition-all duration-300">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-center shrink-0 text-[#ff7043]">
            <svg class="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
          </div>
          <div>
            <h3 class="font-display text-lg sm:text-xl uppercase text-white tracking-tight">
              REGLEMENT INTERIEUR & TARIFS DU CLUB
            </h3>
            <p class="text-xs sm:text-sm text-white/70 font-body">
              Retrouvez l'intégralité des tarifs, modalités de paiement et règles du club.
            </p>
          </div>
        </div>

        <a 
          href="/reglement-interieur.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#ff7043] hover:bg-white text-black font-display text-xs uppercase tracking-wider font-bold shadow-xl transition-all duration-300 shrink-0 group"
        >
          <span>TELECHARGER LE REGLEMENT (PDF)</span>
          <svg class="w-4 h-4 transition-transform group-hover:translate-x-1 stroke-current" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7-7 7M5 12h16"/>
          </svg>
        </a>
      </div>
    </section>

    <!-- SECTION 1: L'Expérience des Univers BSD -->
    <div id="univers-particuliers" class="relative z-10">
      <IncredibleUniversShowcase />
    </div>

    <!-- Séparateur Orange Grainé -->
    <OrangeSeparatorSection />

    <!-- SECTION AVIS GOOGLE MEMBRES BSD SPORT -->
    <GoogleReviewsSection />

    <!-- SECTION 3: Contact Form pour Particuliers (Rejoignez-nous) -->
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

<style scoped>
/* CONTOUR & LUEUR PARFAITS — DÉGRADÉ CHROMÉ SILVER FLUIDE (NON TRONQUÉ) */
.chrome-silver-text {
  position: relative;
  display: inline-block;
  color: #ffffff;
  background: linear-gradient(
    135deg,
    #ffffff 0%,
    #e2e8f0 25%,
    #ffffff 45%,
    #94a3b8 70%,
    #cbd5e1 85%,
    #ffffff 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.7);
  padding-right: 0.08em;
  filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.95)) drop-shadow(0 0 2px rgba(255, 255, 255, 0.8));
}
</style>

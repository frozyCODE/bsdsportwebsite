<template>
  <div class="min-h-screen bg-[#080808] text-[#F1E7D0] relative overflow-x-hidden font-body select-none">
    
    <!-- Texture de Grain Argentique -->
    <div 
      class="fixed inset-0 z-0 opacity-25 mix-blend-overlay pointer-events-none bg-repeat"
      style="background-image: url('data:image/svg+xml,%3Csvg width=\'256\' height=\'256\' viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'heavyGrain\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.95\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23heavyGrain)\'/%3E%3C/svg%3E');"
      aria-hidden="true"
    ></div>

    <!-- IMAGE DE SPORT EN ARRIÈRE-PLAN DU HERO (Considérablement plus visible) -->
    <div class="absolute top-0 inset-x-0 h-[650px] sm:h-[800px] pointer-events-none overflow-hidden select-none z-0">
      <img 
        src="/crossheat.jpeg" 
        alt="Cross Training Fond Hero" 
        class="w-full h-full object-cover object-center filter brightness-95 contrast-110 opacity-70"
      />
      <!-- Fondu sombre progressif léger vers le bas -->
      <div class="absolute inset-0 bg-gradient-to-b from-[#080808]/20 via-[#080808]/50 to-[#080808]"></div>
    </div>

    <!-- Logo BSD Filigrane Géant avec Vidéo (En dessous de l'image, apparaît et défile avec le scroll) -->
    <div class="absolute top-[320px] left-1/2 -translate-x-1/2 w-[1100px] sm:w-[1700px] lg:w-[2200px] max-w-none aspect-square pointer-events-none overflow-hidden z-0 opacity-25 select-none" aria-hidden="true">
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

    <!-- NavbarHeader principale -->
    <NavbarHeader />

    <!-- BOUTON RETOUR FLÈCHE SIMPLE EN HAUT À DROITE -->
    <div class="pt-24 sm:pt-28 px-6 sm:px-12 max-w-7xl mx-auto flex justify-end relative z-20">
      <router-link 
        to="/particuliers" 
        class="inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#111111] border border-white/15 text-white/80 hover:text-white hover:border-white/40 transition-all duration-300 shadow-lg"
        title="Retour aux univers"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </router-link>
    </div>

    <!-- HERO HEADER SANCTIONNEL -->
    <section class="relative pt-4 sm:pt-8 pb-12 sm:pb-16 px-4 sm:px-8 max-w-4xl mx-auto text-center z-10">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111111] border border-white/15 text-[#ff7043] font-display text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-6 shadow-sm font-bold">
        <span>2 CRENEAUX HEBDOMADAIRES</span>
      </div>

      <h1 class="font-display text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white mb-6 leading-none">
        CROSS TRAINING <br />
        <span class="chrome-silver-text text-[#ff7043] block mt-2">CARDIO & RENFORCEMENT</span>
      </h1>

      <p class="text-base sm:text-xl text-white/80 font-body max-w-3xl mx-auto leading-relaxed">
        Allie cardio, renforcement musculaire et exercices fonctionnels pour un entraînement complet.
      </p>
    </section>

    <!-- SECTION LIEU & HORAIRES EPUREES -->
    <section class="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
      
      <!-- ENTÊTE LIEU & RESERVATION (Optimisé Centré & Mobile Responsive) -->
      <div class="p-6 sm:p-10 rounded-3xl bg-[#111111] border border-white/15 shadow-2xl mb-12 flex flex-col md:flex-row items-center text-center md:text-left justify-between gap-6">
        <div class="flex flex-col items-center md:items-start">
          <span class="font-display text-xs uppercase tracking-widest text-[#ff7043] font-bold block mb-1">COURS ADULTES</span>
          <h3 class="font-display text-2xl sm:text-4xl text-white uppercase leading-none">
            PARC AUGUSTE BOREL
          </h3>
          <a 
            href="https://maps.apple.com/?address=Mont%C3%A9e+Georges+Tord,38800,Le+Pont-de-Claix,France&q=Parc+Auguste+Borel"
            target="_blank"
            rel="noopener noreferrer"
            class="group inline-block mt-2"
          >
            <p class="text-xs sm:text-sm text-white/80 font-body flex items-center justify-center md:justify-start gap-2 group-hover:text-[#ff7043] transition-colors">
              <svg class="w-4 h-4 text-[#ff7043] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span class="underline underline-offset-4 decoration-white/30 group-hover:decoration-[#ff7043]">Montée Georges Tord, 38800 Pont de Claix</span>
              <span class="text-[10px] font-display uppercase tracking-widest text-[#ff7043] font-bold shrink-0">ITINERAIRE →</span>
            </p>
          </a>
        </div>

        <a 
          href="tel:+33751622992" 
          class="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#ff7043] hover:bg-white text-black font-display text-xs uppercase tracking-wider font-bold shadow-xl transition-all duration-300 w-full md:w-auto shrink-0"
        >
          <span>RESERVER AU 07 51 62 29 92</span>
        </a>
      </div>

      <!-- BLOC HORAIRES ET CRÉNEAUX HEBDOMADAIRES -->
      <div class="space-y-8">
        
        <div class="text-center max-w-xl mx-auto space-y-2">
          <span class="font-display text-xs uppercase tracking-widest text-[#ff7043] font-bold">ORGANISATION</span>
          <h2 class="font-display text-2xl sm:text-4xl uppercase text-white tracking-tight leading-none">
            HORAIRES DES COURS
          </h2>
          <p class="text-xs sm:text-sm text-white/60 font-body">
            Deux créneaux hebdomadaires dispensés au Parc Auguste Borel.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          
          <!-- Créneau 1: Jeudi -->
          <div class="p-6 sm:p-8 rounded-3xl bg-[#111111] border border-white/15 flex flex-col justify-between space-y-4 text-center sm:text-left">
            <div>
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white font-display text-[10px] uppercase font-bold mb-3">
                <span>ADULTES MIXTE</span>
              </div>
              <h3 class="font-display text-xl sm:text-2xl text-white uppercase tracking-tight">
                JEUDI
              </h3>
              <p class="text-xs text-white/70 font-body mt-2">
                Créneau mixte adulte de plus de 16 ans uniquement.
              </p>
            </div>

            <div class="pt-4 border-t border-white/10 flex items-center justify-between">
              <span class="text-xs text-white/50 font-body">Horaires</span>
              <span class="font-display text-base text-[#ff7043] font-bold">19H30 20H30</span>
            </div>
          </div>

          <!-- Créneau 2: Dimanche -->
          <div class="p-6 sm:p-8 rounded-3xl bg-[#111111] border border-white/15 flex flex-col justify-between space-y-4 text-center sm:text-left">
            <div>
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff7043]/15 text-[#ff7043] font-display text-[10px] uppercase font-bold mb-3">
                <span>SPECIALE FEMMES</span>
              </div>
              <h3 class="font-display text-xl sm:text-2xl text-white uppercase tracking-tight">
                DIMANCHE
              </h3>
              <p class="text-xs text-white/70 font-body mt-2">
                Séance réservée exclusivement au public féminin.
              </p>
            </div>

            <div class="pt-4 border-t border-white/10 flex items-center justify-between">
              <span class="text-xs text-white/50 font-body">Horaires</span>
              <span class="font-display text-base text-[#ff7043] font-bold">11H00 12H00</span>
            </div>
          </div>

        </div>

        <!-- ANNONCE ET CONTACT -->
        <div class="text-center pt-8 border-t border-white/10 max-w-2xl mx-auto space-y-4 px-2">
          <div class="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-xs font-display text-white/80 uppercase tracking-wider font-bold leading-relaxed">
            RESTEZ INFORMES ! DE NOUVEAUX CRENEAUX SERONT BIENTOT PROPOSES
          </div>

          <p class="text-xs sm:text-sm text-white/70 font-body pt-2">
            Pour plus d'informations ou réserver votre séance, contactez-nous directement au <strong class="text-white">07 51 62 29 92</strong>.
          </p>

          <div>
            <router-link 
              to="/particuliers#contact-particuliers" 
              class="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white/10 hover:bg-[#ff7043] border border-white/20 text-white hover:text-black font-display text-xs uppercase tracking-wider font-bold transition-all duration-300 w-full sm:w-auto"
            >
              <span>CONTACTER LE CLUB</span>
            </router-link>
          </div>
        </div>

      </div>

    </section>

    <!-- Footer universel -->
    <SiteFooter class="border-t border-white/10" />

  </div>
</template>

<script setup>
import NavbarHeader from '@/components/common/NavbarHeader.vue'
import SiteFooter from '@/components/common/SiteFooter.vue'
</script>

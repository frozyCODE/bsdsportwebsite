<template>
  <div class="min-h-screen bg-[#080808] text-[#F1E7D0] relative overflow-x-hidden font-body select-none">
    
    <!-- Texture de Grain Argentique -->
    <div 
      class="fixed inset-0 z-0 opacity-25 mix-blend-overlay pointer-events-none bg-repeat"
      style="background-image: url('data:image/svg+xml,%3Csvg width=\'256\' height=\'256\' viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'heavyGrain\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.95\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23heavyGrain)\'/%3E%3C/svg%3E');"
      aria-hidden="true"
    ></div>

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

    <!-- HERO HEADER SANCTIONNEL EN COULEURS NATURELLES ET NETTES -->
    <section class="relative pt-4 sm:pt-8 pb-12 sm:pb-16 px-4 sm:px-8 max-w-5xl mx-auto text-center z-10">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111111] border border-white/15 text-[#ff7043] font-display text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-6 shadow-sm font-bold">
        <span>SEANCE PROPOSEE UN DIMANCHE PAR MOIS</span>
      </div>

      <h1 class="font-display text-4xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-white mb-6 leading-none">
        AQUATRAINING <br />
        <span class="chrome-silver-text text-[#ff7043] block mt-2">CARDIO & RENFORCEMENT</span>
      </h1>

      <p class="text-base sm:text-xl text-white/80 font-body max-w-3xl mx-auto leading-relaxed">
        Allie aquabike, renforcement musculaire et natation pour un entraînement complet.
      </p>
    </section>

    <!-- SECTION PRÉSENTATION NETTE & DISCIPLINE (Typographie et Horaires Pures) -->
    <section class="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
      
      <!-- ENTÊTE LIEU & RESERVATION PURE SANS IMAGE -->
      <div class="p-8 sm:p-10 rounded-3xl bg-[#111111] border border-white/15 shadow-2xl mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <span class="font-display text-xs uppercase tracking-widest text-[#ff7043] font-bold block mb-1">COURS ADULTES</span>
          <h3 class="font-display text-2xl sm:text-4xl text-white uppercase leading-none">
            PISCINE FLOTIBULLE
          </h3>
          <a 
            href="https://maps.apple.com/?address=83+Cours+Saint-Andr%C3%A9,38800,Le+Pont-de-Claix,France&q=Piscine+Flotibulle"
            target="_blank"
            rel="noopener noreferrer"
            class="text-left group inline-block"
          >
            <p class="text-xs sm:text-sm text-white/80 font-body mt-2 flex items-center gap-2 group-hover:text-[#ff7043] transition-colors">
              <svg class="w-4 h-4 text-[#ff7043] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span class="underline underline-offset-4 decoration-white/30 group-hover:decoration-[#ff7043]">83 Cr Saint-André, 38800 Le Pont-de-Claix</span>
              <span class="text-[10px] font-display uppercase tracking-widest text-[#ff7043] font-bold">ITINERAIRE →</span>
            </p>
          </a>
        </div>

        <a 
          href="tel:+33751622992" 
          class="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#ff7043] hover:bg-white text-black font-display text-xs uppercase tracking-wider font-bold shadow-xl transition-all duration-300 shrink-0"
        >
          <span>RESERVER AU 07 51 62 29 92</span>
        </a>
      </div>

      <!-- BLOC HORAIRES ET CRÉNEAUX DIMANCHE (Nette et Sobre) -->
      <div class="space-y-8">
        
        <div class="text-center max-w-xl mx-auto space-y-2">
          <span class="font-display text-xs uppercase tracking-widest text-[#ff7043] font-bold">ORGANISATION</span>
          <h2 class="font-display text-2xl sm:text-4xl uppercase text-white tracking-tight leading-none">
            HORAIRES DU DIMANCHE
          </h2>
          <p class="text-xs sm:text-sm text-white/60 font-body">
            Deux créneaux dédiés un dimanche par mois à la Piscine Flotibulle.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          
          <!-- Créneau 1: Femmes -->
          <div class="p-8 rounded-3xl bg-[#111111] border border-white/15 flex flex-col justify-between space-y-4">
            <div>
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff7043]/15 text-[#ff7043] font-display text-[10px] uppercase font-bold mb-3">
                <span>SPECIALE FEMMES</span>
              </div>
              <h3 class="font-display text-xl sm:text-2xl text-white uppercase tracking-tight">
                CRENEAU FEMMES
              </h3>
              <p class="text-xs text-white/70 font-body mt-2">
                Séance réservée exclusivement au public féminin.
              </p>
            </div>

            <div class="pt-4 border-t border-white/10 flex items-center justify-between">
              <span class="text-xs text-white/50 font-body">Horaires</span>
              <span class="font-display text-base text-[#ff7043] font-bold">14H30 17H00</span>
            </div>
          </div>

          <!-- Créneau 2: Mixte -->
          <div class="p-8 rounded-3xl bg-[#111111] border border-white/15 flex flex-col justify-between space-y-4">
            <div>
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white font-display text-[10px] uppercase font-bold mb-3">
                <span>ADULTES MIXTE</span>
              </div>
              <h3 class="font-display text-xl sm:text-2xl text-white uppercase tracking-tight">
                CRENEAU ADULTES
              </h3>
              <p class="text-xs text-white/70 font-body mt-2">
                Créneau mixte adulte de plus de 16 ans uniquement.
              </p>
            </div>

            <div class="pt-4 border-t border-white/10 flex items-center justify-between">
              <span class="text-xs text-white/50 font-body">Horaires</span>
              <span class="font-display text-base text-[#ff7043] font-bold">17H30 20H00</span>
            </div>
          </div>

        </div>

        <!-- CONTACT INFOS EN BAS -->
        <div class="text-center pt-8 border-t border-white/10 max-w-2xl mx-auto space-y-4">
          <p class="text-xs sm:text-sm text-white/70 font-body">
            Pour plus d'informations ou réserver votre créneau, contactez-nous directement au <strong class="text-white">07 51 62 29 92</strong> ou via notre formulaire de contact.
          </p>

          <div>
            <router-link 
              to="/particuliers#contact-particuliers" 
              class="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/10 hover:bg-[#ff7043] border border-white/20 text-white hover:text-black font-display text-xs uppercase tracking-wider font-bold transition-all duration-300"
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

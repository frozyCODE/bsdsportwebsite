<template>
  <div class="min-h-screen bg-[#080808] text-[#F1E7D0] font-body select-none relative overflow-hidden flex flex-col justify-between">
    
    <!-- Texture Grain Argentique Brutaliste -->
    <div 
      class="fixed inset-0 z-0 opacity-20 mix-blend-overlay pointer-events-none bg-repeat"
      style="background-image: url('data:image/svg+xml,%3Csvg width=\'256\' height=\'256\' viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'heavyGrain\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.95\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23heavyGrain)\'/%3E%3C/svg%3E');"
      aria-hidden="true"
    ></div>

    <!-- Logo BSD Filigrane Géant en fond léger -->
    <div 
      class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1100px] lg:w-[1500px] aspect-square pointer-events-none opacity-[0.04] mix-blend-screen bg-no-repeat bg-center bg-contain z-0 select-none"
      style="background-image: url('/BSD LOGO PNG.png');"
      aria-hidden="true"
    ></div>

    <!-- Header Navigation Globale -->
    <NavbarHeader />

    <!-- BOUTON RETOUR FLÈCHE EN HAUT À DROITE -->
    <div class="pt-24 sm:pt-28 px-6 sm:px-12 max-w-7xl mx-auto flex justify-end relative z-20 w-full">
      <router-link 
        to="/" 
        class="inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#111111] border border-white/15 text-white/80 hover:text-white hover:border-white/40 transition-all duration-300 shadow-lg"
        title="Retour à l'accueil"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </router-link>
    </div>

    <!-- MAIN EMPTY STATE AVEC ICONE DE TRAVAUX (En cours de construction) -->
    <main class="relative z-10 my-auto py-24 sm:py-32 px-6 max-w-3xl mx-auto text-center space-y-6">
      
      <!-- Icône de Travaux / Construction -->
      <div class="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-3xl bg-[#111111] border border-white/15 flex items-center justify-center text-[#ff7043] shadow-2xl relative">
        <svg class="w-10 h-10 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      </div>

      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111111] border border-white/15 text-[#ff7043] font-display text-[10px] sm:text-xs uppercase tracking-[0.2em] shadow-sm font-bold">
        <span>ESPACE EN COURS DE CONSTRUCTION</span>
      </div>

      <h1 class="font-display text-3xl sm:text-5xl uppercase tracking-tight text-white leading-tight">
        BSD SPORT TERRITOIRES
      </h1>

      <p class="text-sm sm:text-base text-white/70 font-body max-w-lg mx-auto leading-relaxed">
        L'espace dédié aux projets territoriaux, dispositifs d'inclusion sociale et partenariats avec les collectivités est actuellement en cours de finalisation. Revenez bientôt.
      </p>

      <div class="pt-4">
        <router-link 
          to="/"
          class="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#ff7043] hover:bg-white text-black font-display text-xs uppercase tracking-wider font-bold shadow-xl transition-all duration-300"
        >
          <span>RETOUR A L'ACCUEIL</span>
        </router-link>
      </div>
    </main>

    <!-- Footer universel -->
    <SiteFooter class="border-t border-white/10 relative z-10" />

  </div>
</template>

<script setup>
import NavbarHeader from '@/components/common/NavbarHeader.vue'
import SiteFooter from '@/components/common/SiteFooter.vue'
</script>

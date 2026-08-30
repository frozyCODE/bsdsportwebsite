<template>
  <div class="horizon-page min-h-screen bg-[#080808] text-[#F1E7D0] relative overflow-x-hidden font-body select-none flex flex-col justify-between">
    
    <!-- Texture Grain Argentique Brutaliste -->
    <div 
      class="fixed inset-0 z-0 opacity-25 mix-blend-overlay pointer-events-none bg-repeat"
      style="background-image: url('data:image/svg+xml,%3Csvg width=\'256\' height=\'256\' viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'heavyGrain\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.95\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23heavyGrain)\'/%3E%3C/svg%3E');"
      aria-hidden="true"
    ></div>

    <!-- IMAGE DE SPORT EN ARRIÈRE-PLAN DU HERO (Considérablement plus visible) -->
    <div class="absolute top-0 inset-x-0 h-[650px] sm:h-[800px] pointer-events-none overflow-hidden select-none z-0">
      <img 
        src="/montagne.jpg" 
        alt="Horizon Sport Fond Hero" 
        class="w-full h-full object-cover object-center filter brightness-95 contrast-110 opacity-70"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-[#080808]/20 via-[#080808]/50 to-[#080808]"></div>
    </div>

    <!-- Logo BSD Filigrane Géant avec Vidéo -->
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

    <!-- Header Principal -->
    <NavbarHeader />

    <!-- BOUTON RETOUR FLÈCHE SIMPLE EN HAUT À DROITE -->
    <div class="pt-24 sm:pt-28 px-6 sm:px-12 max-w-7xl mx-auto flex justify-end relative z-20 w-full">
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

    <!-- CONTENU PRINCIPAL DE LA PAGE HORIZON SPORT (Séjours et voyages) -->
    <main class="relative z-10 pt-4 pb-12">
      <HorizonSection />
    </main>

    <!-- Footer universel -->
    <SiteFooter class="border-t border-white/10" />

  </div>
</template>

<script setup>
import NavbarHeader from '@/components/common/NavbarHeader.vue'
import SiteFooter from '@/components/common/SiteFooter.vue'
import HorizonSection from '@/components/sections/HorizonSection.vue'
</script>

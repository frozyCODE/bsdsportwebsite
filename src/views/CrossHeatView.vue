<template>
  <div class="min-h-screen bg-[#080808] text-[#F1E7D0] relative overflow-hidden font-body select-none flex flex-col justify-between">
    
    <!-- Texture Grain Argentique -->
    <div 
      class="fixed inset-0 z-0 opacity-20 mix-blend-overlay pointer-events-none bg-repeat"
      style="background-image: url('data:image/svg+xml,%3Csvg width=\'256\' height=\'256\' viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'heavyGrain\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.95\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23heavyGrain)\'/%3E%3C/svg%3E');"
      aria-hidden="true"
    ></div>

    <NavbarHeader />

    <!-- Sticky Sub-Nav avec Bouton Retour -->
    <div class="sticky top-0 z-40 backdrop-blur-xl bg-[#080808]/90 border-b border-white/15 px-6 py-4">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <router-link to="/particuliers" class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-[#ff7043] text-white hover:text-black font-display text-xs uppercase tracking-wider transition-all font-bold">
          ← RETOUR AUX UNIVERS
        </router-link>
        <span class="font-display text-xs uppercase tracking-[0.2em] text-[#ff7043] font-bold">CROSS HEAT ET PREPARATION</span>
      </div>
    </div>

    <!-- MAIN EMPTY STATE -->
    <main class="relative z-10 my-auto py-24 px-6 max-w-4xl mx-auto text-center space-y-8">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/80 border border-white/20 text-[#ff7043] font-display text-[10px] sm:text-xs uppercase tracking-[0.2em] shadow-lg backdrop-blur-md font-bold">
        <span class="w-2 h-2 rounded-full bg-[#ff7043] animate-pulse"></span>
        <span>ESPACE DEDIE EN COURS DE PREPARATION</span>
      </div>

      <h1 class="font-display text-3xl sm:text-6xl uppercase tracking-tight text-white leading-tight">
        CETTE PAGE EST ACTUELLEMENT VIDE
      </h1>

      <p class="text-sm sm:text-base text-white/70 font-body max-w-xl mx-auto leading-relaxed">
        L'espace dédié à l'univers Cross Heat & Stepp Training est en cours de finalisation.
      </p>

      <div class="pt-4">
        <router-link 
          to="/particuliers"
          class="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#ff7043] hover:bg-white text-black font-display text-xs tracking-wider uppercase shadow-xl transition-all duration-300 font-bold"
        >
          <span>RETOUR A LA PAGE PARTICULIERS</span>
          <span>→</span>
        </router-link>
      </div>
    </main>

    <!-- Footer minimaliste -->
    <footer class="relative z-10 py-6 border-t border-white/10 text-center text-xs text-white/40 font-mono">
      BSD SPORT © 2026 — CAMPUS MULTISPORTS PONT-DE-CLAIX
    </footer>

  </div>
</template>

<script setup>
import NavbarHeader from '@/components/common/NavbarHeader.vue'
</script>

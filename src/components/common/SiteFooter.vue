<template>
  <footer class="w-full bg-transparent border-t border-white/10 py-8 px-4 sm:px-8 text-white/60 text-xs font-body relative z-20">
    <div class="w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
      
      <!-- Copyright & Info -->
      <div class="flex flex-wrap items-center justify-center sm:justify-start gap-2">
        <span class="text-white font-medium">© {{ new Date().getFullYear() }} BSD Sport</span>
        <span class="text-white/30">•</span>
        <span class="text-white/50">Grenoble · Pont-de-Claix · Isère</span>
      </div>

      <!-- Liens légaux simples -->
      <div class="flex flex-wrap items-center justify-center gap-5 sm:gap-6 text-white/70 font-medium">
        <router-link to="/mentions-legales" class="hover:text-[#ff7043] transition-colors">
          Mentions légales
        </router-link>
        <router-link to="/plan-du-site" class="hover:text-[#ff7043] transition-colors">
          Plan du site
        </router-link>
        <router-link to="/politique-de-confidentialite" class="hover:text-[#ff7043] transition-colors">
          Politique de confidentialité
        </router-link>
        <a 
          href="/reglement-interieur.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="hover:text-[#ff7043] transition-colors"
        >
          Règlement intérieur
        </a>
      </div>

    </div>
  </footer>
</template>

<script setup>
</script>

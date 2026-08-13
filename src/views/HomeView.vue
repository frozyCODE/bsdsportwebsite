<template>
  <main class="overflow-x-hidden bg-[#0A0E16]">
    <NavbarHeader />
    
    <!-- Conteneur unifié englobant la Section 1 (Hero) ET la Section 2 (Qui sommes-nous ?) -->
    <div class="relative w-full overflow-hidden bg-[#0A0E16]">
      
      <!-- Calque 1 : Ciel Animé en mouvement (sky-bg.png) avec Ciel Bleu en haut (Section 1) et Ciel Rosé en bas (Section 2) -->
      <div class="hero-sky-container absolute inset-0 z-0">
        <div class="hero-sky-track opacity-55"></div>
        <div class="hero-sky-clouds"></div>
        
        <!-- Nuage Logo BSD NUAGEUX en traversée céleste (position très haute, présent dès le refresh) -->
        <div class="bsd-cloud-wrapper absolute -top-6 sm:-top-12 lg:-top-20 left-0 right-0 z-0 pointer-events-none overflow-hidden h-[450px] sm:h-[650px] lg:h-[850px]">
          <img 
            :src="'/BSD NUAGEUX.png'" 
            alt="BSD Sport Nuage Céleste" 
            class="bsd-cloud-logo object-contain"
          />
        </div>

        <!-- Ciel Bleu en haut (Section 1) -->
        <div class="hero-sky-bluish-top"></div>
        
        <!-- Ciel Rosé en bas (Section 2) -->
        <div class="hero-sky-rosy-bottom"></div>
        
        <div class="hero-sky-sunlight"></div>
      </div>

      <!-- IMAGE UNIQUE v2mainpage.png s'étendant sans aucune barre (Montagnes 100% opaques avec Grain Argentique renforcé) -->
      <div class="absolute inset-0 z-1 overflow-hidden pointer-events-none" aria-hidden="true">
        <img 
          :src="'/v2mainpage.png'" 
          alt="BSD Sport - Fond Unifié V2" 
          class="w-full h-full object-cover object-top opacity-100 block filter saturate-[1.45] contrast-[1.12]"
        />
        <!-- Masque de contraste sur mobile pour révéler le fond -->
        <div class="absolute inset-0 bg-gradient-to-b from-[#0A0E16]/5 via-[#0A0E16]/15 to-[#0A0E16]/60"></div>
        
        <!-- Grain Argentique Spécifique dédié à l'Image Montagne -->
        <div 
          class="absolute inset-0 opacity-35 mix-blend-overlay bg-repeat pointer-events-none"
          style="background-image: url('data:image/svg+xml,%3Csvg width=\'256\' height=\'256\' viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.95\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E');"
        ></div>
      </div>

      <!-- Texture de Grain Argentique unique recouvrant l'ensemble -->
      <div 
        class="absolute inset-0 z-2 opacity-30 mix-blend-overlay bg-repeat pointer-events-none"
        style="background-image: url('data:image/svg+xml,%3Csvg width=\'256\' height=\'256\' viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.95\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E');"
        aria-hidden="true"
      ></div>

      <!-- Section 1: BSD Sport Hero (Transparent) -->
      <HeroStickmen class="relative z-10" />

      <!-- Section 2: Qui sommes-nous ? (Transparent, ciel rosé, lisibilité parfaite) -->
      <QuiSommesNousSection class="relative z-10" />
    </div>

    <!-- Section 3: Sélectionner votre profil (3 Cartes d'orientation) -->
    <TerrainsSection />
    
    <!-- Séparateur Orange Grainé -->
    <OrangeSeparatorSection />

    <!-- Section Avis Google Membres BSD Sport -->
    <GoogleReviewsSection />

    <!-- Formulaire de Contact, Partenaires & Localisation -->
    <ContactSection />
  </main>
</template>

<script setup>
import NavbarHeader from '@/components/common/NavbarHeader.vue'
import HeroStickmen from '@/components/sections/HeroStickmen.vue'
import QuiSommesNousSection from '@/components/sections/QuiSommesNousSection.vue'
import TerrainsSection from '@/components/sections/TerrainsSection.vue'
import OrangeSeparatorSection from '@/components/sections/OrangeSeparatorSection.vue'
import GoogleReviewsSection from '@/components/sections/GoogleReviewsSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
</script>

<style scoped>
/* Animation de dérive inversée (Commence déjà bien engagé sur l'écran au refresh) */
@keyframes bsdCloudDriftReversed {
  0% {
    transform: translateX(50vw) translateY(0px) scale(1.02);
    opacity: 0.88;
  }
  40% {
    transform: translateX(5vw) translateY(-25px) scale(0.95);
    opacity: 0.90;
  }
  80% {
    opacity: 0.82;
  }
  100% {
    transform: translateX(-65vw) translateY(12px) scale(1.1);
    opacity: 0;
  }
}

.bsd-cloud-logo {
  height: 380px;
  width: auto;
  animation: bsdCloudDriftReversed 65s linear infinite;
  filter: blur(2px) brightness(1.08) drop-shadow(0 8px 24px rgba(0,0,0,0.4));
  will-change: transform, opacity;
}

@media (min-width: 640px) {
  .bsd-cloud-logo {
    height: 580px;
    filter: blur(2.5px) brightness(1.08) drop-shadow(0 12px 28px rgba(0,0,0,0.4));
  }
}

@media (min-width: 1024px) {
  .bsd-cloud-logo {
    height: 850px;
    filter: blur(3px) brightness(1.08) drop-shadow(0 16px 32px rgba(0,0,0,0.4));
  }
}
</style>

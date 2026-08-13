<template>
  <section id="hero" class="relative bg-transparent">

    <!-- Positionnement abaissé & optimisé mobile / tablette (820x1180) de "Ici, Le sport Nous rassemble" -->
    <h1 class="relative z-10 pt-6 sm:pt-14 lg:pt-20 drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)] text-center flex flex-col items-center px-4 sm:px-6 w-full max-w-full overflow-hidden">
      <!-- ROW 1: Ici, + Le sport -->
      <span class="l1 reveal d1 flex flex-col lg:flex-row items-center lg:items-baseline justify-center gap-1 lg:gap-3 max-w-full">
        <span class="sm sm-ici inline-block text-center shrink-0">Ici,</span>
        <span class="big lw1 inline-block text-center shrink-0">
          <span class="inline-block" style="transform: scaleY(1.05); transform-origin: bottom;">Le sport</span>
        </span>
      </span>

      <!-- ROW 2: Nous + rassemble -->
      <span class="l2 reveal d2 flex flex-col lg:flex-row items-center lg:items-baseline justify-center gap-1 lg:gap-3 max-w-full mt-1 lg:mt-0">
        <span class="big it inline-block text-center shrink-0">
          <span class="inline-block" style="transform: scaleY(1.05); transform-origin: bottom;">Nous</span>
        </span>

        <span class="big inline-flex items-baseline justify-center shrink-0">
          <span class="inline-block" style="transform: scaleY(1.05); transform-origin: bottom;">rassembl</span><span class="ltr e-bag"><span class="inline-block" style="transform: scaleY(1.05); transform-origin: bottom;">e</span></span>
        </span>
      </span>
    </h1>

    <!-- CTA unique (Bouton "Qui sommes-nous ?") -->
    <div class="hero-cta reveal d3">
      <a href="#qui-sommes-nous" @click.prevent="scrollToSection('qui-sommes-nous')" class="btn btn-ghost inline-flex items-center gap-2 text-sm sm:text-base font-semibold border border-[#F1E7D0]/30 rounded-full px-6 py-2.5 backdrop-blur-md hover:bg-[#F1E7D0]/10 transition-all group cursor-pointer">
        <span>Qui sommes-nous ?</span>
        <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
    </div>

    <!-- Widget Vidéo du Club positionné en dessous du bouton Qui sommes-nous ? -->
    <div class="reveal d4 w-full flex justify-center items-center mx-auto mt-6 sm:mt-8 z-20 px-4">
      <div class="w-[280px] sm:w-[320px] lg:w-[360px] mx-auto flex justify-center">
        <ClubVideoWidget />
      </div>
    </div>
  </section>
</template>

<script setup>
import ClubVideoWidget from '@/components/common/ClubVideoWidget.vue'
import { useReveal } from '@/composables/useReveal'
useReveal()

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.hero-cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  margin-top: 3rem;
  z-index: 10;
}

@media (max-width: 640px) {
  .hero-cta {
    margin-top: 2rem;
  }
}

.btn-ghost {
  background: rgba(10, 14, 22, 0.4);
  border: 1px solid rgba(241, 231, 208, 0.25);
  color: var(--cream);
  font-family: 'Plus Jakarta Sans', sans-serif;
  letter-spacing: 0.05em;
  padding: 0.75rem 1.6rem;
  border-radius: 30px;
  backdrop-filter: blur(12px);
  transition: all 0.3s ease;
}
.btn-ghost::after {
  content: none !important;
  display: none !important;
}
.btn-ghost:hover {
  background: rgba(241, 231, 208, 0.15);
  border-color: var(--cream);
  color: var(--cream);
  transform: translateY(-2px);
}
</style>

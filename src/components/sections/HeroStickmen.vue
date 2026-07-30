<template>
  <section id="hero" class="relative">
    <!-- Video Widget Preview du Club (Positionné en haut à droite sous le bouton CHOISIR UN TERRAIN) -->
    <div class="hero-video-top-right reveal d4 hidden lg:block absolute top-20 right-6 xl:right-16 z-20 w-[300px] xl:w-[340px]">
      <ClubVideoWidget />
    </div>

    <h1>
      <!-- Line 1: Ici, Le sport -->
      <span class="l1 reveal d1">
        <span class="sm sm-ici">Ici,</span>
        <span class="big lw1">
          Le sport
          <!-- ATHLETIC RUNNER WITH BENT KNEES, DEPOP & RESPAWN FX -->
          <svg class="stick runner" viewBox="0 0 50 50" aria-hidden="true">
            <g class="runner-body">
              <!-- Clean fine pure white sparkle pop on respawn -->
              <g class="magic-pop">
                <circle class="mring-pop" cx="25" cy="25" r="7"/>
                <path class="msp" d="M25 16 L26 22 L32 25 L26 28 L25 34 L24 28 L18 25 L24 22 Z"/>
              </g>

              <!-- Pronounced white pop burst on end depop -->
              <g class="magic-end-pop">
                <circle class="mring-end" cx="25" cy="25" r="10"/>
                <path class="msp-end msp-e1" d="M25 12 L26.5 21 L35 25 L26.5 29 L25 38 L23.5 29 L15 25 L23.5 21 Z"/>
                <path class="msp-end msp-e2" d="M25 12 L26.5 21 L35 25 L26.5 29 L25 38 L23.5 29 L15 25 L23.5 21 Z"/>
              </g>

              <!-- Left Leg (Background Leg - Behind Torso) -->
              <g class="r-leg-left r-back">
                <g class="r-thigh-l">
                  <line x1="22" y1="27" x2="28" y2="35" class="r-limb"/>
                  <g class="r-shin-l">
                    <line x1="28" y1="35" x2="33" y2="43" class="r-limb"/>
                  </g>
                </g>
              </g>

              <!-- Left Arm (Background Arm) -->
              <g class="r-arm-left r-back">
                <path d="M24 15 L30 20 L35 16" class="r-limb"/>
              </g>

              <!-- Torso / Spine -->
              <line x1="25" y1="13.5" x2="22" y2="27" class="r-limb r-torso"/>

              <!-- Head -->
              <circle cx="25" cy="9" r="4.5" class="r-head"/>

              <!-- Right Arm (Foreground Arm - In Front) -->
              <g class="r-arm-right r-front">
                <path d="M24 15 L18 20 L13 24" class="r-limb"/>
              </g>

              <!-- Right Leg (Foreground Leg - In Front) -->
              <g class="r-leg-right r-front">
                <g class="r-thigh-r">
                  <line x1="22" y1="27" x2="16" y2="35" class="r-limb"/>
                  <g class="r-shin-r">
                    <line x1="16" y1="35" x2="11" y2="42" class="r-limb"/>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </span>
      </span>

      <!-- Line 2: Nous rassemble -->
      <span class="l2 reveal d2">
        <span class="big it">
          Nous
        </span>

        <span class="big">
          rassembl<span class="ltr e-bag">e
            <!-- BOXER STICKMAN ORIGINAL -->
            <svg class="stick boxer" viewBox="0 0 54 62" aria-hidden="true">
              <g class="bod">
                <circle class="head" cx="34" cy="11" r="5.4"/>
                <path d="M34 17 L33 36 M33 36 L27 44 L25 52 M33 36 L40 44 L42 52"/>
                <path d="M34 22 L41 26 L44 30"/><circle class="glove" cx="45" cy="31" r="4.2"/>
                <g class="jbent"><path d="M34 21 L27 24 L21 21"/><circle class="glove" cx="18" cy="20" r="4.4"/></g>
                <g class="jext"><path d="M34 21 L26 21 L19 21"/><circle class="glove" cx="15.5" cy="21" r="4.6"/></g>
              </g>
            </svg>
          </span>
        </span>
      </span>
    </h1>

    <div class="hero-cta reveal d3">
      <a href="#terrains" class="btn btn-primary inline-flex items-center gap-2 group">
        <span>Choisis ton terrain</span>
        <svg class="w-4 h-4 transition-transform group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
        </svg>
      </a>
      <a href="#u-cross" class="btn btn-ghost">
        Découvrir les Univers
      </a>
    </div>

    <!-- Mobile / Tablet Fallback Version -->
    <div class="lg:hidden reveal d4 w-full flex justify-center mt-8 z-10 px-4">
      <ClubVideoWidget />
    </div>
  </section>
</template>

<script setup>
import ClubVideoWidget from '@/components/common/ClubVideoWidget.vue'
import { useReveal } from '@/composables/useReveal'
useReveal()
</script>

<style scoped>
.hero-cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  margin-top: 4.8rem;
  z-index: 10;
}

@media (max-width: 640px) {
  .hero-cta {
    flex-direction: column;
    width: 100%;
    margin-top: 3.2rem;
  }
}

.btn-primary {
  background: var(--cardinal);
  border-color: var(--cardinal);
  color: var(--cream);
}
.btn-primary::after {
  content: none !important;
  display: none !important;
}
.btn-primary:hover {
  background: var(--gold);
  border-color: var(--gold);
  color: var(--ink);
}

.btn-ghost {
  background: rgba(255, 255, 255, 0.05);
  border: 1.5px solid rgba(241, 231, 208, 0.3);
  color: var(--cream);
}
.btn-ghost:hover {
  border-color: var(--gold);
  color: var(--gold);
  background: rgba(255, 255, 255, 0.1);
}
</style>

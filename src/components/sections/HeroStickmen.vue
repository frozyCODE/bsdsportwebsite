<template>
  <section id="hero">
    <h1>
      <!-- Line 1: Ici, Le sport -->
      <span class="l1 reveal d1">
        <span class="sm sm-ici">Ici,</span>
        <span class="big lw1">
          Le sport
          <!-- RUNNER STICKMAN WITH FALL & RECOVERY -->
          <svg class="stick runner" viewBox="0 0 60 50" aria-hidden="true">
            <g class="rg">
              <g class="magic">
                <circle class="mring" cx="21" cy="22" r="7"/>
                <path class="ms ms1" d="M21 17 L22.2 20.8 L26 22 L22.2 23.2 L21 27 L19.8 23.2 L16 22 L19.8 20.8 Z"/>
                <path class="ms ms2" d="M21 17 L22.2 20.8 L26 22 L22.2 23.2 L21 27 L19.8 23.2 L16 22 L19.8 20.8 Z"/>
                <path class="ms ms3" d="M21 17 L22.2 20.8 L26 22 L22.2 23.2 L21 27 L19.8 23.2 L16 22 L19.8 20.8 Z"/>
                <path class="ms ms4" d="M21 17 L22.2 20.8 L26 22 L22.2 23.2 L21 27 L19.8 23.2 L16 22 L19.8 20.8 Z"/>
                <path class="ms ms5" d="M21 17 L22.2 20.8 L26 22 L22.2 23.2 L21 27 L19.8 23.2 L16 22 L19.8 20.8 Z"/>
                <path class="ms ms6" d="M21 17 L22.2 20.8 L26 22 L22.2 23.2 L21 27 L19.8 23.2 L16 22 L19.8 20.8 Z"/>
              </g>
              <g class="rf">
                <g class="qcycle">
                  <g class="q1"><circle class="head" cx="17" cy="8" r="5"/><path d="M16 13 L21 25 M18 16 L26 14 L30 8 M18 17 L12 22 L6 18 M21 25 L31 28 L36 36 M21 25 L14 32 L7 30"/></g>
                  <g class="q2"><circle class="head" cx="17" cy="8" r="5"/><path d="M16 13 L21 25 M18 16 L25 19 L31 16 M18 17 L12 15 L7 10 M21 25 L29 33 L27 41 M21 25 L15 34 L18 41"/></g>
                  <g class="q3"><circle class="head" cx="17" cy="8" r="5"/><path d="M16 13 L21 25 M18 16 L24 21 L29 25 M18 17 L13 12 L9 6 M21 25 L26 35 L24 43 M21 25 L18 33 L11 38"/></g>
                  <g class="q4"><circle class="head" cx="17" cy="8" r="5"/><path d="M16 13 L21 25 M18 16 L27 12 L33 15 M18 17 L10 20 L4 14 M21 25 L32 25 L40 31 M21 25 L16 35 L10 41"/></g>
                </g>
                <g class="qf">
                  <g class="fx"><path d="M8 -34 V-10 M18 -44 V-14 M28 -38 V-10 M38 -30 V-8"/></g>
                  <circle class="head" cx="19" cy="10" r="5"/>
                  <path d="M18 15 L21 27 M19 18 L10 10 L5 3 M19 18 L28 9 L33 3 M21 27 L12 36 L8 43 M21 27 L30 35 L34 43"/>
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
            <!-- BOXER STICKMAN -->
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
      <a href="#terrains" class="btn btn-primary">
        Choisis ton terrain ↓
      </a>
      <a href="#u-cross" class="btn btn-ghost">
        Découvrir les Univers
      </a>
    </div>
  </section>
</template>

<script setup>
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

<template>
  <div class="univers-wrapper">
    
    <!-- 01 CROSS HEAT -->
    <section class="univers" id="u-cross" style="--accent: var(--c-cross)">
      <span class="side-label" aria-hidden="true">BSD Athletic Program</span>
      <span class="corner-stamp stamp" aria-hidden="true">Unité 01</span>
      
      <svg class="sico" viewBox="0 0 120 120" aria-hidden="true">
        <g class="fl"><path d="M26 40 q-7 -13 2 -20 q-1 9 6 11 q-2 7 -8 9Z" fill="#FF4B2E"/></g>
        <g class="fl fl2"><path d="M94 36 q8 -12 2 -20 q0 9 -7 10 q0 8 5 10Z" fill="#D9A441"/></g>
        <g class="fl fl3"><path d="M60 14 q-4 -8 1 -13 q0 6 4 7 q-1 5 -5 6Z" fill="#F1E7D0"/></g>
        <g class="kb">
          <path d="M42 44 a18 18 0 0 1 36 0" fill="none" stroke="#F1E7D0" stroke-width="7" stroke-linecap="round"/>
          <circle cx="60" cy="76" r="31" fill="#FF4B2E" stroke="#F1E7D0" stroke-width="5"/>
          <path d="M44 62 q5 -5 10 -3" stroke="#F1E7D0" stroke-width="3.5" fill="none" stroke-linecap="round" opacity=".7"/>
          <circle cx="51" cy="72" r="3.6" fill="#0A0E16"/>
          <circle cx="69" cy="72" r="3.6" fill="#0A0E16"/>
          <path d="M50 83 q10 8 20 0" fill="none" stroke="#0A0E16" stroke-width="4" stroke-linecap="round"/>
        </g>
      </svg>

      <div class="inner">
        <div class="ghost reveal">Univers 01 · Cross Training</div>
        <h2 class="reveal d1">Cross Heat</h2>
        <p class="reveal d2">Force, cardio, dépassement. Des WOD collectifs où chacun avance à son rythme, mais jamais seul.</p>
        <BaseButton class="reveal d3" accent="var(--c-cross)" to="/cross-heat">Découvrir</BaseButton>
      </div>
      <div class="num" aria-hidden="true">01</div>
    </section>

    <!-- 02 STEPP TRAINING -->
    <section class="univers" id="u-stepp" style="--accent: var(--c-stepp)">
      <span class="side-label" aria-hidden="true">BSD Athletic Program</span>
      <span class="corner-stamp stamp" aria-hidden="true">Unité 02</span>

      <svg class="sico" viewBox="0 0 120 120" aria-hidden="true">
        <g class="nt"><text x="16" y="48" font-size="17" fill="#F1E7D0">♪</text></g>
        <g class="nt nt2"><text x="96" y="42" font-size="15" fill="#8C5CFF">♫</text></g>
        <g class="nt nt3"><text x="28" y="30" font-size="13" fill="#D9A441">♪</text></g>
        <rect x="26" y="92" width="80" height="12" fill="#8C5CFF" stroke="#F1E7D0" stroke-width="4"/>
        <rect x="36" y="80" width="60" height="12" fill="#152238" stroke="#F1E7D0" stroke-width="4"/>
        <g class="snk">
          <path d="M34 72 q0 -15 12 -17 q9 -1 13 6 q5 8 18 9 q12 1 12 9 v2 q0 5 -5 5 H40 q-7 0 -6 -8 Z" fill="#F1E7D0" stroke="#0A0E16" stroke-width="3.5"/>
          <path d="M35 76 h63" stroke="#8C5CFF" stroke-width="4"/>
          <path d="M56 62 l6 8 M64 60 l6 8" stroke="#C8102E" stroke-width="3.5" stroke-linecap="round"/>
          <circle cx="45" cy="62" r="1.8" fill="#0A0E16"/><circle cx="50" cy="66" r="1.8" fill="#0A0E16"/>
          <circle cx="80" cy="68" r="2.3" fill="#0A0E16"/>
          <circle cx="88" cy="69" r="2.3" fill="#0A0E16"/>
          <path d="M80 74 q5 4 10 0" fill="none" stroke="#0A0E16" stroke-width="2.6" stroke-linecap="round"/>
        </g>
      </svg>

      <div class="inner">
        <div class="ghost reveal">Univers 02 · Cardio</div>
        <h2 class="reveal d1">Stepp Training</h2>
        <p class="reveal d2">Le cardio qui donne le rythme. Chorégraphies, énergie et bonne humeur : la séance passe toujours trop vite.</p>
        <BaseButton class="reveal d3" accent="var(--c-stepp)" page="Cours collectifs" :soon="true">Découvrir</BaseButton>
      </div>
      <div class="num" aria-hidden="true">02</div>
    </section>

    <!-- 03 ARTS MARTIAUX -->
    <section class="univers" id="u-arts" style="--accent: var(--c-arts)">
      <span class="side-label" aria-hidden="true">BSD Athletic Program</span>
      <span class="corner-stamp stamp" aria-hidden="true">Unité 03</span>

      <svg class="sico" viewBox="0 0 120 120" aria-hidden="true">
        <path d="M6 46 h13 M4 58 h17 M8 70 h11" stroke="#F1E7D0" stroke-width="3.5" stroke-linecap="round" opacity=".55"/>
        <g class="pow">
          <path d="M100 52 l4 -11 l3 11 l11 3 l-11 4 l-3 11 l-4 -11 l-11 -3Z" fill="#D9A441" stroke="#0A0E16" stroke-width="2.5"/>
        </g>
        <g class="glv">
          <path d="M30 42 q-2 -17 17 -19 q23 -2 31 11 q6 9 2 20 q-3 10 -15 12 l-19 3 q-13 1 -15 -12 q-2 -8 -1 -15Z" fill="#E0192F" stroke="#F1E7D0" stroke-width="5"/>
          <path d="M32 64 q-9 6 -3 15 q6 8 15 3" fill="#E0192F" stroke="#F1E7D0" stroke-width="5" stroke-linecap="round"/>
          <rect x="22" y="80" width="32" height="15" fill="#152238" stroke="#F1E7D0" stroke-width="4"/>
          <path d="M40 32 q6 -4 12 -2" stroke="#F1E7D0" stroke-width="3.5" fill="none" stroke-linecap="round" opacity=".7"/>
          <circle cx="52" cy="44" r="3.4" fill="#0A0E16"/>
          <circle cx="66" cy="46" r="3.4" fill="#0A0E16"/>
          <path d="M52 55 q8 6 15 1" fill="none" stroke="#0A0E16" stroke-width="3.8" stroke-linecap="round"/>
        </g>
      </svg>

      <div class="inner">
        <div class="ghost reveal">Univers 03 · Combat</div>
        <h2 class="reveal d1">Arts Martiaux</h2>
        <p class="reveal d2">Boxe, boxe junior, grappling, techniques de défense. La rigueur du ring, le respect en héritage.</p>
        <BaseButton class="reveal d3" accent="var(--c-arts)" page="Cours collectifs" :soon="true">Découvrir</BaseButton>
      </div>
      <div class="num" aria-hidden="true">03</div>
    </section>

    <!-- 04 OMNISPORTS -->
    <section class="univers" id="u-omni" style="--accent: var(--c-omni)">
      <span class="side-label" aria-hidden="true">BSD Athletic Program</span>
      <span class="corner-stamp stamp" aria-hidden="true">Unité 04</span>

      <svg class="sico" viewBox="0 0 120 120" aria-hidden="true">
        <circle cx="60" cy="60" r="14" fill="#2FA96B" stroke="#F1E7D0" stroke-width="4"/>
        <circle cx="55" cy="57" r="2.4" fill="#0A0E16"/>
        <circle cx="65" cy="57" r="2.4" fill="#0A0E16"/>
        <path d="M55 64 q5 4 10 0" fill="none" stroke="#0A0E16" stroke-width="2.8" stroke-linecap="round"/>
        <g class="orb">
          <g class="ball">
            <circle cx="60" cy="18" r="11" fill="#D9A441" stroke="#F1E7D0" stroke-width="3"/>
            <path d="M49 18 h22 M60 7 v22 M52 10 q8 8 0 16 M68 10 q-8 8 0 16" stroke="#0A0E16" stroke-width="2" fill="none"/>
          </g>
          <g class="ball">
            <circle cx="24" cy="82" r="11" fill="#F1E7D0" stroke="#0A0E16" stroke-width="3"/>
            <path d="M24 76 l5 4 l-2 6 h-6 l-2 -6Z" fill="#0A0E16"/>
          </g>
          <g class="ball">
            <circle cx="96" cy="82" r="11" fill="#2EC4D6" stroke="#F1E7D0" stroke-width="3"/>
            <path d="M88 75 q8 7 0 14 M104 75 q-8 7 0 14" stroke="#F1E7D0" stroke-width="2.4" fill="none"/>
          </g>
        </g>
      </svg>

      <div class="inner">
        <div class="ghost reveal">Univers 04 · Multisports</div>
        <h2 class="reveal d1">Omnisports</h2>
        <p class="reveal d2">Un sport différent à chaque séance. Découvrir, varier, s'amuser : le multisports pour ne jamais s'ennuyer.</p>
        <BaseButton class="reveal d3" accent="var(--c-omni)" page="Cours collectifs" :soon="true">Découvrir</BaseButton>
      </div>
      <div class="num" aria-hidden="true">04</div>
    </section>

    <!-- 05 AQUA-TRAINING -->
    <section class="univers" id="u-aqua" style="--accent: var(--c-aqua)">
      <span class="side-label" aria-hidden="true">BSD Athletic Program</span>
      <span class="corner-stamp stamp" aria-hidden="true">Unité 05</span>

      <svg class="sico" viewBox="0 0 120 120" aria-hidden="true">
        <g class="drop">
          <path d="M60 16 q17 22 17 34 a17 17 0 1 1 -34 0 q0 -12 17 -34Z" fill="#2EC4D6" stroke="#F1E7D0" stroke-width="5"/>
          <path d="M50 44 q4 -6 9 -6" stroke="#F1E7D0" stroke-width="3.2" fill="none" stroke-linecap="round" opacity=".8"/>
          <circle cx="54" cy="54" r="3.2" fill="#0A0E16"/>
          <circle cx="66" cy="54" r="3.2" fill="#0A0E16"/>
          <path d="M54 62 q6 5 12 0" fill="none" stroke="#0A0E16" stroke-width="3.4" stroke-linecap="round"/>
        </g>
        <circle class="bub" cx="28" cy="72" r="4" fill="none" stroke="#F1E7D0" stroke-width="2.4"/>
        <circle class="bub bub2" cx="94" cy="66" r="3" fill="none" stroke="#F1E7D0" stroke-width="2.2"/>
        <circle class="bub bub3" cx="86" cy="80" r="2.4" fill="none" stroke="#2EC4D6" stroke-width="2.2"/>
        <path class="wave" d="M-52 96 q7 -8 14 0 t14 0 t14 0 t14 0 t14 0 t14 0 t14 0 t14 0 t14 0 t14 0 t14 0 t14 0 t14 0 t14 0 t14 0 t14 0" fill="none" stroke="#F1E7D0" stroke-width="5" stroke-linecap="round"/>
        <path class="wave wave2" d="M-52 108 q7 -7 14 0 t14 0 t14 0 t14 0 t14 0 t14 0 t14 0 t14 0 t14 0 t14 0 t14 0 t14 0 t14 0 t14 0 t14 0 t14 0" fill="none" stroke="#2EC4D6" stroke-width="4" stroke-linecap="round"/>
      </svg>

      <div class="inner">
        <div class="ghost reveal">Univers 05 · Aquatique</div>
        <h2 class="reveal d1">Aqua-Training</h2>
        <p class="reveal d2">L'intensité, sans l'impact. Un travail complet dans l'eau, idéal pour se renforcer en douceur.</p>
        <BaseButton class="reveal d3" accent="var(--c-aqua)" page="Cours collectifs" :soon="true">Découvrir</BaseButton>
      </div>
      <div class="num" aria-hidden="true">05</div>
    </section>

    <!-- 06 ACCOMPAGNEMENT INDIVIDUEL -->
    <section class="univers" id="u-accomp" style="--accent: var(--c-accomp)">
      <span class="side-label" aria-hidden="true">BSD Athletic Program</span>
      <span class="corner-stamp stamp" aria-hidden="true">Unité 06</span>

      <svg class="sico" viewBox="0 0 120 120" aria-hidden="true">
        <g class="hrt">
          <path d="M100 26 q-6 -8 -12 -2 q-6 6 12 17 q18 -11 12 -17 q-6 -6 -12 2Z" fill="#E0192F" stroke="#F1E7D0" stroke-width="3"/>
        </g>
        <rect x="53" y="12" width="14" height="9" fill="#F1E7D0"/>
        <path d="M83 30 l8 -7" stroke="#F1E7D0" stroke-width="6" stroke-linecap="round"/>
        <circle cx="60" cy="68" r="34" fill="#D9A441" stroke="#F1E7D0" stroke-width="5"/>
        <circle cx="60" cy="68" r="25" fill="#2E230A"/>
        <path d="M60 46 v5 M60 90 v-5 M38 68 h5 M82 68 h-5" stroke="#F1E7D0" stroke-width="3" stroke-linecap="round"/>
        <line class="hand" x1="60" y1="68" x2="60" y2="50" stroke="#F1E7D0" stroke-width="4" stroke-linecap="round"/>
        <circle cx="60" cy="68" r="3.4" fill="#F1E7D0"/>
        <circle cx="52" cy="78" r="2.4" fill="#F1E7D0"/>
        <circle cx="68" cy="78" r="2.4" fill="#F1E7D0"/>
        <path d="M53 84 q7 5 14 0" fill="none" stroke="#F1E7D0" stroke-width="2.8" stroke-linecap="round"/>
      </svg>

      <div class="inner">
        <div class="ghost reveal">Univers 06 · Coaching perso</div>
        <h2 class="reveal d1">Accompagnement individuel</h2>
        <p class="reveal d2">Un coach, un objectif : le tien. Réathlétisation, recomposition corporelle, préparation physique, pré et post-natal.</p>
        <BaseButton class="reveal d3" accent="var(--c-accomp)" page="Coaching perso" :soon="true">Découvrir</BaseButton>
      </div>
      <div class="num" aria-hidden="true">06</div>
    </section>

    <!-- 07 STAGES -->
    <section class="univers" id="u-stages" style="--accent: var(--c-stages)">
      <span class="side-label" aria-hidden="true">BSD Athletic Program</span>
      <span class="corner-stamp stamp" aria-hidden="true">Unité 07</span>

      <svg class="sico" viewBox="0 0 120 120" aria-hidden="true">
        <g class="sun">
          <g class="rays">
            <path d="M92 16 v-6 M92 58 v6 M71 37 h-6 M113 37 h6 M77 22 l-4 -4 M107 52 l4 4 M107 22 l4 -4 M77 52 l-4 4" stroke="#D9A441" stroke-width="3" stroke-linecap="round"/>
          </g>
          <circle cx="92" cy="37" r="10" fill="#D9A441" stroke="#F1E7D0" stroke-width="3"/>
        </g>
        <g class="cloud"><ellipse cx="28" cy="30" rx="13" ry="6" fill="#F1E7D0" opacity=".85"/><ellipse cx="38" cy="26" rx="9" ry="5" fill="#F1E7D0" opacity=".85"/></g>
        <path d="M8 102 L44 48 L64 76 L80 56 L112 102 Z" fill="#7BA05B" stroke="#F1E7D0" stroke-width="5" stroke-linejoin="round"/>
        <path d="M37 58 L44 48 L51 58 q-3.5 3.5 -7 0 q-3.5 3.5 -7 0Z" fill="#F1E7D0"/>
        <path d="M44 48 V30" stroke="#F1E7D0" stroke-width="3.5" stroke-linecap="round"/>
        <path class="flagwave" d="M44 30 h15 l-4 5.5 l4 5.5 h-15Z" fill="#C8102E" stroke="#F1E7D0" stroke-width="2.4"/>
        <circle cx="86" cy="80" r="2.6" fill="#0A0E16"/>
        <circle cx="97" cy="80" r="2.6" fill="#0A0E16"/>
        <path d="M86 88 q6 5 12 0" fill="none" stroke="#0A0E16" stroke-width="3" stroke-linecap="round"/>
      </svg>

      <div class="inner">
        <div class="ghost reveal">Univers 07 · Évasion</div>
        <h2 class="reveal d1">Stages</h2>
        <p class="reveal d2">Bootcamps, randonnées, séjours sportifs, préparation physique de groupe, techniques de défense. Sortir du cadre, ensemble.</p>
        <BaseButton class="reveal d3" accent="var(--c-stages)" page="Stages" :soon="true">Découvrir</BaseButton>
      </div>
      <div class="num" aria-hidden="true">07</div>
    </section>

    <!-- 08 PROGRAMMES -->
    <section class="univers" id="u-prog" style="--accent: var(--c-prog)">
      <span class="side-label" aria-hidden="true">BSD Athletic Program</span>
      <span class="corner-stamp stamp" aria-hidden="true">Unité 08</span>

      <svg class="sico" viewBox="0 0 120 120" aria-hidden="true">
        <rect x="36" y="14" width="48" height="92" rx="9" fill="#1E2635" stroke="#F1E7D0" stroke-width="5"/>
        <rect x="43" y="24" width="34" height="66" rx="3" fill="#0D1119"/>
        <circle cx="54" cy="33" r="2.2" fill="#F1E7D0"/>
        <path d="M63 33 h6" stroke="#F1E7D0" stroke-width="2.6" stroke-linecap="round"/>
        <path d="M54 39 q6 4 12 0" fill="none" stroke="#F1E7D0" stroke-width="2.4" stroke-linecap="round"/>
        <g class="dumb">
          <path d="M49 56 H71" stroke="#F1E7D0" stroke-width="4.5" stroke-linecap="round"/>
          <rect x="45" y="48" width="6" height="16" rx="2" fill="#8B98AD" stroke="#F1E7D0" stroke-width="2"/>
          <rect x="69" y="48" width="6" height="16" rx="2" fill="#8B98AD" stroke="#F1E7D0" stroke-width="2"/>
        </g>
        <circle class="dot" cx="52" cy="71" r="2.4" fill="#F1E7D0"/>
        <circle class="dot dot2" cx="60" cy="71" r="2.4" fill="#F1E7D0"/>
        <circle class="dot dot3" cx="68" cy="71" r="2.4" fill="#F1E7D0"/>
        <rect x="46" y="79" width="28" height="7" rx="3.5" fill="none" stroke="#F1E7D0" stroke-width="2"/>
        <rect class="loadbar" x="48" y="81" width="24" height="3" rx="1.5" fill="#D9A441"/>
        <circle cx="60" cy="98" r="3" fill="none" stroke="#F1E7D0" stroke-width="2.2"/>
      </svg>

      <div class="inner">
        <div class="ghost reveal">Univers 08 · À venir</div>
        <h2 class="reveal d1">Programmes<span class="tag-soon">Bientôt disponible</span></h2>
        <p class="reveal d2">Des programmes conçus par nos coachs pour s'entraîner partout. Consultables dès maintenant, souscription à l'ouverture.</p>
        <BaseButton class="reveal d3" accent="var(--c-prog)" page="Programmes" :soon="true">Découvrir</BaseButton>
      </div>
      <div class="num" aria-hidden="true">08</div>
    </section>

  </div>
</template>

<script setup>
import { useReveal } from '@/composables/useReveal'
import BaseButton from '@/components/common/BaseButton.vue'

useReveal()
</script>

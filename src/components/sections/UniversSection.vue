<template>
  <div class="univers-wrapper">
    
    <!-- 1. CROSS HEAT (CROSS TRAINING) -->
    <section class="univers" id="u-cross" style="--accent: var(--c-cross)">
      <div class="u-bg-art" aria-hidden="true">
        <img :src="'/crossheat.png'" alt="Cross Heat Background" class="u-bg-img" />
        <div class="u-bg-overlay"></div>
        <div class="u-bg-grain"></div>
      </div>
      <span class="side-label" aria-hidden="true">BSD Athletic Program</span>
      
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
        <div class="ghost reveal">Cross Training & WOD</div>
        <h2 class="reveal d1">Cross Heat</h2>
        <p class="reveal d2">Force, cardio, dépassement & Cross Training. Des WOD collectifs où chacun avance à son rythme, mais jamais seul.</p>
        <BaseButton class="reveal d3" accent="var(--c-cross)" page="Cross Heat" :soon="true">Découvrir</BaseButton>
      </div>
    </section>

    <!-- 2. STEPP TRAINING -->
    <section class="univers" id="u-stepp" style="--accent: var(--c-stepp)">
      <div class="u-bg-art" aria-hidden="true">
        <img :src="'/stepp.png'" alt="Stepp Training Background" class="u-bg-img u-bg-stepp" />
        <div class="u-bg-overlay u-bg-overlay-stepp"></div>
        <div class="u-bg-grain"></div>
      </div>
      <span class="side-label" aria-hidden="true">BSD Athletic Program</span>

      <div class="sico-wrap sico-wrap-stepp">
        <img :src="'/stepman.png'" alt="Stepp Training Icon" class="sico sico-stepp" />
        
        <svg class="sico-fx" viewBox="0 0 160 160" aria-hidden="true">
          <g class="n-pos np1" transform="translate(4, 10) scale(0.65)">
            <g class="m-note n1">
              <path d="M12 28 A4.5 4.5 0 1 1 7.5 23.5 A4.5 4.5 0 0 1 12 28 V10 H26 V28 A4.5 4.5 0 1 1 21.5 23.5 A4.5 4.5 0 0 1 26 28 V14 H12 Z" fill="#8C5CFF" stroke="#F1E7D0" stroke-width="2"/>
            </g>
          </g>

          <g class="n-pos np2" transform="translate(138, 12) scale(0.65)">
            <g class="m-note n2">
              <path d="M12 26 A4.5 4.5 0 1 1 7.5 21.5 A4.5 4.5 0 0 1 12 26 V8 C18 8, 22 12, 22 15 C18 13, 14 13, 12 15 Z" fill="#D9A441" stroke="#F1E7D0" stroke-width="2"/>
            </g>
          </g>

          <g class="n-pos np3" transform="translate(4, 120) scale(0.65)">
            <g class="m-note n3">
              <path d="M12 26 A4.5 4.5 0 1 1 7.5 21.5 A4.5 4.5 0 0 1 12 26 V8 C18 8, 22 12, 22 15 C18 13, 14 13, 12 15 Z" fill="#2EC4D6" stroke="#F1E7D0" stroke-width="2"/>
            </g>
          </g>

          <g class="n-pos np4" transform="translate(138, 120) scale(0.65)">
            <g class="m-note n4">
              <path d="M12 28 A4.5 4.5 0 1 1 7.5 23.5 A4.5 4.5 0 0 1 12 28 V10 H26 V28 A4.5 4.5 0 1 1 21.5 23.5 A4.5 4.5 0 0 1 26 28 V14 H12 Z" fill="#FF4B26" stroke="#F1E7D0" stroke-width="2"/>
            </g>
          </g>
        </svg>
      </div>

      <div class="inner">
        <div class="ghost reveal">Cardio & Rythme</div>
        <h2 class="reveal d1">Stepp Training</h2>
        <p class="reveal d2">Le cardio qui donne le rythme. Chorégraphies, énergie et bonne humeur : la séance passe toujours trop vite.</p>
        <BaseButton class="reveal d3" accent="var(--c-stepp)" page="Cours collectifs" :soon="true">Découvrir</BaseButton>
      </div>
    </section>

    <!-- 3. SPORTS DE COMBAT -->
    <section class="univers" id="u-arts" style="--accent: var(--c-arts)">
      <div class="u-bg-art" aria-hidden="true">
        <img :src="'/art-martiaux.webp'" alt="Arts Martiaux Background" class="u-bg-img u-bg-arts" />
        <div class="u-bg-overlay u-bg-overlay-arts"></div>
        <div class="u-bg-grain"></div>
      </div>
      <span class="side-label" aria-hidden="true">BSD Athletic Program</span>

      <div class="sico-wrap">
        <img :src="'/boxe-emoji.png'" alt="Arts Martiaux Boxe Emoji" class="sico sico-boxe" />
        
        <svg class="sico-fx" viewBox="0 0 160 160" aria-hidden="true">
          <defs>
            <linearGradient id="flame-grad1" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stop-color="#C8102E"/>
              <stop offset="60%" stop-color="#FF4B26"/>
              <stop offset="100%" stop-color="#FFD60A"/>
            </linearGradient>
            <linearGradient id="flame-grad2" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stop-color="#E0192F"/>
              <stop offset="50%" stop-color="#FF9500"/>
              <stop offset="100%" stop-color="#F1E7D0"/>
            </linearGradient>
          </defs>

          <g class="flame f1">
            <path d="M22 92 C12 78, 16 62, 24 50 C26 62, 34 68, 30 78 C36 70, 38 58, 34 46 C44 58, 42 78, 32 90 C28 94, 24 94, 22 92 Z" fill="url(#flame-grad1)"/>
            <path d="M24 90 C18 80, 20 70, 26 62 C28 70, 32 74, 30 80 C32 86, 28 90, 24 90 Z" fill="#FFD60A"/>
          </g>

          <g class="flame f2">
            <path d="M138 90 C148 76, 144 60, 136 48 C134 60, 126 66, 130 76 C124 68, 122 56, 126 44 C116 56, 118 76, 128 88 C132 92, 136 92, 138 90 Z" fill="url(#flame-grad2)"/>
            <path d="M136 88 C142 78, 140 68, 134 60 C132 68, 128 72, 130 78 C128 84, 132 88, 136 88 Z" fill="#FFD60A"/>
          </g>

          <g class="flame f3">
            <path d="M128 36 C134 26, 130 18, 124 10 C124 18, 118 22, 120 28 C116 22, 114 16, 116 12 C108 20, 110 32, 120 38 Z" fill="url(#flame-grad1)"/>
          </g>

          <circle cx="28" cy="40" r="2.5" fill="#FFD60A" class="spark sp1"/>
          <circle cx="132" cy="30" r="2.2" fill="#FF9500" class="spark sp2"/>
          <circle cx="18" cy="68" r="1.8" fill="#FF4B26" class="spark sp3"/>
          <circle cx="142" cy="72" r="2" fill="#FFD60A" class="spark sp4"/>
        </svg>
      </div>

      <div class="inner">
        <div class="ghost reveal">Combat & Ring</div>
        <h2 class="reveal d1">Sports de combat</h2>
        <p class="reveal d2">Boxe, boxe junior, grappling, techniques de défense. La rigueur du ring, le respect en héritage.</p>
        <BaseButton class="reveal d3" accent="var(--c-arts)" page="Cours collectifs" :soon="true">Découvrir</BaseButton>
      </div>
    </section>

    <!-- 4. OMNISPORTS -->
    <section class="univers" id="u-omni" style="--accent: var(--c-omni)">
      <div class="u-bg-art" aria-hidden="true">
        <img :src="'/omnisport.png'" alt="Omnisports Background" class="u-bg-img u-bg-omni" />
        <div class="u-bg-overlay u-bg-overlay-omni"></div>
        <div class="u-bg-grain"></div>
      </div>
      <span class="side-label" aria-hidden="true">BSD Athletic Program</span>

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
        <div class="ghost reveal">Multisports & Découverte</div>
        <h2 class="reveal d1">Omnisports</h2>
        <p class="reveal d2">Un sport différent à chaque séance. Découvrir, varier, s'amuser : le multisports pour ne jamais s'ennuyer.</p>
        <BaseButton class="reveal d3" accent="var(--c-omni)" page="Cours collectifs" :soon="true">Découvrir</BaseButton>
      </div>
    </section>

    <!-- 5. AQUA-TRAINING -->
    <section class="univers" id="u-aqua" style="--accent: var(--c-aqua)">
      <div class="u-bg-art" aria-hidden="true">
        <img :src="'/aqua-training.png'" alt="Aqua-Training Background" class="u-bg-img u-bg-aqua" />
        <div class="u-bg-overlay u-bg-overlay-aqua"></div>
        <div class="u-bg-grain"></div>
      </div>
      <span class="side-label" aria-hidden="true">BSD Athletic Program</span>

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
        <div class="ghost reveal">Renforcement Aquatique</div>
        <h2 class="reveal d1">Aqua-Training</h2>
        <p class="reveal d2">L'intensité, sans l'impact. Un travail complet dans l'eau, idéal pour se renforcer en douceur.</p>
        <BaseButton class="reveal d3" accent="var(--c-aqua)" page="Cours collectifs" :soon="true">Découvrir</BaseButton>
      </div>
    </section>

    <!-- 6. STAGES -->
    <section class="univers" id="u-stages" style="--accent: var(--c-stages)">
      <div class="u-bg-art" aria-hidden="true">
        <div class="u-bg-overlay"></div>
        <div class="u-bg-grain"></div>
      </div>
      <span class="side-label" aria-hidden="true">BSD Athletic Program</span>

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
      </svg>

      <div class="inner">
        <div class="ghost reveal">Bootcamps & Évasion</div>
        <h2 class="reveal d1">Stages</h2>
        <p class="reveal d2">Bootcamps, randonnées, préparation physique de groupe, techniques de défense. Sortir du cadre, ensemble.</p>
        <BaseButton class="reveal d3" accent="var(--c-stages)" page="Stages" :soon="true">Découvrir</BaseButton>
      </div>
    </section>

    <!-- 7. HORIZON SPORT (NOUVELLE CATÉGORIE - SÉJOURS À L'ÉTRANGER / THAÏLANDE) -->
    <section class="univers" id="u-horizon" style="--accent: #FF7043">
      <div class="u-bg-art" aria-hidden="true">
        <div class="u-bg-overlay" style="background: radial-gradient(circle at center, rgba(255, 112, 67, 0.25), transparent 70%);"></div>
        <div class="u-bg-grain"></div>
      </div>
      <span class="side-label" aria-hidden="true">BSD International Expedition</span>

      <svg class="sico" viewBox="0 0 120 120" aria-hidden="true">
        <circle cx="60" cy="60" r="38" fill="none" stroke="#FF7043" stroke-width="4"/>
        <path d="M60 22 C40 22 24 38 24 60 C24 82 40 98 60 98" fill="none" stroke="#F1E7D0" stroke-width="3.5" stroke-dasharray="4 4"/>
        <path d="M60 22 C80 22 96 38 96 60 C96 82 80 98 60 98" fill="none" stroke="#F1E7D0" stroke-width="3.5"/>
        <line x1="22" y1="60" x2="98" y2="60" stroke="#FF7043" stroke-width="4"/>
        <path d="M35 40 L60 20 L85 40" fill="none" stroke="#FFD60A" stroke-width="3.5" stroke-linecap="round"/>
      </svg>

      <div class="inner">
        <div class="ghost reveal">Évasion & Immersion Athlétique</div>
        <h2 class="reveal d1">Horizon Sport<span class="tag-soon" style="background: #FF7043;">Projet & Sejours a venir</span></h2>
        <p class="reveal d2">Séjours sportifs immersifs à l'étranger (notamment en Thaïlande). Emmenons des groupes vivre une véritable aventure sportive et culturelle hors du commun.</p>
        <BaseButton class="reveal d3" accent="#FF7043" page="Horizon Sport" :soon="true">Découvrir le projet</BaseButton>
      </div>
    </section>

    <!-- 8. PROGRAMMES (FIN DE LISTE) -->
    <section class="univers" id="u-prog" style="--accent: var(--c-prog)">
      <div class="u-bg-art" aria-hidden="true">
        <div class="u-bg-overlay"></div>
        <div class="u-bg-grain"></div>
      </div>
      <span class="side-label" aria-hidden="true">BSD Athletic Program</span>

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
      </svg>

      <div class="inner">
        <div class="ghost reveal">Entraînement à distance</div>
        <h2 class="reveal d1">Programmes<span class="tag-soon">Bientot disponible</span></h2>
        <p class="reveal d2">Des programmes conçus par nos coachs pour s'entraîner partout. Consultables dès maintenant, souscription à l'ouverture.</p>
        <BaseButton class="reveal d3" accent="var(--c-prog)" page="Programmes" :soon="true">Découvrir</BaseButton>
      </div>
    </section>

    <!-- 9. ACCOMPAGNEMENT INDIVIDUEL (FIN DE LISTE) -->
    <section class="univers" id="u-accomp" style="--accent: var(--c-accomp)">
      <div class="u-bg-art" aria-hidden="true">
        <img :src="'/coach.png'" alt="Accompagnement individuel Background" class="u-bg-img u-bg-accomp" />
        <div class="u-bg-overlay u-bg-overlay-accomp"></div>
        <div class="u-bg-grain"></div>
      </div>
      <span class="side-label" aria-hidden="true">BSD Athletic Program</span>

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
      </svg>

      <div class="inner">
        <div class="ghost reveal">Coaching Personnel & Sur-Mesure</div>
        <h2 class="reveal d1">Accompagnement individuel</h2>
        <p class="reveal d2">Un coach, un objectif : le tien. Réathlétisation, recomposition corporelle, préparation physique, pré et post-natal.</p>
        <BaseButton class="reveal d3" accent="var(--c-accomp)" page="Coaching perso" :soon="true">Découvrir</BaseButton>
      </div>
    </section>

  </div>
</template>

<script setup>
import { useReveal } from '@/composables/useReveal'
import BaseButton from '@/components/common/BaseButton.vue'

useReveal()
</script>

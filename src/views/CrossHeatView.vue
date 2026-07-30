<template>
  <div class="crossheat-page min-h-screen bg-[#0A0E16] text-[#F1E7D0] relative overflow-hidden">
    
    <!-- Top Navigation Bar -->
    <NavbarHeader />

    <!-- Sticky Sub-Nav with Back Button -->
    <div class="sticky top-0 z-40 backdrop-blur-xl bg-[#0A0E16]/85 border-b border-[#F1E7D0]/15 px-6 py-4 transition-all">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <BaseButton to="/#u-cross" accent="var(--c-cross)" class="!py-2 !px-4 !text-xs">
          ← RETOUR AUX UNIVERS
        </BaseButton>
        <div class="flex items-center gap-3">
          <span class="font-varsity text-xs uppercase tracking-[0.2em] text-[#D9A441] hidden sm:inline-block">CROSS HEAT & CROSS TRAINING</span>
        </div>
      </div>
    </div>

    <!-- MAIN PAGE FLOW -->
    <main class="relative z-10">
      
      <!-- HERO SECTION -->
      <section class="univers" id="u-cross" style="--accent: var(--c-cross)">
        <div class="u-bg-art" aria-hidden="true">
          <img :src="crossheatBg" alt="Cross Heat Background" class="u-bg-img" />
          <div class="u-bg-overlay"></div>
          <div class="u-bg-grain"></div>
        </div>
        <span class="side-label" aria-hidden="true">BSD Athletic Program</span>

        <!-- Animated Kettlebell SVG (.sico) -->
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
          <div class="flex flex-wrap gap-4 mt-6">
            <BaseButton class="reveal d3" accent="var(--c-cross)" href="#reservation">Réserver une séance d'essai</BaseButton>
            <BaseButton class="reveal d3" href="#galerie">Voir les photos</BaseButton>
          </div>
        </div>
      </section>

      <!-- SECTION 2: IMMERSION TERRAIN (Photos Bento Cards) -->
      <section class="univers univers-sec" id="galerie" style="--accent: var(--c-cross)">
        <div class="u-bg-art" aria-hidden="true">
          <div class="u-bg-overlay"></div>
          <div class="u-bg-grain"></div>
        </div>
        <span class="side-label" aria-hidden="true">Immersion Terrain</span>
        <span class="corner-stamp stamp" aria-hidden="true">Photos Officielles</span>

        <div class="inner inner-wide">
          <div class="ghost reveal">Terrain · En Action</div>
          <h2 class="reveal d1" style="font-size: clamp(2.2rem, 5vw, 4.5rem)">Photos du WOD</h2>
          <p class="reveal d2">Découvrez l'ambiance et l'énergie brute de nos séances Cross Heat sur le terrain.</p>
          
          <div class="grid grid-cols-1 md:grid-cols-12 gap-8 mt-8">
            <div class="md:col-span-7 card group relative overflow-hidden rounded-3xl !p-0 !bg-transparent border-1.5 border-[#F1E7D0]/25 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:border-[#FF4B2E]">
              <span class="rivet tl"></span><span class="rivet tr"></span>
              <span class="rivet bl"></span><span class="rivet br"></span>
              <div class="aspect-[16/10] overflow-hidden relative">
                <img :src="crossheat1" alt="Tir à la corde Cross Heat" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div class="absolute inset-0 bg-gradient-to-t from-[#0A0E16] via-[#0A0E16]/30 to-transparent"></div>
              </div>
              <div class="p-6 relative z-10 bg-[#0A0E16]/85 border-t border-[#F1E7D0]/15">
                <span class="stamp border-[#FF4B2E] text-[#FF4B2E] text-xs py-0.5 px-2.5 mb-2 inline-block">ÉPREUVE EN ÉQUIPE</span>
                <h3 class="font-varsity text-xl text-[#F1E7D0] uppercase tracking-wider mb-2">Tir à la corde & Dépassement</h3>
                <p class="text-sm text-[#F1E7D0]/80 font-body">La force mentale et l'effort collectif au cœur du WOD Cross Heat. Ici, personne n'abandonne.</p>
              </div>
            </div>

            <div class="md:col-span-5 card group relative overflow-hidden rounded-3xl !p-0 !bg-transparent border-1.5 border-[#F1E7D0]/25 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:border-[#FF4B2E] flex flex-col justify-between">
              <span class="rivet tl"></span><span class="rivet tr"></span>
              <span class="rivet bl"></span><span class="rivet br"></span>
              <div class="aspect-[16/10] md:aspect-auto md:h-full overflow-hidden relative">
                <img :src="crossheat2" alt="Coaching Cross Heat" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div class="absolute inset-0 bg-gradient-to-t from-[#0A0E16] via-[#0A0E16]/30 to-transparent"></div>
              </div>
              <div class="p-6 relative z-10 bg-[#0A0E16]/85 border-t border-[#F1E7D0]/15">
                <span class="stamp border-[#D9A441] text-[#D9A441] text-xs py-0.5 px-2.5 mb-2 inline-block">100% ADAPTÉ</span>
                <h3 class="font-varsity text-lg text-[#F1E7D0] uppercase tracking-wider mb-1">Coaching Intensif</h3>
                <p class="text-xs text-[#F1E7D0]/80 font-body">Encadrement rapproché par nos coachs diplômés pour perfectionner chaque mouvement en toute sécurité.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 3: STRUCTURE DU WOD -->
      <section class="univers univers-sec" style="--accent: var(--c-cross)">
        <div class="u-bg-art" aria-hidden="true">
          <div class="u-bg-overlay"></div>
          <div class="u-bg-grain"></div>
        </div>
        <span class="side-label" aria-hidden="true">Méthodologie</span>
        <span class="corner-stamp stamp" aria-hidden="true">Programme WOD</span>

        <div class="inner inner-wide">
          <div class="ghost reveal">Structure du WOD</div>
          <h2 class="reveal d1" style="font-size: clamp(2.2rem, 5vw, 4.5rem)">Déroulé d'une séance</h2>
          <p class="reveal d2">Un programme structuré de 60 minutes conçu pour progresser à chaque entraînement.</p>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div class="card !p-6 group hover:border-[#FF4B2E]/70 transition-all">
              <span class="rivet tl"></span><span class="rivet tr"></span><span class="rivet bl"></span><span class="rivet br"></span>
              <div class="w-12 h-12 rounded-xl bg-[#FF4B2E]/20 text-[#FF4B2E] border border-[#FF4B2E]/40 grid place-items-center font-display text-xl mb-4">01</div>
              <h4 class="font-varsity text-base text-[#F1E7D0] mb-1 uppercase tracking-wide">Warm-up & Mobilité</h4>
              <span class="baseline text-[#D9A441]">15 MINUTES</span>
              <p class="text-xs text-[#F1E7D0]/80 leading-relaxed font-body">Préparation articulaire et montée en température cardiaque pour aborder l'effort en toute sécurité.</p>
            </div>

            <div class="card !p-6 group hover:border-[#D9A441]/70 transition-all">
              <span class="rivet tl"></span><span class="rivet tr"></span><span class="rivet bl"></span><span class="rivet br"></span>
              <div class="w-12 h-12 rounded-xl bg-[#D9A441]/20 text-[#D9A441] border border-[#D9A441]/40 grid place-items-center font-display text-xl mb-4">02</div>
              <h4 class="font-varsity text-base text-[#F1E7D0] mb-1 uppercase tracking-wide">Skill & Technique</h4>
              <span class="baseline text-[#D9A441]">15 MINUTES</span>
              <p class="text-xs text-[#F1E7D0]/80 leading-relaxed font-body">Apprentissage et perfectionnement des mouvements (Haltérophilie, Kettlebells, MedBall, Ropes).</p>
            </div>

            <div class="card !p-6 group hover:border-[#FF4B2E]/70 transition-all">
              <span class="rivet tl"></span><span class="rivet tr"></span><span class="rivet bl"></span><span class="rivet br"></span>
              <div class="w-12 h-12 rounded-xl bg-[#FF4B2E]/20 text-[#FF4B2E] border border-[#FF4B2E]/40 grid place-items-center font-display text-xl mb-4">03</div>
              <h4 class="font-varsity text-base text-[#F1E7D0] mb-1 uppercase tracking-wide">Le WOD du Jour</h4>
              <span class="baseline text-[#FF4B2E]">25 MINUTES</span>
              <p class="text-xs text-[#F1E7D0]/80 leading-relaxed font-body">Circuit haute intensité en AMRAP ou EMOM. Maximiser la dépense et se dépasser ensemble.</p>
            </div>

            <div class="card !p-6 group hover:border-[#8C5CFF]/70 transition-all">
              <span class="rivet tl"></span><span class="rivet tr"></span><span class="rivet bl"></span><span class="rivet br"></span>
              <div class="w-12 h-12 rounded-xl bg-[#8C5CFF]/20 text-[#8C5CFF] border border-[#8C5CFF]/40 grid place-items-center font-display text-xl mb-4">04</div>
              <h4 class="font-varsity text-base text-[#F1E7D0] mb-1 uppercase tracking-wide">Retour au calme</h4>
              <span class="baseline text-[#8C5CFF]">5 MINUTES</span>
              <p class="text-xs text-[#F1E7D0]/80 leading-relaxed font-body">Étirements guidés, conseils de récupération et débrief d'équipe en fin de séance.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 4: FORMULAIRE DE RÉSERVATION -->
      <section class="univers univers-sec" id="reservation" style="--accent: var(--c-cross)">
        <div class="u-bg-art" aria-hidden="true">
          <div class="u-bg-overlay"></div>
          <div class="u-bg-grain"></div>
        </div>
        <span class="side-label" aria-hidden="true">Inscription</span>
        <span class="corner-stamp stamp" aria-hidden="true">Séance de Test</span>

        <div class="inner" style="max-width: 800px; margin: 0 auto">
          <div class="ghost reveal">S'entraîner à BSD Sport</div>
          <h2 class="reveal d1" style="font-size: clamp(2.2rem, 5vw, 4rem)">Rejoindre un créneau</h2>
          <p class="reveal d2">Réservez votre séance d'essai gratuite. Les places sont limitées à 12 personnes par WOD.</p>

          <form @submit.prevent="handleBooking" class="mt-8">
            <div class="mb-4">
              <label class="block font-varsity text-xs uppercase tracking-widest text-[#D9A441] mb-2">Nom & Prénom</label>
              <input 
                v-model="bookingForm.name" 
                type="text" 
                placeholder="Ex: Alexandre Martin" 
                required 
                class="w-full bg-[#0A0E16]/70 border border-[#F1E7D0]/30 rounded-xl px-4 py-3.5 text-[#F1E7D0] focus:border-[#D9A441] focus:outline-none transition-colors font-body"
              />
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <label class="block font-varsity text-xs uppercase tracking-widest text-[#D9A441] mb-2">Adresse Email</label>
                <input 
                  v-model="bookingForm.email" 
                  type="email" 
                  placeholder="votre@email.com" 
                  required 
                  class="w-full bg-[#0A0E16]/70 border border-[#F1E7D0]/30 rounded-xl px-4 py-3.5 text-[#F1E7D0] focus:border-[#D9A441] focus:outline-none transition-colors font-body"
                />
              </div>
              <div>
                <label class="block font-varsity text-xs uppercase tracking-widest text-[#D9A441] mb-2">Créneau souhaité</label>
                <select 
                  v-model="bookingForm.slot" 
                  required 
                  class="w-full bg-[#0A0E16]/90 border border-[#F1E7D0]/30 rounded-xl px-4 py-3.5 text-[#F1E7D0] focus:border-[#D9A441] focus:outline-none transition-colors font-body"
                >
                  <option value="" disabled selected>Choisissez un créneau</option>
                  <option value="lundi-19h">Lundi 19h00 (WOD Explosif)</option>
                  <option value="mercredi-18h30">Mercredi 18h30 (WOD Endurance)</option>
                  <option value="vendredi-19h">Vendredi 19h00 (WOD Team Sync)</option>
                  <option value="samedi-10h30">Samedi 10h30 (WOD Hero)</option>
                </select>
              </div>
            </div>

            <BaseButton type="submit" accent="var(--c-cross)" class="w-full justify-center !py-4">
              Confirmer ma réservation
            </BaseButton>
          </form>
        </div>
      </section>

    </main>

    <!-- Footer matching landing page design -->
    <footer class="border-t border-[#F1E7D0]/15 py-10 px-6 sm:px-12 text-center sm:flex sm:justify-between sm:items-center text-xs text-[#F1E7D0]/70 font-body max-w-7xl mx-auto mt-12">
      <div>
        BSD ATHLETIC PROGRAM © 2026 — UNIVERS 01 · CROSS HEAT
      </div>
      <div class="stars mt-2 sm:mt-0">
        ★ ★ ★ ★ ★
      </div>
    </footer>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import NavbarHeader from '@/components/common/NavbarHeader.vue'
import BaseButton from '@/components/common/BaseButton.vue'
import { useReveal } from '@/composables/useReveal'
import { useUiStore } from '@/stores/uiStore'

useReveal()

const crossheatBg = '/crossheat.png'
const crossheat1 = '/crossheat1.JPG'
const crossheat2 = '/crossheat2.JPG'

const uiStore = useUiStore()

const bookingForm = reactive({
  name: '',
  email: '',
  slot: ''
})

function handleBooking() {
  uiStore.showToast(`Merci ${bookingForm.name} ! Votre séance d'essai Cross Heat est réservée.`)
  bookingForm.name = ''
  bookingForm.email = ''
  bookingForm.slot = ''
}
</script>

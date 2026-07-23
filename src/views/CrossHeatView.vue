<template>
  <div class="crossheat-page min-h-screen bg-[#0A0E16] text-[#F1E7D0] relative overflow-hidden">
    
    <!-- Background Gradient Spheres & Grid -->
    <div class="absolute inset-0 bg-[radial-gradient(rgba(241,231,208,0.05)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(255,75,46,0.25),transparent_70%)] pointer-events-none"></div>

    <!-- Header Navigation -->
    <header class="sticky top-0 z-50 backdrop-blur-md bg-[#0A0E16]/80 border-b border-[#F1E7D0]/10 px-6 py-4 flex justify-between items-center">
      <router-link to="/" class="btn !py-2 !px-4 !text-xs !bg-transparent border-[#FF4B2E]/40 hover:border-[#FF4B2E]">
        ← RETOUR À L'ACCUEIL
      </router-link>
      <div class="flex items-center gap-3">
        <span class="stamp border-[#FF4B2E] text-[#FF4B2E] text-xs py-1 px-3">UNITE 01</span>
        <span class="font-display text-xl text-[#F1E7D0] tracking-wider hidden sm:inline">BSD SPORT</span>
      </div>
    </header>

    <!-- Main Content Container -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
      
      <!-- Hero Banner -->
      <section class="text-center mb-16">
        <div class="eyebrow justify-center mb-4 text-[#D9A441] text-xs sm:text-sm tracking-[0.3em] uppercase">
          PROGRAMME ATHLÉTIQUE HAUTE INTENSITÉ
        </div>
        
        <h1 class="font-display text-6xl sm:text-8xl md:text-9xl uppercase tracking-tight text-[#F1E7D0] drop-shadow-[0_4px_24px_rgba(255,75,46,0.3)] mb-6">
          CROSS <span class="text-[#FF4B2E]">HEAT</span>
        </h1>
        
        <p class="max-w-2xl mx-auto text-lg sm:text-xl text-[#F1E7D0]/80 font-body leading-relaxed mb-8">
          Force, cardio, et dépassement collectif. Des WODs intenses conçus pour repousser vos limites dans une ambiance universitaire et solidaire.
        </p>

        <div class="flex flex-wrap justify-center gap-4">
          <a href="#reservation" class="btn !bg-[#FF4B2E] !text-[#F1E7D0] hover:!bg-[#E0192F] shadow-[0_10px_30px_rgba(255,75,46,0.4)]">
            RÉSERVER UNE SÉANCE D'ESSAI
          </a>
          <a href="#galerie" class="btn !bg-white/5 border-[#F1E7D0]/30 hover:border-[#FF4B2E]">
            VOIR LES PHOTOS DU CLUB
          </a>
        </div>
      </section>

      <!-- Photos Bento Gallery (Featuring crossheat1.JPG & crossheat2.JPG) -->
      <section id="galerie" class="mb-20">
        <div class="flex items-center justify-between mb-8 border-b border-[#F1E7D0]/10 pb-4">
          <div>
            <span class="font-stencil text-xs text-[#D9A441] tracking-[0.2em] uppercase">IMMERSION TERRAIN</span>
            <h2 class="font-display text-3xl sm:text-4xl text-[#F1E7D0] uppercase">EN ACTION SUR LE WOD</h2>
          </div>
          <span class="stamp border-[#D9A441] text-[#D9A441] text-xs hidden sm:inline-block">PHOTOS OFFICIELLES</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          <!-- Photo 1 Large Bento Card -->
          <div class="md:col-span-7 group relative rounded-3xl overflow-hidden border-2 border-[#F1E7D0]/20 bg-[#152238]/60 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:border-[#FF4B2E]/60">
            <div class="aspect-[4/3] sm:aspect-[16/10] overflow-hidden relative">
              <img 
                :src="crossheat1" 
                alt="Cross Heat WOD Tirez à la corde BSD Sport" 
                class="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#0A0E16] via-[#0A0E16]/20 to-transparent"></div>
            </div>
            
            <div class="p-6 sm:p-8 relative z-10 -mt-16 sm:-mt-20">
              <div class="inline-flex items-center gap-2 bg-[#FF4B2E]/90 text-white font-stencil text-xs px-3 py-1 rounded-full mb-3 shadow-lg">
                <span class="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                ÉPREUVE EN ÉQUIPE
              </div>
              <h3 class="font-varsity text-xl sm:text-2xl text-[#F1E7D0] uppercase tracking-wider mb-2">
                TIR À LA CORDE & DÉPASSEMENT
              </h3>
              <p class="text-sm text-[#F1E7D0]/80">
                La force mentale et l'effort collectif au cœur du WOD Cross Heat. Ici, personne n'abandonne.
              </p>
            </div>
          </div>

          <!-- Photo 2 Bento Card -->
          <div class="md:col-span-5 group relative rounded-3xl overflow-hidden border-2 border-[#F1E7D0]/20 bg-[#152238]/60 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:border-[#FF4B2E]/60 flex flex-col">
            <div class="aspect-[4/3] sm:aspect-[16/10] md:aspect-auto md:h-full overflow-hidden relative">
              <img 
                :src="crossheat2" 
                alt="Entraînement Cross Heat BSD Sport" 
                class="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#0A0E16] via-[#0A0E16]/30 to-transparent"></div>
            </div>

            <div class="p-6 relative z-10">
              <div class="inline-flex items-center gap-2 bg-[#D9A441] text-[#0A0E16] font-stencil text-xs px-3 py-1 rounded-full mb-2 font-bold">
                100% ADAPTÉ
              </div>
              <h3 class="font-varsity text-lg text-[#F1E7D0] uppercase tracking-wider mb-1">
                COACHING INTENSIF
              </h3>
              <p class="text-xs text-[#F1E7D0]/80">
                Encadrement rapproché par nos coachs diplômés pour perfectionner chaque mouvement en toute sécurité.
              </p>
            </div>
          </div>

        </div>
      </section>

      <!-- Program Features (Bento Grid 4 Cards) -->
      <section class="mb-20">
        <div class="text-center mb-12">
          <span class="font-stencil text-xs text-[#FF4B2E] tracking-[0.3em] uppercase">STRUCTURE DU WOD</span>
          <h2 class="font-display text-4xl sm:text-5xl text-[#F1E7D0] uppercase mt-2">DÉROULÉ D'UNE SÉANCE</h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div class="bg-[#152238]/40 border border-[#F1E7D0]/20 rounded-2xl p-6 backdrop-blur-md hover:border-[#FF4B2E]/50 transition-all">
            <div class="w-12 h-12 rounded-xl bg-[#FF4B2E]/20 text-[#FF4B2E] border border-[#FF4B2E]/40 grid place-items-center font-display text-xl mb-4">
              01
            </div>
            <h4 class="font-varsity text-lg text-[#F1E7D0] mb-2 uppercase">WARM-UP & MOBILITÉ</h4>
            <p class="text-xs text-[#F1E7D0]/70 leading-relaxed">
              15 minutes pour réveiller les articulations, augmenter le rythme cardiaque et préparer le corps aux charges.
            </p>
          </div>

          <div class="bg-[#152238]/40 border border-[#F1E7D0]/20 rounded-2xl p-6 backdrop-blur-md hover:border-[#FF4B2E]/50 transition-all">
            <div class="w-12 h-12 rounded-xl bg-[#D9A441]/20 text-[#D9A441] border border-[#D9A441]/40 grid place-items-center font-display text-xl mb-4">
              02
            </div>
            <h4 class="font-varsity text-lg text-[#F1E7D0] mb-2 uppercase">SKILL & TECHNIQUE</h4>
            <p class="text-xs text-[#F1E7D0]/70 leading-relaxed">
              Apprentissage et répétition des gestes clés (haltérophilie, Kettlebell, médecine ball) sous le contrôle du coach.
            </p>
          </div>

          <div class="bg-[#152238]/40 border border-[#F1E7D0]/20 rounded-2xl p-6 backdrop-blur-md hover:border-[#FF4B2E]/50 transition-all">
            <div class="w-12 h-12 rounded-xl bg-[#FF4B2E]/20 text-[#FF4B2E] border border-[#FF4B2E]/40 grid place-items-center font-display text-xl mb-4">
              03
            </div>
            <h4 class="font-varsity text-lg text-[#F1E7D0] mb-2 uppercase">LE WOD DU JOUR</h4>
            <p class="text-xs text-[#F1E7D0]/70 leading-relaxed">
              25 minutes de circuit à haute intensité (AMRAP ou EMOM) pour faire exploser le compteur de calories.
            </p>
          </div>

          <div class="bg-[#152238]/40 border border-[#F1E7D0]/20 rounded-2xl p-6 backdrop-blur-md hover:border-[#FF4B2E]/50 transition-all">
            <div class="w-12 h-12 rounded-xl bg-[#8C5CFF]/20 text-[#8C5CFF] border border-[#8C5CFF]/40 grid place-items-center font-display text-xl mb-4">
              04
            </div>
            <h4 class="font-varsity text-lg text-[#F1E7D0] mb-2 uppercase">RETOUR AU CALME</h4>
            <p class="text-xs text-[#F1E7D0]/70 leading-relaxed">
              Étirements profonds, conseils de récupération et débrief collectif autour de la gourde d'eau.
            </p>
          </div>

        </div>
      </section>

      <!-- Reservation Form Section -->
      <section id="reservation" class="max-w-3xl mx-auto bg-[#152238]/70 border-2 border-[#FF4B2E]/40 rounded-3xl p-8 sm:p-12 backdrop-blur-2xl shadow-2xl relative">
        <span class="stamp border-[#FF4B2E] text-[#FF4B2E] text-xs absolute -top-4 right-8 bg-[#0A0E16] px-3">SÉANCE DE TEST</span>
        
        <h3 class="font-display text-3xl sm:text-4xl text-[#F1E7D0] uppercase text-center mb-2">
          REJOINDRE UN CRENEAU CROSS HEAT
        </h3>
        <p class="text-sm text-center text-[#F1E7D0]/70 mb-8">
          Réservez votre séance d'essai gratuite. Places limitées à 12 personnes par WOD.
        </p>

        <form @submit.prevent="handleBooking" class="space-y-4">
          <div>
            <label class="block font-varsity text-xs uppercase tracking-widest text-[#D9A441] mb-2">Nom & Prénom</label>
            <input 
              v-model="bookingForm.name" 
              type="text" 
              placeholder="Ex: Jean Dupont" 
              required 
              class="w-full bg-[#0A0E16]/80 border border-[#F1E7D0]/30 rounded-xl px-4 py-3 text-[#F1E7D0] focus:border-[#FF4B2E] focus:outline-none"
            />
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block font-varsity text-xs uppercase tracking-widest text-[#D9A441] mb-2">Email</label>
              <input 
                v-model="bookingForm.email" 
                type="email" 
                placeholder="votre@email.com" 
                required 
                class="w-full bg-[#0A0E16]/80 border border-[#F1E7D0]/30 rounded-xl px-4 py-3 text-[#F1E7D0] focus:border-[#FF4B2E] focus:outline-none"
              />
            </div>
            <div>
              <label class="block font-varsity text-xs uppercase tracking-widest text-[#D9A441] mb-2">Créneau souhaité</label>
              <select 
                v-model="bookingForm.slot" 
                required 
                class="w-full bg-[#0A0E16]/80 border border-[#F1E7D0]/30 rounded-xl px-4 py-3 text-[#F1E7D0] focus:border-[#FF4B2E] focus:outline-none"
              >
                <option value="" disabled selected>Choisissez un créneau</option>
                <option value="lundi-19h">Lundi 19h00 (WOD Explosif)</option>
                <option value="mercredi-18h30">Mercredi 18h30 (WOD Endurance)</option>
                <option value="vendredi-19h">Vendredi 19h00 (WOD Team Sync)</option>
                <option value="samedi-10h30">Samedi 10h30 (WOD Hero)</option>
              </select>
            </div>
          </div>

          <button 
            type="submit" 
            class="btn w-full !bg-[#FF4B2E] !text-[#F1E7D0] !py-4 hover:!bg-[#E0192F] shadow-[0_10px_30px_rgba(255,75,46,0.4)] mt-6 font-varsity tracking-widest text-sm"
          >
            CONFIRMER MA RÉSERVATION →
          </button>
        </form>
      </section>

    </main>

    <!-- Footer Simple -->
    <footer class="border-t border-[#F1E7D0]/10 py-8 text-center text-xs text-[#F1E7D0]/50 font-body mt-12">
      BSD SPORT © 2026 — UNIVERS CROSS HEAT · DEPASSMENT & ESPRIT D'ÉQUIPE
    </footer>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useUiStore } from '@/stores/uiStore'

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

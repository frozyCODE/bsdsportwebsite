<template>
  <section class="relative py-24 sm:py-36 bg-[#0d0d0d] text-[#F1E7D0] overflow-hidden z-10 select-none font-body">
    
    <!-- Texture de Grain Argentique -->
    <div 
      class="absolute inset-0 z-0 opacity-25 mix-blend-overlay pointer-events-none bg-repeat"
      style="background-image: url('data:image/svg+xml,%3Csvg width=\'256\' height=\'256\' viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'heavyGrain\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.95\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23heavyGrain)\'/%3E%3C/svg%3E');"
      aria-hidden="true"
    ></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-10">
      
      <!-- EN-TÊTE DESIGN ÉPURÉ ET NATUREL -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-10">
        
        <div class="space-y-4">
          <!-- Tag avec Point Orange Fixe -->
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full bg-[#ff7043]"></span>
            <span class="font-display text-xs sm:text-sm uppercase tracking-widest text-white">TEMOIGNAGES</span>
          </div>

          <!-- Titre Géant Akira Sans Accent -->
          <h2 class="font-display text-4xl sm:text-7xl lg:text-8xl uppercase tracking-tighter text-white leading-[0.95]">
            CE QUE DISENT <br />
            <span class="chrome-silver-text">NOS MEMBRES</span>
          </h2>
        </div>

        <!-- Badge Circulaire Droite -->
        <a 
          href="https://www.google.com/maps/search/?api=1&query=BSD%20Sport%2028%20Rue%20des%20Cit%C3%A9s%20Mon%20Logis%2C%2038800%20Le%20Pont-de-Claix%2C%20France" 
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-3 self-start md:self-end cursor-pointer group"
        >
          <span class="font-display text-xs sm:text-sm text-white/80 uppercase tracking-wider group-hover:text-white">
            Nos avis
          </span>
          <div class="w-12 h-12 rounded-full border-2 border-[#ff7043] flex items-center justify-center text-white font-display text-xs sm:text-sm font-bold shadow-[0_0_12px_rgba(255,112,67,0.4)] group-hover:bg-[#ff7043] group-hover:text-black transition-all duration-300">
            5.0
          </div>
        </a>

      </div>

    </div>

    <!-- CARROUSEL STRICTEMENT MANUEL AU DRAG & DROP -->
    <div 
      ref="dragContainer"
      class="w-full overflow-hidden cursor-grab active:cursor-grabbing py-6 select-none"
      @mousedown="startDrag"
      @mousemove="onDrag"
      @mouseup="stopDrag"
      @mouseleave="stopDrag"
      @touchstart="startDrag"
      @touchmove="onDrag"
      @touchend="stopDrag"
    >
      <div 
        ref="track"
        class="flex gap-6 sm:gap-8 w-max transition-transform duration-150 ease-out will-change-transform px-4 sm:px-8"
        :style="{ transform: `translate3d(${currentX}px, 0, 0)` }"
      >
        
        <!-- Cartes d'avis immobiles et 100% responsives -->
        <div 
          v-for="(rev, index) in infiniteReviews" 
          :key="index"
          class="shrink-0 w-[310px] sm:w-[400px] lg:w-[420px] min-h-[480px] sm:min-h-[540px] bg-[#ebe8e1] text-black p-6 sm:p-9 rounded-[32px] flex flex-col justify-between shadow-2xl border border-black/5 relative overflow-hidden"
          style="background-image: url('data:image/svg+xml,%3Csvg width=\'256\' height=\'256\' viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'cardGrain\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.95\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23cardGrain)\' opacity=\'0.15\'/%3E%3C/svg%3E');"
        >
          <div class="space-y-5">
            <!-- Grand Titre Akira Bold Sans Accent Responsive (sans tronquage) -->
            <h3 class="font-display text-xl sm:text-2xl lg:text-3xl uppercase tracking-tight text-black leading-[1.05] pt-1 break-words">
              {{ rev.title }}
            </h3>
            
            <!-- 5 Étoiles Oranges/Rouges -->
            <div class="flex text-[#ff7043] text-lg sm:text-xl gap-1">
              ★★★★★
            </div>

            <!-- Paragraphe d'Avis -->
            <p class="text-xs sm:text-sm text-black/85 font-body leading-relaxed">
              {{ rev.text }}
            </p>
          </div>

          <!-- Nom de l'auteur -->
          <div class="pt-6 border-t border-black/10">
            <span class="font-body font-semibold text-sm sm:text-base text-black block">
              {{ rev.author }}
            </span>
          </div>
        </div>

      </div>
    </div>

  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const dragContainer = ref(null)
const track = ref(null)

const isDragging = ref(false)
const startX = ref(0)
const currentX = ref(0)
const prevX = ref(0)

const baseReviews = [
  {
    title: 'JE RECOMMANDE A 1000%',
    text: "Je recommande à 1000% une équipe à l'écoute de vos attentes ! Que ce soit en cours collectif ou en coaching personnel vous ne serez pas déçu ! Ils s'adaptent au niveau de chacun et proposent aussi le suivi nutritionnel donc n'hésitez même pas !!!",
    author: 'Safia Elafani Nader'
  },
  {
    title: 'DES RESULTATS ET UNE CONFIANCE TOTALE',
    text: "Le coach est au top, à l'écoute de ses apprentis, de bons entraînements qui mènent à de bons résultats ! Une confiance les yeux fermés envers ce club.",
    author: 'Méllina Maia'
  },
  {
    title: "REELLEMENT A L'ECOUTE",
    text: "Des professionnels réellement à l'écoute et ayant su répondre à mes attentes et besoins. N'hésitez pas, ils vous tireront vers le haut à votre rythme.",
    author: 'Melodi Dogan'
  },
  {
    title: 'EQUIPE PEDAGOGUE ET PROFESSIONNELLE',
    text: "Je recommande, équipe pédagogue, professionnelle, à l'écoute. Soucieuse de bien faire, avec un accompagnement au plus près de mes demandes ! Au top merci !!",
    author: 'Amel'
  },
  {
    title: 'TRES MOTIVANTE ET EFFICACE',
    text: "Super équipe sportive, très à l'écoute et très motivante ! Communication, Qualité et Professionnalisme au rendez-vous.",
    author: 'Merouan DALI'
  },
  {
    title: 'SUPERBE AMBIANCE ET BONS COACHS',
    text: "Superbe ambiance, équipe à l'écoute et efficace, je recommande vivement à tous ceux qui veulent progresser !",
    author: 'Ryan Amor'
  },
  {
    title: 'EXCELLENT COLLECTIF ET MOTIVATION',
    text: "Très bon coach avec énormément de motivation et un excellent collectif au quotidien.",
    author: 'Salah Elf'
  },
  {
    title: 'COACHING ET RESULTATS SATISFAISANTS',
    text: "Recommande à 100%, coach très à l'écoute à la demande du client et des résultats satisfaisants !",
    author: 'Shigetora'
  }
]

const infiniteReviews = computed(() => [
  ...baseReviews,
  ...baseReviews,
  ...baseReviews
])

function getClientX(e) {
  return e.touches ? e.touches[0].clientX : e.clientX
}

function startDrag(e) {
  isDragging.value = true
  startX.value = getClientX(e) - prevX.value
}

function onDrag(e) {
  if (!isDragging.value) return
  const x = getClientX(e)
  currentX.value = x - startX.value

  if (track.value) {
    const singleSetWidth = track.value.scrollWidth / 3
    if (Math.abs(currentX.value) >= singleSetWidth * 2) {
      currentX.value = -singleSetWidth
      startX.value = x - currentX.value
    } else if (currentX.value > 0) {
      currentX.value = -singleSetWidth
      startX.value = x - currentX.value
    }
  }
}

function stopDrag() {
  if (!isDragging.value) return
  isDragging.value = false
  prevX.value = currentX.value
}
</script>

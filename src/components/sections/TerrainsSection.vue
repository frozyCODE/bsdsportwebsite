<template>
  <section id="terrains" :style="{ '--active-terrain-color': currentProfile.accentColor }">
    <!-- Dynamic Ambient Energy Background Glow -->
    <div class="terrains-ambient-glow" aria-hidden="true"></div>

    <p class="eyebrow reveal">Parcours & Profils</p>
    <h2 class="reveal d1"># Choisis ton terrain de jeu</h2>
    <p class="lead reveal d2">Sélectionne ton profil pour débloquer ton univers et ton formulaire personnalisé.</p>
    
    <div class="cards reveal d3">
      <div
        v-for="(p, index) in profiles"
        :key="p.id"
        :ref="el => cardRefs[index] = el"
        :class="['card', p.styleClass, { active: currentProfileId === p.id }]"
        :style="{ '--accent-card': p.accentColor }"
        @mousemove="handleMouseMove($event, index)"
        @mouseleave="handleMouseLeave(index)"
        @click="selectProfile(p)"
      >
        <!-- Corner Rivets -->
        <span class="rivet tl"></span><span class="rivet tr"></span>
        <span class="rivet bl"></span><span class="rivet br"></span>

        <!-- Active Badge Tag -->
        <div v-if="currentProfileId === p.id" class="active-tag">
          <span class="active-dot"></span>
          <span>Terrain Actif</span>
        </div>

        <div class="icon-wrap" aria-hidden="true" v-html="p.icon"></div>
        <h3>{{ p.title }}</h3>
        <span class="baseline">{{ p.baseline }}</span>
        <p>{{ p.description }}</p>

        <!-- Feature Pills -->
        <div class="feature-pills">
          <span v-for="feat in getFeatures(p.id)" :key="feat" class="pill">
            {{ feat }}
          </span>
        </div>

        <button class="go-btn inline-flex items-center justify-center gap-2 group">
          <span>{{ p.id === 'entreprises' ? 'Découvrir l\'espace Pro' : (p.id === 'territoires' ? 'Découvrir l\'espace Territoire' : (currentProfileId === p.id ? 'Terrain Sélectionné ✓' : 'Choisir ce terrain')) }}</span>
          <svg v-if="p.id === 'entreprises' || p.id === 'territoires'" class="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useReveal } from '@/composables/useReveal'
import { useProfile } from '@/composables/useProfile'
import { useUiStore } from '@/stores/uiStore'

useReveal()

const router = useRouter()
const { profiles, currentProfileId, currentProfile, setProfile } = useProfile()
const uiStore = useUiStore()

const cardRefs = ref([])

function getFeatures(id) {
  if (id === 'particuliers') {
    return ['8 Univers', 'WODs & Coaching', 'Tous Niveaux']
  } else if (id === 'entreprises') {
    return ['Sur-Mesure', 'Cohésion & CE', 'Bien-Être Pro']
  } else {
    return ['Collectivités', 'Lien Social', 'Isère & Métropole']
  }
}

const baseRotates = [-7, 1, 7]

function handleMouseMove(e, index) {
  const card = cardRefs.value[index]
  if (!card) return

  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2

  const baseRot = baseRotates[index] || 0
  const rotateX = ((y - centerY) / centerY) * -8
  const rotateY = ((x - centerX) / centerX) * 8

  card.style.transform = `perspective(1000px) rotate(${baseRot}deg) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.025, 1.025, 1.025)`
}

function handleMouseLeave(index) {
  const card = cardRefs.value[index]
  if (card) {
    const baseRot = baseRotates[index] || 0
    card.style.transform = `perspective(1000px) rotate(${baseRot}deg) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
  }
}

function selectProfile(p) {
  setProfile(p.id)
  if (p.id === 'entreprises') {
    uiStore.showToast(`Redirection vers l'espace BSD Entreprises...`)
    router.push('/entreprise')
  } else if (p.id === 'territoires') {
    uiStore.showToast(`Redirection vers l'espace Territoire & Social...`)
    router.push('/territoire')
  } else {
    uiStore.showToast(`Terrain activé : ${p.title}`)
  }
}
</script>

<style scoped>
#terrains {
  position: relative;
  padding: 6.5rem 6vw 5.5rem;
  background: linear-gradient(180deg, #0A0E16 0%, #101622 50%, #0A0E16 100%);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  transition: background 0.6s ease;
}

.terrains-ambient-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 900px;
  height: 600px;
  background: radial-gradient(circle, var(--active-terrain-color, var(--gold)), transparent 70%);
  filter: blur(140px);
  opacity: 0.15;
  z-index: 0;
  pointer-events: none;
  transition: background 0.7s ease, opacity 0.7s ease;
}

#terrains .eyebrow {
  color: var(--gold);
  z-index: 1;
}

#terrains h2 {
  font-family: var(--display);
  font-size: clamp(2.5rem, 8vw, 6.2rem);
  text-transform: uppercase;
  line-height: .92;
  margin-top: .2em;
  text-align: center;
  z-index: 1;
}

#terrains .lead {
  font-size: clamp(1rem, 1.6vw, 1.25rem);
  color: rgba(241, 231, 208, .8);
  margin: 0.8rem auto 3.5rem;
  max-width: 60ch;
  text-align: center;
  z-index: 1;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.4rem;
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  z-index: 1;
  perspective: 1000px;
}

.card {
  position: relative;
  background: rgba(255, 255, 255, .04);
  backdrop-filter: blur(24px) saturate(1.2);
  -webkit-backdrop-filter: blur(24px) saturate(1.2);
  border: 1.5px solid rgba(241, 231, 208, .18);
  border-radius: 26px;
  padding: 2.8rem 2rem 2.2rem;
  cursor: pointer;
  will-change: transform;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transition: transform 0.25s ease-out, border-color 0.35s ease, box-shadow 0.35s ease, background 0.35s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1 1 310px;
  max-width: 390px;
  box-shadow: 0 20px 50px rgba(0,0,0,.45);
  overflow: hidden;
  isolation: isolate;
}

.card::after {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  background: linear-gradient(100deg, transparent, rgba(255,255,255,.14), transparent);
  transform: skewX(-18deg);
  pointer-events: none;
  opacity: 0;
  transition: left 0.6s ease-in-out, opacity 0.25s ease;
}

.card:hover::after {
  left: 130%;
  opacity: 1;
}

.card:hover {
  border-color: var(--accent-card, rgba(241, 231, 208, 0.45));
  box-shadow: 0 32px 75px rgba(0,0,0,0.65);
  background: rgba(255, 255, 255, 0.065);
}

.card.active {
  border-color: var(--accent-card, var(--gold));
  background: rgba(255, 255, 255, 0.085);
  box-shadow: 0 0 35px var(--accent-card, rgba(217, 164, 65, .25)), 0 28px 65px rgba(0,0,0,.65);
}

.active-tag {
  position: absolute;
  top: 1.2rem;
  right: 1.4rem;
  background: var(--accent-card, var(--gold));
  color: var(--ink);
  font-family: var(--stencil);
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 0.4em 0.9em;
  border-radius: 99px;
  font-weight: 700;
  z-index: 4;
  box-shadow: 0 4px 14px rgba(0,0,0,0.35);
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.active-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--ink);
  animation: pulseDot 1.4s infinite ease-in-out;
}

@keyframes pulseDot {
  0%, 100% { opacity: 0.4; transform: scale(0.8); }
  50% { opacity: 1; transform: scale(1.2); }
}

.icon-wrap {
  width: 68px;
  height: 68px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.06);
  border: 1.5px solid rgba(241, 231, 208, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-card, var(--gold));
  margin-bottom: 1.4rem;
  transition: transform 0.35s cubic-bezier(.16, 1, .3, 1), background 0.35s ease, border-color 0.35s ease;
  z-index: 1;
}

.card:hover .icon-wrap {
  transform: scale(1.12) translateZ(15px);
  background: rgba(255, 255, 255, 0.14);
  border-color: var(--accent-card, var(--gold));
}

.card h3 {
  font-family: var(--display);
  font-size: 2.2rem;
  text-transform: uppercase;
  color: var(--cream);
  line-height: 1;
  z-index: 1;
}

.card .baseline {
  font-family: var(--varsity);
  font-size: .65rem;
  letter-spacing: .25em;
  text-transform: uppercase;
  color: var(--accent-card, var(--cardinal));
  margin: 0.6rem 0 1.2rem;
  z-index: 1;
}

.card p {
  font-size: .95rem;
  color: rgba(241, 231, 208, .8);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex-grow: 1;
  z-index: 1;
}

/* Feature Pills */
.feature-pills {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.45rem;
  margin-bottom: 1.8rem;
  z-index: 1;
}

.pill {
  font-family: var(--varsity);
  font-size: 0.58rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  background: rgba(241, 231, 208, 0.07);
  border: 1px solid rgba(241, 231, 208, 0.2);
  color: rgba(241, 231, 208, 0.85);
  padding: 0.3em 0.7em;
  border-radius: 99px;
  transition: all 0.3s ease;
}

.card:hover .pill {
  border-color: var(--accent-card, var(--gold));
  color: var(--cream);
  background: rgba(255, 255, 255, 0.1);
}

.go-btn {
  background: transparent;
  border: 1.5px solid rgba(241, 231, 208, .3);
  color: var(--cream);
  font-family: var(--varsity);
  font-size: 0.68rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  padding: 0.95em 1.4em;
  border-radius: 12px;
  transition: all .3s ease;
  width: 100%;
  z-index: 1;
}

.go-btn::after {
  content: none !important;
  display: none !important;
}

.card:hover .go-btn,
.card.active .go-btn {
  background: var(--accent-card, var(--gold));
  border-color: var(--accent-card, var(--gold));
  color: var(--ink);
  font-weight: 700;
}

/* Rivets */
.rivet {
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: rgba(241, 231, 208, .4);
  box-shadow: inset 0 1px 1px rgba(0,0,0,.6);
  z-index: 2;
}
.rivet.tl { top: 12px; left: 14px; }
.rivet.tr { top: 12px; right: 14px; }
.rivet.bl { bottom: 12px; left: 14px; }
.rivet.br { bottom: 12px; right: 14px; }
</style>

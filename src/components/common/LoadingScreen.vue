<template>
  <transition
    leave-active-class="loader-leave-active"
    leave-to-class="loader-leave-to"
  >
    <div v-if="visible" class="loader-screen">
      <!-- Particules animées en arrière-plan -->
      <div class="loader-particles">
        <span v-for="n in 20" :key="n" class="particle" :style="particleStyle(n)" />
      </div>

      <!-- Contenu centré -->
      <div class="loader-content">
        <div class="logo-wrapper">
          <img
            :src="logoUrl"
            alt="BSD Sport"
            class="loader-logo"
          />
          <div class="logo-glow" />
        </div>

        <!-- Barre de progression -->
        <div class="progress-track">
          <div class="progress-bar" />
        </div>

        <!-- Texte sous la barre -->
        <p class="loader-tagline">ICI, LE SPORT NOUS RASSEMBLE</p>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const visible = ref(true)
const logoUrl = '/Gemini_Generated_Image_1kssz21kssz21kss-removebg-preview-converti-depuis-png.svg'

function particleStyle(n) {
  const x = Math.random() * 100
  const y = Math.random() * 100
  const size = 2 + Math.random() * 4
  const delay = Math.random() * 2
  const dur = 2 + Math.random() * 3
  return {
    left: `${x}%`,
    top: `${y}%`,
    width: `${size}px`,
    height: `${size}px`,
    animationDelay: `${delay}s`,
    animationDuration: `${dur}s`
  }
}

onMounted(() => {
  setTimeout(() => {
    visible.value = false
  }, 3000)
})
</script>

<style scoped>
.loader-screen {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0A0E16;
  overflow: hidden;
}

/* Transition de sortie */
.loader-leave-active {
  transition: opacity 0.6s cubic-bezier(.4, 0, .2, 1), transform 0.6s cubic-bezier(.4, 0, .2, 1);
}
.loader-leave-to {
  opacity: 0;
  transform: scale(1.08);
}

/* Particules flottantes */
.loader-particles {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.particle {
  position: absolute;
  border-radius: 50%;
  background: rgba(217, 164, 65, 0.35);
  animation: particlePulse ease-in-out infinite alternate;
}
@keyframes particlePulse {
  0% { opacity: 0; transform: scale(0.5) translateY(0); }
  100% { opacity: 1; transform: scale(1.2) translateY(-20px); }
}

/* Contenu centré */
.loader-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  position: relative;
  z-index: 2;
}

/* Logo wrapper avec glow */
.logo-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.loader-logo {
  width: clamp(120px, 22vw, 220px);
  height: auto;
  animation: logoReveal 1.2s cubic-bezier(.16, 1, .3, 1) forwards,
             logoFloat 3s ease-in-out 1.2s infinite;
  opacity: 0;
  filter: drop-shadow(0 0 30px rgba(217, 164, 65, 0.3));
}
@keyframes logoReveal {
  0% { opacity: 0; transform: scale(0.7); filter: drop-shadow(0 0 0 transparent); }
  60% { opacity: 1; transform: scale(1.05); }
  100% { opacity: 1; transform: scale(1); filter: drop-shadow(0 0 30px rgba(217, 164, 65, 0.3)); }
}
@keyframes logoFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

/* Glow pulsé derrière le logo */
.logo-glow {
  position: absolute;
  width: 280px;
  height: 280px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(200, 16, 46, 0.15) 0%, rgba(217, 164, 65, 0.08) 50%, transparent 70%);
  animation: glowPulse 2.5s ease-in-out infinite;
  pointer-events: none;
}
@keyframes glowPulse {
  0%, 100% { transform: scale(1); opacity: 0.6; }
  50% { transform: scale(1.25); opacity: 1; }
}

/* Barre de progression */
.progress-track {
  width: clamp(160px, 30vw, 300px);
  height: 3px;
  border-radius: 999px;
  background: rgba(241, 231, 208, 0.12);
  overflow: hidden;
}
.progress-bar {
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, #C8102E, #D9A441);
  animation: progressFill 2.8s cubic-bezier(.25, .46, .45, .94) forwards;
  box-shadow: 0 0 12px rgba(200, 16, 46, 0.5);
}
@keyframes progressFill {
  0% { width: 0; }
  100% { width: 100%; }
}

/* Tagline */
.loader-tagline {
  font-family: 'Graduate', serif;
  font-size: clamp(0.6rem, 1.2vw, 0.8rem);
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: rgba(241, 231, 208, 0.5);
  animation: taglineFade 1s 0.8s ease forwards;
  opacity: 0;
}
@keyframes taglineFade {
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 0.5; transform: translateY(0); }
}
</style>

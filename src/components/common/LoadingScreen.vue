<template>
  <Transition name="fade-screen">
    <div v-if="isLoading" class="loading-screen" role="dialog" aria-label="Chargement BSD Sport">
      <div class="loading-content">
        <!-- Logo & Crest -->
        <div class="logo-box">
          <span class="crest">BSD</span>
          <span class="sub">SPORT</span>
        </div>

        <h1 class="loading-title">ATHLETIC PROGRAM</h1>

        <!-- Progress Bar -->
        <div class="progress-container">
          <div class="progress-bar" :style="{ width: progress + '%' }"></div>
        </div>

        <div class="progress-info">
          <span class="status">{{ statusText }}</span>
          <span class="percent">{{ Math.round(progress) }}%</span>
        </div>

        <button class="skip-btn" @click="finishLoading">
          Entrer dans le Club →
        </button>
      </div>

      <div class="loading-bg-glow"></div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isLoading = ref(true)
const progress = ref(0)
const statusText = ref('Initialisation des univers...')

const emit = defineEmits(['loaded'])

function finishLoading() {
  isLoading.value = false
  emit('loaded')
}

onMounted(() => {
  const steps = [
    { target: 35, text: 'Chargement des univers...', delay: 250 },
    { target: 70, text: 'Préparation des terrains...', delay: 550 },
    { target: 100, text: 'Prêt ! Bienvenue chez BSD.', delay: 900 }
  ]

  let currentStep = 0

  function nextStep() {
    if (currentStep < steps.length) {
      const step = steps[currentStep]
      statusText.value = step.text
      const startTime = performance.now()
      const startVal = progress.value
      const duration = 400

      function animateProgress(time) {
        const elapsed = time - startTime
        const p = Math.min(1, elapsed / duration)
        progress.value = startVal + (step.target - startVal) * p

        if (p < 1) {
          requestAnimationFrame(animateProgress)
        } else {
          currentStep++
          if (currentStep < steps.length) {
            setTimeout(nextStep, step.delay)
          } else {
            setTimeout(() => {
              finishLoading()
            }, 400)
          }
        }
      }
      requestAnimationFrame(animateProgress)
    }
  }

  setTimeout(nextStep, 150)
})
</script>

<style scoped>
.loading-screen {
  position: fixed;
  inset: 0;
  z-index: 99999;
  background: #0A0E16;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.loading-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  max-width: 450px;
  width: 90%;
}

.logo-box {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.logo-box .crest {
  font-family: var(--display);
  font-size: 3.5rem;
  color: var(--cream);
  text-shadow: 3px 3px 0 var(--cardinal);
  line-height: 1;
}

.logo-box .sub {
  font-family: var(--stencil);
  font-size: 1.2rem;
  letter-spacing: 0.3em;
  color: var(--gold);
}

.loading-title {
  font-family: var(--varsity);
  font-size: 0.8rem;
  letter-spacing: 0.45em;
  color: rgba(241, 231, 208, 0.6);
  margin-bottom: 2.2rem;
  text-transform: uppercase;
}

.progress-container {
  width: 100%;
  height: 6px;
  background: rgba(241, 231, 208, 0.12);
  border-radius: 99px;
  overflow: hidden;
  position: relative;
  box-shadow: inset 0 1px 3px rgba(0,0,0,0.5);
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, var(--cardinal), var(--c-cross), var(--gold));
  border-radius: 99px;
  transition: width 0.1s linear;
  box-shadow: 0 0 16px var(--cardinal);
}

.progress-info {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 0.8rem;
  font-family: var(--stencil);
  font-size: 0.72rem;
  letter-spacing: 0.15em;
  color: rgba(241, 231, 208, 0.7);
}

.progress-info .percent {
  color: var(--gold);
}

.skip-btn {
  margin-top: 2.2rem;
  background: transparent;
  border: 1px solid rgba(241, 231, 208, 0.25);
  color: rgba(241, 231, 208, 0.8);
  font-family: var(--varsity);
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  padding: 0.7em 1.4em;
  border-radius: 99px;
  transition: all 0.25s ease;
}

.skip-btn:hover {
  border-color: var(--gold);
  color: var(--gold);
  background: rgba(217, 164, 65, 0.08);
}

.loading-bg-glow {
  position: absolute;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(200, 16, 46, 0.25), transparent 70%);
  filter: blur(120px);
  z-index: 1;
  pointer-events: none;
  animation: pulseGlow 3s infinite alternate ease-in-out;
}

@keyframes pulseGlow {
  0% { transform: scale(0.9); opacity: 0.5; }
  100% { transform: scale(1.15); opacity: 0.85; }
}

.fade-screen-leave-active {
  transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.fade-screen-leave-to {
  opacity: 0;
  transform: scale(1.04);
}
</style>

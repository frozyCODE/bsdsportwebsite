<template>
  <div v-if="isVisible" class="preloader" :class="{ 'preloader-exit': isExiting }">
    <div class="logo-container">
      <div class="chrome-wrapper">
        <div class="chrome-logo-mask"></div>
      </div>
    </div>
    
    <!-- Percentage Counter -->
    <div class="progress-counter">
      {{ progress }}%
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(true)
const isExiting = ref(false)
const progress = ref(0)

onMounted(() => {
  // Disable scrolling on the body while the loading screen is active
  document.body.style.overflow = 'hidden'
  
  // Progress counter animation (0 to 100 over 2 seconds)
  const startTime = Date.now()
  const duration = 2000
  
  const updateProgress = () => {
    const elapsed = Date.now() - startTime
    if (elapsed < duration) {
      progress.value = Math.min(100, Math.floor((elapsed / duration) * 100))
      requestAnimationFrame(updateProgress)
    } else {
      progress.value = 100
    }
  }
  requestAnimationFrame(updateProgress)
  
  setTimeout(() => {
    isExiting.value = true
    
    // Re-enable scrolling right as it starts fading out
    document.body.style.overflow = ''
    
    setTimeout(() => {
      isVisible.value = false
    }, 800)
  }, 2500) 
})
</script>

<style scoped>
.preloader {
  position: fixed;
  inset: 0;
  z-index: 99999;
  background-color: #050505;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  transition: opacity 0.8s ease-in-out, filter 0.8s ease;
  /* Block pointer events to prevent scrolling via touch/mouse wheel on the overlay itself */
  pointer-events: all; 
}

.preloader-exit {
  opacity: 0;
  filter: blur(10px) brightness(0);
  /* Allow clicks to pass through while it's fading out */
  pointer-events: none; 
}

.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.chrome-wrapper {
  /* This applies the 3D drop shadow without being clipped by the mask */
  filter: drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.8));
  -webkit-box-reflect: below -15px linear-gradient(transparent 70%, rgba(255,255,255,0.15));
}

.chrome-logo-mask {
  width: 190px;
  height: 190px;
  
  /* The magic: Mask the div to the exact shape of your PNG logo */
  -webkit-mask-image: url('/BSD LOGO PNG.png');
  mask-image: url('/BSD LOGO PNG.png');
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;

  /* The metallic chrome gradient */
  background: linear-gradient(
    135deg,
    #ffffff 0%,
    #8b8b8b 22%,
    #e8e8e8 45%,
    #333333 55%,
    #ffffff 78%,
    #8b8b8b 100%
  );
  background-size: 300% 300%;
  
  /* Animate the gradient to make it shine */
  animation: shine-metal 3s ease-in-out infinite alternate;
}

@keyframes shine-metal {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 100%;
  }
}

@media (min-width: 768px) {
  .chrome-logo-mask {
    width: 260px;
    height: 260px;
  }
}

.progress-counter {
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  font-family: var(--stencil), monospace;
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: rgba(255, 255, 255, 0.4);
  /* Make the text metallic too */
  background: linear-gradient(135deg, #fff, #888, #fff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@media (max-width: 768px) {
  .progress-counter {
    bottom: 2rem;
    font-size: 1rem;
  }
}
</style>

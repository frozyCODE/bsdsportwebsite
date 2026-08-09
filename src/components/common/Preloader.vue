<template>
  <div v-if="isVisible" class="preloader" :class="{ 'preloader-exit': isExiting }">
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(true)
const isExiting = ref(false)

onMounted(() => {
  // Start the fade out animation shortly after mount
  setTimeout(() => {
    isExiting.value = true
    
    // Remove from DOM entirely after the animation finishes
    setTimeout(() => {
      isVisible.value = false
    }, 800)
  }, 150) // Small delay to ensure smooth rendering before fade
})
</script>

<style scoped>
.preloader {
  position: fixed;
  inset: 0;
  z-index: 99999;
  background-color: #0A0E16;
  opacity: 1;
  transition: opacity 0.8s ease-in-out;
  pointer-events: none;
}

.preloader-exit {
  opacity: 0;
}
</style>

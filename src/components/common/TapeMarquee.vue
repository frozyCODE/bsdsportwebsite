<template>
  <div class="tape" :style="{ '--tape': tapeColor }">
    <div class="track" aria-hidden="true">
      <span v-for="n in 12" :key="n">★ {{ title }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  tapeColor: {
    type: String,
    default: 'var(--cardinal)'
  }
})
</script>

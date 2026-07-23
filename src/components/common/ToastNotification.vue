<template>
  <div
    id="toast"
    role="status"
    aria-live="polite"
    :class="uiStore.isToastShow ? 'show' : ''"
  >
    {{ uiStore.toastMessage }}
  </div>
</template>

<script setup>
import { useUiStore } from '@/stores/uiStore'
const uiStore = useUiStore()
</script>

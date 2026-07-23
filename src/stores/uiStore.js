import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUiStore = defineStore('ui', () => {
  const toastMessage = ref(null)
  const isToastShow = ref(false)
  let toastTimer = null

  function showToast(message, duration = 2800) {
    toastMessage.value = message
    isToastShow.value = true

    if (toastTimer) clearTimeout(toastTimer)
    toastTimer = setTimeout(() => {
      isToastShow.value = false
    }, duration)
  }

  return {
    toastMessage,
    isToastShow,
    showToast
  }
})

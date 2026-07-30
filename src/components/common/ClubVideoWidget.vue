<template>
  <div class="club-video-widget-wrapper flex justify-center lg:justify-end w-full">
    <!-- DRAGGABLE & RESIZABLE FLOATING WIDGET -->
    <div
      ref="widgetRef"
      :style="widgetStyle"
      :class="[
        'group relative aspect-video rounded-lg overflow-hidden border border-[#F1E7D0]/20 hover:border-[#D9A441] shadow-2xl bg-[#0A0E16] transition-shadow duration-300 z-30 select-none',
        isDragging ? 'cursor-grabbing shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-[#D9A441]' : 'cursor-grab'
      ]"
      @mousedown="handleMouseDown"
      title="Maintenir le clic pour déplacer • Glisser le coin inférieur droit pour redimensionner"
    >
      <!-- Drag Header Bar (Subtle hint for user) -->
      <div class="absolute top-0 inset-x-0 h-6 bg-gradient-to-b from-black/70 to-transparent flex items-center justify-between px-2 text-[10px] text-[#F1E7D0]/60 opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none">
        <span class="flex items-center gap-1 font-mono">
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16"/>
          </svg>
          Déplacer
        </span>
        <span class="font-mono text-[9px]">⋮⋮</span>
      </div>

      <!-- Silent Looping YouTube Preview Background -->
      <iframe
        class="w-full h-full pointer-events-none opacity-85 group-hover:opacity-100 transition-opacity duration-300 scale-105"
        :src="miniEmbedUrl"
        title="Vidéo du club BSD Sport en boucle"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        aria-hidden="true"
      ></iframe>

      <!-- Minimal Dark Overlay -->
      <div class="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors duration-300 pointer-events-none"></div>

      <!-- Expand to Modal Button -->
      <button
        type="button"
        @click.stop="openModal"
        class="absolute top-1.5 right-1.5 p-1 rounded bg-black/70 hover:bg-black/90 border border-white/20 text-[#F1E7D0] hover:text-[#D9A441] transition-all duration-200 z-20 opacity-80 group-hover:opacity-100"
        title="Ouvrir la vidéo en grand écran avec le son"
      >
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/>
        </svg>
      </button>

      <!-- Discreet Bottom Badge -->
      <div class="absolute bottom-1.5 left-1.5 flex items-center gap-1.5 bg-black/70 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-varsity tracking-wider text-[#F1E7D0]/90 border border-white/10 group-hover:text-white transition-all pointer-events-none">
        <span class="text-[#D9A441] text-[9px]">▶</span>
        <span class="uppercase">Vidéo Club</span>
      </div>

      <!-- Resize Handle (Bottom-Right Corner) -->
      <div
        class="absolute bottom-0 right-0 w-5 h-5 cursor-se-resize flex items-end justify-end p-0.5 z-20 group-hover:opacity-100 opacity-60 transition-opacity"
        @mousedown.stop="startResize"
        title="Redimensionner la fenêtre"
      >
        <svg class="w-3.5 h-3.5 text-[#D9A441]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 22H20V20H22V22ZM22 16H20V18H22V16ZM16 22H18V20H16V22ZM16 16H18V18H16V16ZM22 12H20V14H22V12ZM12 22H14V20H12V22Z"/>
        </svg>
      </div>
    </div>

    <!-- EXPANDED LIGHTBOX MODAL -->
    <Teleport to="body">
      <Transition name="fade">
        <div
          v-if="isExpanded"
          class="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-sm"
          @click.self="closeModal"
          role="dialog"
          aria-modal="true"
        >
          <!-- Modal Container -->
          <div class="relative w-full max-w-5xl bg-[#0A0E16] border border-white/10 rounded-lg overflow-hidden shadow-2xl flex flex-col">
            <!-- Simple Top Bar with Close Button -->
            <div class="flex items-center justify-between px-4 py-3 bg-[#0E1626] border-b border-white/10">
              <span class="font-varsity text-xs tracking-widest text-[#F1E7D0]/70 uppercase">
                BSD SPORT — VIDÉO DU CLUB
              </span>
              <button
                @click="closeModal"
                class="p-1 rounded text-[#F1E7D0]/70 hover:text-white transition-colors"
                aria-label="Fermer"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>

            <!-- Full Video Player -->
            <div class="relative aspect-video w-full bg-black">
              <iframe
                v-if="isExpanded"
                class="w-full h-full"
                :src="expandedEmbedUrl"
                title="Vidéo du club BSD Sport"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const VIDEO_ID = 'fRYDn_LXMIY'

const miniEmbedUrl = `https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=0&modestbranding=1&rel=0&iv_load_policy=3&playsinline=1&enablejsapi=1`
const expandedEmbedUrl = `https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&mute=0&controls=1&rel=0&playsinline=1&enablejsapi=1`

const widgetRef = ref(null)
const isExpanded = ref(false)

// Drag and Drop state
const isDragging = ref(false)
const position = ref({ x: 0, y: 0 })
const dragStart = { x: 0, y: 0 }

// Resizing state
const isResizing = ref(false)
const widgetWidth = ref(280) // default width in pixels
const resizeStart = { width: 0, mouseX: 0 }

const widgetStyle = computed(() => {
  return {
    transform: `translate3d(${position.value.x}px, ${position.value.y}px, 0)`,
    width: `${widgetWidth.value}px`,
  }
})

// Mouse Drag handlers
const handleMouseDown = (e) => {
  if (isResizing.value) return
  isDragging.value = true
  dragStart.x = e.clientX - position.value.x
  dragStart.y = e.clientY - position.value.y

  window.addEventListener('mousemove', onDrag)
  window.addEventListener('mouseup', stopDrag)
}

const onDrag = (e) => {
  if (!isDragging.value) return
  position.value = {
    x: e.clientX - dragStart.x,
    y: e.clientY - dragStart.y
  }
}

const stopDrag = () => {
  isDragging.value = false
  window.removeEventListener('mousemove', onDrag)
  window.removeEventListener('mouseup', stopDrag)
}

// Mouse Resize handlers
const startResize = (e) => {
  isResizing.value = true
  resizeStart.width = widgetWidth.value
  resizeStart.mouseX = e.clientX

  window.addEventListener('mousemove', onResize)
  window.addEventListener('mouseup', stopResize)
}

const onResize = (e) => {
  if (!isResizing.value) return
  const deltaX = e.clientX - resizeStart.mouseX
  const newWidth = Math.max(200, Math.min(650, resizeStart.width + deltaX))
  widgetWidth.value = newWidth
}

const stopResize = () => {
  isResizing.value = false
  window.removeEventListener('mousemove', onResize)
  window.removeEventListener('mouseup', stopResize)
}

const openModal = () => {
  isExpanded.value = true
  if (typeof document !== 'undefined') {
    document.body.style.overflow = 'hidden'
  }
}

const closeModal = () => {
  isExpanded.value = false
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
}

const handleKeydown = (e) => {
  if (e.key === 'Escape' && isExpanded.value) {
    closeModal()
  }
}

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('keydown', handleKeydown)
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('keydown', handleKeydown)
    window.removeEventListener('mousemove', onDrag)
    window.removeEventListener('mouseup', stopDrag)
    window.removeEventListener('mousemove', onResize)
    window.removeEventListener('mouseup', stopResize)
    document.body.style.overflow = ''
  }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

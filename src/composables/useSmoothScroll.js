import { onMounted, onUnmounted } from 'vue'

/**
 * Moteur de défilement soyeux à inertie (Smooth Momentum Glide)
 * Offre un effet de scroll ultra-fluide et glissant sur molette et pavé tactile.
 */
export function useSmoothScroll() {
  let cleanUpFns = []

  onMounted(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let targetY = window.scrollY
    let currentY = window.scrollY
    let isRunning = false
    let animationFrameId = null

    const lerp = (start, end, factor) => start + (end - start) * factor

    const maxScroll = () =>
      Math.max(0, document.documentElement.scrollHeight - window.innerHeight)

    function updateScroll() {
      const diff = targetY - currentY

      if (Math.abs(diff) > 0.4) {
        currentY = lerp(currentY, targetY, 0.088)
        window.scrollTo(0, currentY)
        animationFrameId = requestAnimationFrame(updateScroll)
      } else {
        currentY = targetY
        window.scrollTo(0, currentY)
        isRunning = false
      }
    }

    const onWheel = (e) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return

      // Synchroniser si l'utilisateur utilise la barre de défilement native
      if (Math.abs(window.scrollY - currentY) > 35) {
        currentY = window.scrollY
        targetY = window.scrollY
      }

      e.preventDefault()

      const delta = e.deltaY
      const factor = e.deltaMode === 1 ? 32 : 1
      const step = delta * factor * 1.25

      targetY = Math.max(0, Math.min(maxScroll(), targetY + step))

      if (!isRunning) {
        isRunning = true
        animationFrameId = requestAnimationFrame(updateScroll)
      }
    }

    const onScroll = () => {
      if (!isRunning) {
        currentY = window.scrollY
        targetY = window.scrollY
      }
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('scroll', onScroll, { passive: true })

    cleanUpFns.push(() => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('scroll', onScroll)
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
    })
  })

  onUnmounted(() => {
    cleanUpFns.forEach((fn) => fn())
  })
}

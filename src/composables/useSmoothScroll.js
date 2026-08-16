import { onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'

/**
 * Composable intégrant Lenis - La bibliothèque de défilement fluide standard de l'industrie.
 * Réinitialise systématiquement le scroll en haut de page lors de chaque changement de route.
 */
export function useSmoothScroll() {
  let lenis = null
  let rafId = null
  const route = useRoute()

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }

  onMounted(async () => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
    scrollToTop()

    try {
      const { default: Lenis } = await import('lenis')
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 1.5,
        infinite: false,
      })

      function raf(time) {
        if (lenis) {
          lenis.raf(time)
          rafId = requestAnimationFrame(raf)
        }
      }

      rafId = requestAnimationFrame(raf)
      window.__lenis__ = lenis
    } catch (e) {
      console.warn('Lenis smooth scroll init fallback:', e)
    }
  })

  if (route) {
    watch(
      () => route.path,
      () => {
        scrollToTop()
      }
    )
  }

  onUnmounted(() => {
    if (rafId) cancelAnimationFrame(rafId)
    if (lenis) {
      lenis.destroy()
      lenis = null
      window.__lenis__ = null
    }
  })
}

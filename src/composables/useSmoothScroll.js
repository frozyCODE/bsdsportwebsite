import { onMounted, onUnmounted } from 'vue'

/**
 * Composable intégrant Lenis - La bibliothèque de défilement fluide standard de l'industrie.
 * Import dynamique sécurisé pour une compatibilité parfaite avec Vite.
 */
export function useSmoothScroll() {
  let lenis = null
  let rafId = null

  onMounted(async () => {
    // Forcer le retour tout en haut au rafraîchissement (F5 / Refresh)
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)

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
    } catch (e) {
      console.warn('Lenis smooth scroll init fallback:', e)
    }
  })

  onUnmounted(() => {
    if (rafId) cancelAnimationFrame(rafId)
    if (lenis) {
      lenis.destroy()
      lenis = null
    }
  })
}

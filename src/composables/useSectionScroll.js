import { onMounted, onUnmounted } from 'vue'

/**
 * Moteur de défilement contrôlé section par section issu de bsd-sport-accueil_11 (1).html
 * Gère le scroll à la molette, au swipe mobile et au clavier.
 */
export function useSectionScroll() {
  let cleanUpFns = []

  onMounted(() => {
    const getSections = () =>
      Array.from(
        document.querySelectorAll(
          '#hero, .univers, #terrains, #partenaires, #faq, #contact'
        )
      )

    let lock = false
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const vh = () => window.innerHeight

    const cur = (sections) => {
      const y = window.scrollY + 20
      let i = 0
      sections.forEach((s, k) => {
        if (s.offsetTop <= y) i = k
      })
      return i
    }

    function goTo(sections, i) {
      i = Math.max(0, Math.min(sections.length - 1, i))
      lock = true
      window.scrollTo({
        top: sections[i].offsetTop,
        behavior: reduced ? 'auto' : 'smooth'
      })
      setTimeout(() => (lock = false), reduced ? 80 : 850)
    }

    function step(dir) {
      const sections = getSections()
      if (!sections.length) return false

      const i = cur(sections)
      const s = sections[i]
      if (!s) return false

      const top = s.offsetTop
      const bottom = top + s.offsetHeight

      if (dir > 0) {
        // Laisser défiler naturellement l'intérieur d'une section plus haute que l'écran
        if (window.scrollY + vh() < bottom - 15) return false
        if (i === sections.length - 1) return false
        goTo(sections, i + 1)
        return true
      } else {
        if (window.scrollY > top + 15) {
          goTo(sections, i)
          return true
        }
        if (i === 0) return false
        goTo(sections, i - 1)
        return true
      }
    }

    const handleWheel = (e) => {
      if (lock) {
        e.preventDefault()
        return
      }
      if (Math.abs(e.deltaY) < 8) return
      if (step(Math.sign(e.deltaY))) {
        e.preventDefault()
      }
    }

    let ty = null
    const handleTouchStart = (e) => {
      ty = e.touches[0].clientY
    }

    const handleTouchMove = (e) => {
      if (ty === null) return
      const d = ty - e.touches[0].clientY
      if (lock) {
        e.preventDefault()
        return
      }
      if (Math.abs(d) > 46) {
        if (step(Math.sign(d))) e.preventDefault()
        ty = e.touches[0].clientY
      }
    }

    const handleTouchEnd = () => {
      ty = null
    }

    const handleKeyDown = (e) => {
      if (['ArrowDown', 'PageDown', ' '].includes(e.key)) {
        if (!lock && step(1)) e.preventDefault()
      }
      if (['ArrowUp', 'PageUp'].includes(e.key)) {
        if (!lock && step(-1)) e.preventDefault()
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: false })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })
    window.addEventListener('keydown', handleKeyDown)

    cleanUpFns.push(() => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleTouchEnd)
      window.removeEventListener('keydown', handleKeyDown)
    })
  })

  onUnmounted(() => {
    cleanUpFns.forEach((fn) => fn())
  })
}

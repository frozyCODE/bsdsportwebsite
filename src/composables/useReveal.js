import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'

export function useReveal() {
  const route = useRoute()

  const initObserver = () => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px'
      }
    )

    const selector = '.reveal, .reveal-scale, .reveal-left, .reveal-right, [data-reveal]'
    const elements = document.querySelectorAll(selector)

    elements.forEach((el) => {
      if (!el.classList.contains('in')) {
        observer.observe(el)
      }
    })
  }

  onMounted(() => {
    nextTick(() => {
      setTimeout(initObserver, 80)
    })
  })

  if (route) {
    watch(
      () => route.path,
      () => {
        nextTick(() => {
          setTimeout(initObserver, 120)
        })
      }
    )
  }

  return { initObserver }
}

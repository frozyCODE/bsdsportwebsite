import { onMounted, onUnmounted } from 'vue'

/**
 * Effet d'étoile/impact au clic — particules qui éclatent depuis le point de clic
 */
export function useClickSpark() {
  let cleanup = null

  onMounted(() => {
    function handleClick(e) {
      const count = 8
      for (let i = 0; i < count; i++) {
        const spark = document.createElement('span')
        spark.className = 'click-spark'
        spark.textContent = '✦'

        const angle = (360 / count) * i + (Math.random() * 25 - 12)
        const dist = 30 + Math.random() * 35
        const rad = (angle * Math.PI) / 180
        const tx = Math.cos(rad) * dist
        const ty = Math.sin(rad) * dist
        const size = 14 + Math.random() * 10

        spark.style.cssText = `
          position: fixed;
          left: ${e.clientX}px;
          top: ${e.clientY}px;
          pointer-events: none;
          z-index: 99999;
          font-size: ${size}px;
          color: #D9A441;
          text-shadow: 0 0 6px rgba(217,164,65,.6);
          transform: translate(-50%, -50%);
          animation: sparkBurst .5s cubic-bezier(.15,.8,.3,1) forwards;
          --tx: ${tx}px;
          --ty: ${ty}px;
        `

        document.body.appendChild(spark)
        setTimeout(() => spark.remove(), 550)
      }
    }

    // Injecter le keyframe une seule fois
    if (!document.getElementById('spark-style')) {
      const style = document.createElement('style')
      style.id = 'spark-style'
      style.textContent = `
        @keyframes sparkBurst {
          0% { opacity: 1; transform: translate(-50%,-50%) scale(0.5) translate(0,0); }
          50% { opacity: 1; }
          100% { opacity: 0; transform: translate(-50%,-50%) scale(0.2) translate(var(--tx), var(--ty)); }
        }
      `
      document.head.appendChild(style)
    }

    window.addEventListener('click', handleClick)
    cleanup = () => window.removeEventListener('click', handleClick)
  })

  onUnmounted(() => {
    if (cleanup) cleanup()
  })
}

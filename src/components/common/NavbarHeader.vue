<template>
  <header 
    class="fixed top-0 left-0 right-0 z-50 w-full py-5 px-6 sm:px-12 bg-transparent transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
    :class="{ '-translate-y-[150%]': isHidden, 'translate-y-0': !isHidden }"
  >
    <div class="w-full flex items-center justify-between relative">
      
      <!-- Brand Logo -->
      <router-link to="/" class="brand text-decoration-none z-10 flex items-center">
        <img 
          src="/BSD LOGO PNG.png" 
          alt="BSD Logo" 
          class="h-10 sm:h-12 lg:h-14 w-auto object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] transition-all duration-300"
          :class="darkText ? 'invert-0 brightness-0' : 'brightness-120'"
        />
      </router-link>

      <!-- Navigation centrée (Masquée sous 960px, menu burger au-dessus) -->
      <nav 
        class="nav-desktop-menu items-center gap-6 lg:gap-10 font-varsity text-xs lg:text-sm uppercase tracking-[0.22em] font-bold absolute left-1/2 -translate-x-1/2"
        :class="darkText ? 'text-black' : 'text-white'"
      >
        <a href="#qui-sommes-nous" @click.prevent="scrollToSection('qui-sommes-nous')" class="whitespace-nowrap hover:text-[#ff7043] transition-colors cursor-pointer">
          QUI SOMMES-NOUS ?
        </a>
        <router-link to="/particuliers" class="whitespace-nowrap hover:text-[#ff7043] transition-colors">
          PARTICULIERS
        </router-link>
        <router-link to="/entreprise" class="whitespace-nowrap hover:text-[#ff7043] transition-colors">
          ENTREPRISES
        </router-link>
        <router-link to="/territoire" class="whitespace-nowrap hover:text-[#ff7043] transition-colors">
          TERRITOIRES
        </router-link>
        <router-link to="/faq" class="whitespace-nowrap hover:text-[#ff7043] transition-colors">
          FAQ
        </router-link>
      </nav>

      <!-- Toggle Mobile & Tablette (Actif jusqu'à 960px) -->
      <div class="relative z-20 flex items-center gap-3">
        <div class="burger-menu-toggle">
          <button 
            @click="isOpen = !isOpen"
            aria-label="Menu navigation"
            class="text-2xl p-1 focus:outline-none cursor-pointer"
            :class="darkText ? 'text-black' : 'text-white'"
          >
            <span v-if="!isOpen">☰</span>
            <span v-else>✕</span>
          </button>
        </div>
      </div>

    </div>

    <!-- Mobile & Tablette Drawer Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div 
        v-if="isOpen" 
        class="burger-drawer-menu mt-4 p-6 rounded-3xl bg-[#080808]/95 backdrop-blur-2xl border border-white/15 shadow-2xl flex flex-col gap-4 font-varsity text-sm uppercase tracking-widest text-center"
      >
        <a 
          href="#qui-sommes-nous" 
          @click.prevent="scrollToSection('qui-sommes-nous')"
          class="py-2.5 px-4 rounded-xl hover:bg-white/10 text-white transition-colors"
        >
          QUI SOMMES-NOUS ?
        </a>
        <router-link 
          to="/particuliers"
          @click="isOpen = false"
          class="py-2.5 px-4 rounded-xl hover:bg-white/10 text-white transition-colors"
        >
          PARTICULIERS
        </router-link>
        <router-link 
          to="/entreprise"
          @click="isOpen = false"
          class="py-2.5 px-4 rounded-xl hover:bg-white/10 text-white transition-colors"
        >
          ENTREPRISES
        </router-link>
        <router-link 
          to="/territoire"
          @click="isOpen = false"
          class="py-2.5 px-4 rounded-xl hover:bg-white/10 text-white transition-colors"
        >
          TERRITOIRES
        </router-link>
        <router-link 
          to="/faq"
          @click="isOpen = false"
          class="py-2.5 px-4 rounded-xl hover:bg-white/10 text-white transition-colors"
        >
          FAQ
        </router-link>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const props = defineProps({
  darkText: {
    type: Boolean,
    default: false
  }
})

const isOpen = ref(false)
const isHidden = ref(false)
const router = useRouter()
const route = useRoute()

let lastScrollY = 0
let ticking = false

function scrollToSection(id) {
  isOpen.value = false
  if (route.path !== '/') {
    router.push({ path: '/', hash: `#${id}` })
  } else {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }
}

function handleScroll() {
  const currentScrollY = window.scrollY
  if (!ticking) {
    window.requestAnimationFrame(() => {
      if (currentScrollY <= 80) {
        isHidden.value = false
      } else if (currentScrollY > lastScrollY && currentScrollY > 200) {
        isHidden.value = true
        isOpen.value = false
      } else if (currentScrollY < lastScrollY) {
        isHidden.value = false
      }
      
      lastScrollY = currentScrollY
      ticking = false
    })
    ticking = true
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Responsive Navigation : Menu burger jusqu'à 960px de largeur inclusivement (couvre 900px) */
@media (max-width: 960px) {
  .nav-desktop-menu {
    display: none !important;
  }
  .burger-menu-toggle {
    display: block !important;
  }
}

@media (min-width: 961px) {
  .nav-desktop-menu {
    display: flex !important;
  }
  .burger-menu-toggle {
    display: none !important;
  }
  .burger-drawer-menu {
    display: none !important;
  }
}

.drop-fade-enter-active,
.drop-fade-leave-active {
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}
.drop-fade-enter-from,
.drop-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>

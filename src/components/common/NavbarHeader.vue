<template>
  <header class="absolute top-0 left-0 right-0 z-50 px-5 sm:px-10 py-5 bg-transparent border-none shadow-none w-full">
    <div class="w-full flex items-center justify-between relative">
      
      <!-- Brand Title "BSD" -->
      <router-link to="/" class="brand text-decoration-none z-10">
        <b class="brand-text">BSD</b>
      </router-link>

      <!-- Navigation centrée -->
      <nav class="hidden md:flex items-center gap-10 font-varsity text-xs uppercase tracking-[0.25em] text-[#F1E7D0]/85 absolute left-1/2 -translate-x-1/2">
        <router-link to="/#univers" class="hover:text-[#D9A441] transition-colors">
          UNIVERS
        </router-link>
        <router-link to="/faq" class="hover:text-[#D9A441] transition-colors">
          FAQ
        </router-link>
        <router-link to="/#contact" class="hover:text-[#D9A441] transition-colors">
          CONTACT
        </router-link>
      </nav>

      <!-- Encoche Switcher de Profil (Droite) sans emoji, avec icône pro -->
      <div class="relative z-20 flex items-center gap-3">
        <button
          @click="showProfileMenu = !showProfileMenu"
          class="profile-notch-btn"
          :style="{ '--notch-accent': currentProfile.accentColor }"
        >
          <span class="notch-icon" aria-hidden="true" v-html="currentProfile.badgeIcon"></span>
          <span class="notch-label">{{ currentProfile.badgeLabel }}</span>
          <span class="notch-arrow">▾</span>
        </button>

        <!-- Dropdown Menu Switcher -->
        <Transition name="drop-fade">
          <div v-if="showProfileMenu" class="profile-dropdown">
            <div class="dropdown-header">
              Terrain de jeu actif
            </div>
            <button
              v-for="p in profiles"
              :key="p.id"
              :class="['dropdown-item', { active: currentProfileId === p.id }]"
              @click="switchProfile(p)"
            >
              <span class="item-icon" aria-hidden="true" v-html="p.badgeIcon"></span>
              <span class="item-title">{{ p.title }}</span>
              <span v-if="currentProfileId === p.id" class="check">✓</span>
            </button>
          </div>
        </Transition>

        <!-- Toggle Mobile -->
        <div class="md:hidden">
          <button 
            @click="isOpen = !isOpen"
            aria-label="Menu mobile"
            class="text-[#F1E7D0] text-2xl p-1 focus:outline-none"
          >
            <span v-if="!isOpen">☰</span>
            <span v-else>✕</span>
          </button>
        </div>
      </div>

    </div>

    <!-- Mobile Drawer Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="isOpen" class="md:hidden mt-4 p-4 bg-[#0A0E16]/95 border border-[#F1E7D0]/20 rounded-2xl flex flex-col gap-4 text-center shadow-2xl backdrop-blur-xl">
        <router-link 
          to="/#univers" 
          @click="isOpen = false"
          class="font-varsity text-xs uppercase tracking-widest text-[#F1E7D0] py-2 hover:text-[#D9A441]"
        >
          Univers
        </router-link>
        <router-link 
          to="/faq" 
          @click="isOpen = false"
          class="font-varsity text-xs uppercase tracking-widest text-[#F1E7D0] py-2 hover:text-[#D9A441]"
        >
          FAQ
        </router-link>
        <router-link 
          to="/#contact" 
          @click="isOpen = false"
          class="font-varsity text-xs uppercase tracking-widest text-[#F1E7D0] py-2 hover:text-[#D9A441]"
        >
          Contact
        </router-link>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useProfile } from '@/composables/useProfile'
import { useUiStore } from '@/stores/uiStore'

const isOpen = ref(false)
const showProfileMenu = ref(false)

const { profiles, currentProfileId, currentProfile, setProfile } = useProfile()
const uiStore = useUiStore()

function switchProfile(p) {
  setProfile(p.id)
  showProfileMenu.value = false
  uiStore.showToast(`Profil actif : ${p.title}`)
}
</script>

<style scoped>
.profile-notch-btn {
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1.5px solid rgba(241, 231, 208, 0.3);
  color: var(--cream);
  padding: 0.45em 0.9em;
  border-radius: 99px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--stencil);
  font-size: 0.68rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  transition: all 0.25s ease;
  box-shadow: 0 8px 24px rgba(0,0,0,0.3);
}

.profile-notch-btn:hover {
  border-color: var(--notch-accent, var(--gold));
  background: rgba(255, 255, 255, 0.12);
  transform: translateY(-1px);
}

.notch-icon {
  color: var(--notch-accent, var(--gold));
  display: flex;
  align-items: center;
}

.notch-label {
  font-weight: 700;
}

.notch-arrow {
  font-size: 0.75rem;
  color: var(--gold);
}

.profile-dropdown {
  position: absolute;
  top: calc(100% + 12px);
  right: 0;
  width: 250px;
  background: #0D131F;
  border: 1.5px solid rgba(241, 231, 208, 0.25);
  border-radius: 18px;
  padding: 0.6rem;
  box-shadow: 0 20px 45px rgba(0,0,0,0.6);
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.dropdown-header {
  font-family: var(--varsity);
  font-size: 0.58rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(241, 231, 208, 0.4);
  padding: 0.4rem 0.6rem;
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.65rem 0.75rem;
  border-radius: 12px;
  background: transparent;
  border: none;
  color: var(--cream);
  text-align: left;
  transition: all 0.2s ease;
  cursor: pointer;
  width: 100%;
}

.dropdown-item:hover {
  background: rgba(255, 255, 255, 0.08);
}

.dropdown-item.active {
  background: rgba(217, 164, 65, 0.15);
  border: 1px solid rgba(217, 164, 65, 0.3);
}

.item-badge {
  font-family: var(--stencil);
  font-size: 0.68rem;
}

.item-title {
  font-family: var(--body);
  font-size: 0.78rem;
  font-weight: 600;
  flex-grow: 1;
}

.check {
  color: var(--gold);
  font-weight: 700;
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

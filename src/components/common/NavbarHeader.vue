<template>
  <header class="absolute top-0 left-0 right-0 z-50 px-6 sm:px-10 py-5 bg-transparent border-none shadow-none w-full">
    <div class="w-full flex items-center justify-between relative">
      
      <!-- Brand Title "BSD" -->
      <router-link to="/" class="brand text-decoration-none z-10">
        <b class="brand-text">BSD</b>
      </router-link>

      <!-- Navigation centrée -->
      <nav class="hidden md:flex items-center gap-12 font-varsity text-xs uppercase tracking-[0.25em] text-[#F1E7D0]/85 absolute left-1/2 -translate-x-1/2">
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

      <!-- Toggle Mobile -->
      <div class="md:hidden z-10">
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

const isOpen = ref(false)
</script>

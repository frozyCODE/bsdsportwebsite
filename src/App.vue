<template>
  <div class="min-h-screen flex flex-col bg-[#080808] text-[#F1E7D0] font-body selection:bg-[#ff7043] selection:text-black">
    <Preloader />
    <div class="grain-overlay" aria-hidden="true" />

    <router-view v-slot="{ Component, route }">
      <transition name="page-fade" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>

    <ToastNotification />
  </div>
</template>

<script setup>
import ToastNotification from '@/components/common/ToastNotification.vue'
import Preloader from '@/components/common/Preloader.vue'
import { useClickSpark } from '@/composables/useClickSpark'
import { useSmoothScroll } from '@/composables/useSmoothScroll'
import { useReveal } from '@/composables/useReveal'

useClickSpark()
useSmoothScroll()
useReveal()
</script>

<style>
/* Style global du fond noir profond BSD */
html, body {
  background-color: #080808 !important;
}

/* Grain de film haute intensite sur tout le site */
.grain-overlay {
  position: fixed;
  inset: 0;
  z-index: 9998;
  pointer-events: none;
  opacity: 0.42;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 160px 160px;
  mix-blend-mode: overlay;
}

/* Transition fondu au noir cinema ultra-pro */
.page-fade-enter-active {
  transition: opacity 0.25s ease-out;
}

.page-fade-leave-active {
  transition: opacity 0.18s ease-in;
}

.page-fade-enter-from,
.page-fade-leave-to {
  opacity: 0;
}

/* Amelioration forte de la saturation et du contraste des images */
img,
.bg-image,
.hero-sky-container {
  filter: saturate(1.4) contrast(1.1);
}
</style>

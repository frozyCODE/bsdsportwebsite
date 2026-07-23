<template>
  <main class="overflow-x-hidden">
    <NavbarHeader />
    <div class="faq-page-wrapper">
      <FaqSection />
    </div>
  </main>
</template>

<script setup>
import NavbarHeader from '@/components/common/NavbarHeader.vue'
import FaqSection from '@/components/sections/FaqSection.vue'
</script>

<style scoped>
.faq-page-wrapper {
  padding-top: 5rem;
  min-height: 100vh;
}
</style>

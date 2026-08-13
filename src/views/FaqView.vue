<template>
  <div class="min-h-screen bg-[#0d0d0d] text-[#F1E7D0] font-body relative overflow-x-hidden selection:bg-[#ff7043] selection:text-black">
    <!-- Navbar Site Officiel BSD -->
    <NavbarHeader />

    <!-- Section FAQ -->
    <FaqSection />

    <!-- Séparateur Orange & Formulaire de Contact avec Maps -->
    <OrangeSeparatorSection />
    <ContactSection />
  </div>
</template>

<script setup>
import NavbarHeader from '@/components/common/NavbarHeader.vue'
import FaqSection from '@/components/sections/FaqSection.vue'
import OrangeSeparatorSection from '@/components/sections/OrangeSeparatorSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
</script>

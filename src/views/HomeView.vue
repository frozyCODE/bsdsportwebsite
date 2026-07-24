<template>
  <main class="overflow-x-hidden">
    <NavbarHeader />
    <HeroStickmen />
    <TerrainsSection />
    <UniversSection />
    <PartenairesSection />
    <ContactSection />
  </main>
</template>

<script setup>
import NavbarHeader from '@/components/common/NavbarHeader.vue'
import HeroStickmen from '@/components/sections/HeroStickmen.vue'
import UniversSection from '@/components/sections/UniversSection.vue'
import TerrainsSection from '@/components/sections/TerrainsSection.vue'
import PartenairesSection from '@/components/sections/PartenairesSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
</script>

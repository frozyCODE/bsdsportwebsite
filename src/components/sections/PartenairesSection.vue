<template>
  <section id="partenaires">
    <p class="eyebrow reveal">Partenaires</p>
    <h2 class="reveal d1">Ils nous font déjà confiance</h2>
    
    <div class="orbit-groups reveal d2">
      <div v-for="group in partnerGroups" :key="group.category">
        <h3>{{ group.category }}</h3>
        <div class="logos">
          <a
            v-for="partner in group.items"
            :key="partner.name"
            class="dogtag"
            :style="{ '--d': partner.delay }"
            href="#"
            @click.prevent="handlePartnerClick(partner.name)"
          >
            {{ partner.name }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useReveal } from '@/composables/useReveal'
import { useUiStore } from '@/stores/uiStore'

useReveal()
const uiStore = useUiStore()

function handlePartnerClick(name) {
  uiStore.showToast(`Partenaire : ${name}`)
}

const partnerGroups = [
  {
    category: 'Institutions',
    items: [
      { name: "Préfet de l'Isère", delay: '5.5s' },
      { name: "Grenoble Alpes Métropole", delay: '7s' },
      { name: "Ville de Pont-de-Claix", delay: '6.2s' }
    ]
  },
  {
    category: 'Entreprises',
    items: [
      { name: 'HB38', delay: '6.8s' },
      { name: 'Crousti Sataï', delay: '5.2s' },
      { name: 'LCMI', delay: '7.4s' },
      { name: 'Street-Fight', delay: '6s' }
    ]
  },
  {
    category: 'Associations',
    items: [
      { name: 'GUC Formation', delay: '6.4s' },
      { name: 'La Petite Poussée', delay: '5.8s' },
      { name: 'Ass. Familiale de Saint-Égrève', delay: '7.2s' }
    ]
  }
]
</script>

<template>
  <section id="terrains">
    <p class="eyebrow reveal">Vous êtes ?</p>
    <h2 class="reveal d1"># Choisis ton terrain de jeu</h2>
    <p class="lead reveal d2">Trois parcours, une même énergie. Sélectionne le tien.</p>
    
    <div class="cards reveal d3">
      <BaseButton
        v-for="c in terrainCards"
        :key="c.id"
        :class="['card', c.styleClass]"
        :page="c.title"
        :soon="true"
      >
        <span class="rivet tl"></span><span class="rivet tr"></span>
        <span class="rivet bl"></span><span class="rivet br"></span>
        <div class="ico" aria-hidden="true" v-html="c.icon"></div>
        <h3>{{ c.title }}</h3>
        <span class="baseline">{{ c.baseline }}</span>
        <p>{{ c.description }}</p>
        <span class="go">Entrer →</span>
      </BaseButton>
    </div>
  </section>
</template>

<script setup>
import { useReveal } from '@/composables/useReveal'
import BaseButton from '@/components/common/BaseButton.vue'

useReveal()

const terrainCards = [
  {
    id: 1,
    title: 'Particuliers',
    baseline: 'BSD, votre terrain de jeu',
    description: 'Cours collectifs, coaching perso, stages et programmes. Trouve ta discipline.',
    icon: '<svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/></svg>',
    styleClass: 'part'
  },
  {
    id: 2,
    title: 'Entreprises',
    baseline: 'BSD au service de votre entreprise',
    description: 'Sport en entreprise, cohésion et bien-être au travail, du bureau à l\'usine.',
    icon: '<svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/><path d="M3 9h6"/><path d="M3 15h6"/><path d="M15 6h.01"/><path d="M15 12h.01"/><path d="M15 18h.01"/></svg>',
    styleClass: 'entr'
  },
  {
    id: 3,
    title: 'Territoires',
    baseline: 'BSD au service de la population',
    description: 'Fondations, collectivités, institutions : le sport comme lien social.',
    icon: '<svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>',
    styleClass: 'terr'
  }
]
</script>

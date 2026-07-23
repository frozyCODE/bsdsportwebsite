<template>
  <section id="faq">
    <div class="faq-inner">
      
      <div class="faq-header">
        <p class="eyebrow reveal">Besoin d'infos ?</p>
        <h2 class="reveal d1">FAQ</h2>
      </div>

      <!-- Filtres -->
      <div class="faq-filters reveal d2">
        <button 
          v-for="cat in categories" 
          :key="cat"
          @click="selectedCategory = cat"
          :class="['faq-filter', { active: selectedCategory === cat }]"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Accordéon -->
      <div class="faq-list reveal d3">
        <div 
          v-for="(item, index) in filteredFaq" 
          :key="item.question"
          :class="['faq-item', { open: openIndexes.includes(index) }]"
        >
          <button 
            @click="toggleItem(index)"
            class="faq-question"
          >
            <span class="faq-q-text">{{ item.question }}</span>
            <span class="faq-toggle">{{ openIndexes.includes(index) ? '−' : '+' }}</span>
          </button>

          <div v-show="openIndexes.includes(index)" class="faq-answer">
            {{ item.answer }}
          </div>
        </div>
      </div>

      <!-- CTA bas de page -->
      <div class="faq-cta reveal d3">
        <p>Une autre question ?</p>
        <router-link to="/#contact" class="btn">NOUS CONTACTER</router-link>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useReveal } from '@/composables/useReveal'

useReveal()

const categories = ['Tous', 'Séances', 'Niveau', 'Inscriptions']
const selectedCategory = ref('Tous')
const openIndexes = ref([0])

const faqData = [
  {
    category: 'Niveau',
    question: 'Faut-il être un athlète confirmé pour rejoindre BSD Sport ?',
    answer: 'Absolument pas. Nos cours collectifs et WODs sont conçus pour tous les niveaux. Chaque mouvement est adaptable selon vos capacités par nos coachs diplômés.'
  },
  {
    category: 'Séances',
    question: 'Comment réserver une séance d\'essai gratuite ?',
    answer: 'Rendez-vous sur la page de l\'Univers concerné ou remplissez le formulaire Contact. Votre première séance découverte est offerte.'
  },
  {
    category: 'Séances',
    question: 'Quels équipements dois-je apporter ?',
    answer: 'Tenue de sport, baskets de salle propres, bouteille d\'eau et serviette. Tout le matériel spécifique (kettlebells, cordes, steps) est fourni par le club.'
  },
  {
    category: 'Inscriptions',
    question: 'Quels sont les créneaux des entraînements ?',
    answer: 'Du lundi au samedi, créneaux en soirée (18h30–20h30) et le samedi matin (10h30). Planning détaillé sur chaque page Univers.'
  },
  {
    category: 'Inscriptions',
    question: 'Peut-on s\'inscrire en cours d\'année ?',
    answer: 'Oui. Les inscriptions sont ouvertes toute l\'année avec tarifs ajustés au prorata.'
  }
]

const filteredFaq = computed(() => {
  if (selectedCategory.value === 'Tous') return faqData
  return faqData.filter(item => item.category === selectedCategory.value)
})

function toggleItem(index) {
  const pos = openIndexes.value.indexOf(index)
  if (pos > -1) {
    openIndexes.value.splice(pos, 1)
  } else {
    openIndexes.value.push(index)
  }
}
</script>

<style scoped>
#faq {
  padding: 7rem 6vw 5rem;
  background: var(--ink);
  min-height: 100vh;
}

.faq-inner {
  max-w: 760px;
  max-width: 760px;
  margin: 0 auto;
}

.faq-header {
  margin-bottom: 3rem;
}

.faq-header h2 {
  font-family: var(--display);
  font-size: clamp(3rem, 8vw, 6rem);
  text-transform: uppercase;
  color: var(--cream);
  line-height: .9;
  letter-spacing: -0.02em;
}

/* Filtres */
.faq-filters {
  display: flex;
  gap: .6rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
}

.faq-filter {
  font-family: var(--body);
  font-weight: 600;
  font-size: .75rem;
  letter-spacing: .08em;
  text-transform: uppercase;
  padding: .55em 1.2em;
  border-radius: 6px;
  border: 1.5px solid rgba(241,231,208,.2);
  background: transparent;
  color: rgba(241,231,208,.55);
  cursor: pointer;
  transition: all .2s ease;
}

.faq-filter:hover {
  border-color: rgba(241,231,208,.5);
  color: var(--cream);
}

.faq-filter.active {
  background: var(--cardinal);
  border-color: var(--cardinal);
  color: var(--cream);
}

/* Liste FAQ */
.faq-list {
  display: flex;
  flex-direction: column;
}

.faq-item {
  border-top: 1px solid rgba(241,231,208,.1);
}

.faq-item:last-child {
  border-bottom: 1px solid rgba(241,231,208,.1);
}

.faq-question {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  padding: 1.4rem 0;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
}

.faq-q-text {
  font-family: var(--body);
  font-weight: 600;
  font-size: .95rem;
  color: var(--cream);
  line-height: 1.4;
}

.faq-toggle {
  font-family: var(--body);
  font-size: 1.3rem;
  color: rgba(241,231,208,.4);
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  display: grid;
  place-items: center;
  transition: color .2s;
}

.faq-item.open .faq-toggle {
  color: var(--cardinal);
}

.faq-item.open .faq-q-text {
  color: var(--gold);
}

.faq-answer {
  font-family: var(--body);
  font-size: .88rem;
  line-height: 1.7;
  color: rgba(241,231,208,.6);
  padding: 0 0 1.4rem 0;
  max-width: 620px;
}

/* CTA */
.faq-cta {
  margin-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 2rem 0;
  border-top: 1px solid rgba(241,231,208,.1);
}

.faq-cta p {
  font-family: var(--body);
  font-weight: 600;
  font-size: 1rem;
  color: var(--cream);
}

@media (max-width: 640px) {
  .faq-cta {
    flex-direction: column;
    text-align: center;
  }
}
</style>

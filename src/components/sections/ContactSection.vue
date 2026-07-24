<template>
  <section id="contact">
    <div class="contact-inner">
      <div class="contact-header reveal">
        <!-- Active Role Badge -->
        <div class="role-badge" :style="{ '--role-color': currentProfile.accentColor }">
          <span v-html="currentProfile.badgeIcon"></span>
          <span>{{ currentProfile.badgeLabel }}</span>
        </div>
        <p class="eyebrow">Formulaire sur-mesure</p>
        <h2>{{ currentProfile.formTitle }}</h2>
        <p class="subtitle">{{ currentProfile.formSubtitle }}</p>
      </div>

      <div class="contact-layout reveal d2">
        <!-- Formulaire Dynamique -->
        <form id="contact-form" @submit.prevent="handleSubmit">
          
          <!-- DYNAMIQUE ROLE 1: PARTICULIERS / LICENCIÉS -->
          <template v-if="currentProfile.id === 'particuliers'">
            <div class="field-row">
              <div class="field">
                <label for="f-nom">Nom & Prénom</label>
                <input id="f-nom" v-model="form.nom" type="text" placeholder="Alexandre Dupont" required />
              </div>
              <div class="field">
                <label for="f-mail">Email</label>
                <input id="f-mail" v-model="form.email" type="email" placeholder="alexandre@gmail.com" required />
              </div>
            </div>

            <div class="field-row">
              <div class="field">
                <label for="f-tel">Téléphone</label>
                <input id="f-tel" v-model="form.tel" type="tel" placeholder="06 12 34 56 78" required />
              </div>
              <div class="field">
                <label for="f-univers">Univers souhaité</label>
                <select id="f-univers" v-model="form.univers" class="styled-select" required>
                  <option value="" disabled selected>Choisis un univers...</option>
                  <option value="Cross Heat">01 · Cross Heat (Cross Training)</option>
                  <option value="Stepp Training">02 · Stepp Training (Cardio)</option>
                  <option value="Arts Martiaux">03 · Arts Martiaux (Combat / Ring)</option>
                  <option value="Omnisports">04 · Omnisports (Multisports)</option>
                  <option value="Aqua-Training">05 · Aqua-Training (Aquatique)</option>
                  <option value="Accompagnement">06 · Coaching Individuel</option>
                  <option value="Stages & Vacances">07 · Stages Jeunes & Adultes</option>
                  <option value="Programmes">08 · Programmes en Ligne</option>
                </select>
              </div>
            </div>

            <div class="field">
              <label for="f-obj">Objectif principal</label>
              <select id="f-obj" v-model="form.objectif" class="styled-select" required>
                <option value="" disabled selected>Ton objectif...</option>
                <option value="Remise en forme">Remise en forme globale</option>
                <option value="Dépassement de soi">Dépassement de soi & Performance</option>
                <option value="Perte de poids">Perte de poids & Recomposition</option>
                <option value="Prise de masse">Prise de masse musculaire</option>
                <option value="Réathlétisation">Réathlétisation après blessure</option>
                <option value="Autre">Autre projet sportif</option>
              </select>
            </div>
          </template>

          <!-- DYNAMIQUE ROLE 2: ENTREPRISES -->
          <template v-else-if="currentProfile.id === 'entreprises'">
            <div class="field-row">
              <div class="field">
                <label for="f-company">Entreprise / Organisation</label>
                <input id="f-company" v-model="form.company" type="text" placeholder="Nom de votre entreprise" required />
              </div>
              <div class="field">
                <label for="f-contact-name">Nom du référent</label>
                <input id="f-contact-name" v-model="form.nom" type="text" placeholder="Prénom & Nom" required />
              </div>
            </div>

            <div class="field-row">
              <div class="field">
                <label for="f-mail-pro">Email professionnel</label>
                <input id="f-mail-pro" v-model="form.email" type="email" placeholder="contact@entreprise.fr" required />
              </div>
              <div class="field">
                <label for="f-tel-pro">Téléphone direct</label>
                <input id="f-tel-pro" v-model="form.tel" type="tel" placeholder="04 76 00 00 00" required />
              </div>
            </div>

            <div class="field-row">
              <div class="field">
                <label for="f-part-type">Type de Partenariat</label>
                <select id="f-part-type" v-model="form.partType" class="styled-select" required>
                  <option value="" disabled selected>Type de projet...</option>
                  <option value="Sponsoring">Sponsoring & Visibilité Marque</option>
                  <option value="Evénement d'entreprise">Événement sur-mesure / Team Building</option>
                  <option value="CE / Salariés">Offre Salariés & Billetterie CE</option>
                  <option value="Mécénat">Mécénat & Engagement Territorial</option>
                </select>
              </div>
              <div class="field">
                <label for="f-budget">Taille d'équipe / Projet</label>
                <input id="f-budget" v-model="form.budget" type="text" placeholder="Ex: 30 salariés, Team building..." />
              </div>
            </div>
          </template>

          <!-- DYNAMIQUE ROLE 3: TERRITOIRES / COLLECTIVITÉS -->
          <template v-else-if="currentProfile.id === 'territoires'">
            <div class="field-row">
              <div class="field">
                <label for="f-terr-name">Structure / Collectivité / Fondation</label>
                <input id="f-terr-name" v-model="form.company" type="text" placeholder="Mairie, Métropole, Association..." required />
              </div>
              <div class="field">
                <label for="f-terr-contact">Nom du responsable</label>
                <input id="f-terr-contact" v-model="form.nom" type="text" placeholder="Prénom & Nom" required />
              </div>
            </div>

            <div class="field-row">
              <div class="field">
                <label for="f-terr-mail">Email officiel</label>
                <input id="f-terr-mail" v-model="form.email" type="email" placeholder="contact@collectivite.fr" required />
              </div>
              <div class="field">
                <label for="f-terr-tel">Téléphone</label>
                <input id="f-terr-tel" v-model="form.tel" type="tel" placeholder="04 76 00 00 00" required />
              </div>
            </div>

            <div class="field-row">
              <div class="field">
                <label for="f-terr-type">Dispositif / Objectif</label>
                <select id="f-terr-type" v-model="form.partType" class="styled-select" required>
                  <option value="" disabled selected>Type de projet...</option>
                  <option value="Inclusion social">Inclusion par le sport & Jeunesse</option>
                  <option value="Événement public">Événement public & Sport pour tous</option>
                  <option value="Équipements">Aménagement & Infrastructures</option>
                  <option value="Partenariat institutionnel">Partenariat institutionnel & Fondation</option>
                </select>
              </div>
              <div class="field">
                <label for="f-terr-target">Commune / Public ciblé</label>
                <input id="f-terr-target" v-model="form.budget" type="text" placeholder="Ex: Grenoble, Quartiers prioritaires..." />
              </div>
            </div>
          </template>

          <!-- Champ Message Commun -->
          <div class="field">
            <label for="f-msg">Message & Présentation de votre demande</label>
            <textarea id="f-msg" v-model="form.message" rows="4" placeholder="Précisez votre projet..." required></textarea>
          </div>

          <button class="btn submit-btn" type="submit" :style="{ '--accent-btn': currentProfile.accentColor }">
            {{ currentProfile.submitLabel }}
          </button>
        </form>

        <!-- Infos de contact -->
        <div class="contact-infos">
          <div class="info-block">
            <h3>Email Direct</h3>
            <a href="mailto:contactbsdsport@gmail.com">contactbsdsport@gmail.com</a>
          </div>
          <div class="info-block">
            <h3>Téléphones Club</h3>
            <a href="tel:+33751622992">07 51 62 29 92</a>
            <a href="tel:+33646025371">06 46 02 53 71</a>
          </div>
          <div class="info-block">
            <h3>Siège & Stades</h3>
            <span class="location-txt">Grenoble · Pont-de-Claix · Isère</span>
          </div>
          <div class="info-block">
            <h3>Réseaux Sociaux</h3>
            <div class="social-links">
              <a href="https://instagram.com/bsdsport" target="_blank" rel="noopener">Instagram</a>
              <a href="https://youtube.com/@bsdsport" target="_blank" rel="noopener">YouTube</a>
              <a href="#" title="bodyscult38">Snapchat</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="reveal d3">
      <span>© {{ new Date().getFullYear() }} BSD Sport</span>
      <span>Grenoble · Pont-de-Claix · Isère</span>
    </footer>
  </section>
</template>

<script setup>
import { reactive } from 'vue'
import { useProfile } from '@/composables/useProfile'
import { useUiStore } from '@/stores/uiStore'
import { useReveal } from '@/composables/useReveal'

useReveal()

const { currentProfile } = useProfile()
const uiStore = useUiStore()

const form = reactive({
  nom: '',
  email: '',
  tel: '',
  univers: '',
  objectif: '',
  company: '',
  partType: '',
  budget: '',
  message: ''
})

function handleSubmit() {
  uiStore.showToast(`Demande envoyée (${currentProfile.value.title}) — Nous vous recontactons rapidement !`)
  form.nom = ''
  form.email = ''
  form.tel = ''
  form.message = ''
}
</script>

<style scoped>
#contact {
  background: var(--ink);
  color: var(--cream);
  padding: 7rem 6vw 3rem;
  position: relative;
}

.contact-inner {
  max-width: 980px;
  margin: 0 auto;
}

.contact-header {
  margin-bottom: 2.8rem;
}

.role-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--stencil);
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--ink);
  background: var(--role-color, var(--gold));
  padding: 0.4em 0.9em;
  border-radius: 99px;
  font-weight: 700;
  margin-bottom: 0.8rem;
}

#contact .eyebrow {
  color: var(--gold);
}

#contact h2 {
  font-family: var(--display);
  font-size: clamp(2.5rem, 7vw, 4.8rem);
  text-transform: uppercase;
  line-height: .92;
  margin-top: .2em;
}

.subtitle {
  font-size: 1.05rem;
  color: rgba(241, 231, 208, 0.75);
  margin-top: 0.5rem;
}

.contact-layout {
  display: grid;
  grid-template-columns: 1.3fr .7fr;
  gap: 4rem;
  align-items: start;
}

@media (max-width: 840px) {
  .contact-layout { grid-template-columns: 1fr; gap: 3rem; }
}

#contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  background: rgba(255, 255, 255, 0.035);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1.5px solid rgba(241, 231, 208, 0.18);
  border-radius: 24px;
  padding: 2.2rem 2rem;
  box-shadow: 0 20px 50px rgba(0,0,0,0.4);
}

.field-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;
}

@media (max-width: 520px) {
  .field-row { grid-template-columns: 1fr; }
}

.field {
  display: flex;
  flex-direction: column;
  gap: .4rem;
}

.field label {
  font-family: var(--varsity);
  font-weight: 600;
  font-size: .65rem;
  letter-spacing: .18em;
  text-transform: uppercase;
  color: rgba(241,231,208,.6);
}

.field input,
.field textarea,
.styled-select {
  width: 100%;
  background: rgba(10, 14, 22, 0.5);
  border: 1.5px solid rgba(241,231,208,.2);
  border-radius: 12px;
  padding: .85em 1em;
  font-family: var(--body);
  font-size: 16px !important;
  color: var(--cream);
  transition: border-color .2s;
  outline: none;
}

.styled-select option {
  background: #101622;
  color: var(--cream);
}

.field input::placeholder,
.field textarea::placeholder {
  color: rgba(241,231,208,.3);
}

.field input:focus,
.field textarea:focus,
.styled-select:focus {
  border-color: var(--gold);
}

.submit-btn {
  margin-top: .8rem;
  align-self: flex-start;
  background: var(--accent-btn, var(--cardinal));
  border-color: var(--accent-btn, var(--cardinal));
}

/* Infos contact */
.contact-infos {
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
  padding-top: .5rem;
}

.info-block h3 {
  font-family: var(--varsity);
  font-size: .65rem;
  letter-spacing: .18em;
  text-transform: uppercase;
  color: rgba(241,231,208,.4);
  margin-bottom: .6rem;
}

.info-block a {
  display: block;
  color: var(--cream);
  font-size: .95rem;
  font-weight: 500;
  text-decoration: none;
  line-height: 1.8;
  transition: color .2s;
}

.info-block a:hover {
  color: var(--gold);
}

.location-txt {
  font-size: 0.95rem;
  color: rgba(241, 231, 208, 0.8);
}

.social-links {
  display: flex;
  gap: .8rem;
  flex-wrap: wrap;
}

.social-links a {
  font-size: .8rem;
  font-weight: 600;
  letter-spacing: .05em;
  padding: .5em 1em;
  border: 1px solid rgba(241,231,208,.2);
  border-radius: 8px;
  transition: all .2s;
}

.social-links a:hover {
  border-color: var(--gold);
  color: var(--gold);
}

footer {
  max-width: 980px;
  margin: 4rem auto 0;
  border-top: 1px solid rgba(241,231,208,.12);
  padding-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  font-size: .8rem;
  color: rgba(241,231,208,.4);
}
</style>

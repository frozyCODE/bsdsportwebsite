<template>
  <section id="contact">
    <div class="contact-inner">
      <p class="eyebrow reveal">Contact</p>
      <h2 class="reveal d1">Écris-nous</h2>

      <div class="contact-layout reveal d2">
        <!-- Formulaire -->
        <form id="contact-form" @submit.prevent="handleSubmit">
          <div class="field-row">
            <div class="field">
              <label for="f-nom">Nom</label>
              <input id="f-nom" v-model="form.nom" name="nom" type="text" placeholder="Ton nom" autocomplete="name" required />
            </div>
            <div class="field">
              <label for="f-mail">Email</label>
              <input id="f-mail" v-model="form.email" name="email" type="email" placeholder="ton@email.com" autocomplete="email" required />
            </div>
          </div>

          <div class="field">
            <label for="f-msg">Message</label>
            <textarea id="f-msg" v-model="form.message" name="message" rows="5" placeholder="Ton message..." required></textarea>
          </div>

          <button class="btn" type="submit">Envoyer</button>
        </form>

        <!-- Infos -->
        <div class="contact-infos">
          <div class="info-block">
            <h3>Email</h3>
            <a href="mailto:contactbsdsport@gmail.com">contactbsdsport@gmail.com</a>
          </div>
          <div class="info-block">
            <h3>Téléphone</h3>
            <a href="tel:+33751622992">07 51 62 29 92</a>
            <a href="tel:+33646025371">06 46 02 53 71</a>
          </div>
          <div class="info-block">
            <h3>Réseaux</h3>
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
import { useUiStore } from '@/stores/uiStore'
import { useReveal } from '@/composables/useReveal'

useReveal()
const uiStore = useUiStore()

const form = reactive({
  nom: '',
  email: '',
  message: ''
})

function handleSubmit() {
  uiStore.showToast('Message envoyé — on te répond vite !')
  form.nom = ''
  form.email = ''
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
  max-width: 900px;
  margin: 0 auto;
}

#contact .eyebrow {
  color: var(--gold);
}

#contact h2 {
  font-family: var(--display);
  font-size: clamp(2.5rem, 7vw, 5rem);
  text-transform: uppercase;
  line-height: .9;
  margin-top: .25em;
  margin-bottom: 3rem;
}

.contact-layout {
  display: grid;
  grid-template-columns: 1.2fr .8fr;
  gap: 4rem;
  align-items: start;
}

@media (max-width: 800px) {
  .contact-layout { grid-template-columns: 1fr; gap: 3rem; }
}

/* Formulaire — style brut, pas de glassmorphism */
#contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.field-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;
}

@media (max-width: 500px) {
  .field-row { grid-template-columns: 1fr; }
}

.field {
  display: flex;
  flex-direction: column;
  gap: .4rem;
}

.field label {
  font-family: var(--body);
  font-weight: 600;
  font-size: .7rem;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: rgba(241,231,208,.5);
}

.field input,
.field textarea {
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1.5px solid rgba(241,231,208,.2);
  border-radius: 0;
  padding: .8em 0;
  font-family: var(--body);
  font-size: .95rem;
  color: var(--cream);
  transition: border-color .2s;
  outline: none;
  resize: vertical;
}

.field input::placeholder,
.field textarea::placeholder {
  color: rgba(241,231,208,.25);
}

.field input:focus,
.field textarea:focus {
  border-color: var(--gold);
}

.field textarea {
  border: 1.5px solid rgba(241,231,208,.15);
  border-radius: 8px;
  padding: .8em 1em;
  margin-top: .2rem;
}

.field textarea:focus {
  border-color: var(--gold);
}

#contact-form .btn {
  margin-top: .8rem;
  align-self: flex-start;
}

/* Infos contact */
.contact-infos {
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
  padding-top: .5rem;
}

.info-block h3 {
  font-family: var(--body);
  font-weight: 600;
  font-size: .65rem;
  letter-spacing: .15em;
  text-transform: uppercase;
  color: rgba(241,231,208,.4);
  margin-bottom: .6rem;
}

.info-block a {
  display: block;
  color: var(--cream);
  font-family: var(--body);
  font-size: .95rem;
  font-weight: 500;
  text-decoration: none;
  line-height: 1.8;
  transition: color .2s;
}

.info-block a:hover {
  color: var(--gold);
}

.social-links {
  display: flex;
  gap: .8rem;
}

.social-links a {
  font-size: .8rem;
  font-weight: 600;
  letter-spacing: .05em;
  padding: .5em 1em;
  border: 1px solid rgba(241,231,208,.2);
  border-radius: 6px;
  transition: all .2s;
}

.social-links a:hover {
  border-color: var(--gold);
  color: var(--gold);
}

/* Footer */
footer {
  max-width: 900px;
  margin: 4rem auto 0;
  border-top: 1px solid rgba(241,231,208,.12);
  padding-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  font-size: .8rem;
  color: rgba(241,231,208,.4);
}
</style>

<template>
  <section id="contact" class="bg-[#0d0d0d] text-[#F1E7D0] relative z-0 py-14 sm:py-20 px-4 sm:px-8 lg:px-12 overflow-hidden">

    <!-- Texture de Grain sur l'arrière-plan z-[-1] -->
    <div 
      class="absolute inset-0 z-[-1] opacity-40 mix-blend-overlay pointer-events-none bg-repeat"
      style="background-image: url('data:image/svg+xml,%3Csvg width=\'256\' height=\'256\' viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'heavyGrain\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.95\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23heavyGrain)\'/%3E%3C/svg%3E');"
      aria-hidden="true"
    ></div>

    <div class="contact-inner max-w-6xl mx-auto relative z-10">
      
      <div class="contact-header reveal mb-8 sm:mb-12 text-center px-2 sm:px-0">
        <h2 class="font-display text-lg xs:text-xl sm:text-3xl lg:text-5xl uppercase tracking-tight text-white leading-[1.25] mb-3 sm:mb-4 text-center break-words" v-html="currentProfile.formTitleFormatted || currentProfile.formTitle"></h2>
        <p class="subtitle text-xs sm:text-base text-white/60 font-body max-w-xl mx-auto text-center px-2 sm:px-0">{{ currentProfile.formSubtitle }}</p>
      </div>

      <div class="contact-layout reveal d2 relative">
        <!-- Logo BSD Ancré directement derrière la grille du Formulaire (Remonté un tout petit peu) -->
        <div class="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] sm:w-[1500px] lg:w-[2000px] max-w-none pointer-events-none overflow-hidden z-[-1] opacity-[0.035] select-none" aria-hidden="true">
          <img 
            src="/BSD LOGO PNG.png" 
            alt="" 
            class="w-full h-auto grayscale brightness-150 contrast-125 object-contain select-none transform rotate-6"
          />
        </div>

        <!-- Formulaire Soffistiqué & Sobre -->
        <form id="contact-form" @submit.prevent="handleSubmit">
          
          <!-- Encoches / Sélecteur de profil (VOUS ETES ?) -->
          <div class="profile-selector-box mb-6 pb-5 border-b border-white/12">
            <span class="block text-[10px] sm:text-xs font-display uppercase tracking-widest text-[#ff7043] font-bold mb-3">
              VOUS ETES ?
            </span>
            <div class="grid grid-cols-3 gap-2">
              <button
                v-for="p in profiles"
                :key="p.id"
                type="button"
                @click="setProfile(p.id)"
                :class="[
                  'profile-chip flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 px-2 sm:px-3 rounded-xl border text-[11px] sm:text-xs font-body font-semibold transition-all duration-300 cursor-pointer',
                  currentProfile.id === p.id 
                    ? 'bg-white text-black border-white shadow-lg font-bold' 
                    : 'bg-[#090909] text-white/70 border-white/10 hover:border-white/30 hover:text-white'
                ]"
              >
                <!-- Encoche / Radio Indicator -->
                <span 
                  class="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border flex items-center justify-center shrink-0 transition-colors"
                  :class="currentProfile.id === p.id ? 'border-[#ff7043] bg-white' : 'border-white/30 bg-transparent'"
                >
                  <span v-if="currentProfile.id === p.id" class="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#ff7043]"></span>
                </span>
                <span class="truncate">{{ p.title }}</span>
              </button>
            </div>
          </div>

          <!-- DYNAMIQUE ROLE 1: PARTICULIERS / LICENCIÉS -->
          <template v-if="currentProfile.id === 'particuliers'">
            <div class="field-row">
              <div class="field">
                <label for="f-nom">Nom & Prenom</label>
                <input id="f-nom" v-model="form.nom" type="text" placeholder="Alexandre Dupont" required />
              </div>
              <div class="field">
                <label for="f-mail">Email</label>
                <input id="f-mail" v-model="form.email" type="email" placeholder="alexandre@gmail.com" required />
              </div>
            </div>

            <div class="field-row">
              <div class="field">
                <label for="f-tel">Telephone</label>
                <input id="f-tel" v-model="form.tel" type="tel" placeholder="06 12 34 56 78" required />
              </div>
              <div class="field">
                <label for="f-obj">Objectif principal</label>
                <select id="f-obj" v-model="form.objectif" class="styled-select" required>
                  <option value="" disabled selected>Votre objectif...</option>
                  <option value="Remise en forme">Remise en forme globale</option>
                  <option value="Dépassement de soi">Dépassement de soi & Performance</option>
                  <option value="Perte de poids">Perte de poids & Recomposition</option>
                  <option value="Prise de masse">Prise de masse musculaire</option>
                  <option value="Réathlétisation">Réathlétisation après blessure</option>
                  <option value="Autre">Autre projet sportif</option>
                </select>
              </div>
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
                <label for="f-contact-name">Nom du referent</label>
                <input id="f-contact-name" v-model="form.nom" type="text" placeholder="Prénom & Nom" required />
              </div>
            </div>

            <div class="field-row">
              <div class="field">
                <label for="f-mail-pro">Email professionnel</label>
                <input id="f-mail-pro" v-model="form.email" type="email" placeholder="contact@entreprise.fr" required />
              </div>
              <div class="field">
                <label for="f-tel-pro">Telephone direct</label>
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
                <label for="f-budget">Taille d'equipe / Projet</label>
                <input id="f-budget" v-model="form.budget" type="text" placeholder="Ex: 30 salariés, Team building..." />
              </div>
            </div>
          </template>

          <!-- DYNAMIQUE ROLE 3: TERRITOIRES / COLLECTIVITÉS -->
          <template v-else-if="currentProfile.id === 'territoires'">
            <div class="field-row">
              <div class="field">
                <label for="f-terr-name">Structure / Collectivite / Fondation</label>
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
                <label for="f-terr-tel">Telephone</label>
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
                <label for="f-terr-target">Commune / Public cible</label>
                <input id="f-terr-target" v-model="form.budget" type="text" placeholder="Ex: Grenoble, Quartiers prioritaires..." />
              </div>
            </div>
          </template>

          <!-- Champ Honeypot Anti-Spam (Caché aux humains, piège pour les robots spammers) -->
          <div class="hidden" aria-hidden="true">
            <input type="text" v-model="form.honeypot" tabindex="-1" autocomplete="off" />
          </div>

          <!-- Message de Succès / Erreur sous le formulaire -->
          <div v-if="submitSuccess" class="mb-4 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-body font-medium flex items-center gap-3">
            <span class="text-base">✓</span>
            <span>Votre message a été envoyé avec succès ! Notre équipe vous recontacte dans les plus brefs délais.</span>
          </div>

          <div v-if="submitError" class="mb-4 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs sm:text-sm font-body font-medium flex items-center gap-3">
            <span class="text-base">⚠️</span>
            <span>{{ submitError }}</span>
          </div>

          <button 
            class="btn submit-btn flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed" 
            type="submit"
            :disabled="isSubmitting"
          >
            <span v-if="isSubmitting" class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            <span>{{ isSubmitting ? 'ENVOI EN COURS...' : currentProfile.submitLabel }}</span>
          </button>
        </form>

        <!-- Infos de contact -->
        <div class="contact-infos">
          <div class="info-block">
            <h3>Email Direct</h3>
            <a href="mailto:contactbsdsport@gmail.com">contactbsdsport@gmail.com</a>
          </div>
          <div class="info-block">
            <h3>Telephones Club</h3>
            <a href="tel:+33751622992">07 51 62 29 92</a>
            <a href="tel:+33646025371">06 46 02 53 71</a>
          </div>
          <div class="info-block">
            <h3>Siege & Stades</h3>
            <span class="location-txt">Grenoble · Pont-de-Claix · Isère</span>
          </div>
          <div class="info-block">
            <h3>Reseaux Sociaux</h3>
            <div class="social-links">
              <a href="https://instagram.com/bsdsport" target="_blank" rel="noopener">Instagram</a>
              <a href="https://youtube.com/@bsdsport" target="_blank" rel="noopener">YouTube</a>
              <a href="#" title="bodyscult38">Snapchat</a>
            </div>
          </div>
        </div>
      </div>

      <!-- CARTE GOOGLE MAPS DIRECTEMENT SOUS LE FORMULAIRE DE CONTACT (Sans le titre Rejoignez-nous) -->
      <div class="map-section reveal d2 mt-12 sm:mt-16 pt-8 border-t border-white/10">
        <div class="max-w-5xl mx-auto">
          <div class="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-xl bg-[#111111] min-h-[360px] sm:min-h-[440px] group">
            <iframe
              class="w-full h-full min-h-[360px] sm:min-h-[440px] border-0 filter brightness-70 contrast-140 grayscale-[80%] invert-[92%] opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              src="https://maps.google.com/maps?q=Pont-de-Claix+BSD+Sport+Is%C3%A8re&t=&z=14&ie=UTF8&iwloc=&output=embed"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Carte Google Maps BSD Sport Pont-de-Claix"
            ></iframe>

            <!-- Overlay sombre subtil -->
            <div class="absolute inset-0 bg-[#0d0d0d]/40 mix-blend-multiply pointer-events-none"></div>

            <!-- Floating Action Button -->
            <div class="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 z-10">
              <a
                href="https://www.google.com/maps/search/?api=1&query=BSD+Sport+Pont-de-Claix"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 rounded-full bg-[#ff7043] hover:bg-white text-black font-display text-[10px] sm:text-xs tracking-wider uppercase shadow-xl transition-all duration-300 font-bold"
              >
                <span>Obtenir l'itineraire</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- SECTION NOS PARTENAIRES -->
      <PartenairesSection class="mt-20 sm:mt-32" />

      <!-- SiteFooter Universel (Partage l'arrière-plan #0d0d0d et la texture de la section au-dessus) -->
      <SiteFooter class="mt-16 border-t border-white/10" />
    </div>

    <!-- LEGAL MODAL OVERLAY -->
    <div v-if="activeLegalModal" class="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div class="bg-[#101622] border border-[#F1E7D0]/30 rounded-2xl max-w-2xl w-full p-6 sm:p-8 text-[#F1E7D0] shadow-2xl relative max-h-[85vh] overflow-y-auto">
        <button @click="activeLegalModal = null" class="absolute top-4 right-4 text-[#F1E7D0]/60 hover:text-white font-bold text-xl p-2">
          ✕
        </button>

        <!-- MENTIONS LÉGALES -->
        <div v-if="activeLegalModal === 'mentions'" class="space-y-4">
          <h3 class="text-xl font-bold text-white uppercase tracking-wider">Mentions Legales</h3>
          <p class="text-xs text-[#F1E7D0]/80 leading-relaxed">
            <strong class="text-white">Éditeur du site :</strong> BSD Sport (Association loi 1901 à but non lucratif).<br>
            <strong class="text-white">Siège Social :</strong> Campus Sportif, 38800 Pont-de-Claix, Isère, France.<br>
            <strong class="text-white">Telephone :</strong> 07 51 62 29 92 · 06 46 02 53 71<br>
            <strong class="text-white">Email :</strong> contact@bsdsport.fr<br>
            <strong class="text-white">Directeur de la publication :</strong> Équipe de Direction BSD Sport.<br>
            <strong class="text-white">Hébergement :</strong> Vercel Inc., 440 N Barranca Ave #4133 Covina, CA 91723.<br>
            <strong class="text-white">Propriété intellectuelle :</strong> L'ensemble des contenus, visuels et éléments graphiques de BSD Sport sont protégés.
          </p>
        </div>

        <!-- PLAN DU SITE -->
        <div v-if="activeLegalModal === 'plan'" class="space-y-4">
          <h3 class="text-xl font-bold text-white uppercase tracking-wider">Plan du Site</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#F1E7D0]/90">
            <div>
              <strong class="text-white uppercase block mb-1">Campus Sportif</strong>
              <ul class="space-y-1 text-[#F1E7D0]/70">
                <li>• Hero & Présentation</li>
                <li>• Section Terrains de Jeu</li>
                <li>• 8 Univers Athlétiques (Cross Heat, Step, Combat...)</li>
                <li>• Le Mot du Fondateur</li>
                <li>• Horaires & Planning</li>
              </ul>
            </div>
            <div>
              <strong class="text-white uppercase block mb-1">Espaces Dédiés</strong>
              <ul class="space-y-1 text-[#F1E7D0]/70">
                <li>• Espace Entreprises B2B</li>
                <li>• Espace Territoire & Social</li>
                <li>• Formulaire de Contact</li>
                <li>• FAQ & Questions Fréquentes</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- POLITIQUE DE CONFIDENTIALITÉ -->
        <div v-if="activeLegalModal === 'confidentialite'" class="space-y-4">
          <h3 class="text-xl font-bold text-white uppercase tracking-wider">Politique de Confidentialite</h3>
          <p class="text-xs text-[#F1E7D0]/80 leading-relaxed">
            <strong class="text-white">Collecte des données :</strong> Vos informations (nom, email, message) collectées via notre formulaire sont uniquement utilisées pour traiter votre demande.<br><br>
            <strong class="text-white">Protection :</strong> Vos données restent strictement confidentielles et ne sont jamais cédées à des tiers.<br><br>
            <strong class="text-white">Droits RGPD :</strong> Vous bénéficiez d'un droit d'accès et de suppression de vos informations personnelles en nous écrivant à <em>contact@bsdsport.fr</em>.
          </p>
        </div>


        <div class="mt-6 pt-4 border-t border-[#F1E7D0]/20 text-right">
          <button @click="activeLegalModal = null" class="px-5 py-2 rounded-lg bg-[#D9A441] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#E5B555] transition-colors">
            Fermer
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useProfile } from '@/composables/useProfile'
import { useUiStore } from '@/stores/uiStore'
import { useReveal } from '@/composables/useReveal'
import PartenairesSection from '@/components/sections/PartenairesSection.vue'
import SiteFooter from '@/components/common/SiteFooter.vue'

useReveal()

const activeLegalModal = ref(null)
const { currentProfile, profiles, setProfile } = useProfile()
const uiStore = useUiStore()

const isSubmitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref('')

const form = reactive({
  nom: '',
  email: '',
  tel: '',
  univers: '',
  objectif: '',
  company: '',
  partType: '',
  budget: '',
  message: '',
  honeypot: '' // Champ piège pour les robots spammers
})

async function handleSubmit() {
  submitError.value = ''
  submitSuccess.value = false
  isSubmitting.value = true

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        profileTitle: currentProfile.value.title,
        nom: form.nom,
        email: form.email,
        tel: form.tel,
        univers: form.univers,
        objectif: form.objectif,
        company: form.company,
        partType: form.partType,
        budget: form.budget,
        message: form.message,
        honeypot: form.honeypot
      })
    })

    const data = await response.json()

    if (response.ok && data.success) {
      submitSuccess.value = true
      uiStore.showToast(`Message envoyé avec succès ! (${currentProfile.value.title})`)
      
      // Réinitialiser les champs
      form.nom = ''
      form.email = ''
      form.tel = ''
      form.message = ''
      form.company = ''
      form.budget = ''
      form.objectif = ''
      form.partType = ''
    } else {
      submitError.value = data.error || "Une erreur s'est produite lors de l'envoi."
      uiStore.showToast(submitError.value)
    }
  } catch (err) {
    console.error('Erreur soumission formulaire:', err)
    submitError.value = "Erreur de connexion au serveur. Veuillez vérifier votre réseau."
    uiStore.showToast("Erreur lors de l'envoi du formulaire")
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
#contact {
  color: #ffffff;
  padding: 3.5rem 1rem 3rem;
  position: relative;
  background-color: #0d0d0d;
  background-image: url("data:image/svg+xml,%3Csvg width='256' height='256' viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)' opacity='0.15'/%3E%3C/svg%3E");
  background-repeat: repeat;
}

@media (min-width: 640px) {
  #contact {
    padding: 5rem 2rem 3.5rem;
  }
}

@media (min-width: 1024px) {
  #contact {
    padding: 7rem 6vw 5rem;
  }
}

.contact-inner {
  max-width: 1040px;
  margin: 0 auto;
}

.contact-header {
  margin-bottom: 2.5rem;
}

.contact-header h2,
.rejoignez-nous-section h2 {
  color: #ffffff !important;
  text-shadow: none !important;
  -webkit-text-stroke: 0 !important;
  outline: none !important;
  border: none !important;
  filter: none !important;
}

.subtitle {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 0.4rem;
}

.contact-layout {
  display: grid;
  grid-template-columns: 1.3fr .7fr;
  gap: 3.5rem;
  align-items: start;
}

@media (max-width: 840px) {
  .contact-layout { grid-template-columns: 1fr; gap: 2.5rem; }
}

#contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  background: #111111;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 20px;
  padding: 2rem 1.8rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.4);
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
  gap: .35rem;
}

.field label {
  font-family: var(--display);
  font-weight: 700;
  font-size: .65rem;
  letter-spacing: .15em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
}

.field input,
.field textarea,
.styled-select {
  width: 100%;
  background: #090909;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 10px;
  padding: .8em 1em;
  font-family: var(--body);
  font-size: 15px !important;
  color: #ffffff;
  transition: border-color .2s;
  outline: none;
}

.styled-select option {
  background: #111111;
  color: #ffffff;
}

.field input::placeholder,
.field textarea::placeholder {
  color: rgba(255, 255, 255, 0.3);
}

.field input:focus,
.field textarea:focus,
.styled-select:focus {
  border-color: #ff7043;
}

.submit-btn {
  margin-top: .6rem;
  align-self: flex-start;
  background: #ff7043;
  color: #0d0d0d;
  border: none;
  font-family: var(--display);
  font-weight: 800;
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  padding: 0.85em 2.2em;
  border-radius: 99px;
  cursor: pointer;
  transition: all 0.25s ease;
}

.submit-btn:hover {
  background: #ffffff;
  color: #000000;
  transform: translateY(-1px);
}

/* Infos contact */
.contact-infos {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-top: .5rem;
}

.info-block h3 {
  font-family: var(--display);
  font-size: .65rem;
  letter-spacing: .15em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: .5rem;
}

.info-block a {
  display: block;
  color: #ffffff;
  font-size: .9rem;
  font-weight: 500;
  text-decoration: none;
  line-height: 1.7;
  transition: color .2s;
}

.info-block a:hover {
  color: #ff7043;
}

.location-txt {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
}

.social-links {
  display: flex;
  gap: .7rem;
  flex-wrap: wrap;
}

.social-links a {
  font-size: .78rem;
  font-weight: 600;
  letter-spacing: .04em;
  padding: .45em .9em;
  background: #111111;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 10px;
  color: #ffffff;
  transition: all .2s ease;
}

.social-links a:hover {
  border-color: #ff7043;
  color: #ff7043;
}

footer {
  max-width: 1040px;
  margin: 4rem auto 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  font-size: .78rem;
  color: rgba(255, 255, 255, 0.4);
}
</style>

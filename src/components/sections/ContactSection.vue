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
                  <option value="Sports de combat">03 · Sports de combat (Combat / Ring)</option>
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

      <!-- SECTION REJOIGNEZ-NOUS & GOOGLE MAPS -->
      <div class="rejoignez-nous-section reveal d2 mt-20 pt-16 border-t border-[#F1E7D0]/10">
        <div class="text-center max-w-3xl mx-auto mb-10">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8102E]/20 border border-[#C8102E]/40 text-[#D9A441] text-xs font-varsity tracking-[0.25em] uppercase mb-3">
            <span class="w-2 h-2 rounded-full bg-[#C8102E] animate-ping"></span>
            <span>Localisation & Accès</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-varsity tracking-wider uppercase text-[#F1E7D0] mb-4">
            Rejoignez-nous à Pont-de-Claix
          </h2>
          <p class="text-sm text-[#F1E7D0]/80 font-body leading-relaxed max-w-2xl mx-auto">
            Venez vous entraîner avec les équipes de BSD Sport. Nos installations et terrains vous accueillent à Pont-de-Claix, aux portes de Grenoble.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          <!-- Carte Google Maps (Bleu foncé profond & haut contraste) -->
          <div class="lg:col-span-2 relative rounded-2xl overflow-hidden border border-[#F1E7D0]/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-[#0E1626] min-h-[350px] sm:min-h-[400px] group">
            <iframe
              class="w-full h-full min-h-[350px] sm:min-h-[400px] border-0 filter brightness-65 contrast-160 grayscale-[70%] invert-[95%] hue-rotate-[195deg] opacity-95 group-hover:opacity-100 transition-opacity duration-300"
              src="https://maps.google.com/maps?q=Pont-de-Claix+BSD+Sport+Is%C3%A8re&t=&z=14&ie=UTF8&iwloc=&output=embed"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Carte Google Maps BSD Sport Pont-de-Claix"
            ></iframe>

            <!-- Overlays Bleu Foncé Profond & Haut Contraste (#152238 / #0E1626) -->
            <div class="absolute inset-0 bg-[#0E1626]/60 mix-blend-multiply pointer-events-none"></div>
            <div class="absolute inset-0 bg-[#152238]/30 mix-blend-color pointer-events-none"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-[#0A0E16] via-transparent to-[#0A0E16]/50 pointer-events-none"></div>

            <!-- Floating Action Button -->
            <div class="absolute bottom-4 right-4 z-10">
              <a
                href="https://www.google.com/maps/search/?api=1&query=BSD+Sport+Pont-de-Claix"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#C8102E] hover:bg-[#D9A441] text-[#F1E7D0] hover:text-[#0A0E16] text-xs font-varsity tracking-wider uppercase shadow-xl transition-all duration-300 border border-white/20"
              >
                <span>Obtenir l'itinéraire 🗺️</span>
              </a>
            </div>
          </div>

          <!-- Informations Pratiques au Design BSD -->
          <div class="flex flex-col gap-4 justify-between">
            <div class="p-5 rounded-2xl bg-[#152238]/90 border border-[#F1E7D0]/10 hover:border-[#D9A441]/60 hover:shadow-[0_10px_30px_rgba(217,164,65,0.15)] transition-all duration-300">
              <div class="flex items-center gap-3 mb-2.5">
                <div class="w-9 h-9 rounded-xl bg-[#C8102E]/20 border border-[#C8102E]/40 text-[#C8102E] flex items-center justify-center text-base">
                  📍
                </div>
                <div>
                  <h3 class="font-varsity text-sm text-[#F1E7D0] uppercase tracking-wider">Adresse Principale</h3>
                  <p class="text-[11px] text-[#D9A441] font-mono">38800 Pont-de-Claix</p>
                </div>
              </div>
              <p class="text-xs text-[#F1E7D0]/80 leading-relaxed font-body pl-12">
                BSD Sport — Campus Athlétique & Stades<br>
                Pont-de-Claix · Isère, France
              </p>
            </div>

            <div class="p-5 rounded-2xl bg-[#152238]/90 border border-[#F1E7D0]/10 hover:border-[#D9A441]/60 hover:shadow-[0_10px_30px_rgba(217,164,65,0.15)] transition-all duration-300">
              <div class="flex items-center gap-3 mb-2.5">
                <div class="w-9 h-9 rounded-xl bg-[#D9A441]/20 border border-[#D9A441]/40 text-[#D9A441] flex items-center justify-center text-base">
                  🚌
                </div>
                <div>
                  <h3 class="font-varsity text-sm text-[#F1E7D0] uppercase tracking-wider">Accès & Transports</h3>
                  <p class="text-[11px] text-[#D9A441] font-mono">Bus & Tram TAG</p>
                </div>
              </div>
              <ul class="text-xs text-[#F1E7D0]/80 space-y-1 font-body pl-12">
                <li>• Tram & Bus du réseau TAG</li>
                <li>• Accès direct A480 & Route Napoléon (N85)</li>
                <li>• Parking gratuit sur place</li>
              </ul>
            </div>

            <div class="p-5 rounded-2xl bg-[#152238]/90 border border-[#F1E7D0]/10 hover:border-[#D9A441]/60 hover:shadow-[0_10px_30px_rgba(217,164,65,0.15)] transition-all duration-300">
              <div class="flex items-center gap-3 mb-2.5">
                <div class="w-9 h-9 rounded-xl bg-[#2FA96B]/20 border border-[#2FA96B]/40 text-[#2FA96B] flex items-center justify-center text-base">
                  🕒
                </div>
                <div>
                  <h3 class="font-varsity text-sm text-[#F1E7D0] uppercase tracking-wider">Horaires du Club</h3>
                  <p class="text-[11px] text-[#2FA96B] font-mono">Ouvert 6j/7</p>
                </div>
              </div>
              <ul class="text-xs text-[#F1E7D0]/80 space-y-1 font-body pl-12">
                <li>• Lun – Ven : 08h00 – 21h30</li>
                <li>• Samedi : 09h00 – 19h00</li>
                <li>• Dimanche : Événements & Stages</li>
              </ul>
            </div>

            <!-- Call to action direct -->
            <div class="p-5 rounded-2xl bg-gradient-to-r from-[#C8102E]/25 via-[#152238] to-[#152238] border border-[#C8102E]/50 flex items-center justify-between shadow-xl">
              <div>
                <p class="text-[11px] font-varsity text-[#D9A441] uppercase tracking-wider">Besoin d'un renseignement ?</p>
                <p class="text-xs font-semibold text-[#F1E7D0]">07 51 62 29 92</p>
              </div>
              <a href="tel:+33751622992" class="px-4 py-2 rounded-xl bg-[#C8102E] hover:bg-[#D9A441] text-white hover:text-black font-varsity text-xs tracking-wider uppercase transition-all duration-300 border border-white/10">
                Appeler
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="reveal d3 flex flex-col sm:flex-row items-center justify-between gap-4 py-8 border-t border-[#F1E7D0]/15 text-xs text-[#F1E7D0]/70">
      <div>
        <span>© {{ new Date().getFullYear() }} BSD Sport</span>
        <span class="ml-2">• Grenoble · Pont-de-Claix · Isère</span>
      </div>

      <div class="flex flex-wrap items-center gap-6 font-semibold">
        <router-link to="/mentions-legales" class="hover:text-white transition-colors underline-offset-4 hover:underline">
          Mentions légales
        </router-link>
        <router-link to="/plan-du-site" class="hover:text-white transition-colors underline-offset-4 hover:underline">
          Plan du site
        </router-link>
        <router-link to="/politique-de-confidentialite" class="hover:text-white transition-colors underline-offset-4 hover:underline">
          Politique de confidentialité
        </router-link>
        <button @click="activeLegalModal = 'reglement'" class="hover:text-white transition-colors underline-offset-4 hover:underline cursor-pointer">
          Règlement intérieur
        </button>
      </div>
    </footer>

    <!-- LEGAL MODAL OVERLAY -->
    <div v-if="activeLegalModal" class="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div class="bg-[#101622] border border-[#F1E7D0]/30 rounded-2xl max-w-2xl w-full p-6 sm:p-8 text-[#F1E7D0] shadow-2xl relative max-h-[85vh] overflow-y-auto">
        <button @click="activeLegalModal = null" class="absolute top-4 right-4 text-[#F1E7D0]/60 hover:text-white font-bold text-xl p-2">
          ✕
        </button>

        <!-- MENTIONS LÉGALES -->
        <div v-if="activeLegalModal === 'mentions'" class="space-y-4">
          <h3 class="text-xl font-bold text-white uppercase tracking-wider">Mentions Légales</h3>
          <p class="text-xs text-[#F1E7D0]/80 leading-relaxed">
            <strong class="text-white">Éditeur du site :</strong> BSD Sport (Association loi 1901 à but non lucratif).<br>
            <strong class="text-white">Siège Social :</strong> Campus Sportif, 38800 Pont-de-Claix, Isère, France.<br>
            <strong class="text-white">Téléphone :</strong> 07 51 62 29 92 · 06 46 02 53 71<br>
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
          <h3 class="text-xl font-bold text-white uppercase tracking-wider">Politique de Confidentialité</h3>
          <p class="text-xs text-[#F1E7D0]/80 leading-relaxed">
            <strong class="text-white">Collecte des données :</strong> Vos informations (nom, email, message) collectées via notre formulaire sont uniquement utilisées pour traiter votre demande.<br><br>
            <strong class="text-white">Protection :</strong> Vos données restent strictement confidentielles et ne sont jamais cédées à des tiers.<br><br>
            <strong class="text-white">Droits RGPD :</strong> Vous bénéficiez d'un droit d'accès et de suppression de vos informations personnelles en nous écrivant à <em>contact@bsdsport.fr</em>.
          </p>
        </div>

        <!-- RÈGLEMENT INTÉRIEUR -->
        <div v-if="activeLegalModal === 'reglement'" class="space-y-4">
          <h3 class="text-xl font-bold text-white uppercase tracking-wider">Règlement Intérieur BSD Sport</h3>
          <div class="text-xs text-[#F1E7D0]/80 leading-relaxed space-y-3 font-body">
            <p><strong class="text-white">1. Accès & Tenue :</strong> L'accès aux séances et installations exige une tenue sportive propre et appropriée (chaussures de salle d'intérieur réservées aux cours, serviette obligatoire).</p>
            <p><strong class="text-white">2. Respect & Esprit d'Équipe :</strong> Le respect mutuel entre pratiquants et coachs est la valeur fondamentale du club. Aucune discrimination, incivilité ou comportement inapproprié ne sera toléré.</p>
            <p><strong class="text-white">3. Matériel & Sécurité :</strong> Le matériel (kettlebells, haltères, sacs de frappe) doit être nettoyé et rangé après chaque utilisation. Il convient de respecter strictement les consignes de sécurité énoncées par les éducateurs diplômés.</p>
            <p><strong class="text-white">4. Santé & Certificat :</strong> Chaque pratiquant doit s'assurer que sa condition physique est compatible avec la pratique du sport choisi et fournir un certificat médical si requis par la discipline.</p>
          </div>
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

useReveal()

const activeLegalModal = ref(null)
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

<template>
  <div class="corporate-monochrome min-h-screen bg-white text-slate-900 font-corporate antialiased">
    <!-- Google Fonts for Minimalist Typography -->
    <component :is="'style'">
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap');
      
      .font-corporate {
        font-family: 'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif;
      }
      .corporate-monochrome, .corporate-monochrome * {
        cursor: auto !important;
      }
      .corporate-monochrome a, .corporate-monochrome button, .corporate-monochrome select, .corporate-monochrome [role="button"] {
        cursor: pointer !important;
      }
      .corporate-monochrome input, .corporate-monochrome textarea {
        cursor: text !important;
      }
    </component>

    <!-- Top Corporate Navigation Header -->
    <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 px-6 py-4 transition-all">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        
        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-3 group text-decoration-none">
          <div class="w-9 h-9 rounded-lg bg-black text-white font-extrabold text-base flex items-center justify-center tracking-tighter">
            B
          </div>
          <div class="flex flex-col">
            <span class="font-extrabold text-lg tracking-tight text-black leading-none">BSD SPORT</span>
            <span class="text-[0.62rem] font-medium tracking-widest text-slate-500 uppercase mt-0.5">Territoire & Social</span>
          </div>
        </router-link>

        <!-- Center Nav Links -->
        <nav class="hidden md:flex items-center gap-6 text-xs font-bold uppercase tracking-widest text-slate-600">
          <router-link to="/" class="hover:text-black transition-colors">Accueil</router-link>
          <a href="#demarche" class="hover:text-black transition-colors">La Démarche</a>
          <a href="#actions" class="hover:text-black transition-colors">Nos Actions</a>
          <a href="#publics" class="hover:text-black transition-colors">Nos Publics</a>
          <a href="#contact-terr" class="hover:text-black transition-colors">Contact</a>
        </nav>

        <!-- Right Action Buttons -->
        <div class="flex items-center gap-3">
          <router-link to="/" class="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-slate-100 border border-slate-300 text-black font-extrabold text-xs tracking-wider uppercase hover:bg-slate-200 transition-all">
            ← RETOUR AU SITE PRINCIPAL
          </router-link>
          <a href="#contact-terr" class="hidden sm:inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-black text-white font-bold text-xs tracking-wider uppercase hover:bg-slate-800 transition-all">
            Collaborer avec nous ↗
          </a>
        </div>

      </div>
    </header>

    <!-- HERO SECTION -->
    <section class="relative pt-16 pb-20 md:pt-24 md:pb-28 border-b border-slate-200 bg-slate-50/50">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <!-- Left Column Content -->
          <div class="lg:col-span-7">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-slate-200/70 border border-slate-300 text-slate-800 font-bold text-[0.7rem] tracking-widest uppercase mb-6">
              Association loi 1901 — Grenoble, Isère
            </div>

            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black tracking-tight leading-[1.1] mb-6">
              BSD SPORT — <span class="underline decoration-2 underline-offset-8 decoration-slate-400">AU SERVICE DES POPULATIONS</span>
            </h1>

            <p class="text-base sm:text-lg text-slate-700 leading-relaxed mb-8 max-w-2xl font-normal">
              BSD Sport, créée il y a plus de 10 ans, est une association grenobloise spécialisée dans le déploiement d'actions sportives à fort impact social. Chaque dispositif est co-construit avec les acteurs du territoire.
            </p>

            <div class="flex flex-wrap items-center gap-4 mb-12">
              <a href="#actions" class="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-black text-white font-bold text-xs uppercase tracking-wider hover:bg-slate-800 transition-all">
                Découvrir nos actions ↗
              </a>
              <a href="#contact-terr" class="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white border border-slate-300 text-black font-bold text-xs uppercase tracking-wider hover:bg-slate-100 transition-all">
                Collaborer avec nous ↗
              </a>
            </div>

            <!-- Key Metrics Bar -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-200">
              <div>
                <span class="block text-2xl sm:text-3xl font-extrabold text-black">10+</span>
                <span class="text-[0.65rem] font-bold text-slate-500 uppercase tracking-widest">Années d'ancrage</span>
              </div>
              <div>
                <span class="block text-2xl sm:text-3xl font-extrabold text-black">0</span>
                <span class="text-[0.65rem] font-bold text-slate-500 uppercase tracking-widest">Condition de niveau</span>
              </div>
              <div>
                <span class="block text-2xl sm:text-3xl font-extrabold text-black">9+</span>
                <span class="text-[0.65rem] font-bold text-slate-500 uppercase tracking-widest">Publics accompagnés</span>
              </div>
              <div>
                <span class="block text-2xl sm:text-3xl font-extrabold text-black">10</span>
                <span class="text-[0.65rem] font-bold text-slate-500 uppercase tracking-widest">Actions disponibles</span>
              </div>
            </div>

          </div>

          <!-- Right Column Showcase Card -->
          <div class="lg:col-span-5">
            <div class="rounded-2xl bg-white p-8 border border-slate-300 shadow-xl shadow-slate-200/50">
              <span class="px-3 py-1 rounded bg-slate-100 border border-slate-300 text-black text-[0.65rem] font-extrabold uppercase tracking-widest block w-max mb-6">
                PARTENAIRES INSTITUTIONNELS
              </span>

              <h3 class="text-xl font-extrabold text-black mb-4">Ils soutiennent nos actions</h3>

              <div class="space-y-3 mb-8">
                <div class="flex items-center gap-3 text-xs font-bold text-slate-800 bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <span class="text-black">•</span> Grenoble Alpes Métropole
                </div>
                <div class="flex items-center gap-3 text-xs font-bold text-slate-800 bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <span class="text-black">•</span> Préfecture de l'Isère
                </div>
                <div class="flex items-center gap-3 text-xs font-bold text-slate-800 bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <span class="text-black">•</span> Ville de Pont-de-Claix
                </div>
                <div class="flex items-center gap-3 text-xs font-bold text-slate-800 bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <span class="text-black">•</span> Fondation Décathlon
                </div>
                <div class="flex items-center gap-3 text-xs font-bold text-slate-800 bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <span class="text-black">•</span> CAF Isère
                </div>
              </div>

              <a href="#contact-terr" class="block text-center w-full py-3 rounded-lg bg-black text-white font-bold text-xs tracking-widest uppercase hover:bg-slate-800 transition-colors">
                Co-construire un projet ↗
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- NOTRE DÉMARCHE -->
    <section id="demarche" class="py-20 px-6 max-w-7xl mx-auto border-b border-slate-200">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-slate-500 font-extrabold text-[0.7rem] tracking-widest uppercase mb-2 block">NOTRE DÉMARCHE</span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
          Co-construire par le sport et pour le territoire
        </h2>
        <p class="text-slate-600 mt-3 text-base">
          Des actions sportives ancrées dans le territoire, conçues avec ses acteurs, pour ses populations.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div class="bg-white rounded-xl p-8 border border-slate-300 shadow-sm hover:border-black transition-all">
          <div class="w-10 h-10 rounded-lg bg-black text-white flex items-center justify-center font-bold text-sm mb-6">
            01
          </div>
          <h3 class="text-xl font-bold text-black mb-3">Sans competition</h3>
          <p class="text-slate-600 text-sm leading-relaxed">
            Nos actions favorisent la progression individuelle et la coopération collective. La performance n'est pas un critère d'accès ni d'évaluation.
          </p>
        </div>

        <div class="bg-white rounded-xl p-8 border border-slate-300 shadow-sm hover:border-black transition-all">
          <div class="w-10 h-10 rounded-lg bg-black text-white flex items-center justify-center font-bold text-sm mb-6">
            02
          </div>
          <h3 class="text-xl font-bold text-black mb-3">Approche co-construite</h3>
          <p class="text-slate-600 text-sm leading-relaxed">
            Chaque dispositif est co-construit avec les structures partenaires en fonction du public ciblé : âge, condition physique, contexte social. Aucun format n'est déployé sans concertation préalable.
          </p>
        </div>

        <div class="bg-white rounded-xl p-8 border border-slate-300 shadow-sm hover:border-black transition-all">
          <div class="w-10 h-10 rounded-lg bg-black text-white flex items-center justify-center font-bold text-sm mb-6">
            03
          </div>
          <h3 class="text-xl font-bold text-black mb-3">Le sport comme vecteur</h3>
          <p class="text-slate-600 text-sm leading-relaxed">
            Le sport est un vecteur de transmission de valeurs, de savoir-être et de savoir-vivre. Découverte, apprentissage, ouverture — nos actions accompagnent la construction des citoyens de demain.
          </p>
        </div>

      </div>
    </section>

    <!-- NOTRE BOUSSOLE (4 AXES) -->
    <section id="boussole" class="py-20 px-6 max-w-7xl mx-auto border-b border-slate-200 bg-slate-50/60">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-slate-500 font-extrabold text-[0.7rem] tracking-widest uppercase mb-2 block">NOTRE BOUSSOLE</span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
          4 axes qui orientent chaque action
        </h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div class="bg-white rounded-xl p-6 border border-slate-300 shadow-sm text-center">
          <div class="text-3xl mb-3">🫀</div>
          <h3 class="text-lg font-bold text-black mb-1">Sante</h3>
          <p class="text-slate-600 text-xs font-semibold">Prévention & bien-être physique</p>
        </div>

        <div class="bg-white rounded-xl p-6 border border-slate-300 shadow-sm text-center">
          <div class="text-3xl mb-3">🏃</div>
          <h3 class="text-lg font-bold text-black mb-1">Pratique sportive</h3>
          <p class="text-slate-600 text-xs font-semibold">Accès & inclusion</p>
        </div>

        <div class="bg-white rounded-xl p-6 border border-slate-300 shadow-sm text-center">
          <div class="text-3xl mb-3">🤝</div>
          <h3 class="text-lg font-bold text-black mb-1">Socialisation</h3>
          <p class="text-slate-600 text-xs font-semibold">Lien social & cohésion</p>
        </div>

        <div class="bg-white rounded-xl p-6 border border-slate-300 shadow-sm text-center">
          <div class="text-3xl mb-3">🌿</div>
          <h3 class="text-lg font-bold text-black mb-1">Environnement</h3>
          <p class="text-slate-600 text-xs font-semibold">Territoire & citoyenneté</p>
        </div>

      </div>
    </section>

    <!-- NOS PUBLICS CIBLES -->
    <section id="publics" class="py-20 px-6 max-w-7xl mx-auto border-b border-slate-200">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-slate-500 font-extrabold text-[0.7rem] tracking-widest uppercase mb-2 block">NOS PUBLICS</span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-black tracking-tight mb-4">
          Nos publics cibles
        </h2>
        <p class="text-slate-600 text-sm leading-relaxed">
          BSD Sport s'adresse à toute personne souhaitant pratiquer dans un cadre inclusif et bienveillant, avec une attention particulière aux populations éloignées de la pratique sportive.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div class="bg-white p-5 rounded-xl border border-slate-300 font-bold text-slate-800 text-sm flex items-center gap-3">
          <span class="w-2 h-2 rounded-full bg-black"></span> Pratique sportive féminine
        </div>
        <div class="bg-white p-5 rounded-xl border border-slate-300 font-bold text-slate-800 text-sm flex items-center gap-3">
          <span class="w-2 h-2 rounded-full bg-black"></span> Étudiants
        </div>
        <div class="bg-white p-5 rounded-xl border border-slate-300 font-bold text-slate-800 text-sm flex items-center gap-3">
          <span class="w-2 h-2 rounded-full bg-black"></span> Jeunes en décrochage
        </div>
        <div class="bg-white p-5 rounded-xl border border-slate-300 font-bold text-slate-800 text-sm flex items-center gap-3">
          <span class="w-2 h-2 rounded-full bg-black"></span> Publics issus de QPV
        </div>
        <div class="bg-white p-5 rounded-xl border border-slate-300 font-bold text-slate-800 text-sm flex items-center gap-3">
          <span class="w-2 h-2 rounded-full bg-black"></span> Seniors
        </div>
        <div class="bg-white p-5 rounded-xl border border-slate-300 font-bold text-slate-800 text-sm flex items-center gap-3">
          <span class="w-2 h-2 rounded-full bg-black"></span> Publics APA (Activité Physique Adaptée)
        </div>
        <div class="bg-white p-5 rounded-xl border border-slate-300 font-bold text-slate-800 text-sm flex items-center gap-3">
          <span class="w-2 h-2 rounded-full bg-black"></span> Personnes en recherche d'emploi
        </div>
        <div class="bg-white p-5 rounded-xl border border-slate-300 font-bold text-slate-800 text-sm flex items-center gap-3">
          <span class="w-2 h-2 rounded-full bg-black"></span> Familles
        </div>
        <div class="bg-white p-5 rounded-xl border border-slate-300 font-bold text-slate-800 text-sm flex items-center gap-3">
          <span class="w-2 h-2 rounded-full bg-black"></span> Enfants
        </div>
      </div>
    </section>

    <!-- SECTION CONTACT & COLLABORATION -->
    <section id="contact-terr" class="py-20 px-6 max-w-4xl mx-auto">
      <div class="bg-white rounded-2xl p-8 sm:p-12 border border-slate-300 shadow-md">
        <div class="text-center max-w-xl mx-auto mb-10">
          <span class="text-slate-500 font-extrabold text-[0.65rem] tracking-widest uppercase mb-2 block">PARTENARIAT & TERRITOIRE</span>
          <h2 class="text-3xl font-extrabold text-black tracking-tight">
            Construisons quelque chose ensemble
          </h2>
          <p class="text-slate-600 text-xs sm:text-sm mt-2">
            Déployons ensemble un dispositif adapté à vos publics et à votre territoire.
          </p>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label for="t-nom" class="block text-[0.7rem] font-bold text-black uppercase tracking-wider mb-2">Nom / Prénom *</label>
              <input id="t-nom" v-model="form.nom" type="text" required placeholder="ex: Jean Dupont" class="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3 text-sm text-black focus:bg-white focus:border-black focus:outline-none transition-all" />
            </div>
            <div>
              <label for="t-email" class="block text-[0.7rem] font-bold text-black uppercase tracking-wider mb-2">Email professionnel *</label>
              <input id="t-email" v-model="form.email" type="email" required placeholder="contact@structure.fr" class="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3 text-sm text-black focus:bg-white focus:border-black focus:outline-none transition-all" />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label for="t-structure" class="block text-[0.7rem] font-bold text-black uppercase tracking-wider mb-2">Structure / Collectivité *</label>
              <input id="t-structure" v-model="form.structure" type="text" required placeholder="ex: Mairie / CCAS / Association" class="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3 text-sm text-black focus:bg-white focus:border-black focus:outline-none transition-all" />
            </div>
            <div>
              <label for="t-public" class="block text-[0.7rem] font-bold text-black uppercase tracking-wider mb-2">Public ciblé *</label>
              <select id="t-public" v-model="form.public" required class="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3 text-sm text-black focus:bg-white focus:border-black focus:outline-none transition-all">
                <option value="" disabled>Choisir un public</option>
                <option value="Féminin">Pratique sportive féminine</option>
                <option value="Étudiants">Étudiants</option>
                <option value="Jeunes">Jeunes en décrochage</option>
                <option value="QPV">Publics issus de QPV</option>
                <option value="Seniors">Seniors</option>
                <option value="APA">Publics APA</option>
                <option value="Autre">Autre projet territorial</option>
              </select>
            </div>
          </div>

          <div>
            <label for="t-msg" class="block text-[0.7rem] font-bold text-black uppercase tracking-wider mb-2">Message & Description du projet (Optionnel)</label>
            <textarea id="t-msg" v-model="form.msg" rows="4" placeholder="Décrivez vos attentes ou les contours de la collaboration..." class="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3 text-sm text-black focus:bg-white focus:border-black focus:outline-none transition-all resize-none"></textarea>
          </div>

          <div class="text-center pt-2">
            <button type="submit" class="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-black text-white font-bold text-xs uppercase tracking-wider hover:bg-slate-800 transition-all">
              Collaborer avec nous ↗
            </button>
          </div>
        </form>

        <div v-if="submitted" class="mt-6 p-4 rounded-lg bg-slate-100 border border-slate-300 text-black text-xs font-bold text-center">
          ✓ Demande transmise avec succès ! Notre équipe territoriale prend contact avec vous sous 24h ouvrées.
        </div>
      </div>
    </section>

    <!-- FOOTER WITH PRO LEGAL LINKS -->
    <footer class="bg-white border-t border-slate-200 py-12 text-slate-500 text-xs">
      <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="flex items-center gap-3">
          <div class="w-7 h-7 rounded-md bg-black text-white font-bold flex items-center justify-center text-xs">B</div>
          <span class="font-extrabold text-black text-sm">BSD SPORT</span>
          <span>• Association loi 1901 — Grenoble & Isère</span>
        </div>

        <!-- Pro Footer Links -->
        <div class="flex flex-wrap items-center justify-center gap-6 font-semibold text-slate-700 text-xs">
          <router-link to="/mentions-legales" class="hover:text-black transition-colors underline-offset-4 hover:underline">
            Mentions légales
          </router-link>
          <router-link to="/plan-du-site" class="hover:text-black transition-colors underline-offset-4 hover:underline">
            Plan du site
          </router-link>
          <router-link to="/politique-de-confidentialite" class="hover:text-black transition-colors underline-offset-4 hover:underline">
            Politique de confidentialité
          </router-link>
          <a href="/Réglement Intérieur.pdf" target="_blank" class="hover:text-black transition-colors underline-offset-4 hover:underline">
            Règlement intérieur
          </a>
        </div>

        <div class="font-medium text-slate-400">
          © {{ new Date().getFullYear() }} BSD Sport. Tous droits réservés.
        </div>
      </div>
    </footer>

    <!-- PRO FOOTER MODAL OVERLAY -->
    <div v-if="activeModal" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div class="bg-white rounded-2xl border border-slate-300 max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[85vh] overflow-y-auto">
        <button @click="activeModal = null" class="absolute top-4 right-4 text-slate-400 hover:text-black font-bold text-lg p-2">
          ✕
        </button>

        <!-- MENTIONS LÉGALES -->
        <div v-if="activeModal === 'mentions'" class="space-y-4">
          <h3 class="text-xl font-extrabold text-black uppercase tracking-tight">Mentions Legales</h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            <strong>Éditeur du site :</strong> BSD Sport (Association loi 1901 à but non lucratif).<br>
            <strong>Siège Social :</strong> Campus Sportif, 38800 Pont-de-Claix, Isère, France.<br>
            <strong>Téléphone :</strong> 07 51 62 29 92 · 06 46 02 53 71<br>
            <strong>Email :</strong> contact@bsdsport.fr<br>
            <strong>Directeur de la publication :</strong> Équipe de Direction BSD Sport.<br>
            <strong>Hébergement :</strong> Vercel Inc., 440 N Barranca Ave #4133 Covina, CA 91723.<br>
            <strong>Propriété intellectuelle :</strong> L'ensemble des contenus, marques, logos et éléments graphiques figurant sur ce site sont la propriété exclusive de BSD Sport.
          </p>
        </div>

        <!-- PLAN DU SITE -->
        <div v-if="activeModal === 'plan'" class="space-y-4">
          <h3 class="text-xl font-extrabold text-black uppercase tracking-tight">Plan du Site</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700 font-semibold">
            <div>
              <strong class="text-black uppercase block mb-1">Espace Territoire & Social</strong>
              <ul class="space-y-1 text-slate-600">
                <li>• Accueil & Mission Territoriale</li>
                <li>• La Démarche (Sans compétition, Co-construction)</li>
                <li>• Notre Boussole (4 Axes Santé, Sport, Social, Environnement)</li>
                <li>• Nos Publics Cibles (QPV, Féminin, Seniors, APA)</li>
                <li>• Formulaire de Collaboration</li>
              </ul>
            </div>
            <div>
              <strong class="text-black uppercase block mb-1">Campus BSD Sport</strong>
              <ul class="space-y-1 text-slate-600">
                <li>• Accueil Général</li>
                <li>• Espace Entreprises B2B</li>
                <li>• Disciplines & Univers Sportifs</li>
                <li>• Partenaires institutionnels</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- POLITIQUE DE CONFIDENTIALITÉ -->
        <div v-if="activeModal === 'confidentialite'" class="space-y-4">
          <h3 class="text-xl font-extrabold text-black uppercase tracking-tight">Politique de Confidentialite</h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            <strong>Collecte des données :</strong> Les données personnelles recueillies via les formulaires de ce site (nom, prénom, email, structure, public ciblé) sont strictement destinées au traitement de vos demandes de partenariats institutionnels ou territoriaux.<br><br>
            <strong>Protection & Usage :</strong> Vos données ne sont en aucun cas vendues, louées ni transmises à des tiers à des fins commerciales.<br><br>
            <strong>Vos Droits (RGPD) :</strong> Conformément au Règlement Général sur la Protection des Données, vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles sur simple demande par email à <em>contact@bsdsport.fr</em>.
          </p>
        </div>

        <div class="mt-6 pt-4 border-t border-slate-200 text-right">
          <button @click="activeModal = null" class="px-5 py-2 rounded-lg bg-black text-white font-bold text-xs uppercase tracking-wider hover:bg-slate-800 transition-colors">
            Fermer
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const activeModal = ref(null)
const submitted = ref(false)

const form = reactive({
  nom: '',
  email: '',
  structure: '',
  public: '',
  msg: ''
})

function handleSubmit() {
  submitted.value = true
  setTimeout(() => {
    form.nom = ''
    form.email = ''
    form.structure = ''
    form.public = ''
    form.msg = ''
  }, 500)
}
</script>

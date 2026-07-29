<template>
  <div class="corporate-monochrome min-h-screen bg-white text-slate-900 font-corporate antialiased">
    <!-- Google Fonts for Minimalist Executive Typography -->
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
        
        <!-- Corporate Logo -->
        <router-link to="/" class="flex items-center gap-3 group text-decoration-none">
          <div class="w-9 h-9 rounded-lg bg-black text-white font-extrabold text-base flex items-center justify-center tracking-tighter">
            B
          </div>
          <div class="flex flex-col">
            <span class="font-extrabold text-lg tracking-tight text-black leading-none">BSDSPORT</span>
            <span class="text-[0.62rem] font-medium tracking-widest text-slate-500 uppercase mt-0.5">Espace Corporate B2B</span>
          </div>
        </router-link>

        <!-- Center Nav Links -->
        <nav class="hidden md:flex items-center gap-6 text-xs font-bold uppercase tracking-widest text-slate-600">
          <a href="#activites" class="hover:text-black transition-colors">Activités</a>
          <a href="#planning" class="hover:text-black transition-colors">Planning</a>
          <a href="#contact-b2b" class="hover:text-black transition-colors">Contact Pro</a>
        </nav>

        <!-- Right Action Buttons -->
        <div class="flex items-center gap-3">
          <router-link to="/" class="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-slate-100 border border-slate-300 text-black font-extrabold text-xs tracking-wider uppercase hover:bg-slate-200 transition-all">
            ← RETOUR AU SITE PRINCIPAL
          </router-link>
          <a href="#contact-b2b" class="hidden sm:inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-black text-white font-bold text-xs tracking-wider uppercase hover:bg-slate-800 transition-all">
            Demander un devis B2B
          </a>
        </div>

      </div>
    </header>

    <!-- HERO SECTION -->
    <section id="accueil" class="relative pt-16 pb-20 md:pt-24 md:pb-28 border-b border-slate-200 bg-slate-50/50">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <!-- Left Column Content -->
          <div class="lg:col-span-7">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-slate-200/70 border border-slate-300 text-slate-800 font-bold text-[0.7rem] tracking-widest uppercase mb-6">
              Campus multisports · Pont-de-Claix
            </div>

            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black tracking-tight leading-[1.1] mb-6">
              BSD, c'est avant tout un <span class="underline decoration-2 underline-offset-8 decoration-slate-400">créateur de lien social</span>.
            </h1>

            <div class="space-y-3 mb-8 text-base font-semibold text-slate-800">
              <div class="flex items-center gap-2"><span>→</span> Favoriser la remise en forme et la confiance en soi.</div>
              <div class="flex items-center gap-2"><span>→</span> Lutter contre l'isolement et les méfaits de la sédentarité.</div>
              <div class="flex items-center gap-2"><span>→</span> Proposer des activités diverses, accessibles à tous.</div>
            </div>

            <div class="flex flex-wrap items-center gap-4 mb-12">
              <a href="#contact-b2b" class="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-black text-white font-bold text-xs uppercase tracking-wider hover:bg-slate-800 transition-all">
                Obtenir un devis entreprise
              </a>
              <a href="#activites" class="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white border border-slate-300 text-black font-bold text-xs uppercase tracking-wider hover:bg-slate-100 transition-all">
                Découvrir les cours
              </a>
            </div>

            <!-- Key Metrics Bar Monochrome -->
            <div class="grid grid-cols-4 gap-4 pt-8 border-t border-slate-200">
              <div>
                <span class="block text-2xl sm:text-3xl font-extrabold text-black">2014</span>
                <span class="text-[0.65rem] font-bold text-slate-500 uppercase tracking-widest">Fondé en</span>
              </div>
              <div>
                <span class="block text-2xl sm:text-3xl font-extrabold text-black">6+</span>
                <span class="text-[0.65rem] font-bold text-slate-500 uppercase tracking-widest">Disciplines</span>
              </div>
              <div>
                <span class="block text-2xl sm:text-3xl font-extrabold text-black">10 ans</span>
                <span class="text-[0.65rem] font-bold text-slate-500 uppercase tracking-widest">D'expertise</span>
              </div>
              <div>
                <span class="block text-2xl sm:text-3xl font-extrabold text-black">100%</span>
                <span class="text-[0.65rem] font-bold text-slate-500 uppercase tracking-widest">Accessible à tous</span>
              </div>
            </div>

          </div>

          <!-- Right Column Showcase -->
          <div class="lg:col-span-5">
            <div class="rounded-2xl bg-white p-8 border border-slate-300 shadow-xl shadow-slate-200/50">
              <span class="px-3 py-1 rounded bg-slate-100 border border-slate-300 text-black text-[0.65rem] font-extrabold uppercase tracking-widest block w-max mb-6">
                ESPACE CORPORATE B2B
              </span>

              <h3 class="text-2xl font-extrabold text-black mb-3">Sport & Santé en Entreprise</h3>
              <p class="text-sm text-slate-600 leading-relaxed mb-6">
                Team Building sur-mesure, pauses actives, prévention des TMS et séminaires d'exception en Isère.
              </p>

              <div class="space-y-3 mb-8">
                <div class="flex items-center gap-3 text-xs font-semibold text-slate-800 bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <span class="font-bold text-black">✓</span> Éducateurs sportifs diplômés d'État
                </div>
                <div class="flex items-center gap-3 text-xs font-semibold text-slate-800 bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <span class="font-bold text-black">✓</span> Animations adaptées à tous vos salariés
                </div>
                <div class="flex items-center gap-3 text-xs font-semibold text-slate-800 bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <span class="font-bold text-black">✓</span> Devis sur-mesure garanti sous 24h
                </div>
              </div>

              <a href="#contact-b2b" class="block text-center w-full py-3 rounded-lg bg-black text-white font-bold text-xs tracking-widest uppercase hover:bg-slate-800 transition-colors">
                Obtenir un devis B2B →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- NOS ACTIVITÉS -->
    <section id="activites" class="py-20 px-6 max-w-7xl mx-auto border-b border-slate-200">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-slate-500 font-extrabold text-[0.7rem] tracking-widest uppercase mb-2 block">NOS ACTIVITÉS</span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
          Ce que nous proposons
        </h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div class="bg-white rounded-xl p-6 border border-slate-300 shadow-sm hover:border-black transition-all flex flex-col justify-between">
          <div>
            <h3 class="text-xl font-bold text-black mb-2">Cours collectifs</h3>
            <p class="text-slate-600 text-xs leading-relaxed mb-6">Step, Cross-Heat, Urban Training, Sports de combat</p>
          </div>
          <a href="#contact-b2b" class="block text-center py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-black font-bold text-xs uppercase tracking-wider transition-colors">
            Découvrir →
          </a>
        </div>

        <div class="bg-white rounded-xl p-6 border border-slate-300 shadow-sm hover:border-black transition-all flex flex-col justify-between">
          <div>
            <h3 class="text-xl font-bold text-black mb-2">Cours individuels</h3>
            <p class="text-slate-600 text-xs leading-relaxed mb-6">Coaching personnalisé adapté à vos objectifs</p>
          </div>
          <a href="#contact-b2b" class="block text-center py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-black font-bold text-xs uppercase tracking-wider transition-colors">
            Découvrir →
          </a>
        </div>

        <div class="bg-white rounded-xl p-6 border border-slate-300 shadow-sm hover:border-black transition-all flex flex-col justify-between">
          <div>
            <h3 class="text-xl font-bold text-black mb-2">Stages</h3>
            <p class="text-slate-600 text-xs leading-relaxed mb-6">Sessions intensives, Boot-Camp et séjours sportifs</p>
          </div>
          <a href="#contact-b2b" class="block text-center py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-black font-bold text-xs uppercase tracking-wider transition-colors">
            Découvrir →
          </a>
        </div>

        <div class="bg-white rounded-xl p-6 border border-slate-300 shadow-sm hover:border-black transition-all flex flex-col justify-between">
          <div>
            <h3 class="text-xl font-bold text-black mb-2">Programmes</h3>
            <p class="text-slate-600 text-xs leading-relaxed mb-6">Abonnements mensuels et programmes sur mesure</p>
          </div>
          <a href="#contact-b2b" class="block text-center py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-black font-bold text-xs uppercase tracking-wider transition-colors">
            Découvrir →
          </a>
        </div>

      </div>
    </section>

    <!-- PLANNING SECTION -->
    <section id="planning" class="py-20 px-6 max-w-7xl mx-auto border-b border-slate-200 bg-slate-50/60">
      <div class="text-center max-w-3xl mx-auto mb-12">
        <span class="text-slate-500 font-extrabold text-[0.7rem] tracking-widest uppercase mb-2 block">ORGANISATION</span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
          Consultez le planning
        </h2>
        <p class="text-slate-600 mt-3 text-sm">
          Retrouvez tous les horaires de nos cours. Les séances sont ouvertes à tous les niveaux, sans réservation obligatoire.
        </p>
      </div>

      <div class="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-300 overflow-hidden shadow-sm">
        <table class="w-full text-left text-sm">
          <thead class="bg-slate-100 border-b border-slate-200 uppercase text-xs tracking-wider text-slate-700 font-extrabold">
            <tr>
              <th class="p-4">Jour</th>
              <th class="p-4">Matin</th>
              <th class="p-4">Soir</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 font-semibold">
            <tr>
              <td class="p-4 font-bold text-black">Lundi</td>
              <td class="p-4 text-slate-700">9h00 — Cross</td>
              <td class="p-4 text-slate-700">18h30 — Step</td>
            </tr>
            <tr>
              <td class="p-4 font-bold text-black">Mardi</td>
              <td class="p-4 text-slate-700">10h00 — Step</td>
              <td class="p-4 text-slate-700">19h00 — Boxe</td>
            </tr>
            <tr>
              <td class="p-4 font-bold text-black">Mercredi</td>
              <td class="p-4 text-slate-700">9h30 — Urban</td>
              <td class="p-4 text-slate-700">18h00 — Cross</td>
            </tr>
            <tr>
              <td class="p-4 font-bold text-black">Jeudi</td>
              <td class="p-4 text-slate-700">9h00 — Step</td>
              <td class="p-4 text-slate-700">18h30 — Urban</td>
            </tr>
            <tr>
              <td class="p-4 font-bold text-black">Vendredi</td>
              <td class="p-4 text-slate-700">10h00 — Cross</td>
              <td class="p-4 text-slate-700">19h00 — Boxe</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="text-center mt-8">
        <a href="#contact-b2b" class="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-black text-white font-bold text-xs uppercase tracking-wider hover:bg-slate-800 transition-all">
          Voir le planning complet →
        </a>
      </div>
    </section>

    <!-- TARIFS / NOS FORMULES -->
    <section id="tarifs" class="py-20 px-6 max-w-7xl mx-auto border-b border-slate-200">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-slate-500 font-extrabold text-[0.7rem] tracking-widest uppercase mb-2 block">TARIFS</span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
          Nos formules
        </h2>
        <p class="text-slate-600 mt-2 text-sm">Sans engagement ou abonnement — à vous de choisir.</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div class="bg-white rounded-2xl p-8 border border-slate-300 flex flex-col justify-between hover:border-black transition-all">
          <div>
            <span class="text-[0.65rem] font-extrabold text-slate-500 tracking-widest uppercase block mb-2">SANS ENGAGEMENT</span>
            <h3 class="text-2xl font-bold text-black mb-2">À la séance</h3>
            <p class="text-slate-500 text-xs mb-6">Paiement sur place, directement au cours, aucune réservation. Idéal pour tester.</p>
          </div>
          <a href="#contact-b2b" class="block text-center py-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-black font-bold text-xs tracking-wider uppercase transition-colors">
            Se renseigner
          </a>
        </div>

        <div class="bg-black text-white rounded-2xl p-8 border-2 border-black flex flex-col justify-between relative shadow-xl">
          <span class="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white text-black text-[0.62rem] font-extrabold uppercase tracking-widest px-3.5 py-1 rounded-full border border-black shadow-sm">
            LE PLUS POPULAIRE
          </span>
          <div>
            <span class="text-[0.65rem] font-extrabold text-slate-400 tracking-widest uppercase block mb-2 mt-2">PROGRAMME</span>
            <h3 class="text-2xl font-bold text-white mb-2">Programme mensuel</h3>
            <p class="text-slate-400 text-xs mb-6">Accès illimité aux cours collectifs, suivi personnalisé, accès bibliothèque BSD, bilan mensuel inclus.</p>
          </div>
          <a href="#contact-b2b" class="block text-center py-3.5 rounded-lg bg-white text-black hover:bg-slate-200 font-bold text-xs tracking-wider uppercase transition-colors">
            Voir les prix
          </a>
        </div>

        <div class="bg-white rounded-2xl p-8 border border-slate-300 flex flex-col justify-between hover:border-black transition-all">
          <div>
            <span class="text-[0.65rem] font-extrabold text-slate-500 tracking-widest uppercase block mb-2">SUR MESURE</span>
            <h3 class="text-2xl font-bold text-black mb-2">Cours individuel</h3>
            <p class="text-slate-500 text-xs mb-6">Coaching personnalisé 1:1, programme dédié, horaires flexibles, suivi entre séances.</p>
          </div>
          <a href="#contact-b2b" class="block text-center py-3 rounded-lg bg-black text-white hover:bg-slate-800 font-bold text-xs tracking-wider uppercase transition-colors">
            Réserver
          </a>
        </div>

      </div>
    </section>

    <!-- NOTRE HISTOIRE & ÉQUIPE & PARTENAIRES -->
    <section id="histoire" class="py-20 px-6 max-w-7xl mx-auto border-b border-slate-200 bg-slate-50/60">
      <div class="text-center max-w-3xl mx-auto mb-12">
        <span class="text-slate-500 font-extrabold text-[0.7rem] tracking-widest uppercase mb-2 block">NOTRE HISTOIRE</span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-black tracking-tight mb-6">
          À propos de BSD Sport
        </h2>
        <p class="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
          Notre mission est claire : rendre le sport accessible à tous, en particulier aux publics qui en sont éloignés. À travers une offre multisports, variée et ludique, nous favorisons la découverte et l'initiation, sans recherche de performance ni de compétition.
        </p>
        <p class="text-slate-700 text-sm sm:text-base leading-relaxed">
          Au-delà du sport, nous nous définissons comme un créateur de lien social : chaque action est pensée pour renforcer les valeurs humaines, l'estime de soi et la cohésion au sein de la communauté locale.
        </p>

        <div class="flex flex-wrap items-center justify-center gap-2.5 mt-8">
          <span class="px-3.5 py-1.5 rounded-full bg-white border border-slate-300 text-xs font-bold uppercase tracking-wider text-black">Fondée en 2014</span>
          <span class="px-3.5 py-1.5 rounded-full bg-white border border-slate-300 text-xs font-bold uppercase tracking-wider text-black">Pont-de-Claix</span>
          <span class="px-3.5 py-1.5 rounded-full bg-white border border-slate-300 text-xs font-bold uppercase tracking-wider text-black">Multisports</span>
          <span class="px-3.5 py-1.5 rounded-full bg-white border border-slate-300 text-xs font-bold uppercase tracking-wider text-black">Inclusif</span>
          <span class="px-3.5 py-1.5 rounded-full bg-white border border-slate-300 text-xs font-bold uppercase tracking-wider text-black">Old school spirit</span>
        </div>
      </div>

      <!-- Notre Équipe -->
      <div class="mt-16">
        <div class="text-center max-w-xl mx-auto mb-10">
          <span class="text-slate-500 font-extrabold text-[0.7rem] tracking-widest uppercase mb-2 block">NOTRE ÉQUIPE</span>
          <h3 class="text-2xl font-extrabold text-black">Des coachs passionnés</h3>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div class="bg-white p-6 rounded-xl border border-slate-300 flex items-start gap-4">
            <div class="w-10 h-10 rounded-lg bg-black text-white font-extrabold flex items-center justify-center text-sm shrink-0">ÉS</div>
            <div>
              <h4 class="font-bold text-black text-base">Éducateurs sportifs</h4>
              <p class="text-xs text-slate-600 mt-1">Diplômés d'État, approches complémentaires</p>
            </div>
          </div>

          <div class="bg-white p-6 rounded-xl border border-slate-300 flex items-start gap-4">
            <div class="w-10 h-10 rounded-lg bg-black text-white font-extrabold flex items-center justify-center text-sm shrink-0">AM</div>
            <div>
              <h4 class="font-bold text-black text-base">Anciens militaires</h4>
              <p class="text-xs text-slate-600 mt-1">Rigueur et sport de haut niveau au service du collectif</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Partenaires -->
      <div class="mt-16 pt-12 border-t border-slate-200">
        <div class="text-center max-w-xl mx-auto mb-8">
          <span class="text-slate-500 font-extrabold text-[0.7rem] tracking-widest uppercase mb-2 block">PARTENAIRES</span>
          <h3 class="text-2xl font-extrabold text-black mb-2">Ils nous font confiance</h3>
          <p class="text-xs text-slate-600">Ville de Pont-de-Claix · Street Fight Shop · HB38 · Sportif JRH</p>
        </div>

        <div class="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          <span class="px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-xs font-bold text-black">Préfet de l'Isère</span>
          <span class="px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-xs font-bold text-black">Grenoble-Alpes Métropole</span>
          <span class="px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-xs font-bold text-black">Ville de Pont-de-Claix</span>
          <span class="px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-xs font-bold text-black">GUC Formation</span>
          <span class="px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-xs font-bold text-black">HB38</span>
          <span class="px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-xs font-bold text-black">LCmi</span>
        </div>
      </div>
    </section>

    <!-- B2B CONTACT FORM -->
    <section id="contact-b2b" class="py-20 px-6 max-w-7xl mx-auto">
      <div class="text-center max-w-3xl mx-auto mb-12">
        <span class="text-slate-500 font-extrabold text-[0.7rem] tracking-widest uppercase mb-2 block">ESPACE ENTREPRISES & B2B</span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
          Demandez Votre Étude & Devis Pro
        </h2>
        <p class="text-slate-600 mt-2 text-sm">Team Building, Pauses actives sur-mesure ou Séminaires. Notre pôle B2B dédié vous répond sous 24h ouvrées.</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
        <!-- Form Main Card -->
        <div class="lg:col-span-8 bg-white rounded-2xl p-8 sm:p-10 border border-slate-300 shadow-sm">
          <form @submit.prevent="handleSubmit" class="space-y-8">
            
            <!-- Step 1 -->
            <div>
              <div class="text-xs font-extrabold uppercase tracking-wider text-black pb-2 border-b border-slate-200 mb-4">
                1. Informations Entreprise & Contact
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label for="v-company" class="block text-[0.7rem] font-bold text-black uppercase tracking-wider mb-1.5">Raison Sociale / Entreprise *</label>
                  <input id="v-company" v-model="form.company" type="text" required placeholder="ex: Groupe Innov Isère" class="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3 text-sm text-black focus:bg-white focus:border-black focus:outline-none transition-all" />
                </div>
                <div>
                  <label for="v-name" class="block text-[0.7rem] font-bold text-black uppercase tracking-wider mb-1.5">Nom & Prénom du Responsable *</label>
                  <input id="v-name" v-model="form.name" type="text" required placeholder="ex: Alexandre Dupont (Directeur RH)" class="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3 text-sm text-black focus:bg-white focus:border-black focus:outline-none transition-all" />
                </div>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div>
                  <label for="v-email" class="block text-[0.7rem] font-bold text-black uppercase tracking-wider mb-1.5">Email Professionnel *</label>
                  <input id="v-email" v-model="form.email" type="email" required placeholder="a.dupont@entreprise.fr" class="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3 text-sm text-black focus:bg-white focus:border-black focus:outline-none transition-all" />
                </div>
                <div>
                  <label for="v-phone" class="block text-[0.7rem] font-bold text-black uppercase tracking-wider mb-1.5">Ligne Directe / Téléphone *</label>
                  <input id="v-phone" v-model="form.phone" type="tel" required placeholder="04 76 XX XX XX" class="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3 text-sm text-black focus:bg-white focus:border-black focus:outline-none transition-all" />
                </div>
              </div>
            </div>

            <!-- Step 2 -->
            <div>
              <div class="text-xs font-extrabold uppercase tracking-wider text-black pb-2 border-b border-slate-200 mb-4">
                2. Caractéristiques de votre Projet
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label for="v-size" class="block text-[0.7rem] font-bold text-black uppercase tracking-wider mb-1.5">Effectif Concerné *</label>
                  <select id="v-size" v-model="form.size" required class="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3 text-sm text-black focus:bg-white focus:border-black focus:outline-none transition-all">
                    <option value="" disabled>Sélectionner l'effectif</option>
                    <option value="5-20">5 à 20 collaborateurs</option>
                    <option value="20-50">20 à 50 collaborateurs</option>
                    <option value="50-200">50 à 200 collaborateurs</option>
                    <option value="200+">Plus de 200 collaborateurs</option>
                  </select>
                </div>
                <div>
                  <label for="v-offer" class="block text-[0.7rem] font-bold text-black uppercase tracking-wider mb-1.5">Type de Prestation *</label>
                  <select id="v-offer" v-model="form.offer" required class="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3 text-sm text-black focus:bg-white focus:border-black focus:outline-none transition-all">
                    <option value="" disabled>Choisir une prestation B2B</option>
                    <option value="Team Building">Team Building & Challenges Multisports</option>
                    <option value="Pause Active">Pauses Actives & Prévention TMS sur site</option>
                    <option value="Séminaire">Séminaire & Privatisation de complexes</option>
                    <option value="Sponsoring">Sponsoring, Mécénat & Engagement RSE</option>
                    <option value="Sur-Mesure">Projet Sur-Mesure</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- Step 3 -->
            <div>
              <div class="text-xs font-extrabold uppercase tracking-wider text-black pb-2 border-b border-slate-200 mb-4">
                3. Précisions & Cahier des Charges
              </div>
              <div>
                <label for="v-msg" class="block text-[0.7rem] font-bold text-black uppercase tracking-wider mb-1.5">Objectifs ou attentes particulières</label>
                <textarea id="v-msg" v-model="form.msg" rows="4" placeholder="Précisez le cadre de l'événement, les contraintes logistiques ou vos objectifs RH..." class="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3 text-sm text-black focus:bg-white focus:border-black focus:outline-none transition-all resize-none"></textarea>
              </div>
            </div>

            <div class="text-center pt-2">
              <button type="submit" class="w-full px-8 py-3.5 rounded-lg bg-black text-white font-bold text-xs uppercase tracking-wider hover:bg-slate-800 transition-all">
                Envoyer ma demande d'étude entreprise →
              </button>
            </div>
          </form>

          <div v-if="submitted" class="mt-6 p-4 rounded-lg bg-slate-100 border border-slate-300 text-black text-xs font-bold text-center">
            ✓ Demande enregistrée ! Notre pôle Entreprises prend contact avec vous sous 24h ouvrées.
          </div>
        </div>

        <!-- Side B2B info -->
        <div class="lg:col-span-4 space-y-6">
          <div class="bg-slate-50 p-6 rounded-2xl border border-slate-300">
            <h4 class="text-xs font-extrabold uppercase tracking-wider text-black mb-3">Pôle B2B Direct</h4>
            <div class="text-xs text-slate-700 space-y-2">
              <div><strong>Téléphone :</strong><br>07 51 62 29 92 · 06 46 02 53 71</div>
              <div><strong>Email Pro :</strong><br>b2b@bsdsport.fr</div>
            </div>
          </div>

          <div class="bg-slate-50 p-6 rounded-2xl border border-slate-300">
            <h4 class="text-xs font-extrabold uppercase tracking-wider text-black mb-3">Engagements BSD</h4>
            <ul class="text-xs text-slate-700 space-y-2 font-semibold">
              <li>• Réponse garantie sous 24h ouvrées</li>
              <li>• Devis gratuit & sans engagement</li>
              <li>• Éducateurs sportifs diplômés d'État</li>
            </ul>
          </div>

          <div class="bg-slate-50 p-6 rounded-2xl border border-slate-300">
            <h4 class="text-xs font-extrabold uppercase tracking-wider text-black mb-3">Localisation</h4>
            <p class="text-xs text-slate-700 font-semibold">
              Campus Sportif Pont-de-Claix & métropole de Grenoble (Isère - 38)
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CORPORATE FOOTER WITH PRO LEGAL & MAP LINKS -->
    <footer class="bg-white border-t border-slate-200 py-12 text-slate-500 text-xs">
      <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="flex items-center gap-3">
          <div class="w-7 h-7 rounded-md bg-black text-white font-bold flex items-center justify-center text-xs">B</div>
          <span class="font-extrabold text-black text-sm">BSDSPORT</span>
          <span>• Section Entreprises & B2B</span>
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
          <h3 class="text-xl font-extrabold text-black uppercase tracking-tight">Mentions Légales</h3>
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
              <strong class="text-black uppercase block mb-1">Campus Particuliers</strong>
              <ul class="space-y-1 text-slate-600">
                <li>• Accueil & Hero</li>
                <li>• Cours collectifs (Step, Cross-Heat, Boxe, Urban)</li>
                <li>• Coaching individuel</li>
                <li>• Stages & Boot-Camps</li>
                <li>• Horaires & Planning hebdomadaire</li>
              </ul>
            </div>
            <div>
              <strong class="text-black uppercase block mb-1">Espaces Dédiés & B2B</strong>
              <ul class="space-y-1 text-slate-600">
                <li>• Espace Entreprises B2B</li>
                <li>• Espace Territoire & Social</li>
                <li>• Tarifs & Formules</li>
                <li>• Formulaire de Devis Pro</li>
                <li>• Partenaires institutionnels</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- POLITIQUE DE CONFIDENTIALITÉ -->
        <div v-if="activeModal === 'confidentialite'" class="space-y-4">
          <h3 class="text-xl font-extrabold text-black uppercase tracking-tight">Politique de Confidentialité</h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            <strong>Collecte des données :</strong> Les données personnelles recueillies via les formulaires de ce site (nom, prénom, email, téléphone, raison sociale) sont strictement destinées au traitement de vos demandes de renseignements ou de devis B2B.<br><br>
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
  company: '',
  name: '',
  email: '',
  phone: '',
  size: '',
  offer: '',
  msg: ''
})

function handleSubmit() {
  submitted.value = true
  setTimeout(() => {
    form.company = ''
    form.name = ''
    form.email = ''
    form.phone = ''
    form.size = ''
    form.offer = ''
    form.msg = ''
  }, 500)
}
</script>

<template>
  <div class="min-h-screen bg-[#0A0E16] text-[#F1E7D0] font-sans antialiased selection:bg-[#D9A441] selection:text-black">
    <!-- Main Site Navbar Header -->
    <header class="sticky top-0 z-50 bg-[#0A0E16]/90 backdrop-blur-xl border-b border-[#F1E7D0]/15 px-6 py-4 transition-all">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <router-link to="/" class="flex items-center gap-3 text-decoration-none group">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D9A441] to-[#99732B] text-black font-black text-xl flex items-center justify-center shadow-lg shadow-[#D9A441]/20 font-heading">
            B
          </div>
          <div class="flex flex-col">
            <span class="font-black text-xl tracking-wider text-[#F1E7D0] leading-none uppercase font-heading">BSD SPORT</span>
            <span class="text-[0.6rem] font-bold tracking-widest text-[#D9A441] uppercase mt-0.5">Campus Sportif · Pont-de-Claix</span>
          </div>
        </router-link>

        <router-link to="/" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-[#F1E7D0]/30 text-[#F1E7D0] font-bold text-xs uppercase tracking-wider hover:bg-[#D9A441] hover:text-black transition-all shadow-md group">
          ← RETOUR AU SITE PRINCIPAL
        </router-link>
      </div>
    </header>

    <!-- HERO HEADER -->
    <section class="relative py-20 px-6 overflow-hidden border-b border-[#F1E7D0]/15 bg-gradient-to-b from-[#101622] to-[#0A0E16]">
      <div class="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#D9A441]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div class="max-w-4xl mx-auto text-center relative z-10">
        <span class="px-4 py-1.5 rounded-full bg-[#D9A441]/10 border border-[#D9A441]/40 text-[#D9A441] font-bold text-xs tracking-widest uppercase mb-4 inline-block">
          ★ ARBORESCENCE DU CLUB
        </span>
        <h1 class="text-4xl sm:text-6xl font-black text-[#F1E7D0] tracking-tight uppercase font-heading mb-4 leading-tight">
          Plan du Site
        </h1>
        <p class="text-sm sm:text-base text-[#F1E7D0]/70 max-w-2xl mx-auto">
          Retrouvez l'ensemble des univers athlétiques, espaces dédiés et formulaires de BSD Sport.
        </p>
      </div>
    </section>

    <!-- CONTENT BODY (GRID OF MAIN SITE FROSTED CARDS) -->
    <main class="max-w-6xl mx-auto px-6 py-16">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <!-- CARD 1: CAMPUS PARTICULIERS -->
        <div class="relative bg-[#101622]/80 backdrop-blur-md p-8 rounded-2xl border border-[#F1E7D0]/20 shadow-2xl flex flex-col justify-between group hover:border-[#D9A441]/50 transition-all">
          <div class="absolute top-3 left-3 w-2 h-2 rounded-full bg-[#D9A441]/40"></div>
          <div class="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#D9A441]/40"></div>
          <div class="absolute bottom-3 left-3 w-2 h-2 rounded-full bg-[#D9A441]/40"></div>
          <div class="absolute bottom-3 right-3 w-2 h-2 rounded-full bg-[#D9A441]/40"></div>

          <div>
            <div class="w-10 h-10 rounded-xl bg-[#D9A441] text-black font-black text-sm flex items-center justify-center font-heading mb-6">
              01
            </div>
            <h2 class="text-2xl font-black text-[#F1E7D0] uppercase tracking-wider font-heading mb-4">Campus Particuliers</h2>
            <ul class="space-y-3 text-xs font-semibold text-[#F1E7D0]/80">
              <li><router-link to="/#accueil" class="hover:text-[#D9A441] transition-colors">• Présentation & Campus Pont-de-Claix</router-link></li>
              <li><router-link to="/#terrains" class="hover:text-[#D9A441] transition-colors">• Choix des Terrains de Jeu</router-link></li>
              <li><router-link to="/#u-cross" class="hover:text-[#D9A441] transition-colors">• Univers 01 — Cross Heat</router-link></li>
              <li><router-link to="/#u-step" class="hover:text-[#D9A441] transition-colors">• Univers 02 — Stepp Training</router-link></li>
              <li><router-link to="/#u-arts" class="hover:text-[#D9A441] transition-colors">• Univers 03 — Sports de combat</router-link></li>
              <li><router-link to="/#u-omnisports" class="hover:text-[#D9A441] transition-colors">• Univers 04 — Omnisports</router-link></li>
              <li><router-link to="/#planning" class="hover:text-[#D9A441] transition-colors">• Planning Hebdomadaire</router-link></li>
              <li><router-link to="/#tarifs" class="hover:text-[#D9A441] transition-colors">• Tarifs & Formules</router-link></li>
            </ul>
          </div>
          <div class="pt-6 mt-6 border-t border-[#F1E7D0]/15">
            <router-link to="/" class="block text-center py-3 rounded-xl bg-[#D9A441] text-black font-black text-xs uppercase tracking-widest hover:bg-[#E5B555] transition-colors font-heading">
              Accéder à l'accueil →
            </router-link>
          </div>
        </div>

        <!-- CARD 2: ESPACE ENTREPRISES B2B -->
        <div class="relative bg-[#101622]/80 backdrop-blur-md p-8 rounded-2xl border border-[#F1E7D0]/20 shadow-2xl flex flex-col justify-between group hover:border-[#D9A441]/50 transition-all">
          <div class="absolute top-3 left-3 w-2 h-2 rounded-full bg-[#D9A441]/40"></div>
          <div class="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#D9A441]/40"></div>
          <div class="absolute bottom-3 left-3 w-2 h-2 rounded-full bg-[#D9A441]/40"></div>
          <div class="absolute bottom-3 right-3 w-2 h-2 rounded-full bg-[#D9A441]/40"></div>

          <div>
            <div class="w-10 h-10 rounded-xl bg-[#D9A441] text-black font-black text-sm flex items-center justify-center font-heading mb-6">
              02
            </div>
            <h2 class="text-2xl font-black text-[#F1E7D0] uppercase tracking-wider font-heading mb-4">Espace Entreprises B2B</h2>
            <ul class="space-y-3 text-xs font-semibold text-[#F1E7D0]/80">
              <li><router-link to="/entreprise#accueil" class="hover:text-[#D9A441] transition-colors">• Accueil B2B & Chiffres Clés</router-link></li>
              <li><router-link to="/entreprise#activites" class="hover:text-[#D9A441] transition-colors">• Prestations & Team Building</router-link></li>
              <li><router-link to="/entreprise#planning" class="hover:text-[#D9A441] transition-colors">• Organisation & Pauses Actives</router-link></li>
              <li><router-link to="/entreprise#tarifs" class="hover:text-[#D9A441] transition-colors">• Offres & Formules Entreprise</router-link></li>
              <li><router-link to="/entreprise#histoire" class="hover:text-[#D9A441] transition-colors">• Équipe d'Éducateurs Diplômés</router-link></li>
              <li><router-link to="/entreprise#contact-b2b" class="hover:text-[#D9A441] transition-colors">• Devis Pro Garantie 24h</router-link></li>
            </ul>
          </div>
          <div class="pt-6 mt-6 border-t border-[#F1E7D0]/15">
            <router-link to="/entreprise" class="block text-center py-3 rounded-xl bg-[#D9A441] text-black font-black text-xs uppercase tracking-widest hover:bg-[#E5B555] transition-colors font-heading">
              Accéder à l'espace B2B →
            </router-link>
          </div>
        </div>

        <!-- CARD 3: TERRITOIRE & SOCIAL -->
        <div class="relative bg-[#101622]/80 backdrop-blur-md p-8 rounded-2xl border border-[#F1E7D0]/20 shadow-2xl flex flex-col justify-between group hover:border-[#D9A441]/50 transition-all">
          <div class="absolute top-3 left-3 w-2 h-2 rounded-full bg-[#D9A441]/40"></div>
          <div class="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#D9A441]/40"></div>
          <div class="absolute bottom-3 left-3 w-2 h-2 rounded-full bg-[#D9A441]/40"></div>
          <div class="absolute bottom-3 right-3 w-2 h-2 rounded-full bg-[#D9A441]/40"></div>

          <div>
            <div class="w-10 h-10 rounded-xl bg-[#D9A441] text-black font-black text-sm flex items-center justify-center font-heading mb-6">
              03
            </div>
            <h2 class="text-2xl font-black text-[#F1E7D0] uppercase tracking-wider font-heading mb-4">Territoire & Social</h2>
            <ul class="space-y-3 text-xs font-semibold text-[#F1E7D0]/80">
              <li><router-link to="/territoire#accueil" class="hover:text-[#D9A441] transition-colors">• Mission & Ancrage Isère</router-link></li>
              <li><router-link to="/territoire#demarche" class="hover:text-[#D9A441] transition-colors">• La Démarche (Sans compétition)</router-link></li>
              <li><router-link to="/territoire#boussole" class="hover:text-[#D9A441] transition-colors">• 4 Axes (Santé, Sport, Social, Environnement)</router-link></li>
              <li><router-link to="/territoire#publics" class="hover:text-[#D9A441] transition-colors">• 9 Publics Cibles (QPV, Féminin, Seniors, APA)</router-link></li>
              <li><router-link to="/territoire#contact-terr" class="hover:text-[#D9A441] transition-colors">• Partenariats Institutionnels</router-link></li>
            </ul>
          </div>
          <div class="pt-6 mt-6 border-t border-[#F1E7D0]/15">
            <router-link to="/territoire" class="block text-center py-3 rounded-xl bg-[#D9A441] text-black font-black text-xs uppercase tracking-widest hover:bg-[#E5B555] transition-colors font-heading">
              Accéder à l'espace Territoire →
            </router-link>
          </div>
        </div>

      </div>

      <!-- BOTTOM SUPPORT BAR -->
      <div class="mt-12 bg-[#101622]/80 backdrop-blur-md rounded-2xl p-8 border border-[#F1E7D0]/20 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 class="font-black text-[#F1E7D0] text-lg uppercase tracking-wider font-heading">Informations Légales & RGPD</h3>
          <p class="text-xs text-[#F1E7D0]/70 mt-1">Consultez le cadre juridique et nos engagements de confidentialité.</p>
        </div>
        <div class="flex items-center gap-4">
          <router-link to="/mentions-legales" class="px-5 py-2.5 rounded-xl bg-white/5 border border-[#F1E7D0]/30 text-[#F1E7D0] font-bold text-xs uppercase tracking-wider hover:bg-[#D9A441] hover:text-black transition-all">
            Mentions Légales
          </router-link>
          <router-link to="/politique-de-confidentialite" class="px-5 py-2.5 rounded-xl bg-[#D9A441] text-black font-black text-xs uppercase tracking-wider hover:bg-[#E5B555] transition-all font-heading">
            Confidentialité
          </router-link>
        </div>
      </div>
    </main>

    <!-- MAIN SITE FOOTER -->
    <footer class="border-t border-[#F1E7D0]/15 py-12 px-6 bg-[#0A0E16] text-[#F1E7D0]/70 text-xs">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="flex items-center gap-3">
          <div class="w-7 h-7 rounded-lg bg-[#D9A441] text-black font-black flex items-center justify-center text-xs font-heading">B</div>
          <span class="font-black text-[#F1E7D0] text-sm font-heading tracking-wider">BSD SPORT</span>
          <span>• Plan du Site</span>
        </div>

        <div class="flex items-center gap-6 font-bold">
          <router-link to="/mentions-legales" class="hover:text-[#D9A441] transition-colors">Mentions légales</router-link>
          <router-link to="/politique-de-confidentialite" class="hover:text-[#D9A441] transition-colors">Politique de confidentialité</router-link>
        </div>

        <div>
          © {{ new Date().getFullYear() }} BSD Sport. Tous droits réservés.
        </div>
      </div>
    </footer>
  </div>
</template>

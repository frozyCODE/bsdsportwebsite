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
          ★ CONFORMITÉ RGPD & PRIVACY
        </span>
        <h1 class="text-4xl sm:text-6xl font-black text-[#F1E7D0] tracking-tight uppercase font-heading mb-4 leading-tight">
          Politique de Confidentialité
        </h1>
        <p class="text-sm sm:text-base text-[#F1E7D0]/70 max-w-2xl mx-auto">
          Découvrez nos engagements en matière de protection, de traitement et de respect de vos données personnelles.
        </p>
      </div>
    </section>

    <!-- CONTENT BODY (MAIN SITE FROSTED CARDS) -->
    <main class="max-w-4xl mx-auto px-6 py-16 space-y-10">
      
      <!-- 01. ENGAGEMENT RGPD -->
      <div class="relative bg-[#101622]/80 backdrop-blur-md p-8 rounded-2xl border border-[#F1E7D0]/20 shadow-2xl space-y-4 group hover:border-[#D9A441]/50 transition-all">
        <div class="absolute top-3 left-3 w-2 h-2 rounded-full bg-[#D9A441]/40"></div>
        <div class="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#D9A441]/40"></div>
        <div class="absolute bottom-3 left-3 w-2 h-2 rounded-full bg-[#D9A441]/40"></div>
        <div class="absolute bottom-3 right-3 w-2 h-2 rounded-full bg-[#D9A441]/40"></div>

        <div class="flex items-center gap-4 pb-4 border-b border-[#F1E7D0]/15">
          <div class="w-9 h-9 rounded-lg bg-[#D9A441] text-black font-black text-sm flex items-center justify-center font-heading">
            01
          </div>
          <h2 class="text-2xl font-black text-[#F1E7D0] uppercase tracking-wider font-heading">Engagement RGPD & Responsable de Traitement</h2>
        </div>
        <div class="text-sm text-[#F1E7D0]/80 leading-relaxed space-y-3">
          <p>
            BSD Sport s'engage à respecter la vie privée des utilisateurs et à se conformer au Règlement Général sur la Protection des Données (RGPD n° 2016/679) et à la loi Informatique et Libertés.
          </p>
          <p>
            <strong class="text-white">Responsable de traitement :</strong> BSD SPORT (Association loi 1901), Campus Sportif, 38800 Pont-de-Claix. Contact : <a href="mailto:contact@bsdsport.fr" class="text-[#D9A441] font-bold underline">contact@bsdsport.fr</a>.
          </p>
        </div>
      </div>

      <!-- 02. DONNÉES COLLECTÉES -->
      <div class="relative bg-[#101622]/80 backdrop-blur-md p-8 rounded-2xl border border-[#F1E7D0]/20 shadow-2xl space-y-4 group hover:border-[#D9A441]/50 transition-all">
        <div class="absolute top-3 left-3 w-2 h-2 rounded-full bg-[#D9A441]/40"></div>
        <div class="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#D9A441]/40"></div>
        <div class="absolute bottom-3 left-3 w-2 h-2 rounded-full bg-[#D9A441]/40"></div>
        <div class="absolute bottom-3 right-3 w-2 h-2 rounded-full bg-[#D9A441]/40"></div>

        <div class="flex items-center gap-4 pb-4 border-b border-[#F1E7D0]/15">
          <div class="w-9 h-9 rounded-lg bg-[#D9A441] text-black font-black text-sm flex items-center justify-center font-heading">
            02
          </div>
          <h2 class="text-2xl font-black text-[#F1E7D0] uppercase tracking-wider font-heading">Donnees Collectees & Finalites</h2>
        </div>
        <div class="text-sm text-[#F1E7D0]/80 leading-relaxed space-y-3">
          <p>Les informations personnelles recueillies sur le site sont :</p>
          <ul class="list-disc pl-5 space-y-1 font-semibold text-white">
            <li>Nom & Prénom</li>
            <li>Email professionnel & téléphone</li>
            <li>Raison sociale (Entreprise / Collectivité)</li>
            <li>Message et besoins transmis via nos formulaires</li>
          </ul>
          <p>
            <strong class="text-white">Finalités :</strong> Ces données servent uniquement à répondre à vos demandes de renseignements ou à vos devis d'entreprise.
          </p>
        </div>
      </div>

      <!-- 03. SÉCURITÉ & NON CESSION -->
      <div class="relative bg-[#101622]/80 backdrop-blur-md p-8 rounded-2xl border border-[#F1E7D0]/20 shadow-2xl space-y-4 group hover:border-[#D9A441]/50 transition-all">
        <div class="absolute top-3 left-3 w-2 h-2 rounded-full bg-[#D9A441]/40"></div>
        <div class="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#D9A441]/40"></div>
        <div class="absolute bottom-3 left-3 w-2 h-2 rounded-full bg-[#D9A441]/40"></div>
        <div class="absolute bottom-3 right-3 w-2 h-2 rounded-full bg-[#D9A441]/40"></div>

        <div class="flex items-center gap-4 pb-4 border-b border-[#F1E7D0]/15">
          <div class="w-9 h-9 rounded-lg bg-[#D9A441] text-black font-black text-sm flex items-center justify-center font-heading">
            03
          </div>
          <h2 class="text-2xl font-black text-[#F1E7D0] uppercase tracking-wider font-heading">Conservation, Securite & Non-Cession</h2>
        </div>
        <div class="text-sm text-[#F1E7D0]/80 leading-relaxed space-y-3">
          <p>
            <strong class="text-white">Non-cession :</strong> Vos données ne sont en aucun cas cédées, vendues ou louées à des tiers.
          </p>
          <p>
            <strong class="text-white">Conservation :</strong> Conservation limitée à 3 ans à compter du dernier contact.
          </p>
        </div>
      </div>

      <!-- 04. VOS DROITS -->
      <div class="relative bg-[#101622]/80 backdrop-blur-md p-8 rounded-2xl border border-[#F1E7D0]/20 shadow-2xl space-y-4 group hover:border-[#D9A441]/50 transition-all">
        <div class="absolute top-3 left-3 w-2 h-2 rounded-full bg-[#D9A441]/40"></div>
        <div class="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#D9A441]/40"></div>
        <div class="absolute bottom-3 left-3 w-2 h-2 rounded-full bg-[#D9A441]/40"></div>
        <div class="absolute bottom-3 right-3 w-2 h-2 rounded-full bg-[#D9A441]/40"></div>

        <div class="flex items-center gap-4 pb-4 border-b border-[#F1E7D0]/15">
          <div class="w-9 h-9 rounded-lg bg-[#D9A441] text-black font-black text-sm flex items-center justify-center font-heading">
            04
          </div>
          <h2 class="text-2xl font-black text-[#F1E7D0] uppercase tracking-wider font-heading">Vos Droits (Acces & Suppression)</h2>
        </div>
        <div class="text-sm text-[#F1E7D0]/80 leading-relaxed space-y-3">
          <p>
            Vous disposez d'un droit d'accès, de rectification et de suppression de vos données sur simple demande par email à : <a href="mailto:contact@bsdsport.fr" class="text-[#D9A441] font-bold underline">contact@bsdsport.fr</a>.
          </p>
        </div>
      </div>

    </main>

    <!-- MAIN SITE FOOTER -->
    <footer class="border-t border-[#F1E7D0]/15 py-12 px-6 bg-[#0A0E16] text-[#F1E7D0]/70 text-xs">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="flex items-center gap-3">
          <div class="w-7 h-7 rounded-lg bg-[#D9A441] text-black font-black flex items-center justify-center text-xs font-heading">B</div>
          <span class="font-black text-[#F1E7D0] text-sm font-heading tracking-wider">BSD SPORT</span>
          <span>• Politique de Confidentialité</span>
        </div>

        <div class="flex flex-wrap items-center justify-center gap-6 font-bold">
          <router-link to="/mentions-legales" class="hover:text-[#D9A441] transition-colors">Mentions légales</router-link>
          <router-link to="/plan-du-site" class="hover:text-[#D9A441] transition-colors">Plan du site</router-link>
          <a href="/Réglement Intérieur.pdf" target="_blank" class="hover:text-[#D9A441] transition-colors">Règlement intérieur</a>
        </div>

        <div>
          © {{ new Date().getFullYear() }} BSD Sport. Tous droits réservés.
        </div>
      </div>
    </footer>
  </div>
</template>

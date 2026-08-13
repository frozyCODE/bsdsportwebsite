<template>
  <div class="min-h-screen bg-[#0d0d0d] text-[#F1E7D0] font-body relative overflow-x-hidden selection:bg-[#ff7043] selection:text-black">
    <!-- Navbar Site Officiel BSD -->
    <NavbarHeader />

    <!-- Texture de Grain Argentique Signature -->
    <div 
      class="fixed inset-0 z-0 opacity-35 mix-blend-overlay pointer-events-none bg-repeat"
      style="background-image: url('data:image/svg+xml,%3Csvg width=\'256\' height=\'256\' viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'heavyGrain\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.95\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23heavyGrain)\'/%3E%3C/svg%3E');"
      aria-hidden="true"
    ></div>

    <!-- Logo BSD Filigrane Géant Rotatif en Fond -->
    <div class="fixed top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] sm:w-[1600px] lg:w-[2200px] max-w-none pointer-events-none overflow-hidden z-0 opacity-[0.03] select-none" aria-hidden="true">
      <img 
        src="/BSD LOGO PNG.png" 
        alt="" 
        class="w-full h-auto grayscale brightness-150 contrast-125 object-contain select-none transform rotate-6"
      />
    </div>

    <!-- HEADER HERO -->
    <section class="relative pt-32 sm:pt-44 pb-16 sm:pb-24 px-4 sm:px-8 max-w-4xl mx-auto text-center z-10">
      <!-- Pill Tag (Sans accent pour Akira) -->
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111111] border border-white/15 text-white/80 font-display text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-6 shadow-sm">
        <span>ARBORESCENCE DU CLUB</span>
      </div>

      <!-- Titre principal en Akira (SANS ACCENTS) -->
      <h1 class="font-display text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white mb-6 leading-none">
        PLAN DU <span class="text-[#ff7043]">SITE</span>
      </h1>

      <p class="text-xs sm:text-base text-white/60 font-body max-w-xl mx-auto mb-10 leading-relaxed">
        Retrouvez l'ensemble des univers athlétiques, espaces dédiés et formulaires de BSD Sport.
      </p>

      <div class="flex justify-center">
        <router-link 
          to="/" 
          class="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#ff7043] hover:bg-white text-black font-display text-xs tracking-wider uppercase shadow-xl transition-all duration-300 group"
        >
          <svg class="w-4 h-4 transition-transform group-hover:-translate-x-1 stroke-current" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          <span>RETOUR AU SITE PRINCIPAL</span>
        </router-link>
      </div>
    </section>

    <!-- CONTENT BODY : DESIGN AÉRÉ & ÉDITORIAL (SANS BLOCS LOURDS) -->
    <main class="relative z-10 max-w-3xl mx-auto px-6 sm:px-8 pb-24 space-y-16 sm:space-y-20">

      <!-- 01. CAMPUS PARTICULIERS -->
      <section class="border-b border-white/10 pb-12 sm:pb-16 space-y-6">
        <div class="flex items-center gap-3">
          <span class="text-[#ff7043] font-display text-xs tracking-widest uppercase">01</span>
          <span class="w-8 h-[1px] bg-[#ff7043]"></span>
          <h2 class="font-display text-xl sm:text-3xl uppercase text-white tracking-tight leading-none">
            CAMPUS PARTICULIERS
          </h2>
        </div>

        <ul class="space-y-3.5 text-sm sm:text-base text-white/80 font-body pl-2 sm:pl-4">
          <li class="py-1 border-b border-white/5 flex items-center justify-between">
            <router-link to="/#accueil" class="hover:text-[#ff7043] transition-colors flex items-center gap-2">
              <span class="text-[#ff7043] font-bold">→</span> Présentation & Campus Pont-de-Claix
            </router-link>
          </li>
          <li class="py-1 border-b border-white/5 flex items-center justify-between">
            <router-link to="/#terrains" class="hover:text-[#ff7043] transition-colors flex items-center gap-2">
              <span class="text-[#ff7043] font-bold">→</span> Sélectionner votre profil & Terrains de jeu
            </router-link>
          </li>
          <li class="py-1 border-b border-white/5 flex items-center justify-between">
            <router-link to="/particuliers" class="hover:text-[#ff7043] transition-colors flex items-center gap-2 font-semibold text-white">
              <span class="text-[#ff7043] font-bold">→</span> Espace Dédié Particuliers & Athlètes
            </router-link>
          </li>
          <li class="py-1 border-b border-white/5 flex items-center justify-between">
            <router-link to="/#u-cross" class="hover:text-[#ff7043] transition-colors flex items-center gap-2">
              <span class="text-[#ff7043] font-bold">→</span> Univers 01 — Cross Heat
            </router-link>
          </li>
          <li class="py-1 border-b border-white/5 flex items-center justify-between">
            <router-link to="/#u-step" class="hover:text-[#ff7043] transition-colors flex items-center gap-2">
              <span class="text-[#ff7043] font-bold">→</span> Univers 02 — Stepp Training
            </router-link>
          </li>
          <li class="py-1 border-b border-white/5 flex items-center justify-between">
            <router-link to="/#u-arts" class="hover:text-[#ff7043] transition-colors flex items-center gap-2">
              <span class="text-[#ff7043] font-bold">→</span> Univers 03 — Sports de combat
            </router-link>
          </li>
          <li class="py-1 border-b border-white/5 flex items-center justify-between">
            <router-link to="/#u-omnisports" class="hover:text-[#ff7043] transition-colors flex items-center gap-2">
              <span class="text-[#ff7043] font-bold">→</span> Univers 04 — Omnisports
            </router-link>
          </li>
          <li class="py-1 border-b border-white/5 flex items-center justify-between">
            <router-link to="/faq" class="hover:text-[#ff7043] transition-colors flex items-center gap-2">
              <span class="text-[#ff7043] font-bold">→</span> Foire aux Questions (FAQ)
            </router-link>
          </li>
        </ul>
      </section>

      <!-- 02. ESPACE ENTREPRISES B2B -->
      <section class="border-b border-white/10 pb-12 sm:pb-16 space-y-6">
        <div class="flex items-center gap-3">
          <span class="text-[#ff7043] font-display text-xs tracking-widest uppercase">02</span>
          <span class="w-8 h-[1px] bg-[#ff7043]"></span>
          <h2 class="font-display text-xl sm:text-3xl uppercase text-white tracking-tight leading-none">
            ESPACE ENTREPRISES B2B
          </h2>
        </div>

        <ul class="space-y-3.5 text-sm sm:text-base text-white/80 font-body pl-2 sm:pl-4">
          <li class="py-1 border-b border-white/5 flex items-center justify-between">
            <router-link to="/entreprise#accueil" class="hover:text-[#ff7043] transition-colors flex items-center gap-2">
              <span class="text-[#ff7043] font-bold">→</span> Accueil B2B & Chiffres Clés
            </router-link>
          </li>
          <li class="py-1 border-b border-white/5 flex items-center justify-between">
            <router-link to="/entreprise#activites" class="hover:text-[#ff7043] transition-colors flex items-center gap-2">
              <span class="text-[#ff7043] font-bold">→</span> Prestations & Team Building
            </router-link>
          </li>
          <li class="py-1 border-b border-white/5 flex items-center justify-between">
            <router-link to="/entreprise#planning" class="hover:text-[#ff7043] transition-colors flex items-center gap-2">
              <span class="text-[#ff7043] font-bold">→</span> Organisation & Pauses Actives
            </router-link>
          </li>
          <li class="py-1 border-b border-white/5 flex items-center justify-between">
            <router-link to="/entreprise#tarifs" class="hover:text-[#ff7043] transition-colors flex items-center gap-2">
              <span class="text-[#ff7043] font-bold">→</span> Offres & Formules Entreprise
            </router-link>
          </li>
          <li class="py-1 border-b border-white/5 flex items-center justify-between">
            <router-link to="/entreprise#contact-b2b" class="hover:text-[#ff7043] transition-colors flex items-center gap-2 font-semibold text-white">
              <span class="text-[#ff7043] font-bold">→</span> Devis Sur-Mesure Entreprise
            </router-link>
          </li>
        </ul>
      </section>

      <!-- 03. TERRITOIRE ET SOCIAL -->
      <section class="border-b border-white/10 pb-12 sm:pb-16 space-y-6">
        <div class="flex items-center gap-3">
          <span class="text-[#ff7043] font-display text-xs tracking-widest uppercase">03</span>
          <span class="w-8 h-[1px] bg-[#ff7043]"></span>
          <h2 class="font-display text-xl sm:text-3xl uppercase text-white tracking-tight leading-none">
            TERRITOIRE ET SOCIAL
          </h2>
        </div>

        <ul class="space-y-3.5 text-sm sm:text-base text-white/80 font-body pl-2 sm:pl-4">
          <li class="py-1 border-b border-white/5 flex items-center justify-between">
            <router-link to="/territoire#accueil" class="hover:text-[#ff7043] transition-colors flex items-center gap-2">
              <span class="text-[#ff7043] font-bold">→</span> Mission & Ancrage Isère
            </router-link>
          </li>
          <li class="py-1 border-b border-white/5 flex items-center justify-between">
            <router-link to="/territoire#demarche" class="hover:text-[#ff7043] transition-colors flex items-center gap-2">
              <span class="text-[#ff7043] font-bold">→</span> La Démarche (Sans compétition)
            </router-link>
          </li>
          <li class="py-1 border-b border-white/5 flex items-center justify-between">
            <router-link to="/territoire#boussole" class="hover:text-[#ff7043] transition-colors flex items-center gap-2">
              <span class="text-[#ff7043] font-bold">→</span> 4 Axes (Santé, Sport, Social, Environnement)
            </router-link>
          </li>
          <li class="py-1 border-b border-white/5 flex items-center justify-between">
            <router-link to="/territoire#publics" class="hover:text-[#ff7043] transition-colors flex items-center gap-2">
              <span class="text-[#ff7043] font-bold">→</span> Publics Cibles (QPV, Féminin, Seniors, APA)
            </router-link>
          </li>
          <li class="py-1 border-b border-white/5 flex items-center justify-between">
            <router-link to="/territoire#contact-terr" class="hover:text-[#ff7043] transition-colors flex items-center gap-2 font-semibold text-white">
              <span class="text-[#ff7043] font-bold">→</span> Partenariats Institutionnels
            </router-link>
          </li>
        </ul>
      </section>

      <!-- 04. INFORMATIONS LEGALES ET RGPD -->
      <section class="space-y-6">
        <div class="flex items-center gap-3">
          <span class="text-[#ff7043] font-display text-xs tracking-widest uppercase">04</span>
          <span class="w-8 h-[1px] bg-[#ff7043]"></span>
          <h2 class="font-display text-xl sm:text-3xl uppercase text-white tracking-tight leading-none">
            INFORMATIONS LEGALES ET RGPD
          </h2>
        </div>

        <div class="flex flex-wrap gap-4 pl-2 sm:pl-4 pt-2">
          <router-link to="/mentions-legales" class="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 hover:bg-[#ff7043] border border-white/20 hover:border-[#ff7043] text-white hover:text-black font-display text-xs uppercase tracking-wider transition-all duration-300">
            Mentions Légales →
          </router-link>

          <router-link to="/politique-de-confidentialite" class="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#ff7043] hover:bg-white text-black font-display text-xs uppercase tracking-wider shadow-xl transition-all duration-300">
            Politique de Confidentialité →
          </router-link>

          <a href="/reglement-interieur.pdf" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/20 text-white font-display text-xs uppercase tracking-wider transition-all duration-300">
            Règlement Intérieur (PDF) ↗
          </a>
        </div>
      </section>

    </main>

    <!-- FOOTER UNIVERSAL -->
    <SiteFooter />
  </div>
</template>

<script setup>
import NavbarHeader from '@/components/common/NavbarHeader.vue'
import SiteFooter from '@/components/common/SiteFooter.vue'
</script>

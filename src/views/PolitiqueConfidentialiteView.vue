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
        <span>CONFORMITE RGPD ET RESPECT DE LA VIE PRIVEE</span>
      </div>

      <!-- Titre principal en Akira (SANS ACCENTS) -->
      <h1 class="font-display text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white mb-6 leading-none">
        POLITIQUE DE <span class="text-[#ff7043]">CONFIDENTIALITE</span>
      </h1>

      <p class="text-xs sm:text-base text-white/60 font-body max-w-xl mx-auto mb-10 leading-relaxed">
        Découvrez nos engagements en matière de protection, de traitement et de respect de vos données personnelles.
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

    <!-- CONTENT BODY : DESIGN AÉRÉ, ÉLÉGANT & ÉDITORIAL (SANS BLOCS LOURDS) -->
    <main class="relative z-10 max-w-3xl mx-auto px-6 sm:px-8 pb-24 space-y-16 sm:space-y-20">

      <!-- 01. ENGAGEMENT RGPD -->
      <section class="border-b border-white/10 pb-12 sm:pb-16 space-y-6">
        <div class="flex items-center gap-3">
          <span class="text-[#ff7043] font-display text-xs tracking-widest uppercase">01</span>
          <span class="w-8 h-[1px] bg-[#ff7043]"></span>
          <h2 class="font-display text-xl sm:text-3xl uppercase text-white tracking-tight leading-none">
            ENGAGEMENT RGPD ET RESPONSABLE DE TRAITEMENT
          </h2>
        </div>

        <div class="space-y-4 text-sm sm:text-base text-white/75 font-body leading-relaxed pl-2 sm:pl-4">
          <p>
            BSD Sport s'engage à respecter la vie privée des utilisateurs et à se conformer au Règlement Général sur la Protection des Données (RGPD n° 2016/679) et à la loi Informatique et Libertés.
          </p>
          <p>
            <strong class="text-white font-semibold">Responsable de traitement :</strong> BSD SPORT (Association loi 1901), Campus Sportif, 38800 Pont-de-Claix. Contact : <a href="mailto:contactbsdsport@gmail.com" class="text-[#ff7043] hover:underline font-medium">contactbsdsport@gmail.com</a>.
          </p>
        </div>
      </section>

      <!-- 02. DONNÉES COLLECTÉES -->
      <section class="border-b border-white/10 pb-12 sm:pb-16 space-y-6">
        <div class="flex items-center gap-3">
          <span class="text-[#ff7043] font-display text-xs tracking-widest uppercase">02</span>
          <span class="w-8 h-[1px] bg-[#ff7043]"></span>
          <h2 class="font-display text-xl sm:text-3xl uppercase text-white tracking-tight leading-none">
            DONNEES COLLECTEES ET FINALITES
          </h2>
        </div>

        <div class="space-y-4 text-sm sm:text-base text-white/75 font-body leading-relaxed pl-2 sm:pl-4">
          <p>Les informations personnelles recueillies sur le site sont notamment :</p>
          <ul class="list-disc pl-5 space-y-2 font-semibold text-white">
            <li>Nom & Prénom</li>
            <li>Email professionnel & téléphone</li>
            <li>Raison sociale (Entreprise / Collectivité)</li>
            <li>Message et besoins transmis via nos formulaires de contact</li>
          </ul>
          <p>
            <strong class="text-white font-semibold">Finalités :</strong> Ces données servent uniquement à répondre à vos demandes de renseignements, inscriptions ou demandes de devis.
          </p>
        </div>
      </section>

      <!-- 03. CONSERVATION ET NON-CESSION -->
      <section class="border-b border-white/10 pb-12 sm:pb-16 space-y-6">
        <div class="flex items-center gap-3">
          <span class="text-[#ff7043] font-display text-xs tracking-widest uppercase">03</span>
          <span class="w-8 h-[1px] bg-[#ff7043]"></span>
          <h2 class="font-display text-xl sm:text-3xl uppercase text-white tracking-tight leading-none">
            CONSERVATION, SECURITE ET NON-CESSION
          </h2>
        </div>

        <div class="space-y-4 text-sm sm:text-base text-white/75 font-body leading-relaxed pl-2 sm:pl-4">
          <p>
            <strong class="text-white font-semibold">Non-cession :</strong> Vos données ne sont en aucun cas cédées, vendues, louées ou transmises à des tiers à des fins commerciales.
          </p>
          <p>
            <strong class="text-white font-semibold">Conservation :</strong> Les données sont conservées pour une durée maximale de 3 ans à compter du dernier contact avec l'utilisateur.
          </p>
        </div>
      </section>

      <!-- 04. VOS DROITS -->
      <section class="space-y-6">
        <div class="flex items-center gap-3">
          <span class="text-[#ff7043] font-display text-xs tracking-widest uppercase">04</span>
          <span class="w-8 h-[1px] bg-[#ff7043]"></span>
          <h2 class="font-display text-xl sm:text-3xl uppercase text-white tracking-tight leading-none">
            VOS DROITS (ACCES ET SUPPRESSION)
          </h2>
        </div>

        <div class="space-y-4 text-sm sm:text-base text-white/75 font-body leading-relaxed pl-2 sm:pl-4">
          <p>
            Conformément à la réglementation en vigueur, vous disposez d'un droit d'accès, de rectification, d'effacement et de portabilité de vos données personnelles, ainsi que du droit de vous opposer au traitement.
          </p>
          <p>
            Pour exercer ces droits, il vous suffit de nous adresser un message par courrier électronique à : <a href="mailto:contactbsdsport@gmail.com" class="text-[#ff7043] hover:underline font-medium">contactbsdsport@gmail.com</a>.
          </p>
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

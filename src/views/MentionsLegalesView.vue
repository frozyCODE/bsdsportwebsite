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
        <span>CADRE JURIDIQUE OFFICIEL</span>
      </div>

      <!-- Titre principal en Akira (SANS ACCENTS) -->
      <h1 class="font-display text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white mb-6 leading-none">
        MENTIONS <span class="text-[#ff7043]">LEGALES</span>
      </h1>

      <p class="text-xs sm:text-base text-white/60 font-body max-w-xl mx-auto mb-10 leading-relaxed">
        Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique (LCEN).
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

      <!-- 01. EDITEUR DU SITE -->
      <section class="border-b border-white/10 pb-12 sm:pb-16 space-y-6">
        <div class="flex items-center gap-3">
          <span class="text-[#ff7043] font-display text-xs tracking-widest uppercase">01</span>
          <span class="w-8 h-[1px] bg-[#ff7043]"></span>
          <h2 class="font-display text-xl sm:text-3xl uppercase text-white tracking-tight leading-none">
            EDITEUR DU SITE
          </h2>
        </div>

        <div class="space-y-4 text-sm sm:text-base text-white/80 font-body leading-relaxed pl-2 sm:pl-4">
          <div class="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 py-2 border-b border-white/5">
            <span class="text-xs uppercase tracking-wider text-white/40 font-display min-w-[200px]">Denomination sociale</span>
            <span class="text-white font-medium">BSD SPORT (Association Loi 1901)</span>
          </div>

          <div class="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 py-2 border-b border-white/5">
            <span class="text-xs uppercase tracking-wider text-white/40 font-display min-w-[200px]">Siege social</span>
            <span class="text-white font-medium">Campus Sportif, 38800 Pont-de-Claix, Isère</span>
          </div>

          <div class="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 py-2 border-b border-white/5">
            <span class="text-xs uppercase tracking-wider text-white/40 font-display min-w-[200px]">Telephones Club</span>
            <span class="text-white font-medium">07 51 62 29 92 / 06 46 02 53 71</span>
          </div>

          <div class="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 py-2 border-b border-white/5">
            <span class="text-xs uppercase tracking-wider text-white/40 font-display min-w-[200px]">Courrier Electronique</span>
            <a href="mailto:contactbsdsport@gmail.com" class="text-[#ff7043] font-medium hover:underline">contactbsdsport@gmail.com</a>
          </div>

          <div class="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 py-2">
            <span class="text-xs uppercase tracking-wider text-white/40 font-display min-w-[200px]">Directeur de publication</span>
            <span class="text-white font-medium">Équipe de Direction BSD Sport</span>
          </div>
        </div>
      </section>

      <!-- 02. HEBERGEMENT DU SITE -->
      <section class="border-b border-white/10 pb-12 sm:pb-16 space-y-6">
        <div class="flex items-center gap-3">
          <span class="text-[#ff7043] font-display text-xs tracking-widest uppercase">02</span>
          <span class="w-8 h-[1px] bg-[#ff7043]"></span>
          <h2 class="font-display text-xl sm:text-3xl uppercase text-white tracking-tight leading-none">
            HEBERGEMENT DU SITE
          </h2>
        </div>

        <div class="space-y-4 text-sm sm:text-base text-white/80 font-body leading-relaxed pl-2 sm:pl-4">
          <div class="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 py-2 border-b border-white/5">
            <span class="text-xs uppercase tracking-wider text-white/40 font-display min-w-[200px]">Hebergeur officiel</span>
            <span class="text-white font-medium">Vercel Inc.</span>
          </div>

          <div class="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 py-2 border-b border-white/5">
            <span class="text-xs uppercase tracking-wider text-white/40 font-display min-w-[200px]">Adresse hebergeur</span>
            <span class="text-white font-medium">440 N Barranca Ave #4133, Covina, CA 91723, USA</span>
          </div>

          <div class="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 py-2">
            <span class="text-xs uppercase tracking-wider text-white/40 font-display min-w-[200px]">Site Web & Securite</span>
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" class="text-[#ff7043] font-medium hover:underline">https://vercel.com (Infrastructure Cloud SSL/TLS) ↗</a>
          </div>
        </div>
      </section>

      <!-- 03. PROPRIETE INTELLECTUELLE -->
      <section class="border-b border-white/10 pb-12 sm:pb-16 space-y-6">
        <div class="flex items-center gap-3">
          <span class="text-[#ff7043] font-display text-xs tracking-widest uppercase">03</span>
          <span class="w-8 h-[1px] bg-[#ff7043]"></span>
          <h2 class="font-display text-xl sm:text-3xl uppercase text-white tracking-tight leading-none">
            PROPRIETE INTELLECTUELLE
          </h2>
        </div>

        <div class="space-y-4 text-sm sm:text-base text-white/75 font-body leading-relaxed pl-2 sm:pl-4">
          <p>
            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables, les représentations iconographiques et photographiques.
          </p>
          <p>
            La reproduction de tout ou partie de ce site sur un support électronique ou papier quel qu'il soit est formellement interdite sauf autorisation expresse de l'association BSD Sport.
          </p>
        </div>
      </section>

      <!-- 04. LIMITATION DE RESPONSABILITE -->
      <section class="space-y-6">
        <div class="flex items-center gap-3">
          <span class="text-[#ff7043] font-display text-xs tracking-widest uppercase">04</span>
          <span class="w-8 h-[1px] bg-[#ff7043]"></span>
          <h2 class="font-display text-xl sm:text-3xl uppercase text-white tracking-tight leading-none">
            LIMITATION DE RESPONSABILITE
          </h2>
        </div>

        <div class="space-y-4 text-sm sm:text-base text-white/75 font-body leading-relaxed pl-2 sm:pl-4">
          <p>
            Les informations contenues sur ce site sont aussi précises que possible et le site est remis à jour régulièrement. Toutefois, BSD Sport ne peut être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
          </p>
        </div>
      </section>

    </main>

    <!-- SECTION MAPS & ACCÈS -->
    <div class="rejoignez-nous-section max-w-5xl mx-auto px-4 sm:px-8 pb-20 pt-10 border-t border-white/10 relative z-10">
      <div class="mb-8 text-center">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111111] border border-white/15 text-white/80 font-display text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-4 shadow-sm">
          <span>LOCALISATION ET ACCES</span>
        </div>
        <h2 class="font-display text-3xl sm:text-5xl uppercase tracking-tight text-white mb-2 leading-none">
          REJOIGNEZ NOUS
        </h2>
        <p class="text-xs sm:text-sm text-white/60 font-body">
          38800 Pont-de-Claix · Grenoble · Isère
        </p>
      </div>

      <!-- Carte Google Maps -->
      <div class="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-xl bg-[#111111] min-h-[360px] sm:min-h-[440px] group">
        <iframe
          class="w-full h-full min-h-[360px] sm:min-h-[440px] border-0 filter brightness-70 contrast-140 grayscale-[80%] invert-[92%] opacity-90 group-hover:opacity-100 transition-opacity duration-300"
          src="https://maps.google.com/maps?q=Pont-de-Claix+BSD+Sport+Is%C3%A8re&t=&z=14&ie=UTF8&iwloc=&output=embed"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Carte Google Maps BSD Sport Pont-de-Claix"
        ></iframe>

        <div class="absolute inset-0 bg-[#0d0d0d]/40 mix-blend-multiply pointer-events-none"></div>

        <div class="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 z-10">
          <a
            href="https://www.google.com/maps/search/?api=1&query=BSD+Sport+Pont-de-Claix"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 rounded-full bg-[#ff7043] hover:bg-white text-black font-display text-[10px] sm:text-xs tracking-wider uppercase shadow-xl transition-all duration-300"
          >
            <span>OBTENIR L'ITINERAIRE</span>
          </a>
        </div>
      </div>
    </div>

    <!-- FOOTER UNIVERSAL -->
    <SiteFooter />
  </div>
</template>

<script setup>
import NavbarHeader from '@/components/common/NavbarHeader.vue'
import SiteFooter from '@/components/common/SiteFooter.vue'
</script>

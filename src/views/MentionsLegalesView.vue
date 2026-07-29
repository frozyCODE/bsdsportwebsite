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
          ★ CADRE JURIDIQUE OFFICIEL
        </span>
        <h1 class="text-4xl sm:text-6xl font-black text-[#F1E7D0] tracking-tight uppercase font-heading mb-4 leading-tight">
          Mentions Légales
        </h1>
        <p class="text-sm sm:text-base text-[#F1E7D0]/70 max-w-2xl mx-auto">
          Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique (LCEN).
        </p>
      </div>
    </section>

    <!-- CONTENT BODY (MAIN SITE FROSTED CARDS) -->
    <main class="max-w-4xl mx-auto px-6 py-16 space-y-10">
      
      <!-- 01. ÉDITEUR DU SITE -->
      <div class="relative bg-[#101622]/80 backdrop-blur-md p-8 rounded-2xl border border-[#F1E7D0]/20 shadow-2xl space-y-4 group hover:border-[#D9A441]/50 transition-all">
        <!-- Rivets -->
        <div class="absolute top-3 left-3 w-2 h-2 rounded-full bg-[#D9A441]/40"></div>
        <div class="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#D9A441]/40"></div>
        <div class="absolute bottom-3 left-3 w-2 h-2 rounded-full bg-[#D9A441]/40"></div>
        <div class="absolute bottom-3 right-3 w-2 h-2 rounded-full bg-[#D9A441]/40"></div>

        <div class="flex items-center gap-4 pb-4 border-b border-[#F1E7D0]/15">
          <div class="w-9 h-9 rounded-lg bg-[#D9A441] text-black font-black text-sm flex items-center justify-center font-heading">
            01
          </div>
          <h2 class="text-2xl font-black text-[#F1E7D0] uppercase tracking-wider font-heading">Éditeur du Site</h2>
        </div>
        <div class="text-sm text-[#F1E7D0]/80 leading-relaxed space-y-2">
          <p><strong class="text-white">Dénomination sociale :</strong> BSD SPORT (Association régie par la loi du 1er juillet 1901).</p>
          <p><strong class="text-white">Siège social :</strong> Campus Sportif, 38800 Pont-de-Claix, Isère, France.</p>
          <p><strong class="text-white">Téléphone :</strong> 07 51 62 29 92 / 06 46 02 53 71</p>
          <p><strong class="text-white">Courrier électronique :</strong> contact@bsdsport.fr</p>
          <p><strong class="text-white">Directeur de la publication :</strong> Équipe de Direction BSD Sport.</p>
        </div>
      </div>

      <!-- 02. HÉBERGEMENT -->
      <div class="relative bg-[#101622]/80 backdrop-blur-md p-8 rounded-2xl border border-[#F1E7D0]/20 shadow-2xl space-y-4 group hover:border-[#D9A441]/50 transition-all">
        <div class="absolute top-3 left-3 w-2 h-2 rounded-full bg-[#D9A441]/40"></div>
        <div class="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#D9A441]/40"></div>
        <div class="absolute bottom-3 left-3 w-2 h-2 rounded-full bg-[#D9A441]/40"></div>
        <div class="absolute bottom-3 right-3 w-2 h-2 rounded-full bg-[#D9A441]/40"></div>

        <div class="flex items-center gap-4 pb-4 border-b border-[#F1E7D0]/15">
          <div class="w-9 h-9 rounded-lg bg-[#D9A441] text-black font-black text-sm flex items-center justify-center font-heading">
            02
          </div>
          <h2 class="text-2xl font-black text-[#F1E7D0] uppercase tracking-wider font-heading">Hébergement du Site</h2>
        </div>
        <div class="text-sm text-[#F1E7D0]/80 leading-relaxed space-y-2">
          <p><strong class="text-white">Hébergeur :</strong> Vercel Inc.</p>
          <p><strong class="text-white">Adresse de l'hébergeur :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.</p>
          <p><strong class="text-white">Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener" class="text-[#D9A441] font-bold underline">https://vercel.com</a></p>
          <p><strong class="text-white">Infrastructure :</strong> Cloud haute disponibilité sécurisé avec chiffrement SSL/TLS.</p>
        </div>
      </div>

      <!-- 03. PROPRIÉTÉ INTELLECTUELLE -->
      <div class="relative bg-[#101622]/80 backdrop-blur-md p-8 rounded-2xl border border-[#F1E7D0]/20 shadow-2xl space-y-4 group hover:border-[#D9A441]/50 transition-all">
        <div class="absolute top-3 left-3 w-2 h-2 rounded-full bg-[#D9A441]/40"></div>
        <div class="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#D9A441]/40"></div>
        <div class="absolute bottom-3 left-3 w-2 h-2 rounded-full bg-[#D9A441]/40"></div>
        <div class="absolute bottom-3 right-3 w-2 h-2 rounded-full bg-[#D9A441]/40"></div>

        <div class="flex items-center gap-4 pb-4 border-b border-[#F1E7D0]/15">
          <div class="w-9 h-9 rounded-lg bg-[#D9A441] text-black font-black text-sm flex items-center justify-center font-heading">
            03
          </div>
          <h2 class="text-2xl font-black text-[#F1E7D0] uppercase tracking-wider font-heading">Propriété Intellectuelle</h2>
        </div>
        <div class="text-sm text-[#F1E7D0]/80 leading-relaxed space-y-3">
          <p>
            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés pour les textes, graphismes et visuels BSD Sport.
          </p>
        </div>
      </div>

      <!-- 04. LIMITATION DE RESPONSABILITÉ -->
      <div class="relative bg-[#101622]/80 backdrop-blur-md p-8 rounded-2xl border border-[#F1E7D0]/20 shadow-2xl space-y-4 group hover:border-[#D9A441]/50 transition-all">
        <div class="absolute top-3 left-3 w-2 h-2 rounded-full bg-[#D9A441]/40"></div>
        <div class="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#D9A441]/40"></div>
        <div class="absolute bottom-3 left-3 w-2 h-2 rounded-full bg-[#D9A441]/40"></div>
        <div class="absolute bottom-3 right-3 w-2 h-2 rounded-full bg-[#D9A441]/40"></div>

        <div class="flex items-center gap-4 pb-4 border-b border-[#F1E7D0]/15">
          <div class="w-9 h-9 rounded-lg bg-[#D9A441] text-black font-black text-sm flex items-center justify-center font-heading">
            04
          </div>
          <h2 class="text-2xl font-black text-[#F1E7D0] uppercase tracking-wider font-heading">Limitation de Responsabilité</h2>
        </div>
        <div class="text-sm text-[#F1E7D0]/80 leading-relaxed space-y-3">
          <p>
            Les informations contenues sur ce site sont aussi précises que possible. BSD Sport s'efforce d'assurer au mieux l'exactitude des informations diffusées.
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
          <span>• Mentions Légales</span>
        </div>

        <div class="flex items-center gap-6 font-bold">
          <router-link to="/plan-du-site" class="hover:text-[#D9A441] transition-colors">Plan du site</router-link>
          <router-link to="/politique-de-confidentialite" class="hover:text-[#D9A441] transition-colors">Politique de confidentialité</router-link>
        </div>

        <div>
          © {{ new Date().getFullYear() }} BSD Sport. Tous droits réservés.
        </div>
      </div>
    </footer>
  </div>
</template>

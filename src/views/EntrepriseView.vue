<template>
  <div class="min-h-screen bg-[#080808] text-[#F1E7D0] font-body select-none relative overflow-hidden">
    
    <!-- Texture Grain Argentique Brutaliste -->
    <div 
      class="fixed inset-0 z-0 opacity-20 mix-blend-overlay pointer-events-none bg-repeat"
      style="background-image: url('data:image/svg+xml,%3Csvg width=\'256\' height=\'256\' viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'heavyGrain\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.95\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23heavyGrain)\'/%3E%3C/svg%3E');"
      aria-hidden="true"
    ></div>

    <!-- Header Navigation Globale -->
    <NavbarHeader />

    <!-- HERO SECTION B2B EXECUTIVE -->
    <section class="relative pt-32 sm:pt-44 pb-16 sm:pb-24 px-4 sm:px-8 max-w-6xl mx-auto text-center z-10">
      <!-- Glow Orange Subtil -->
      <div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[800px] h-[300px] bg-[#ff7043]/12 blur-[140px] pointer-events-none" aria-hidden="true"></div>

      <div class="relative z-10 space-y-6">
        <!-- Pill Badge -->
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/90 border border-white/15 text-[#ff7043] font-display text-[10px] sm:text-xs uppercase tracking-[0.2em] shadow-lg backdrop-blur-md font-bold">
          <span class="w-2 h-2 rounded-full bg-[#ff7043] animate-pulse"></span>
          <span>QVT · RSE · BIEN-ETRE AU TRAVAIL · ODD</span>
        </div>

        <!-- Titre Principal Akira Sans Accent avec Apostrophes -->
        <h1 class="font-display text-3xl xs:text-4xl sm:text-6xl lg:text-7xl xl:text-8xl uppercase tracking-tight text-white leading-[1.05] drop-shadow-2xl">
          S'APPROPRIER SON ENTREPRISE <span class="text-[#ff7043] block sm:inline mt-1 sm:mt-0">PAR LE SPORT</span>
        </h1>

        <!-- Sous-titre -->
        <p class="text-sm sm:text-base lg:text-lg text-white/80 font-body max-w-3xl mx-auto leading-relaxed px-2">
          BSD Sport met son expertise au service des entreprises qui placent le bien-être de leurs salariés au cœur de leur stratégie.
        </p>

        <!-- CTA Action Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a 
            href="#contact-b2b" 
            @click.prevent="scrollToSection('contact-b2b')"
            class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#ff7043] hover:bg-white text-black font-display text-xs tracking-wider uppercase shadow-xl transition-all duration-300 group font-bold"
          >
            <span>DEMANDER UN DIAGNOSTIC GRATUIT</span>
            <span class="transition-transform group-hover:translate-x-1">→</span>
          </a>

          <a 
            href="#methode" 
            @click.prevent="scrollToSection('methode')"
            class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white/10 hover:bg-[#ff7043] border border-white/20 hover:border-[#ff7043] text-white hover:text-black font-display text-xs uppercase tracking-wider backdrop-blur-md transition-all duration-300 font-bold"
          >
            <span>TELECHARGER LA PLAQUETTE</span>
          </a>
        </div>

        <!-- Key Metrics Bar Minimaliste Dark -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto border-t border-white/10 pt-10 mt-10">
          <div class="p-4 rounded-2xl bg-[#111111] border border-white/10 text-center">
            <span class="font-display text-2xl sm:text-3xl text-[#ff7043] block font-bold">10 ANS</span>
            <span class="text-[10px] sm:text-xs text-white/70 uppercase tracking-wider font-body">D'EXPERTISE TERRAIN PONT-DE-CLAIX</span>
          </div>
          <div class="p-4 rounded-2xl bg-[#111111] border border-white/10 text-center">
            <span class="font-display text-2xl sm:text-3xl text-white block font-bold">−35%</span>
            <span class="text-[10px] sm:text-xs text-white/70 uppercase tracking-wider font-body">D'ABSENTEISME CONSTATE (IRDES & OMS)</span>
          </div>
          <div class="p-4 rounded-2xl bg-[#111111] border border-white/10 text-center">
            <span class="font-display text-2xl sm:text-3xl text-[#ff7043] block font-bold">RAPPORT RSE</span>
            <span class="text-[10px] sm:text-xs text-white/70 uppercase tracking-wider font-body">CLE-EN-MAIN INCLUS</span>
          </div>
          <div class="p-4 rounded-2xl bg-[#111111] border border-white/10 text-center">
            <span class="font-display text-2xl sm:text-3xl text-white block font-bold">ODD ALIGNES</span>
            <span class="text-[10px] sm:text-xs text-white/70 uppercase tracking-wider font-body">LIVRABLE IMMEDIAT</span>
          </div>
        </div>

      </div>
    </section>

    <!-- SECTION STATS STATISTIQUES D IMPACT -->
    <section class="relative z-10 py-10 bg-[#0c0c0c] border-y border-white/10">
      <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div class="p-4">
          <span class="font-display text-3xl sm:text-4xl text-[#ff7043] block font-bold">−35%</span>
          <span class="text-xs sm:text-sm text-white/80 font-body">d'absentéisme avec sport collectif</span>
        </div>
        <div class="p-4 md:border-x border-white/10">
          <span class="font-display text-3xl sm:text-4xl text-white block font-bold">+12%</span>
          <span class="text-xs sm:text-sm text-white/80 font-body">de productivité chez les salariés actifs</span>
        </div>
        <div class="p-4">
          <span class="font-display text-3xl sm:text-4xl text-[#ff7043] block font-bold">60%</span>
          <span class="text-xs sm:text-sm text-white/80 font-body">de réduction fiscale via le mécénat</span>
        </div>
      </div>
    </section>

    <!-- SECTION ENJEUX RH -->
    <section id="enjeux" class="relative z-10 py-16 sm:py-24 border-b border-white/10 bg-[#080808]">
      <div class="max-w-7xl mx-auto px-6 sm:px-12 space-y-12">
        
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <span class="text-[#ff7043] font-display text-xs uppercase tracking-widest block font-bold">
            ENJEUX RH
          </span>
          <h2 class="font-display text-3xl sm:text-5xl text-white uppercase tracking-tight leading-none">
            VOS EQUIPES FONT FACE A DES REALITES COMMUNES
          </h2>
          <p class="text-sm sm:text-base text-white/70 font-body">
            BTP, industrie, services, logistique — les mêmes problématiques humaines impactent votre performance.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <!-- Card 1 -->
          <div class="bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#ff7043]/50 transition-all duration-300 group">
            <div class="space-y-3">
              <span class="text-[#ff7043] font-display text-xs uppercase tracking-widest font-bold">01 // PHYSIONOMIE</span>
              <h3 class="font-display text-base sm:text-lg text-white uppercase tracking-tight leading-snug group-hover:text-[#ff7043] transition-colors">
                USURE PHYSIQUE & TMS
              </h3>
              <p class="text-xs sm:text-sm text-white/70 font-body leading-relaxed">
                Contraintes posturales pour les équipes terrain.
              </p>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#ff7043]/50 transition-all duration-300 group">
            <div class="space-y-3">
              <span class="text-[#ff7043] font-display text-xs uppercase tracking-widest font-bold">02 // SANTE MENTALE</span>
              <h3 class="font-display text-base sm:text-lg text-white uppercase tracking-tight leading-snug group-hover:text-[#ff7043] transition-colors">
                SEDENTARITE & CHARGE MENTALE
              </h3>
              <p class="text-xs sm:text-sm text-white/70 font-body leading-relaxed">
                Stress chronique et manque d'activité physique.
              </p>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#ff7043]/50 transition-all duration-300 group">
            <div class="space-y-3">
              <span class="text-[#ff7043] font-display text-xs uppercase tracking-widest font-bold">03 // COLLECTIF</span>
              <h3 class="font-display text-base sm:text-lg text-white uppercase tracking-tight leading-snug group-hover:text-[#ff7043] transition-colors">
                COHESION FRAGILISEE
              </h3>
              <p class="text-xs sm:text-sm text-white/70 font-body leading-relaxed">
                Baisse d'engagement collectif et motivation en berne.
              </p>
            </div>
          </div>

          <!-- Card 4 -->
          <div class="bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#ff7043]/50 transition-all duration-300 group">
            <div class="space-y-3">
              <span class="text-[#ff7043] font-display text-xs uppercase tracking-widest font-bold">04 // PRODUCTIVITE</span>
              <h3 class="font-display text-base sm:text-lg text-white uppercase tracking-tight leading-snug group-hover:text-[#ff7043] transition-colors">
                ABSENTEISME & TURN-OVER
              </h3>
              <p class="text-xs sm:text-sm text-white/70 font-body leading-relaxed">
                Chaque absence non anticipée pèse sur la productivité.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- SECTION RESULTATS PROUVES -->
    <section id="resultats" class="relative z-10 py-16 sm:py-24 border-b border-white/10 bg-[#0a0a0a]">
      <div class="max-w-7xl mx-auto px-6 sm:px-12 space-y-12">
        
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <span class="text-[#ff7043] font-display text-xs uppercase tracking-widest block font-bold">
            RESULTATS PROUVES
          </span>
          <h2 class="font-display text-3xl sm:text-5xl text-white uppercase tracking-tight leading-none">
            DES IMPACTS CONCRETS, DOCUMENTES
          </h2>
          <p class="text-sm sm:text-base text-white/70 font-body">
            Chiffres issus d'études scientifiques indépendantes et d'organismes de santé.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div class="p-6 rounded-2xl bg-[#111111] border border-white/10 space-y-3">
            <span class="font-display text-3xl sm:text-4xl text-[#ff7043] block font-bold">−35%</span>
            <h4 class="font-display text-xs uppercase text-white font-bold">D'ABSENTEISME POUR LES ENTREPRISES AVEC PROGRAMME SPORT</h4>
            <span class="text-[10px] text-white/50 uppercase tracking-widest block font-mono">SOURCE : IRDES & OMS, 2022</span>
          </div>

          <div class="p-6 rounded-2xl bg-[#111111] border border-white/10 space-y-3">
            <span class="font-display text-3xl sm:text-4xl text-white block font-bold">+14%</span>
            <h4 class="font-display text-xs uppercase text-white font-bold">DE RENTABILITE GRACE A LA QUALITE DE VIE AU TRAVAIL</h4>
            <span class="text-[10px] text-white/50 uppercase tracking-widest block font-mono">SOURCE : INSTITUT SAPIENS, 2023</span>
          </div>

          <div class="p-6 rounded-2xl bg-[#111111] border border-white/10 space-y-3">
            <span class="font-display text-3xl sm:text-4xl text-[#ff7043] block font-bold">−50%</span>
            <h4 class="font-display text-xs uppercase text-white font-bold">DE REDUCTION DU STRESS CHEZ LES SALARIES ACTIFS</h4>
            <span class="text-[10px] text-white/50 uppercase tracking-widest block font-mono">SOURCE : UNIV. DE CAMBRIDGE, 2023</span>
          </div>

          <div class="p-6 rounded-2xl bg-[#111111] border border-white/10 space-y-3">
            <span class="font-display text-3xl sm:text-4xl text-white block font-bold">+12%</span>
            <h4 class="font-display text-xs uppercase text-white font-bold">DE PRODUCTIVITE — UN SALARIE ACTIF EST PLUS EFFICACE</h4>
            <span class="text-[10px] text-white/50 uppercase tracking-widest block font-mono">SOURCE : ALBERTA CENTRE FOR ACTIVE LIVING</span>
          </div>

          <div class="p-6 rounded-2xl bg-[#111111] border border-white/10 space-y-3">
            <span class="font-display text-3xl sm:text-4xl text-[#ff7043] block font-bold">−27%</span>
            <h4 class="font-display text-xs uppercase text-white font-bold">DE CONGES MALADIE CHEZ LES COLLABORATEURS ACTIFS</h4>
            <span class="text-[10px] text-white/50 uppercase tracking-widest block font-mono">SOURCE : ALBERTA CENTRE FOR ACTIVE LIVING</span>
          </div>

          <div class="p-6 rounded-2xl bg-[#111111] border border-white/10 space-y-3">
            <span class="font-display text-3xl sm:text-4xl text-white block font-bold">+6 ANS</span>
            <h4 class="font-display text-xs uppercase text-white font-bold">D'ESPERANCE DE VIE GRACE A L'INDEPENDANCE PHYSIQUE</h4>
            <span class="text-[10px] text-white/50 uppercase tracking-widest block font-mono">SOURCE : OMS, 2022</span>
          </div>

        </div>

      </div>
    </section>

    <!-- SECTION RAPPORT RSE (NOUVEAU) -->
    <section id="rse" class="relative z-10 py-16 sm:py-24 border-b border-white/10 bg-[#080808]">
      <div class="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <!-- Colonne Gauche : Explication -->
        <div class="lg:col-span-6 space-y-6">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ff7043]/15 border border-[#ff7043]/30 text-[#ff7043] font-display text-[10px] uppercase tracking-widest font-bold">
            RAPPORT RSE · NOUVEAU
          </div>

          <h2 class="font-display text-3xl sm:text-5xl text-white uppercase tracking-tight leading-none">
            TRANSFORMEZ VOS ACTIONS EN OUTIL RSE
          </h2>

          <p class="text-sm sm:text-base text-white/80 font-body leading-relaxed">
            Chaque programme BSD Sport est documenté pour alimenter directement le bilan RSE et la démarche QVT de votre entreprise.
          </p>

          <!-- 4 Étapes -->
          <div class="space-y-4 pt-2">
            <div class="flex items-start gap-4 p-3.5 rounded-xl bg-[#111111] border border-white/10">
              <span class="w-8 h-8 rounded-lg bg-[#ff7043] text-black font-display text-xs font-bold flex items-center justify-center shrink-0">1</span>
              <div>
                <h4 class="font-display text-xs uppercase text-white font-bold">DIAGNOSTIC INITIAL</h4>
                <p class="text-xs text-white/60">Sondage collaborateurs, identification des attentes.</p>
              </div>
            </div>

            <div class="flex items-start gap-4 p-3.5 rounded-xl bg-[#111111] border border-white/10">
              <span class="w-8 h-8 rounded-lg bg-[#ff7043] text-black font-display text-xs font-bold flex items-center justify-center shrink-0">2</span>
              <div>
                <h4 class="font-display text-xs uppercase text-white font-bold">INTERVENTIONS DOCUMENTÉES</h4>
                <p class="text-xs text-white/60">Suivi de participation, feedback post-séance.</p>
              </div>
            </div>

            <div class="flex items-start gap-4 p-3.5 rounded-xl bg-[#111111] border border-white/10">
              <span class="w-8 h-8 rounded-lg bg-[#ff7043] text-black font-display text-xs font-bold flex items-center justify-center shrink-0">3</span>
              <div>
                <h4 class="font-display text-xs uppercase text-white font-bold">RAPPORT RSE PÉRIODIQUE</h4>
                <p class="text-xs text-white/60">Bilan chiffré, témoignages, supports visuels.</p>
              </div>
            </div>

            <div class="flex items-start gap-4 p-3.5 rounded-xl bg-[#111111] border border-white/10">
              <span class="w-8 h-8 rounded-lg bg-[#ff7043] text-black font-display text-xs font-bold flex items-center justify-center shrink-0">4</span>
              <div>
                <h4 class="font-display text-xs uppercase text-white font-bold">PILOTAGE QVT CONTINU</h4>
                <p class="text-xs text-white/60">Indicateurs pour suivre l'impact RSE.</p>
              </div>
            </div>
          </div>

          <!-- Badges ODD Alignés -->
          <div class="pt-4 border-t border-white/10 space-y-2">
            <span class="text-xs text-white/60 uppercase font-display tracking-widest font-bold block">ODD ALIGNES</span>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 rounded-md bg-white/10 border border-white/15 text-xs text-white font-bold">ODD 3 · Santé</span>
              <span class="px-3 py-1 rounded-md bg-white/10 border border-white/15 text-xs text-white font-bold">ODD 8 · Travail décent</span>
              <span class="px-3 py-1 rounded-md bg-white/10 border border-white/15 text-xs text-white font-bold">ODD 10 · Inégalités</span>
              <span class="px-3 py-1 rounded-md bg-white/10 border border-white/15 text-xs text-white font-bold">ODD 17 · Partenariats</span>
            </div>
          </div>
        </div>

        <!-- Colonne Droite : Card Exemple Rapport RSE -->
        <div class="lg:col-span-6">
          <div class="bg-[#111111] border border-white/15 rounded-3xl p-8 shadow-2xl space-y-6 relative overflow-hidden">
            <div class="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span class="text-[10px] text-[#ff7043] font-display uppercase tracking-widest block font-bold">EXEMPLE</span>
                <h3 class="font-display text-xl text-white uppercase font-bold">RAPPORT RSE Q1 2025</h3>
              </div>
              <span class="px-3 py-1 rounded-full bg-white/10 text-xs text-white/70 font-mono">Janv. → Mars 2025</span>
            </div>

            <!-- Stats Live -->
            <div class="grid grid-cols-2 gap-4">
              <div class="p-4 rounded-xl bg-black/60 border border-white/10 text-center">
                <span class="font-display text-2xl text-[#ff7043] font-bold block">78%</span>
                <span class="text-[10px] text-white/60 uppercase font-display">PARTICIPATION</span>
              </div>
              <div class="p-4 rounded-xl bg-black/60 border border-white/10 text-center">
                <span class="font-display text-2xl text-white font-bold block">4.7/5</span>
                <span class="text-[10px] text-white/60 uppercase font-display">SATISFACTION</span>
              </div>
              <div class="p-4 rounded-xl bg-black/60 border border-white/10 text-center">
                <span class="font-display text-2xl text-white font-bold block">−22%</span>
                <span class="text-[10px] text-white/60 uppercase font-display">ABSENCES VS N−1</span>
              </div>
              <div class="p-4 rounded-xl bg-black/60 border border-white/10 text-center">
                <span class="font-display text-2xl text-[#ff7043] font-bold block">60%</span>
                <span class="text-[10px] text-white/60 uppercase font-display">RED. FISCALE</span>
              </div>
            </div>

            <!-- Synthèse Livrable -->
            <div class="space-y-2 pt-2 text-xs text-white/80">
              <div class="flex justify-between border-b border-white/5 py-1">
                <span>Séances réalisées :</span>
                <span class="font-bold text-white">12</span>
              </div>
              <div class="flex justify-between border-b border-white/5 py-1">
                <span>ODD couverts :</span>
                <span class="font-bold text-[#ff7043]">4 / 17</span>
              </div>
              <div class="flex justify-between border-b border-white/5 py-1">
                <span>Rapport livré :</span>
                <span class="font-bold text-white">✓ PDF + slides</span>
              </div>
            </div>

            <p class="text-xs text-white/50 italic text-center pt-2">
              Intégrable dans votre rapport RSE annuel.
            </p>

            <a 
              href="#contact-b2b" 
              @click.prevent="scrollToSection('contact-b2b')"
              class="block text-center w-full py-3.5 rounded-full bg-[#ff7043] hover:bg-white text-black font-display text-xs uppercase tracking-wider font-bold transition-all shadow-xl"
            >
              OBTENIR UN RAPPORT RSE EXEMPLAIRE →
            </a>
          </div>
        </div>

      </div>
    </section>

    <!-- SECTION LEVIERS FINANCIERS -->
    <section id="finances" class="relative z-10 py-16 sm:py-24 border-b border-white/10 bg-[#0a0a0a]">
      <div class="max-w-7xl mx-auto px-6 sm:px-12 space-y-12">
        
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <span class="text-[#ff7043] font-display text-xs uppercase tracking-widest block font-bold">
            LEVIERS FINANCIERS
          </span>
          <h2 class="font-display text-3xl sm:text-5xl text-white uppercase tracking-tight leading-none">
            UN INVESTISSEMENT OPTIMISE
          </h2>
          <p class="text-sm sm:text-base text-white/70 font-body">
            Des dispositifs fiscaux et de cofinancement pour maximiser votre budget.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div class="bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-3 hover:border-[#ff7043]/50 transition-all duration-300">
            <span class="font-display text-2xl text-[#ff7043] font-bold block">60%</span>
            <h3 class="font-display text-base text-white uppercase font-bold">MECENAT D'ENTREPRISE</h3>
            <p class="text-xs text-white/70 font-body leading-relaxed">
              60% de réduction fiscale sur votre don.
            </p>
          </div>

          <div class="bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-3 hover:border-[#ff7043]/50 transition-all duration-300">
            <span class="font-display text-2xl text-white font-bold block">OPCO</span>
            <h3 class="font-display text-base text-white uppercase font-bold">FINANCEMENT OPCO</h3>
            <p class="text-xs text-white/70 font-body leading-relaxed">
              Cofinancement via votre OPCO (démarche prévention).
            </p>
          </div>

          <div class="bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-3 hover:border-[#ff7043]/50 transition-all duration-300">
            <span class="font-display text-2xl text-[#ff7043] font-bold block">URSSAF</span>
            <h3 class="font-display text-base text-white uppercase font-bold">EXONERATION DE COTISATIONS</h3>
            <p class="text-xs text-white/70 font-body leading-relaxed">
              Exonération partielle de charges sociales.
            </p>
          </div>

          <div class="bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-3 hover:border-[#ff7043]/50 transition-all duration-300">
            <span class="font-display text-2xl text-white font-bold block">QVT</span>
            <h3 class="font-display text-base text-white uppercase font-bold">DEPENSES QVT IMPUTABLES</h3>
            <p class="text-xs text-white/70 font-body leading-relaxed">
              Actions imputables au budget QVT et RSE.
            </p>
          </div>

        </div>

      </div>
    </section>

    <!-- SECTION NOTRE METHODE -->
    <section id="methode" class="relative z-10 py-16 sm:py-24 border-b border-white/10 bg-[#080808]">
      <div class="max-w-7xl mx-auto px-6 sm:px-12 space-y-12">
        
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <span class="text-[#ff7043] font-display text-xs uppercase tracking-widest block font-bold">
            NOTRE METHODE
          </span>
          <h2 class="font-display text-3xl sm:text-5xl text-white uppercase tracking-tight leading-none">
            COMMENT CA FONCTIONNE ?
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div class="p-6 rounded-2xl bg-[#111111] border border-white/10 space-y-3 relative">
            <span class="font-display text-xs text-[#ff7043] uppercase tracking-widest font-bold">01</span>
            <h3 class="font-display text-lg text-white uppercase font-bold">DIAGNOSTIC</h3>
            <p class="text-xs text-white/70 leading-relaxed">
              Sondage collaborateurs, enjeux RH.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-[#111111] border border-white/10 space-y-3 relative">
            <span class="font-display text-xs text-[#ff7043] uppercase tracking-widest font-bold">02</span>
            <h3 class="font-display text-lg text-white uppercase font-bold">PROGRAMME SUR MESURE</h3>
            <p class="text-xs text-white/70 leading-relaxed">
              Plan adapté à vos métiers et budget.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-[#111111] border border-white/10 space-y-3 relative">
            <span class="font-display text-xs text-[#ff7043] uppercase tracking-widest font-bold">03</span>
            <h3 class="font-display text-lg text-white uppercase font-bold">INTERVENTIONS TERRAIN</h3>
            <p class="text-xs text-white/70 leading-relaxed">
              Séances par nos éducateurs diplômés.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-[#111111] border border-white/10 space-y-3 relative">
            <span class="font-display text-xs text-[#ff7043] uppercase tracking-widest font-bold">04</span>
            <h3 class="font-display text-lg text-white uppercase font-bold">RAPPORT RSE & BILAN</h3>
            <p class="text-xs text-white/70 leading-relaxed">
              Synthèse chiffrée, ODD alignés.
            </p>
          </div>

        </div>

      </div>
    </section>

    <!-- SECTION FORMULAIRE DE CONTACT B2B -->
    <div id="contact-b2b">
      <ContactSection />
    </div>

  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import NavbarHeader from '@/components/common/NavbarHeader.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import { useProfile } from '@/composables/useProfile'

const { setProfile } = useProfile()

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  // Pré-sélectionne le profil Entreprises pour le formulaire de contact
  setProfile('entreprises')
})
</script>

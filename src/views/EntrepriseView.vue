<template>
  <div class="min-h-screen bg-[#080808] text-[#F1E7D0] font-body select-none relative overflow-hidden">
    
    <!-- Texture Grain Argentique Brutaliste -->
    <div 
      class="fixed inset-0 z-0 opacity-20 mix-blend-overlay pointer-events-none bg-repeat"
      style="background-image: url('data:image/svg+xml,%3Csvg width=\'256\' height=\'256\' viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'heavyGrain\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.95\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23heavyGrain)\'/%3E%3C/svg%3E');"
      aria-hidden="true"
    ></div>

    <!-- Logo BSD Filigrane Géant en fond léger -->
    <div 
      class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1100px] lg:w-[1500px] aspect-square pointer-events-none opacity-[0.04] mix-blend-screen bg-no-repeat bg-center bg-contain z-0 select-none"
      style="background-image: url('/BSD LOGO PNG.png');"
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
        <div class="reveal inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#111111] border border-white/15 text-[#ff7043] font-display text-[10px] sm:text-xs uppercase tracking-[0.2em] shadow-xl backdrop-blur-md font-bold">
          <span class="w-2 h-2 rounded-full bg-[#ff7043] animate-pulse"></span>
          <span>QVT · RSE · BIEN-ETRE AU TRAVAIL · ODD ONU</span>
        </div>

        <!-- Titre Principal -->
        <h1 class="reveal d1 font-display text-3xl xs:text-4xl sm:text-6xl lg:text-7xl xl:text-8xl uppercase tracking-tight text-white leading-[1.05] drop-shadow-2xl">
          S'APPROPRIER SON ENTREPRISE <span class="text-[#ff7043] block sm:inline mt-1 sm:mt-0">PAR LE SPORT</span>
        </h1>

        <!-- Sous-titre -->
        <p class="reveal d2 text-sm sm:text-base lg:text-lg text-white/80 font-body max-w-3xl mx-auto leading-relaxed px-2">
          BSD Sport met son expertise au service des entreprises qui placent le bien-être de leurs salariés au cœur de leur stratégie RSE & QVT.
        </p>

        <!-- CTA Action Buttons -->
        <div class="reveal d3 flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a 
            href="#contact-b2b" 
            @click.prevent="scrollToSection('contact-b2b')"
            class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#ff7043] hover:bg-white text-black font-display text-xs tracking-wider uppercase shadow-2xl transition-all duration-300 group font-bold"
          >
            <span>DEMANDER UN DIAGNOSTIC GRATUIT</span>
            <svg class="w-4 h-4 transition-transform group-hover:translate-x-1 stroke-current" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </a>

          <a 
            href="#odd-onu" 
            @click.prevent="scrollToSection('odd-onu')"
            class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white/10 hover:bg-[#ff7043] border border-white/20 hover:border-[#ff7043] text-white hover:text-black font-display text-xs uppercase tracking-wider backdrop-blur-md transition-all duration-300 font-bold"
          >
            <span>DECOUVRIR LES ODD ONU</span>
          </a>
        </div>

        <!-- Key Metrics Bar -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto border-t border-white/10 pt-10 mt-10">
          <div class="reveal d1 p-4 rounded-2xl bg-[#111111] border border-white/10 text-center shadow-lg">
            <span class="font-display text-2xl sm:text-3xl text-[#ff7043] block font-bold">10 ANS</span>
            <span class="text-[10px] sm:text-xs text-white/70 uppercase tracking-wider font-body">D'EXPERTISE TERRAIN ISERE</span>
          </div>
          <div class="reveal d2 p-4 rounded-2xl bg-[#111111] border border-white/10 text-center shadow-lg">
            <span class="font-display text-2xl sm:text-3xl text-white block font-bold">−35%</span>
            <span class="text-[10px] sm:text-xs text-white/70 uppercase tracking-wider font-body">D'ABSENTEISME (IRDES & OMS)</span>
          </div>
          <div class="reveal d3 p-4 rounded-2xl bg-[#111111] border border-white/10 text-center shadow-lg">
            <span class="font-display text-2xl sm:text-3xl text-[#ff7043] block font-bold">RAPPORT RSE</span>
            <span class="text-[10px] sm:text-xs text-white/70 uppercase tracking-wider font-body">LIVRABLE CLES-EN-MAIN</span>
          </div>
          <div class="reveal d4 p-4 rounded-2xl bg-[#111111] border border-white/10 text-center shadow-lg">
            <span class="font-display text-2xl sm:text-3xl text-white block font-bold">6 ODD ONU</span>
            <span class="text-[10px] sm:text-xs text-white/70 uppercase tracking-wider font-body">ALIGNES & CERTIFIES</span>
          </div>
        </div>

      </div>
    </section>

    <!-- SECTION STATS STATISTIQUES D IMPACT -->
    <section class="relative z-10 py-10 bg-[#0c0c0c] border-y border-white/10">
      <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div class="reveal d1 p-4 space-y-1">
          <span class="font-display text-3xl sm:text-4xl text-[#ff7043] block font-bold">−35%</span>
          <span class="text-xs sm:text-sm text-white/80 font-body">d'absentéisme constaté avec sport collectif</span>
        </div>
        <div class="reveal d2 p-4 md:border-x border-white/10 space-y-1">
          <span class="font-display text-3xl sm:text-4xl text-white block font-bold">+14%</span>
          <span class="text-xs sm:text-sm text-white/80 font-body">de rentabilité via la Qualité de Vie au Travail</span>
        </div>
        <div class="reveal d3 p-4 space-y-1">
          <span class="font-display text-3xl sm:text-4xl text-[#ff7043] block font-bold">60%</span>
          <span class="text-xs sm:text-sm text-white/80 font-body">de réduction fiscale via le mécénat d'entreprise</span>
        </div>
      </div>
    </section>

    <!-- SECTION ENJEUX RH -->
    <section id="enjeux" class="relative z-10 py-16 sm:py-24 border-b border-white/10 bg-[#080808]">
      <div class="max-w-7xl mx-auto px-6 sm:px-12 space-y-12">
        
        <div class="reveal text-center max-w-3xl mx-auto space-y-3">
          <span class="text-[#ff7043] font-display text-xs uppercase tracking-widest block font-bold">
            ENJEUX RH & IMPACT HUMAIN
          </span>
          <h2 class="font-display text-3xl sm:text-5xl text-white uppercase tracking-tight leading-none">
            VOS EQUIPES FONT FACE A DES REALITES COMMUNES
          </h2>
          <p class="text-sm sm:text-base text-white/70 font-body">
            BTP, industrie, services, logistique — les mêmes problématiques humaines impactent votre performance.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div class="reveal-scale d1 bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#ff7043]/50 transition-all duration-300 group shadow-xl">
            <div class="space-y-3">
              <span class="text-[#ff7043] font-display text-xs uppercase tracking-widest font-bold">01 // PHYSIONOMIE</span>
              <h3 class="font-display text-base sm:text-lg text-white uppercase tracking-tight leading-snug group-hover:text-[#ff7043] transition-colors">
                USURE PHYSIQUE & TMS
              </h3>
              <p class="text-xs sm:text-sm text-white/70 font-body leading-relaxed">
                Contraintes posturales & troubles musculosquelettiques pour les équipes terrain.
              </p>
            </div>
          </div>

          <div class="reveal-scale d2 bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#ff7043]/50 transition-all duration-300 group shadow-xl">
            <div class="space-y-3">
              <span class="text-[#ff7043] font-display text-xs uppercase tracking-widest font-bold">02 // SANTE MENTALE</span>
              <h3 class="font-display text-base sm:text-lg text-white uppercase tracking-tight leading-snug group-hover:text-[#ff7043] transition-colors">
                SEDENTARITE & CHARGE MENTALE
              </h3>
              <p class="text-xs sm:text-sm text-white/70 font-body leading-relaxed">
                Stress chronique, surmenage et manque d'activité physique régulière.
              </p>
            </div>
          </div>

          <div class="reveal-scale d3 bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#ff7043]/50 transition-all duration-300 group shadow-xl">
            <div class="space-y-3">
              <span class="text-[#ff7043] font-display text-xs uppercase tracking-widest font-bold">03 // COLLECTIF</span>
              <h3 class="font-display text-base sm:text-lg text-white uppercase tracking-tight leading-snug group-hover:text-[#ff7043] transition-colors">
                COHESION FRAGILISEE
              </h3>
              <p class="text-xs sm:text-sm text-white/70 font-body leading-relaxed">
                Isolement, baisse d'engagement collectif et perte de sens au travail.
              </p>
            </div>
          </div>

          <div class="reveal-scale d4 bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#ff7043]/50 transition-all duration-300 group shadow-xl">
            <div class="space-y-3">
              <span class="text-[#ff7043] font-display text-xs uppercase tracking-widest font-bold">04 // PRODUCTIVITE</span>
              <h3 class="font-display text-base sm:text-lg text-white uppercase tracking-tight leading-snug group-hover:text-[#ff7043] transition-colors">
                ABSENTEISME & TURN-OVER
              </h3>
              <p class="text-xs sm:text-sm text-white/70 font-body leading-relaxed">
                Chaque absence non anticipée pèse lourdement sur l'organisation globale.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- SECTION ODD ONU : INTEGRATION D.A. BSD SPORT -->
    <section id="odd-onu" class="relative z-10 py-16 sm:py-24 border-b border-white/10 bg-[#0a0a0a]">
      <div class="max-w-7xl mx-auto px-6 sm:px-12 space-y-14">
        
        <!-- En-tête ODD -->
        <div class="reveal text-center max-w-4xl mx-auto space-y-4">
          <div class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#111111] border border-[#ff7043]/40 text-[#ff7043] font-display text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold shadow-lg">
            <span>NATIONS UNIES · OBJECTIFS DE DEVELOPPEMENT DURABLE</span>
          </div>

          <h2 class="font-display text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-none">
            ALIGNEMENT RSE SUR LES <span class="text-[#ff7043]">ODD DE L'ONU</span>
          </h2>

          <p class="text-sm sm:text-base text-white/80 font-body max-w-2xl mx-auto leading-relaxed">
            Nos programmes s'inscrivent directement dans l'Agenda 2030 des Nations Unies. Chaque intervention génère des indicateurs mesurables et valorisables dans votre bilan RSE.
          </p>
        </div>

        <!-- GRILLE ODD SOBRE D.A. BSD SPORT (Fond sombre, logos officiels) -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <!-- ODD 3 -->
          <div class="reveal-scale d1 bg-[#111111] border border-white/15 hover:border-[#ff7043]/60 rounded-3xl p-6 sm:p-8 space-y-4 relative overflow-hidden shadow-2xl transition-all duration-300">
            <div class="flex items-center justify-between">
              <img src="/odd3.webp" alt="ODD 3 Bonne Santé et Bien-être" class="h-14 sm:h-16 w-auto object-contain rounded-lg shadow-md" />
              <span class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-[10px] font-display uppercase tracking-widest font-bold">
                SANTE & BIEN-ETRE
              </span>
            </div>

            <div class="space-y-2">
              <h3 class="font-display text-lg sm:text-xl text-white uppercase tracking-tight font-bold">
                BONNE SANTE ET BIEN-ETRE
              </h3>
              <p class="text-xs sm:text-sm text-white/70 font-body leading-relaxed">
                Prévention des maladies non transmissibles, lutte contre la sédentarité et amélioration de la santé mentale au travail.
              </p>
            </div>

            <div class="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/50">
              <span>Livrable : Bilan santé & APA</span>
              <span class="text-[#ff7043] font-bold">Cible 3.4</span>
            </div>
          </div>

          <!-- ODD 5 -->
          <div class="reveal-scale d2 bg-[#111111] border border-white/15 hover:border-[#ff7043]/60 rounded-3xl p-6 sm:p-8 space-y-4 relative overflow-hidden shadow-2xl transition-all duration-300">
            <div class="flex items-center justify-between">
              <img src="/odd5.webp" alt="ODD 5 Égalité entre les sexes" class="h-14 sm:h-16 w-auto object-contain rounded-lg shadow-md" />
              <span class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-[10px] font-display uppercase tracking-widest font-bold">
                EGALITE DES SEXES
              </span>
            </div>

            <div class="space-y-2">
              <h3 class="font-display text-lg sm:text-xl text-white uppercase tracking-tight font-bold">
                EGALITE ENTRE LES SEXES
              </h3>
              <p class="text-xs sm:text-sm text-white/70 font-body leading-relaxed">
                Accès paritaire aux activités physiques, créneaux dédiés et renforcement de l'autonomie des collaboratrices.
              </p>
            </div>

            <div class="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/50">
              <span>Livrable : Parité & inclusion</span>
              <span class="text-white font-bold">Cible 5.5</span>
            </div>
          </div>

          <!-- ODD 8 -->
          <div class="reveal-scale d3 bg-[#111111] border border-white/15 hover:border-[#ff7043]/60 rounded-3xl p-6 sm:p-8 space-y-4 relative overflow-hidden shadow-2xl transition-all duration-300">
            <div class="flex items-center justify-between">
              <img src="/odd8.webp" alt="ODD 8 Travail décent et croissance" class="h-14 sm:h-16 w-auto object-contain rounded-lg shadow-md" />
              <span class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-[10px] font-display uppercase tracking-widest font-bold">
                TRAVAIL DECENT
              </span>
            </div>

            <div class="space-y-2">
              <h3 class="font-display text-lg sm:text-xl text-white uppercase tracking-tight font-bold">
                TRAVAIL DECENT & CROISSANCE
              </h3>
              <p class="text-xs sm:text-sm text-white/70 font-body leading-relaxed">
                Promotion d'un environnement de travail sûr, sain et épanouissant pour l'ensemble des salariés.
              </p>
            </div>

            <div class="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/50">
              <span>Livrable : QVT & Sécurité</span>
              <span class="text-[#ff7043] font-bold">Cible 8.8</span>
            </div>
          </div>

          <!-- ODD 10 -->
          <div class="reveal-scale d1 bg-[#111111] border border-white/15 hover:border-[#ff7043]/60 rounded-3xl p-6 sm:p-8 space-y-4 relative overflow-hidden shadow-2xl transition-all duration-300">
            <div class="flex items-center justify-between">
              <img src="/odd10.webp" alt="ODD 10 Inégalités réduites" class="h-14 sm:h-16 w-auto object-contain rounded-lg shadow-md" />
              <span class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-[10px] font-display uppercase tracking-widest font-bold">
                INCLUSION & EQUITE
              </span>
            </div>

            <div class="space-y-2">
              <h3 class="font-display text-lg sm:text-xl text-white uppercase tracking-tight font-bold">
                INEGALITES REDUITES
              </h3>
              <p class="text-xs sm:text-sm text-white/70 font-body leading-relaxed">
                Inclusion sans distinction de poste, de niveau sportif ou de condition physique. Pratique accessible à tous.
              </p>
            </div>

            <div class="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/50">
              <span>Livrable : Accessibilité universelle</span>
              <span class="text-white font-bold">Cible 10.2</span>
            </div>
          </div>

          <!-- ODD 11 -->
          <div class="reveal-scale d2 bg-[#111111] border border-white/15 hover:border-[#ff7043]/60 rounded-3xl p-6 sm:p-8 space-y-4 relative overflow-hidden shadow-2xl transition-all duration-300">
            <div class="flex items-center justify-between">
              <img src="/odd11.webp" alt="ODD 11 Villes et communautés durables" class="h-14 sm:h-16 w-auto object-contain rounded-lg shadow-md" />
              <span class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-[10px] font-display uppercase tracking-widest font-bold">
                COMMUNAUTES DURABLES
              </span>
            </div>

            <div class="space-y-2">
              <h3 class="font-display text-lg sm:text-xl text-white uppercase tracking-tight font-bold">
                VILLES & COMMUNAUTES DURABLES
              </h3>
              <p class="text-xs sm:text-sm text-white/70 font-body leading-relaxed">
                Réappropriation des espaces publics urbains et naturels pour une pratique sportive partagée et citoyenne.
              </p>
            </div>

            <div class="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/50">
              <span>Livrable : Ancrage territorial</span>
              <span class="text-[#ff7043] font-bold">Cible 11.7</span>
            </div>
          </div>

          <!-- ODD 17 -->
          <div class="reveal-scale d3 bg-[#111111] border border-white/15 hover:border-[#ff7043]/60 rounded-3xl p-6 sm:p-8 space-y-4 relative overflow-hidden shadow-2xl transition-all duration-300">
            <div class="flex items-center justify-between">
              <img src="/odd17.webp" alt="ODD 17 Partenariats pour la réalisation des objectifs" class="h-14 sm:h-16 w-auto object-contain rounded-lg shadow-md" />
              <span class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-[10px] font-display uppercase tracking-widest font-bold">
                PARTENARIATS
              </span>
            </div>

            <div class="space-y-2">
              <h3 class="font-display text-lg sm:text-xl text-white uppercase tracking-tight font-bold">
                PARTENARIATS POUR LES OBJECTIFS
              </h3>
              <p class="text-xs sm:text-sm text-white/70 font-body leading-relaxed">
                Synergie public-privé-associatif pour déployer des actions locales durables à fort impact sociétal.
              </p>
            </div>

            <div class="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/50">
              <span>Livrable : Co-construction</span>
              <span class="text-white font-bold">Cible 17.17</span>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- SECTION RAPPORT RSE EXÉCUTIF -->
    <section id="rse" class="relative z-10 py-16 sm:py-24 border-b border-white/10 bg-[#080808]">
      <div class="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <!-- Colonne Gauche : Explication -->
        <div class="reveal-left lg:col-span-6 space-y-6">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ff7043]/15 border border-[#ff7043]/30 text-[#ff7043] font-display text-[10px] uppercase tracking-widest font-bold">
            RAPPORT RSE & QVT · LIVRABLE CLES-EN-MAIN
          </div>

          <h2 class="font-display text-3xl sm:text-5xl text-white uppercase tracking-tight leading-none">
            TRANSFORMEZ VOS ACTIONS EN <span class="text-[#ff7043]">OUTIL RSE</span>
          </h2>

          <p class="text-sm sm:text-base text-white/80 font-body leading-relaxed">
            Chaque programme BSD Sport est documenté pour alimenter directement le bilan RSE et la démarche QVT de votre entreprise.
          </p>

          <!-- 4 Étapes -->
          <div class="space-y-4 pt-2">
            <div class="reveal d1 flex items-start gap-4 p-4 rounded-2xl bg-[#111111] border border-white/10 shadow-md">
              <span class="w-8 h-8 rounded-lg bg-[#ff7043] text-black font-display text-xs font-bold flex items-center justify-center shrink-0">1</span>
              <div>
                <h4 class="font-display text-xs uppercase text-white font-bold">DIAGNOSTIC INITIAL</h4>
                <p class="text-xs text-white/60">Sondage collaborateurs, identification des besoins et des contraintes RH.</p>
              </div>
            </div>

            <div class="reveal d2 flex items-start gap-4 p-4 rounded-2xl bg-[#111111] border border-white/10 shadow-md">
              <span class="w-8 h-8 rounded-lg bg-[#ff7043] text-black font-display text-xs font-bold flex items-center justify-center shrink-0">2</span>
              <div>
                <h4 class="font-display text-xs uppercase text-white font-bold">INTERVENTIONS DOCUMENTEES</h4>
                <p class="text-xs text-white/60">Suivi de participation, assiduité et retours qualitatifs post-séance.</p>
              </div>
            </div>

            <div class="reveal d3 flex items-start gap-4 p-4 rounded-2xl bg-[#111111] border border-white/10 shadow-md">
              <span class="w-8 h-8 rounded-lg bg-[#ff7043] text-black font-display text-xs font-bold flex items-center justify-center shrink-0">3</span>
              <div>
                <h4 class="font-display text-xs uppercase text-white font-bold">RAPPORT RSE PERIODIQUE</h4>
                <p class="text-xs text-white/60">Bilan chiffré complet, témoignages, visuels et cartographie des ODD.</p>
              </div>
            </div>

            <div class="reveal d4 flex items-start gap-4 p-4 rounded-2xl bg-[#111111] border border-white/10 shadow-md">
              <span class="w-8 h-8 rounded-lg bg-[#ff7043] text-black font-display text-xs font-bold flex items-center justify-center shrink-0">4</span>
              <div>
                <h4 class="font-display text-xs uppercase text-white font-bold">PILOTAGE QVT CONTINU</h4>
                <p class="text-xs text-white/60">Indicateurs clés pour mesurer le retour sur investissement humain et fiscal.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Colonne Droite : Card Exemple Rapport RSE -->
        <div class="reveal-right lg:col-span-6">
          <div class="bg-[#111111] border border-white/15 rounded-3xl p-8 shadow-2xl space-y-6 relative overflow-hidden">
            <div class="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span class="text-[10px] text-[#ff7043] font-display uppercase tracking-widest block font-bold">LIVRABLE TYPE</span>
                <h3 class="font-display text-xl text-white uppercase font-bold">RAPPORT RSE & QVT EXEMPLAIRE</h3>
              </div>
              <span class="px-3 py-1 rounded-full bg-white/10 text-xs text-white/80 font-mono">EDITION 2026</span>
            </div>

            <!-- Stats Live -->
            <div class="grid grid-cols-2 gap-4">
              <div class="p-4 rounded-xl bg-black/60 border border-white/10 text-center">
                <span class="font-display text-2xl text-[#ff7043] font-bold block">78%</span>
                <span class="text-[10px] text-white/60 uppercase font-display">PARTICIPATION</span>
              </div>
              <div class="p-4 rounded-xl bg-black/60 border border-white/10 text-center">
                <span class="font-display text-2xl text-white font-bold block">4.8/5</span>
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
              <div class="flex justify-between border-b border-white/5 py-1.5">
                <span>Séances réalisées :</span>
                <span class="font-bold text-white">12 sessions / trimestre</span>
              </div>
              <div class="flex justify-between border-b border-white/5 py-1.5">
                <span>ODD couverts :</span>
                <span class="font-bold text-[#ff7043]">6 Objectifs ONU</span>
              </div>
              <div class="flex justify-between border-b border-white/5 py-1.5">
                <span>Rapport livré :</span>
                <span class="font-bold text-white">✓ PDF + Synthèse CSE</span>
              </div>
            </div>

            <a 
              href="#contact-b2b" 
              @click.prevent="scrollToSection('contact-b2b')"
              class="block text-center w-full py-4 rounded-full bg-[#ff7043] hover:bg-white text-black font-display text-xs uppercase tracking-wider font-bold transition-all shadow-xl cursor-pointer"
            >
              DEMANDER VOTRE DIAGNOSTIC RSE →
            </a>
          </div>
        </div>

      </div>
    </section>

    <!-- SECTION LEVIERS FINANCIERS -->
    <section id="finances" class="relative z-10 py-16 sm:py-24 border-b border-white/10 bg-[#0c0c0c]">
      <div class="max-w-7xl mx-auto px-6 sm:px-12 space-y-12">
        
        <div class="reveal text-center max-w-3xl mx-auto space-y-3">
          <span class="text-[#ff7043] font-display text-xs uppercase tracking-widest block font-bold">
            LEVIERS FINANCIERS & OPTIMISATION
          </span>
          <h2 class="font-display text-3xl sm:text-5xl text-white uppercase tracking-tight leading-none">
            UN INVESTISSEMENT OPTIMISE
          </h2>
          <p class="text-sm sm:text-base text-white/70 font-body">
            Des dispositifs fiscaux et de cofinancement pour maximiser votre budget RH & RSE.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div class="reveal-scale d1 bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-3 hover:border-[#ff7043]/50 transition-all duration-300 shadow-xl">
            <span class="font-display text-2xl text-[#ff7043] font-bold block">60%</span>
            <h3 class="font-display text-base text-white uppercase font-bold">MECENAT D'ENTREPRISE</h3>
            <p class="text-xs text-white/70 font-body leading-relaxed">
              60% de réduction d'impôt sur les sociétés (IS) sur votre don d'action sociétale.
            </p>
          </div>

          <div class="reveal-scale d2 bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-3 hover:border-[#ff7043]/50 transition-all duration-300 shadow-xl">
            <span class="font-display text-2xl text-white font-bold block">OPCO</span>
            <h3 class="font-display text-base text-white uppercase font-bold">FINANCEMENT OPCO</h3>
            <p class="text-xs text-white/70 font-body leading-relaxed">
              Cofinancement possible via votre OPCO dans le cadre des démarches de prévention.
            </p>
          </div>

          <div class="reveal-scale d3 bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-3 hover:border-[#ff7043]/50 transition-all duration-300 shadow-xl">
            <span class="font-display text-2xl text-[#ff7043] font-bold block">URSSAF</span>
            <h3 class="font-display text-base text-white uppercase font-bold">EXONERATION URSSAF</h3>
            <p class="text-xs text-white/70 font-body leading-relaxed">
              Exonération de cotisations sociales sous les plafonds légaux de la pratique sportive.
            </p>
          </div>

          <div class="reveal-scale d4 bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-3 hover:border-[#ff7043]/50 transition-all duration-300 shadow-xl">
            <span class="font-display text-2xl text-white font-bold block">QVT</span>
            <h3 class="font-display text-base text-white uppercase font-bold">DEPENSES IMPUTABLES</h3>
            <p class="text-xs text-white/70 font-body leading-relaxed">
              Actions intégralement imputables au budget Qualité de Vie au Travail et RSE.
            </p>
          </div>

        </div>

      </div>
    </section>

    <!-- SECTION NOTRE METHODE -->
    <section id="methode" class="relative z-10 py-16 sm:py-24 border-b border-white/10 bg-[#080808]">
      <div class="max-w-7xl mx-auto px-6 sm:px-12 space-y-12">
        
        <div class="reveal text-center max-w-3xl mx-auto space-y-3">
          <span class="text-[#ff7043] font-display text-xs uppercase tracking-widest block font-bold">
            NOTRE METHODE D'ACCOMPAGNEMENT
          </span>
          <h2 class="font-display text-3xl sm:text-5xl text-white uppercase tracking-tight leading-none">
            COMMENT CA FONCTIONNE ?
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div class="reveal d1 p-6 rounded-2xl bg-[#111111] border border-white/10 space-y-3 relative shadow-lg">
            <span class="font-display text-xs text-[#ff7043] uppercase tracking-widest font-bold">01</span>
            <h3 class="font-display text-lg text-white uppercase font-bold">DIAGNOSTIC</h3>
            <p class="text-xs text-white/70 leading-relaxed">
              Sondage collaborateurs, cartographie des risques et identification des objectifs RH.
            </p>
          </div>

          <div class="reveal d2 p-6 rounded-2xl bg-[#111111] border border-white/10 space-y-3 relative shadow-lg">
            <span class="font-display text-xs text-[#ff7043] uppercase tracking-widest font-bold">02</span>
            <h3 class="font-display text-lg text-white uppercase font-bold">SUR MESURE</h3>
            <p class="text-xs text-white/70 leading-relaxed">
              Plan d'action adapté à vos métiers, vos horaires et vos contraintes budgétaires.
            </p>
          </div>

          <div class="reveal d3 p-6 rounded-2xl bg-[#111111] border border-white/10 space-y-3 relative shadow-lg">
            <span class="font-display text-xs text-[#ff7043] uppercase tracking-widest font-bold">03</span>
            <h3 class="font-display text-lg text-white uppercase font-bold">INTERVENTIONS TERRAIN</h3>
            <p class="text-xs text-white/70 leading-relaxed">
              Séances dispensées par nos éducateurs sportifs diplômés d'État sur votre site ou en extérieur.
            </p>
          </div>

          <div class="reveal d4 p-6 rounded-2xl bg-[#111111] border border-white/10 space-y-3 relative shadow-lg">
            <span class="font-display text-xs text-[#ff7043] uppercase tracking-widest font-bold">04</span>
            <h3 class="font-display text-lg text-white uppercase font-bold">RAPPORT & BILAN</h3>
            <p class="text-xs text-white/70 leading-relaxed">
              Synthèse chiffrée, cartographie ODD et livrable directement intégrable au rapport RSE.
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
import { useReveal } from '@/composables/useReveal'

const { setProfile } = useProfile()
useReveal()

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  setProfile('entreprises')
})
</script>

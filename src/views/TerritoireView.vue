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

    <!-- Glow Orange Signature BSD -->
    <div class="fixed top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#ff7043]/12 blur-[150px] pointer-events-none" aria-hidden="true"></div>

    <!-- Header Navigation Globale -->
    <NavbarHeader />

    <!-- HERO SECTION TERRITOIRES -->
    <section class="relative pt-32 sm:pt-44 pb-16 sm:pb-24 px-4 sm:px-8 max-w-6xl mx-auto text-center z-10">
      <div class="relative z-10 space-y-6">
        
        <!-- Pill Badge Association -->
        <div class="reveal inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#111111] border border-white/15 text-[#ff7043] font-display text-[10px] sm:text-xs uppercase tracking-[0.2em] shadow-xl backdrop-blur-md font-bold">
          <span class="w-2 h-2 rounded-full bg-[#ff7043] animate-pulse"></span>
          <span>ASSOCIATION LOI 1901 — GRENOBLE, ISERE</span>
        </div>

        <!-- Titre Principal -->
        <h1 class="reveal d1 font-display text-3xl xs:text-4xl sm:text-6xl lg:text-7xl xl:text-8xl uppercase tracking-tight text-white leading-[1.05] drop-shadow-2xl">
          BSD SPORT — <span class="text-[#ff7043] block sm:inline mt-1 sm:mt-0">AU SERVICE DES POPULATIONS</span>
        </h1>

        <!-- Sous-titre / Description -->
        <p class="reveal d2 text-sm sm:text-base lg:text-lg text-white/85 font-body max-w-3xl mx-auto leading-relaxed px-2">
          BSD Sport, créée il y a plus de 10 ans, est une association grenobloise spécialisée dans le déploiement d'actions sportives à fort impact social. Chaque dispositif est co-construit avec les acteurs du territoire.
        </p>

        <!-- CTA Action Buttons -->
        <div class="reveal d3 flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a 
            href="#actions" 
            @click.prevent="scrollToSection('actions')"
            class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#ff7043] hover:bg-white text-black font-display text-xs tracking-wider uppercase shadow-2xl transition-all duration-300 group font-bold"
          >
            <span>DECOUVRIR NOS ACTIONS</span>
            <span class="transition-transform group-hover:translate-x-1">→</span>
          </a>

          <a 
            href="#contact-terr" 
            @click.prevent="scrollToSection('contact-terr')"
            class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white/10 hover:bg-[#ff7043] border border-white/20 hover:border-[#ff7043] text-white hover:text-black font-display text-xs uppercase tracking-wider backdrop-blur-md transition-all duration-300 font-bold"
          >
            <span>COLLABORER AVEC NOUS</span>
          </a>
        </div>

        <!-- NOTRE DÉMARCHE - Key Metrics Bar -->
        <div class="space-y-4 pt-10 border-t border-white/10 mt-12">
          <span class="reveal text-xs font-display uppercase tracking-widest text-[#ff7043] font-bold block">
            NOTRE DEMARCHE & ANCRAGE
          </span>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
            <div class="reveal-scale d1 p-5 rounded-2xl bg-[#111111] border border-white/10 text-center shadow-xl">
              <span class="font-display text-3xl sm:text-4xl text-[#ff7043] block font-bold">10+</span>
              <span class="text-[10px] sm:text-xs text-white/70 uppercase tracking-wider font-body">ANNEES D'ANCRAGE TERRITORIAL</span>
            </div>
            <div class="reveal-scale d2 p-5 rounded-2xl bg-[#111111] border border-white/10 text-center shadow-xl">
              <span class="font-display text-3xl sm:text-4xl text-white block font-bold">0</span>
              <span class="text-[10px] sm:text-xs text-white/70 uppercase tracking-wider font-body">CONDITION DE NIVEAU REQUISE</span>
            </div>
            <div class="reveal-scale d3 p-5 rounded-2xl bg-[#111111] border border-white/10 text-center shadow-xl">
              <span class="font-display text-3xl sm:text-4xl text-[#ff7043] block font-bold">9+</span>
              <span class="text-[10px] sm:text-xs text-white/70 uppercase tracking-wider font-body">TYPES DE PUBLICS ACCOMPAGNES</span>
            </div>
            <div class="reveal-scale d4 p-5 rounded-2xl bg-[#111111] border border-white/10 text-center shadow-xl">
              <span class="font-display text-3xl sm:text-4xl text-white block font-bold">10</span>
              <span class="text-[10px] sm:text-xs text-white/70 uppercase tracking-wider font-body">ACTIONS DISPONIBLES A CE JOUR</span>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- SECTION PARTENAIRES INSTITUTIONNELS AVEC LOGOS OFFICIELS -->
    <section class="relative z-10 py-10 bg-[#0c0c0c] border-y border-white/10">
      <div class="reveal max-w-6xl mx-auto px-6 space-y-6 text-center">
        <span class="text-xs font-display uppercase tracking-widest text-white/50 block font-bold">
          PARTENAIRES INSTITUTIONNELS
        </span>

        <!-- Badges Logos Partenaires -->
        <div class="flex flex-wrap items-center justify-center gap-6 sm:gap-10 opacity-90">
          <div class="reveal-scale d1 flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 shadow-md">
            <img src="/logo-partenaires/logo-grenoble-alpes.png" alt="Grenoble Alpes Métropole" class="h-8 sm:h-10 object-contain brightness-120" />
            <span class="text-xs font-bold text-white font-body hidden sm:inline">Grenoble Alpes Métropole</span>
          </div>

          <div class="reveal-scale d2 flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 shadow-md">
            <img src="/logo-partenaires/logo-prefecture.png" alt="Préfecture de l'Isère" class="h-8 sm:h-10 object-contain brightness-120" />
            <span class="text-xs font-bold text-white font-body hidden sm:inline">Préfecture de l'Isère</span>
          </div>

          <div class="reveal-scale d3 flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 shadow-md">
            <img src="/logo-partenaires/VillePontdeClaix.png" alt="Ville de Pont-de-Claix" class="h-8 sm:h-10 object-contain brightness-120" />
            <span class="text-xs font-bold text-white font-body hidden sm:inline">Ville de Pont-de-Claix</span>
          </div>

          <div class="reveal-scale d4 flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 shadow-md">
            <img src="/logo-partenaires/logo-decathlon.png" alt="Fondation Décathlon" class="h-8 sm:h-10 object-contain brightness-120" />
            <span class="text-xs font-bold text-white font-body hidden sm:inline">Fondation Décathlon</span>
          </div>

          <div class="reveal-scale d5 flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 shadow-md">
            <img src="/logo-partenaires/logo-caf.png" alt="CAF Isère" class="h-8 sm:h-10 object-contain brightness-120" />
            <span class="text-xs font-bold text-white font-body hidden sm:inline">CAF Isère</span>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 1: CO-CONSTRUIRE PAR LE SPORT ET POUR LE TERRITOIRE -->
    <section class="relative z-10 py-16 sm:py-24 border-b border-white/10 bg-[#080808]">
      <div class="max-w-7xl mx-auto px-6 sm:px-12 space-y-12">
        
        <div class="reveal text-center max-w-4xl mx-auto space-y-3">
          <span class="text-[#ff7043] font-display text-xs uppercase tracking-widest block font-bold">
            VALEURS & PHILOSOPHIE D'ACTION
          </span>
          <h2 class="font-display text-3xl sm:text-5xl text-white uppercase tracking-tight leading-tight">
            CO-CONSTRUIRE PAR LE SPORT ET POUR LE TERRITOIRE
          </h2>
          <p class="text-sm sm:text-base text-white/80 font-body leading-relaxed max-w-3xl mx-auto">
            Des actions sportives ancrées dans le territoire, conçues avec ses acteurs, pour ses populations.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <!-- Pilar 1 -->
          <div class="reveal-scale d1 bg-[#111111] border border-white/10 rounded-3xl p-8 space-y-4 shadow-xl hover:border-[#ff7043]/50 transition-all duration-300">
            <span class="text-xs font-display text-[#ff7043] uppercase tracking-widest font-bold block">01 // ETHIQUE</span>
            <h3 class="font-display text-xl text-white uppercase font-bold">SANS COMPETITION</h3>
            <p class="text-xs sm:text-sm text-white/70 font-body leading-relaxed">
              Nos actions favorisent la progression individuelle et la coopération collective. La performance n'est pas un critère d'accès ni d'évaluation.
            </p>
          </div>

          <!-- Pilar 2 -->
          <div class="reveal-scale d2 bg-[#111111] border border-white/10 rounded-3xl p-8 space-y-4 shadow-xl hover:border-[#ff7043]/50 transition-all duration-300">
            <span class="text-xs font-display text-[#ff7043] uppercase tracking-widest font-bold block">02 // METHODE</span>
            <h3 class="font-display text-xl text-white uppercase font-bold">APPROCHE CO-CONSTRUITE</h3>
            <p class="text-xs sm:text-sm text-white/70 font-body leading-relaxed">
              Chaque dispositif est co-construit avec les structures partenaires en fonction du public ciblé : âge, condition physique, contexte social. Aucun format n'est déployé sans concertation préalable.
            </p>
          </div>

          <!-- Pilar 3 -->
          <div class="reveal-scale d3 bg-[#111111] border border-white/10 rounded-3xl p-8 space-y-4 shadow-xl hover:border-[#ff7043]/50 transition-all duration-300">
            <span class="text-xs font-display text-[#ff7043] uppercase tracking-widest font-bold block">03 // ENGAGEMENT</span>
            <h3 class="font-display text-xl text-white uppercase font-bold">LE SPORT COMME VECTEUR</h3>
            <p class="text-xs sm:text-sm text-white/70 font-body leading-relaxed">
              Le sport est un vecteur de transmission de valeurs, de savoir-être et de savoir-vivre. Découverte, apprentissage, ouverture — nos actions accompagnent la construction des citoyens de demain.
            </p>
          </div>

        </div>

      </div>
    </section>

    <!-- SECTION 2: NOTRE BOUSSOLE (4 AXES) -->
    <section class="relative z-10 py-16 sm:py-24 border-b border-white/10 bg-[#0c0c0c]">
      <div class="max-w-7xl mx-auto px-6 sm:px-12 space-y-12">
        
        <div class="reveal text-center max-w-3xl mx-auto space-y-3">
          <span class="text-[#ff7043] font-display text-xs uppercase tracking-widest block font-bold">
            ORIENTATIONS STRATEGIQUES
          </span>
          <h2 class="font-display text-3xl sm:text-5xl text-white uppercase tracking-tight leading-none">
            NOTRE BOUSSOLE
          </h2>
          <p class="text-sm sm:text-base text-white/70 font-body">
            4 axes fondamentaux qui orientent chaque action déployée sur le terrain.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <!-- Axe 1 -->
          <div class="reveal-scale d1 bg-[#111111] border border-white/10 hover:border-[#ff7043]/50 rounded-3xl p-6 sm:p-8 space-y-3 shadow-2xl transition-all">
            <span class="text-xs font-display text-[#ff7043] uppercase tracking-widest font-bold block">AXE 01</span>
            <h3 class="font-display text-xl text-white uppercase font-bold">SANTE</h3>
            <p class="text-xs sm:text-sm text-white/90 font-bold font-body">Prévention & bien-être physique</p>
            <p class="text-xs text-white/60 font-body leading-relaxed pt-1">
              Lutte contre la sédentarité, ateliers nutrition et Activité Physique Adaptée (APA).
            </p>
          </div>

          <!-- Axe 2 -->
          <div class="reveal-scale d2 bg-[#111111] border border-white/10 hover:border-[#ff7043]/50 rounded-3xl p-6 sm:p-8 space-y-3 shadow-2xl transition-all">
            <span class="text-xs font-display text-[#ff7043] uppercase tracking-widest font-bold block">AXE 02</span>
            <h3 class="font-display text-xl text-white uppercase font-bold">PRATIQUE SPORTIVE</h3>
            <p class="text-xs sm:text-sm text-white/90 font-bold font-body">Accès & inclusion</p>
            <p class="text-xs text-white/60 font-body leading-relaxed pt-1">
              Pratique sans barrière financière ni prérequis, ouverte à toutes les capacités physiques.
            </p>
          </div>

          <!-- Axe 3 -->
          <div class="reveal-scale d3 bg-[#111111] border border-white/10 hover:border-[#ff7043]/50 rounded-3xl p-6 sm:p-8 space-y-3 shadow-2xl transition-all">
            <span class="text-xs font-display text-[#ff7043] uppercase tracking-widest font-bold block">AXE 03</span>
            <h3 class="font-display text-xl text-white uppercase font-bold">SOCIALISATION</h3>
            <p class="text-xs sm:text-sm text-white/90 font-bold font-body">Lien social & cohésion</p>
            <p class="text-xs text-white/60 font-body leading-relaxed pt-1">
              Mixité, rencontres intergénérationnelles et recréation de lien social au cœur du quartier.
            </p>
          </div>

          <!-- Axe 4 -->
          <div class="reveal-scale d4 bg-[#111111] border border-white/10 hover:border-[#ff7043]/50 rounded-3xl p-6 sm:p-8 space-y-3 shadow-2xl transition-all">
            <span class="text-xs font-display text-[#ff7043] uppercase tracking-widest font-bold block">AXE 04</span>
            <h3 class="font-display text-xl text-white uppercase font-bold">ENVIRONNEMENT</h3>
            <p class="text-xs sm:text-sm text-white/90 font-bold font-body">Territoire & citoyenneté</p>
            <p class="text-xs text-white/60 font-body leading-relaxed pt-1">
              Réappropriation des espaces naturels alpins et éco-citoyenneté active.
            </p>
          </div>

        </div>

      </div>
    </section>

    <!-- SECTION 3: NOS PUBLICS CIBLES -->
    <section class="relative z-10 py-16 sm:py-24 border-b border-white/10 bg-[#080808]">
      <div class="max-w-7xl mx-auto px-6 sm:px-12 space-y-10">
        
        <div class="reveal text-center max-w-4xl mx-auto space-y-4">
          <span class="text-[#ff7043] font-display text-xs uppercase tracking-widest block font-bold">
            INCLUSION TOUS PUBLICS
          </span>
          <h2 class="font-display text-3xl sm:text-5xl text-white uppercase tracking-tight leading-none">
            NOS PUBLICS CIBLES
          </h2>
          <p class="text-sm sm:text-base text-white/80 font-body leading-relaxed max-w-3xl mx-auto">
            BSD Sport s'adresse à toute personne souhaitant pratiquer dans un cadre inclusif et bienveillant, avec une attention particulière aux populations éloignées de la pratique sportive.
          </p>
        </div>

        <!-- Grille des 9 Publics -->
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
          <div v-for="(publicItem, index) in publicTargets" :key="publicItem.name" class="reveal-scale p-5 rounded-2xl bg-[#111111] border border-white/10 flex items-center justify-between hover:border-[#ff7043]/50 transition-all shadow-md" :class="`d${(index % 4) + 1}`">
            <div>
              <h3 class="font-display text-xs sm:text-sm text-white uppercase font-bold">{{ publicItem.name }}</h3>
              <span class="text-[10px] text-white/60 font-body block pt-0.5">{{ publicItem.sub }}</span>
            </div>
            <span class="w-2 h-2 rounded-full bg-[#ff7043] shrink-0"></span>
          </div>
        </div>

      </div>
    </section>

    <!-- BANNIÈRE CTA CONSTRUISONS QUELQUE CHOSE ENSEMBLE -->
    <section class="relative z-10 py-14 sm:py-20 bg-[#0c0c0c] border-y border-white/10">
      <div class="reveal max-w-5xl mx-auto px-6 text-center space-y-6">
        <h2 class="font-display text-3xl sm:text-5xl text-white uppercase tracking-tight leading-tight">
          CONSTRUISONS QUELQUE CHOSE ENSEMBLE
        </h2>
        <p class="text-sm sm:text-lg text-white/80 font-body max-w-2xl mx-auto leading-relaxed">
          Déployons ensemble un dispositif adapté à vos publics et à votre territoire.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a 
            href="#contact-terr" 
            @click.prevent="scrollToSection('contact-terr')"
            class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#ff7043] hover:bg-white text-black font-display text-xs uppercase tracking-wider font-bold transition-all shadow-2xl"
          >
            <span>COLLABORER AVEC NOUS</span>
            <span class="transition-transform group-hover:translate-x-1">→</span>
          </a>

          <a 
            href="#actions" 
            @click.prevent="scrollToSection('actions')"
            class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-display text-xs uppercase tracking-wider font-bold transition-all"
          >
            <span>VOIR TOUTES LES ACTIONS</span>
          </a>
        </div>
      </div>
    </section>

    <!-- SECTION 4: QUI SOMMES-NOUS / LE SPORT AU SERVICE DU TERRITOIRE -->
    <section class="relative z-10 py-16 sm:py-24 border-b border-white/10 bg-[#080808]">
      <div class="reveal max-w-5xl mx-auto px-6 sm:px-12 text-center space-y-6">
        <span class="text-[#ff7043] font-display text-xs uppercase tracking-widest block font-bold">
          QUI SOMMES-NOUS ?
        </span>
        <h2 class="font-display text-3xl sm:text-5xl text-white uppercase tracking-tight leading-none">
          LE SPORT AU SERVICE DU TERRITOIRE
        </h2>
        <p class="text-sm sm:text-base lg:text-lg text-white/80 font-body leading-relaxed max-w-3xl mx-auto">
          BSD Sport, créée il y a plus de 10 ans, est une association grenobloise spécialisée dans le déploiement d'actions sportives à fort impact social. Chaque dispositif est co-construit avec les acteurs du territoire.
        </p>
      </div>
    </section>

    <!-- SECTION 5: NOS MODALITÉS D'INTERVENTION (4 MODALITÉS) -->
    <section class="relative z-10 py-16 sm:py-24 border-b border-white/10 bg-[#0c0c0c]">
      <div class="max-w-7xl mx-auto px-6 sm:px-12 space-y-12">
        
        <div class="reveal text-center max-w-3xl mx-auto space-y-3">
          <span class="text-[#ff7043] font-display text-xs uppercase tracking-widest block font-bold">
            METHODOLOGIE TERRAIN
          </span>
          <h2 class="font-display text-3xl sm:text-5xl text-white uppercase tracking-tight leading-none">
            NOS MODALITES D'INTERVENTION
          </h2>
          <p class="text-sm sm:text-base text-white/80 font-body">
            Comment nous travaillons sur le terrain avec les acteurs locaux.
          </p>
          <p class="text-xs sm:text-sm text-white/60 font-body max-w-2xl mx-auto pt-1">
            Nos dispositifs associent pratique sportive, pédagogie active et ancrage territorial pour générer un pouvoir d'agir durable auprès des publics accompagnés.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <!-- Modalité 1 -->
          <div class="reveal-scale d1 bg-[#111111] border border-white/15 rounded-3xl p-8 space-y-4 shadow-xl hover:border-[#ff7043]/50 transition-all">
            <div class="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 class="font-display text-xl text-white uppercase font-bold">PRATIQUE PHYSIQUE</h3>
              <span class="text-xs text-[#ff7043] font-bold font-display uppercase tracking-wider">SEANCES TERRAIN & APA</span>
            </div>
            <p class="text-xs sm:text-sm text-white/80 font-body leading-relaxed">
              De la pratique sportive différenciante, en espaces publics ou en intérieur. Cross training, urban training, Activité Physique Adaptée — autant de formats pour permettre aux publics de s'approprier les espaces par la pratique sportive.
            </p>
          </div>

          <!-- Modalité 2 -->
          <div class="reveal-scale d2 bg-[#111111] border border-white/15 rounded-3xl p-8 space-y-4 shadow-xl hover:border-[#ff7043]/50 transition-all">
            <div class="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 class="font-display text-xl text-white uppercase font-bold">AVENTURE & NATURE</h3>
              <span class="text-xs text-[#ff7043] font-bold font-display uppercase tracking-wider">EXPEDITIONS & BIVOUACS</span>
            </div>
            <p class="text-xs sm:text-sm text-white/80 font-body leading-relaxed">
              Faciliter l'accès à la montagne et aux espaces naturels pour des publics qui n'y ont jamais eu accès. Les activités sportives de montagne restent peu intégrées dans les parcours éducatifs et les opportunités demeurent très limitées en dehors du cadre familial. Randonnées, bivouacs, boot camps — pour explorer, découvrir et se réapproprier son territoire.
            </p>
          </div>

          <!-- Modalité 3 -->
          <div class="reveal-scale d3 bg-[#111111] border border-white/15 rounded-3xl p-8 space-y-4 shadow-xl hover:border-[#ff7043]/50 transition-all">
            <div class="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 class="font-display text-xl text-white uppercase font-bold">MILIEU SCOLAIRE & EDUCATIF</h3>
              <span class="text-xs text-[#ff7043] font-bold font-display uppercase tracking-wider">ETABLISSEMENTS</span>
            </div>
            <p class="text-xs sm:text-sm text-white/80 font-body leading-relaxed">
              BSD Sport intervient directement au sein des établissements scolaires et des structures socio-éducatives. Chaque dispositif est co-construit avec les équipes enseignantes, éducatives et sociales, en cohérence avec le projet d'établissement. Adaptés aux temps scolaires et périscolaires, ils constituent un levier pour renforcer le lien entre l'établissement, les familles et le territoire.
            </p>
          </div>

          <!-- Modalité 4 -->
          <div class="reveal-scale d4 bg-[#111111] border border-white/15 rounded-3xl p-8 space-y-4 shadow-xl hover:border-[#ff7043]/50 transition-all">
            <div class="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 class="font-display text-xl text-white uppercase font-bold">TEMPS FORTS & MOBILISATION</h3>
              <span class="text-xs text-[#ff7043] font-bold font-display uppercase tracking-wider">EVENEMENTS</span>
            </div>
            <p class="text-xs sm:text-sm text-white/80 font-body leading-relaxed">
              Des temps forts qui valorisent le travail accompli et facilitent la rencontre entre publics, professionnels et institutions. La convergence des acteurs du territoire pour engager des actions pérennes et duplicables.
            </p>
          </div>

        </div>

      </div>
    </section>

    <!-- SECTION 6: MODALITÉS DE PARTENARIAT -->
    <section class="relative z-10 py-16 sm:py-24 border-b border-white/10 bg-[#080808]">
      <div class="max-w-7xl mx-auto px-6 sm:px-12 space-y-12">
        
        <div class="reveal text-center max-w-3xl mx-auto space-y-3">
          <span class="text-[#ff7043] font-display text-xs uppercase tracking-widest block font-bold">
            INGENIERIE & CO-FINANCEMENT
          </span>
          <h2 class="font-display text-3xl sm:text-5xl text-white uppercase tracking-tight leading-none">
            MODALITES DE PARTENARIAT
          </h2>
          <p class="text-sm sm:text-base text-white/80 font-body">
            Comment s'engager avec nous ? Toutes les formes d'engagement sont possibles et co-construites selon vos contraintes et vos objectifs.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div class="reveal-scale d1 bg-[#111111] border border-white/15 rounded-3xl p-8 space-y-4 shadow-xl">
            <span class="text-xs font-display text-[#ff7043] uppercase tracking-widest font-bold block">VOLET 01</span>
            <h3 class="font-display text-xl text-white uppercase font-bold">SUBVENTION PUBLIQUE</h3>
            <p class="text-xs sm:text-sm text-white/80 font-body leading-relaxed">
              Collectivités, DDCS, CAF, Métropole, Préfecture, Région. Financement d'une action entière ou d'un volet ciblé.
            </p>
          </div>

          <div class="reveal-scale d2 bg-[#111111] border border-white/15 rounded-3xl p-8 space-y-4 shadow-xl">
            <span class="text-xs font-display text-[#ff7043] uppercase tracking-widest font-bold block">VOLET 02</span>
            <h3 class="font-display text-xl text-white uppercase font-bold">MECENAT & RSE</h3>
            <p class="text-xs sm:text-sm text-white/80 font-body leading-relaxed">
              Entreprises souhaitant s'engager concrètement sur leur territoire. Soutien financier, mise à disposition de compétences ou co-construction d'une action sur mesure.
            </p>
          </div>

          <div class="reveal-scale d3 bg-[#111111] border border-white/15 rounded-3xl p-8 space-y-4 shadow-xl">
            <span class="text-xs font-display text-[#ff7043] uppercase tracking-widest font-bold block">VOLET 03</span>
            <h3 class="font-display text-xl text-white uppercase font-bold">PARTENARIAT OPERATIONNEL</h3>
            <p class="text-xs sm:text-sm text-white/80 font-body leading-relaxed">
              Établissements scolaires, structures jeunesse, associations, fondations. Nous intervenons au sein de vos structures et construisons ensemble un dispositif adapté à vos publics et à votre calendrier.
            </p>
          </div>

        </div>

        <!-- CITATION D'ENGAGEMENT CODE DU SPORT -->
        <div class="reveal d2 bg-[#111111] border border-white/15 rounded-3xl p-8 sm:p-10 shadow-2xl relative">
          <div class="space-y-3 text-center sm:text-left">
            <h4 class="font-display text-base uppercase text-[#ff7043] font-bold tracking-wider">
              LE SPORT COMME DROIT, PAS COMME PRIVILEGE
            </h4>
            <p class="text-xs sm:text-sm text-white/85 font-body leading-relaxed italic">
              « Conformément à l'article L.100-1 du code du sport : les activités physiques et sportives contribuent à la réduction des inégalités sociales et culturelles, ainsi qu'à la santé. Leur promotion pour tous est d'intérêt général. »
            </p>
            <p class="text-xs text-white/60 font-mono pt-1">
              C'est ce principe fondamental qui oriente chacune de nos actions.
            </p>
          </div>
        </div>

      </div>
    </section>

    <!-- SECTION 7: VOS ACTIONS CONCRÈTES & DISPOSITIFS (10 ACTIONS FILTRABLES) -->
    <section id="actions" class="relative z-10 py-16 sm:py-24 border-b border-white/10 bg-[#0c0c0c]">
      <div class="max-w-7xl mx-auto px-6 sm:px-12 space-y-12">
        
        <div class="reveal text-center max-w-4xl mx-auto space-y-4">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111111] border border-white/15 text-[#ff7043] font-display text-[10px] uppercase tracking-widest font-bold">
            10 DISPOSITIFS TERRAIN
          </div>

          <h2 class="font-display text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-none">
            DES ACTIONS CONCRETES, FINANCABLES, CO-CONSTRUCTIBLES
          </h2>

          <p class="text-sm sm:text-base text-white/80 font-body leading-relaxed max-w-3xl mx-auto">
            L'ensemble de nos dispositifs, pour tous les publics et tous types de structures. Cliquez sur une action pour accéder au détail de ses objectifs et de son dispositif.
          </p>
        </div>

        <!-- FILTRES PAR CATÉGORIE -->
        <div class="reveal d1 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <button
            v-for="cat in actionCategories"
            :key="cat.id"
            @click="selectedCategory = cat.id"
            class="px-4 py-2 rounded-full font-display text-[11px] sm:text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer border"
            :class="selectedCategory === cat.id 
              ? 'bg-[#ff7043] text-black border-[#ff7043] font-bold shadow-lg scale-105' 
              : 'bg-white/5 hover:bg-white/10 text-white/70 border-white/15 hover:text-white'"
          >
            {{ cat.label }}
          </button>
        </div>

        <!-- GRILLE DES 10 ACTIONS -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="(action, index) in filteredActions" 
            :key="action.id"
            class="reveal-scale bg-[#111111] border border-white/15 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl hover:border-[#ff7043]/60 transition-all duration-300 group"
            :class="`d${(index % 3) + 1}`"
          >
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <span class="px-3 py-1 rounded-full bg-white/10 text-[#ff7043] font-display text-[10px] uppercase tracking-widest font-bold">
                  {{ action.categoryTag }}
                </span>
                <span class="text-xs font-mono text-white/50">Isère / Métropole</span>
              </div>

              <h3 class="font-display text-xl text-white uppercase font-bold group-hover:text-[#ff7043] transition-colors leading-snug">
                {{ action.title }}
              </h3>

              <p class="text-xs sm:text-sm text-white/80 font-body leading-relaxed">
                {{ action.description }}
              </p>
            </div>

            <div class="pt-6 border-t border-white/10 mt-6 space-y-3">
              <div class="flex items-center justify-between text-xs">
                <span class="text-white/50 uppercase font-display">Public Cible :</span>
                <span class="font-bold text-white font-body">{{ action.public }}</span>
              </div>

              <a 
                href="#contact-terr"
                @click.prevent="scrollToSection('contact-terr')"
                class="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-white/10 hover:bg-[#ff7043] border border-white/15 text-white hover:text-black font-display text-[11px] uppercase tracking-wider font-bold transition-all cursor-pointer"
              >
                <span>DEMANDER CE DISPOSITIF →</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- SECTION FORMULAIRE DE CONTACT TERRITOIRES -->
    <div id="contact-terr">
      <ContactSection />
    </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import NavbarHeader from '@/components/common/NavbarHeader.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import { useProfile } from '@/composables/useProfile'
import { useReveal } from '@/composables/useReveal'

const { setProfile } = useProfile()
useReveal()

const selectedCategory = ref('all')

const actionCategories = [
  { id: 'all', label: 'Toutes les actions' },
  { id: 'sante', label: 'Santé' },
  { id: 'scolaire', label: 'Jeunesse & scolaire' },
  { id: 'feminine', label: 'Pratique féminine' },
  { id: 'environnement', label: 'Environnement' },
  { id: 'famille', label: 'Famille' },
  { id: 'insertion', label: 'Insertion' }
]

const publicTargets = [
  { name: 'Pratique féminine', sub: 'Dispositifs dédiés & autonomie' },
  { name: 'Étudiants', sub: 'Pratique santé campus' },
  { name: 'Jeunes en décrochage', sub: 'Remobilisation & citoyenneté' },
  { name: 'Publics issus de QPV', sub: 'Sport au pied des immeubles' },
  { name: 'Seniors', sub: 'APA +65 ans & lien social' },
  { name: 'Publics APA', sub: 'Activité Physique Adaptée' },
  { name: 'Recherche d\'emploi', sub: 'Sport comme levier d\'insertion' },
  { name: 'Familles', sub: 'Défis intergénérationnels' },
  { name: 'Enfants', sub: 'Éducation nutrition & mouvement' }
]

const actionsList = [
  {
    id: 'classes-prep-feminine',
    categoryId: 'feminine',
    categoryTag: 'Pratique féminine',
    title: 'Classes préparatoires — pratique sportive féminine',
    description: 'Dispositif exclusivement dédié à la pratique sportive féminine. Au-delà de la pratique, il s\'agit de créer du lien social, de favoriser l\'autonomie et de constituer un espace d\'échange hors du foyer. Un point d\'appui pour orienter vers les dispositifs et partenaires compétents en cas de besoin. Aucun prérequis sportif requis.',
    public: 'Femmes tous profils'
  },
  {
    id: 'generation-sport',
    categoryId: 'famille',
    categoryTag: 'Famille',
    title: 'Génération Sport',
    description: 'Grande fête intergénérationnelle, Génération Sport réunit familles et amis autour de défis sportifs et ludiques partagés. Tisser ou retisser du lien familial par le prisme du sport, renforcer la cohésion entre les générations — une journée qui se clôture par une cérémonie de remise de prix pour reconnaître l\'implication de chaque participant.',
    public: 'Familles, toutes générations'
  },
  {
    id: 'my-city-express',
    categoryId: 'scolaire',
    categoryTag: 'Jeunesse & scolaire',
    title: 'My City Express',
    description: 'Jeu de piste urbain mêlant sport et citoyenneté. En équipe, les participants relèvent des défis physiques, découvrent leur ville, ses institutions et ses acteurs. Un dispositif pour développer le sentiment d\'appartenance au territoire et favoriser l\'engagement citoyen.',
    public: 'Jeunes, collégiens, lycéens, CER/CEF'
  },
  {
    id: 'second-souffle',
    categoryId: 'sante',
    categoryTag: 'Seniors & Sante',
    title: 'Second Souffle',
    description: 'Programme annuel d\'Activité Physique Adaptée destiné aux seniors de + 65 ans. Né d\'un constat partagé par les acteurs locaux — isolement croissant, sédentarité, fracture territoriale — Second Souffle propose un parcours progressif combinant séances hebdomadaires, randonnées trimestrielles, ateliers santé et temps d\'échange. Le programme se clôture par une grande fête intergénérationnelle réunissant familles et participants.',
    public: 'Seniors + 65 ans'
  },
  {
    id: 'premiers-sommets',
    categoryId: 'environnement',
    categoryTag: 'Montagne & nature',
    title: 'Premiers Sommets',
    description: 'Premiers Sommets est un parcours annuel qui ouvre l\'accès aux sports de montagne à des publics qui n\'y ont jamais eu accès. Cross training hebdomadaire, randonnées mensuelles, bivouac — un programme progressif sur les massifs grenoblois, accessible à tous les niveaux. Une expérience pour renouer avec son territoire et dépasser ses appréhensions.',
    public: '16 ans+, tous niveaux'
  },
  {
    id: 'cross-pour-tous',
    categoryId: 'sante',
    categoryTag: 'Sante & lien social',
    title: 'Cross Pour Tous',
    description: 'Créneau intermédiaire et inclusif, Cross Pour Tous s\'adresse à tous les publics souhaitant reprendre une activité physique en douceur avant d\'intégrer les structures sportives classiques. Inspiré du dispositif Classe Préparatoire, il constitue un premier pas vers la pratique régulière, dans les espaces publics du territoire. Objectif : 20 à 30 participants par session.',
    public: 'Tous publics'
  },
  {
    id: 'bien-dans-ses-baskets',
    categoryId: 'scolaire',
    categoryTag: 'Jeunesse & familles',
    title: 'Bien dans ses baskets, bien dans son assiette',
    description: 'Programme annuel d\'accompagnement nutritionnel adossé à la pratique sportive, destiné aux enfants, adolescents et leurs familles. Le dispositif intègre des temps nutrition en fin de séance, des ateliers mensuels avec un diététicien et des sorties pédagogiques sur le territoire. Les enfants deviennent relais au sein du foyer pour ancrer progressivement des pratiques alimentaires équilibrées.',
    public: 'Enfants, adolescents, familles'
  },
  {
    id: 'escape-force',
    categoryId: 'insertion',
    categoryTag: 'Insertion & citoyenneté',
    title: 'Escape Force',
    description: 'Dispositif immersif grandeur nature encadré par d\'anciens militaires. Escape Force soumet les participants à des défis physiques et mentaux exigeants, conçus pour développer la cohésion de groupe, la confiance en soi et le sens des responsabilités. Un format adapté aux publics en situation de décrochage, aux structures d\'insertion et aux CER/CEF.',
    public: '16–25 ans, décrochage, CER/CEF'
  },
  {
    id: 'clean-training',
    categoryId: 'environnement',
    categoryTag: 'Sport & environnement',
    title: 'Clean Training',
    description: 'Clean Training associe la pratique sportive au ramassage de déchets dans les espaces publics. Un dispositif accessible à tous, sans condition de niveau, qui permet de pratiquer tout en s\'engageant concrètement pour son territoire. Format événementiel ou récurrent, idéal pour les sorties scolaires et les actions citoyennes.',
    public: 'Tous publics, scolaires'
  },
  {
    id: 'votre-projet-coconstruction',
    categoryId: 'insertion',
    categoryTag: 'Sur mesure',
    title: 'Votre projet — co-construction',
    description: 'Nous concevons avec vous une action selon votre thématique, vos publics et vos contraintes. Co-construction, pertinence et ancrage territorial garantis.',
    public: 'À définir ensemble'
  }
]

const filteredActions = computed(() => {
  if (selectedCategory.value === 'all') return actionsList
  return actionsList.filter(a => a.categoryId === selectedCategory.value)
})

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  setProfile('territoire')
})
</script>

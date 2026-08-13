<template>
  <div class="relative w-full h-24 sm:h-36 md:h-44 lg:h-52 bg-[#ff7043] overflow-hidden z-20 shadow-[inset_0_6px_24px_rgba(0,0,0,0.2),inset_0_-6px_24px_rgba(0,0,0,0.2)]">
    
    <!-- Grain Overlay (Intense Concrete/Paper Grain) -->
    <div 
      class="absolute inset-0 z-0 opacity-45 mix-blend-multiply pointer-events-none"
      style="background-image: url('data:image/svg+xml,%3Csvg width=\'256\' height=\'256\' viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'orangeGrain\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23orangeGrain)\'/%3E%3C/svg%3E');"
      aria-hidden="true"
    ></div>

    <!-- Additional Soft Inner Shadow Vignette for Depth -->
    <div class="absolute inset-0 z-1 pointer-events-none bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>

  </div>
</template>

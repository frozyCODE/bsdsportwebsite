import { ref, computed } from 'vue'

const defaultProfile = {
  id: null,
  title: 'Global BSD',
  shortName: 'Choisissez votre profil',
  badgeLabel: 'Choisir un profil',
  badgeIcon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg>',
  baseline: 'BSD ATHLETIC PROGRAM',
  description: 'Selectionnez votre profil ci-dessous pour acceder a votre espace dedie.',
  accentColor: '#D9A441',
  formTitle: 'Contact & Renseignements',
  formTitleFormatted: '<span class="block mb-1 sm:mb-2">CONTACT &</span><span class="block">RENSEIGNEMENTS</span>',
  formSubtitle: 'Une question ? Selectionnez votre profil ci-dessus ou envoyez-nous un message.',
  submitLabel: 'ENVOYER VOTRE MESSAGE →'
}

const profiles = [
  {
    id: 'particuliers',
    title: 'Particuliers',
    shortName: 'Particulier / Athlete',
    badgeLabel: 'Particulier',
    badgeIcon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
    baseline: 'BSD, VOTRE TERRAIN DE JEU',
    description: 'Cours collectifs, coaching perso, stages et remise en forme. Une offre ouverte à tous les niveaux, pensée pour que chacun avance à son rythme.',
    icon: '<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/></svg>',
    styleClass: 'part',
    accentColor: '#FF4B2E',
    formTitle: 'Rejoindre la communaute BSD',
    formTitleFormatted: '<span class="block mb-1 sm:mb-2">REJOINDRE LA</span><span class="block chrome-silver-text">COMMUNAUTE BSD</span>',
    formSubtitle: 'Renseignements & inscription.',
    submitLabel: 'ENVOYER VOTRE DEMANDE →'
  },
  {
    id: 'entreprises',
    title: 'Entreprises',
    shortName: 'Entreprise / B2B',
    badgeLabel: 'Entreprise',
    badgeIcon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
    baseline: 'BSD AU SERVICE DE VOTRE ENTREPRISE',
    description: 'Séminaires sportifs, team building, préparation physique et mentale. Le sport comme levier d\'engagement pour vos équipes.',
    icon: '<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/><path d="M3 9h6"/><path d="M3 15h6"/><path d="M15 6h.01"/><path d="M15 12h.01"/><path d="M15 18h.01"/></svg>',
    styleClass: 'entr',
    accentColor: '#FFC436',
    formTitle: 'Devenir Partenaire BSD',
    formTitleFormatted: '<span class="block mb-1 sm:mb-2">DEVENIR PARTENAIRE</span><span class="block">BSD</span>',
    formSubtitle: 'Sponsoring, evenements sur-mesure & mecenat.',
    submitLabel: 'PROPOSER UN PARTENARIAT →'
  },
  {
    id: 'territoires',
    title: 'Territoires',
    shortName: 'Territoire / Collectivite',
    badgeLabel: 'Territoire',
    badgeIcon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>',
    baseline: 'BSD AU SERVICE DE LA POPULATION',
    description: 'Fondations, collectivités, institutions : le sport comme lien social et outil d\'inclusion.',
    icon: '<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>',
    styleClass: 'terr',
    accentColor: '#10B981',
    formTitle: 'Projets Territoriaux & Collectivites',
    formTitleFormatted: '<span class="block mb-1 sm:mb-2">PROJETS</span><span class="block mb-1 sm:mb-2">TERRITORIAUX</span><span class="block">& COLLECTIVITES</span>',
    formSubtitle: 'Collectivites, fondations & institutions. Co-construisons vos projets sportifs.',
    submitLabel: 'SOUMETTRE UN PROJET TERRITORIAL →'
  }
]

const currentProfileId = ref(null)

export function useProfile() {
  const currentProfile = computed(() => {
    if (!currentProfileId.value) return defaultProfile
    return profiles.find(p => p.id === currentProfileId.value) || defaultProfile
  })

  const setProfile = (profileId) => {
    const found = profiles.find(p => p.id === profileId)
    if (found) {
      currentProfileId.value = found.id
    } else {
      currentProfileId.value = null
    }
  }

  return {
    profiles,
    currentProfileId,
    currentProfile,
    setProfile
  }
}

import { ref, computed } from 'vue'

const defaultProfile = {
  id: null,
  title: 'Global BSD',
  shortName: 'Choisis un terrain',
  badgeLabel: 'Choisir un terrain',
  badgeIcon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg>',
  baseline: 'BSD ATHLETIC PROGRAM',
  description: 'Sélectionne ton profil ci-dessus pour personnaliser l\'expérience.',
  accentColor: '#D9A441',
  formTitle: 'Contact & Renseignements',
  formSubtitle: 'Une question ? Choisis ton terrain ci-dessus ou envoie-nous un message.',
  submitLabel: 'Envoyer votre message →'
}

const profiles = [
  {
    id: 'entreprises',
    title: 'Entreprises',
    shortName: 'Entreprise / B2B',
    badgeLabel: 'Entreprise',
    badgeIcon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
    baseline: 'BSD au service de votre entreprise',
    description: 'Sport en entreprise, cohésion et bien-être au travail, du bureau à l\'usine.',
    icon: '<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/><path d="M3 9h6"/><path d="M3 15h6"/><path d="M15 6h.01"/><path d="M15 12h.01"/><path d="M15 18h.01"/></svg>',
    styleClass: 'entr',
    accentColor: '#8C5CFF',
    formTitle: 'Devenir Partenaire BSD',
    formSubtitle: 'Sponsoring, événements sur-mesure & mécénat.',
    submitLabel: 'Proposer un partenariat →'
  },
  {
    id: 'particuliers',
    title: 'Particuliers',
    shortName: 'Particulier / Licencié',
    badgeLabel: 'Particulier',
    badgeIcon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
    baseline: 'BSD, votre terrain de jeu',
    description: 'Cours collectifs, coaching perso, stages et programmes. Trouve ta discipline.',
    icon: '<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/></svg>',
    styleClass: 'part',
    accentColor: '#FF4B2E',
    formTitle: 'Rejoins la communauté BSD',
    formSubtitle: 'Renseignements, séance d\'essai & inscription.',
    submitLabel: 'Envoyer ma demande →'
  },
  {
    id: 'territoires',
    title: 'Territoires',
    shortName: 'Territoire / Collectivité',
    badgeLabel: 'Territoire',
    badgeIcon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>',
    baseline: 'BSD au service de la population',
    description: 'Fondations, collectivités, institutions : le sport comme lien social et outil d\'inclusion.',
    icon: '<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>',
    styleClass: 'terr',
    accentColor: '#D9A441',
    formTitle: 'Projets Territoriaux & Collectivités',
    formSubtitle: 'Collectivités, fondations & institutions. Co-construisons des projets sportifs.',
    submitLabel: 'Soumettre un projet territorial →'
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

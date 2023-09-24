export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'pl',
    messages: {
        pl: {
            path: {
                about: 'O nas',
                contact: 'Kontakt',
                index: 'Strona główna',
                media: 'Media',
                merch: 'Merch',
                news: 'Aktualności',
                partnership: 'Partnerstwo',
                schedule: 'Terminarz',
                support: 'Wsparcie',
                team: 'Zespół'
            }
        },
        en: {
            path: {
                about: 'About us',
                contact: 'Contact',
                index: 'Home',
                media: 'Media',
                merch: 'Merch',
                news: 'News',
                partnership: 'Partnership',
                schedule: 'Schedule',
                support: 'Support',
                team: 'Team'
            }
        }
    }
}))

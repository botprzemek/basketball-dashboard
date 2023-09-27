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
            },
            links: {
                title: {
                    contact: 'Kontakt',
                    about: 'Knury',
                    social: 'Sociale'
                },
                child: {
                    contact: {
                        reach: 'Dane kontaktowe',
                        form: 'Formularz',
                        join: 'Dołącz do nas',
                        partnership: 'Partnerstwo'
                    },
                    about: {
                        about: 'O nas',
                        privacy: 'Prywatność',
                        team: 'Nasz zespół',
                        support: 'Wsparcie'
                    },
                    social: {
                        facebook: 'Facebook',
                        instagram: 'Instagram',
                        tiktok: 'TikTok',
                        youtube: 'Youtube'
                    }
                },
            },
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
            },
        }
    }
}))

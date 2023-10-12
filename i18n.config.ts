export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'pl',
    messages: {
        pl: {
            static: {
                copyright: 'Wszelkie prawa zastrzeżone',
                map: 'Mapa strony',
            },
            path: {
                about: 'O nas',
                contact: 'Kontakt',
                index: 'Strona główna',
                media: 'Media',
                merch: 'Merch',
                match: 'Mecz',
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
            static: {
                copyright: 'All rights reserved',
                map: 'Site map',
            },
            path: {
                about: 'About',
                contact: 'Contact',
                index: 'Home',
                media: 'Media',
                merch: 'Merch',
                match: 'Match',
                news: 'News',
                partnership: 'Partnership',
                schedule: 'Schedule',
                support: 'Support',
                team: 'Team'
            },
            links: {
                title: {
                    contact: 'Contact',
                    about: 'Knury',
                    social: 'Socials'
                },
                child: {
                    contact: {
                        reach: 'Reach us',
                        form: 'Form',
                        join: 'Join us',
                        partnership: 'Partnership'
                    },
                    about: {
                        about: 'About us',
                        privacy: 'Privacy',
                        team: 'Our team',
                        support: 'Support'
                    },
                    social: {
                        facebook: 'Facebook',
                        instagram: 'Instagram',
                        tiktok: 'TikTok',
                        youtube: 'Youtube'
                    }
                },
            },
        }
    }
}))

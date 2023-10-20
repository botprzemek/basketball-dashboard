export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'pl',
    messages: {
        pl: {
            static: {
                copyright: 'Wszelkie prawa zastrzeżone',
                sitemap: 'Mapa strony',
            },
            path: {
                about: 'O nas',
                admin: {
                  login: 'Logowanie',
                  match: 'Zarządzanie Meczem',
                },
                contact: 'Kontakt',
                index: 'Strona główna',
                media: 'Media',
                merch: 'Merch',
                match: 'Mecz',
                news: 'Aktualności',
                partnership: 'Partnerstwo',
                schedule: 'Terminarz',
                sitemap: 'Mapa Strony',
                support: 'Wsparcie',
                team: 'Zespół',
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
                sitemap: 'Site map',
            },
            path: {
                about: 'About',
                admin: {
                    login: 'Login',
                    match: 'Match Dashboard',
                },
                contact: 'Contact',
                index: 'Home',
                media: 'Media',
                merch: 'Merch',
                match: 'Match',
                news: 'News',
                partnership: 'Partnership',
                schedule: 'Schedule',
                sitemap: 'Site Map',
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

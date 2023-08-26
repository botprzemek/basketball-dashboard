export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'pl',
    messages: {
        pl: {
            welcome: 'Witaj!',
            path: {
                contact: 'Kontakt',
                index: 'Strona główna',
                media: 'Media',
                news: 'Aktualności',
                team: 'Zespół'
            }
        },
        en: {
            welcome: 'Welcome!',
            path: {
                contact: 'Contact',
                index: 'Home',
                media: 'Media',
                news: 'News',
                team: 'Team'
            }
        }
    }
}))

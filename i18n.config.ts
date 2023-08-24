export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'pl',
    messages: {
        pl: {
            welcome: 'Witaj!',
            path: {
                contact: 'Kontakt',
                index: 'Start',
                media: 'Media',
                news: 'Aktualności',
                team: 'Zespół'
            }
        },
        en: {
            welcome: 'Welcome!',
            path: {
                contact: 'Contact',
                index: 'Start',
                media: 'Media',
                news: 'News',
                team: 'Team'
            }
        }
    }
}))

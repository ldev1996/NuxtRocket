export default defineAppConfig({
    title: {
        app: 'Nuxt Rocket',
        // In the title, the separator will appear like in "page — Nuxt Rocket"
        separator: '—',
    },
    seo: {
        description:
            'Nuxt Rocket is an opinionated starting point for modern Nuxt 3 projects. The idea is simple: eliminate repetitive setup, standardize the essentials, and create a solid foundation focused on performance, user experience, and long-term maintainability.',
        og: {
            title: '🚀 Nuxt Rocket',
            description:
                'An opinionated Nuxt 3 + UnoCSS starter focused on speed, UX, and simplicity.',
        },
    },
    themes: [
        // Registered themes must have matching styles in theme.css
        // ⚠️ Do not remove these defaults for proper fallback behavior
        'auto',
        'light',
        'dark',
    ],
})

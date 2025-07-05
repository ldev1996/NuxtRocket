export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    devtools: { enabled: true },
    future: {
        compatibilityVersion: 4,
    },
    pages: { pattern: ['**/*.vue', '!**/components/**'] },
    components: [
        {
            path: '~/components',
            pathPrefix: false,
        },
        {
            path: '~/pages',
            pattern: '**/components/**',
            pathPrefix: false,
        },
    ],
    css: ['~/assets/css/main.css'],
    modules: [
        '@nuxtjs/color-mode',
        '@pinia/nuxt',
        '@vueuse/nuxt',
        '@unocss/nuxt',
    ],
    colorMode: {
        preference: 'system', // default value of $colorMode.preference
        fallback: 'light', // fallback value if not system preference found
        storage: 'localStorage', // or 'sessionStorage' or 'cookie'
        storageKey: 'nuxt-color-mode',
    },
})

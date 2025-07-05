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
    modules: ['@pinia/nuxt', '@vueuse/nuxt', '@unocss/nuxt'],
})

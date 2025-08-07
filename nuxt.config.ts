// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    modules: [
      '@primevue/nuxt-module',
      '@unocss/nuxt',
      '@nuxtjs/i18n',
      '@vueuse/nuxt',
      '@pinia/nuxt',
    ],
    i18n: {
        defaultLocale: 'en',
        locales: [
            { code: 'en', name: 'English', file: 'en.json' },
            // { code: 'pt-BR', name: 'Português', file: 'pt.json' }
        ],
    },
    primevue: {
        importPT: {
            from: '@/style.ts',
        },
        options: {
            unstyled: true,
        },
    },
})
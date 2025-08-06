// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    modules: ['@primevue/nuxt-module', '@unocss/nuxt'],
    primevue: {
        importPT: {
            from: '@/style.ts',
        },
        options: {
            unstyled: true,
        },
    },
})

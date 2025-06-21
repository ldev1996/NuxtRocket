export default defineAppConfig({
    appName: 'Nuxt Rocket',
    themes: [
        {
            value: 'system',
            label: 'System',
            icon: 'lucide:laptop',
        },
        {
            value: 'light',
            label: 'Light',
            icon: 'lucide:sun-dim',
        },
        {
            value: 'dark',
            label: 'Dark',
            icon: 'lucide:moon',
        },
    ],
    icon: {
        size: '24px',
    },
})

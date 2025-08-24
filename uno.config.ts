import { defineConfig, presetAttributify, presetWind4, presetIcons } from 'unocss'

const colorKeys = ['primary', 'secondary', 'success', 'warning', 'danger']

export default defineConfig({
    presets: [
        presetAttributify({
            prefix: '_',
            prefixedOnly: true,
        }),
        presetWind4({
            preflights: {
                reset: true,
            },
        }),
        presetIcons(),
    ],
    theme: {
        colors: {
            primary: {
                DEFAULT: 'var(--color-primary)',
                alt: 'var(--color-primary-alt)',
                contrast: 'white',
            },
            secondary: {
                DEFAULT: 'var(--color-secondary)',
                alt: 'var(--color-secondary-alt)',
                contrast: 'black',
            },
            success: {
                DEFAULT: 'var(--color-success)',
                alt: 'var(--color-success-alt)',
                contrast: 'black',
            },
            warning: {
                DEFAULT: 'var(--color-warning)',
                alt: 'var(--color-warning-alt)',
                contrast: 'black',
            },
            danger: {
                DEFAULT: 'var(--color-danger)',
                alt: 'var(--color-danger-alt)',
                contrast: 'white',
            },
            base: 'var(--color-base)',
            surface: 'var(--color-surface)',
            foreground: 'var(--color-foreground)',
            muted: 'var(--color-muted)',
            border: 'var(--color-border)',
            overlay: 'var(--color-overlay)',
            neutral: {
                50: 'var(--color-neutral-50)',
                100: 'var(--color-neutral-100)',
                200: 'var(--color-neutral-200)',
                300: 'var(--color-neutral-300)',
                400: 'var(--color-neutral-400)',
                500: 'var(--color-neutral-500)',
                600: 'var(--color-neutral-600)',
                700: 'var(--color-neutral-700)',
                800: 'var(--color-neutral-800)',
                900: 'var(--color-neutral-900)',
                950: 'var(--color-neutral-950)',
            },
        },
    },
    shortcuts: [
        {
            btn: 'px-4 py-2 rounded font-semibold transition-colors duration-300 cursor-pointer disabled:cursor-not-allowed',
            'btn-outline': 'btn border border-border bg-transparent hover:bg-surface',
            'btn-ghost': 'btn bg-transparent hover:bg-overlay',
            card: 'rounded-2xl shadow p-4 bg-surface border border-border',
            'card-hover': 'card transition-shadow hover:shadow-md hover:shadow-overlay',
        },
        [
            new RegExp(`^btn-(${colorKeys.join('|')})$`),
            ([, c], { theme }: any) => {
                const color = theme.colors?.[c]
                if (color?.contrast) {
                    return `btn bg-${c} hover:bg-${c}-alt text-${color.contrast}`
                }
                return 'btn'
            },
        ],
    ],
})

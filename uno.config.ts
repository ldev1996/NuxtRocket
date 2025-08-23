import { watchImmediate } from '@vueuse/core'
import {
    defineConfig,
    presetAttributify,
    presetWind4,
    presetIcons,
} from 'unocss'

const contrastMap: Record<string, string> = {
    primary: 'white',
    secondary: 'black',
    success: 'black',
    warning: 'black',
    danger: 'white',
}

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
            },
            secondary: {
                DEFAULT: 'var(--color-secondary)',
                alt: 'var(--color-secondary-alt)',
            },
            success: {
                DEFAULT: 'var(--color-success)',
                alt: 'var(--color-success-alt)',
            },
            warning: {
                DEFAULT: 'var(--color-warning)',
                alt: 'var(--color-warning-alt)',
            },
            danger: {
                DEFAULT: 'var(--color-danger)',
                alt: 'var(--color-danger-alt)',
            },
            base: 'var(--color-base)',
            surface: 'var(--color-surface)',
            foreground: 'var(--color-foreground)',
            muted: 'var(--color-muted)',
            border: 'var(--color-border)',
            overlay: 'var(--color-overlay)',
            light: {
                50: 'var(--color-light-50)',
                100: 'var(--color-light-100)',
                200: 'var(--color-light-200)',
                300: 'var(--color-light-300)',
                400: 'var(--color-light-400)',
                500: 'var(--color-light-500)',
                600: 'var(--color-light-600)',
                700: 'var(--color-light-700)',
                800: 'var(--color-light-800)',
                900: 'var(--color-light-900)',
                950: 'var(--color-light-950)',
            },
            dark: {
                50: 'var(--color-dark-50)',
                100: 'var(--color-dark-100)',
                200: 'var(--color-dark-200)',
                300: 'var(--color-dark-300)',
                400: 'var(--color-dark-400)',
                500: 'var(--color-dark-500)',
                600: 'var(--color-dark-600)',
                700: 'var(--color-dark-700)',
                800: 'var(--color-dark-800)',
                900: 'var(--color-dark-900)',
                950: 'var(--color-dark-950)',
            },
        },
    },
    shortcuts: [
        {
            btn: 'px-4 py-2 rounded font-semibold transition-colors duration-300 cursor-pointer disabled:cursor-not-allowed',
        },
        [
            /^btn-(\w+)$/,
            ([, c]) => {
                const color = contrastMap[c]
                if (color) {
                    return `btn bg-${c} hover:bg-${c}-alt text-${color}`
                }
                return 'btn'
            },
        ],
    ],
})

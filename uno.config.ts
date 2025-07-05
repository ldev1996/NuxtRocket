import { defineConfig } from 'unocss'
import presetWind4 from '@unocss/preset-wind4'
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
    presets: [
        presetWind4({
            preflights: {
                reset: true,
                theme: true,
            },
        }),
        presetIcons(),
    ],
    theme: {
        colors: {
            primary: {
                DEFAULT: 'var(--theme-primary)',
                alt: 'var(--theme-primary-alt)',
            },
            secondary: {
                DEFAULT: 'var(--theme-secondary)',
                alt: 'var(--theme-secondary-alt)',
            },
            success: {
                DEFAULT: 'var(--theme-success)',
                alt: 'var(--theme-success-alt)',
            },
            warning: {
                DEFAULT: 'var(--theme-warning)',
                alt: 'var(--theme-warning-alt)',
            },
            danger: {
                DEFAULT: 'var(--theme-danger)',
                alt: 'var(--theme-danger-alt)',
            },
            base: 'var(--theme-base)',
            surface: 'var(--theme-surface)',
            highlight: 'var(--theme-highlight)',
            foreground: {
                DEFAULT: 'var(--theme-foreground)',
                muted: 'var(--theme-foreground-muted)',
            },
        },
    },
})

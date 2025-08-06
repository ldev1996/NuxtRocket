import {
    defineConfig,
    presetWind4,
    presetAttributify,
    presetIcons,
} from 'unocss'

export default defineConfig({
    presets: [
        presetWind4({
            preflights: {
                reset: true,
            },
        }),
        presetAttributify(),
        presetIcons(),
    ],
})

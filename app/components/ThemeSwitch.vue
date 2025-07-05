<template>
    <label class="flex items-center gap-2 text-sm text-foreground">
        Theme
        <button
            @click="next()"
            class="bg-highlight rounded-lg py-1 px-2 cursor-pointer text-foreground"
        >
            {{ state }}
        </button>
    </label>
</template>

<script setup lang="js">
    import { useColorMode, useCycleList } from '@vueuse/core'
    const themes = useAppConfig().themes
    const mode = useColorMode({ modes: themes })

    const { state, next } = useCycleList(
        themes,
        { initialValue: mode }
    )

    watchEffect(() => (mode.value = state.value))
</script>

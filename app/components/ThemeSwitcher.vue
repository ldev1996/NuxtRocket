<template>
    <button
        @click="next()"
        _btn-ghost
        _capitalize
    >
        {{ state }}
    </button>
</template>

<script setup lang="ts">
    import { useColorMode, useCycleList } from '@vueuse/core'
    import { watchEffect } from 'vue'

    const mode = useColorMode({
        emitAuto: true,
    })

    const { state, next } = useCycleList(['dark', 'light', 'auto'] as const, {
        initialValue: mode,
    })

    watchEffect(() => (mode.value = state.value))
</script>

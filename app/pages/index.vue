<template>
    <div
        class="flex flex-col items-center justify-center gap-2 p-4 bg-surface rounded-xl border border-highlight"
    >
        <div class="w-full flex gap-4">
            <div class="self-baseline">
                <h1 class="text-foreground text-2xl">Nuxt Rocket</h1>
                <p class="text-foreground-muted">
                    Edit this page in
                    <span
                        class="bg-primary text-foreground p-0.5 italic rounded-sm"
                    >
                        pages/index.vue
                    </span>
                </p>
            </div>
        </div>
        <div class="flex gap-2">
            <button
                @click="confettiReward"
                id="confetti-btn"
                class="bg-primary/20 text-primary hover:bg-primary-alt/20 p-2 rounded-lg cursor-pointer transition-colors gap-2 flex items-center justify-center"
            >
                Let's Party with Confetti!
            </button>
            <Skeleton
                w="10rem"
                h="3rem"
                r="rounded-md"
            />
        </div>
        <ThemeSwitch />
    </div>
</template>

<script setup lang="js">
    import { useReward } from 'vue-rewards'
    const { reward: confettiReward, isAnimating: isConfettiAnimating } =
        useReward('confetti-btn', 'confetti')
</script>

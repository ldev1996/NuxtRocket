<template>
    <div class="w-full h-dvh flex items-center justify-center bg-base">
        <div
            class="flex flex-col items-center justify-center gap-2 p-4 bg-surface rounded-xl border border-highlight"
        >
            <div class="self-baseline">
                <h1 class="text-foreground text-2xl">Lorem ipsum</h1>
                <p class="text-foreground-muted">Lorem ipsum dolor sit.</p>
            </div>
            <div class="flex gap-2">
                <button
                    @click="confettiReward"
                    id="confetti-btn"
                    class="bg-primary/20 text-primary hover:bg-primary-alt/20 p-2 rounded-lg cursor-pointer transition-colors gap-2 flex items-center justify-center"
                >
                    <Icon name="lucide:party-popper" />
                    Let's Party with Confetti!
                </button>
                <button
                    @click="ballonReward"
                    id="ballon-btn"
                    class="bg-highlight border border-transparent hover:border-primary p-2 rounded-lg cursor-pointer transition-colors text-primary"
                >
                    Let's Party with Balloons!
                </button>
            </div>
            <ThemeSwitch />
        </div>
    </div>
</template>

<script setup lang="js">
    import { useReward } from 'vue-rewards'
    const { reward: confettiReward, isAnimating: isConfettiAnimating } =
        useReward('confetti-btn', 'confetti')
    const { reward: ballonReward, isAnimating: isBallonAnimating } =
        useReward('ballon-btn', 'balloons')
</script>

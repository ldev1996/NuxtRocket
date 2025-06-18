<template>
    <div class="w-full h-dvh flex items-center justify-center">
        <button
            @click="confettiReward"
            id="confetti-btn"
            class="bg-blue-400 hover:bg-blue-500 p-2 rounded cursor-pointer"
        >
            Let's Party!
        </button>
    </div>
</template>

<script setup lang="js">
    import { useReward } from 'vue-rewards'
    const { reward: confettiReward, isAnimating: isConfettiAnimating } =
        useReward('confetti-btn', 'confetti')
</script>

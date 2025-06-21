<template>
    <label class="flex items-center gap-2 text-sm text-foreground">
        Theme
        <select
            v-model="colorMode.preference"
            class="bg-highlight rounded-lg p-1 cursor-pointer"
        >
            <option
                v-for="theme in appConfig.themes"
                :key="theme.label"
                :value="theme.value"
            >
                {{ theme.label }}
            </option>
        </select>
    </label>
</template>

<script setup lang="js">
    const colorMode = useColorMode()
    const appConfig = useAppConfig()
</script>

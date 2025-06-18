<template>
    <label class="flex items-center gap-2 text-sm text-foreground">
        Theme
        <select
            v-model="colorMode.preference"
            class="bg-base border rounded p-1"
        >
            <option value="system">System</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
        </select>
    </label>
</template>

<script setup lang="ts">
    const colorMode = useColorMode()
</script>

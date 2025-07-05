<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup lang="js">
    const appName = useAppConfig().appName

    useHead({
        titleTemplate: (titleChunk) => {
            return titleChunk ? `${titleChunk} - ${appName}` : `${appName}`;
        }
    })
</script>

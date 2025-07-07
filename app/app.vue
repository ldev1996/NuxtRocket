<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup lang="js">
    const title = useAppConfig().title
    const seo = useAppConfig().seo

    useHead({
        titleTemplate: (titleChunk) => [titleChunk, title.app].filter(Boolean).join(` ${title.separator} `)
    })

    useSeoMeta({
        description: seo.description,
        ogTitle: seo.og.title,
        ogDescription: seo.og.description
    })
</script>

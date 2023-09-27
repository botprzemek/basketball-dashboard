<script setup lang="ts">
const config = useRuntimeConfig()
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} · ${config.public.websiteName}`
      : config.public.websiteName
  },
  bodyAttrs: {
    class: 'min-h-screen max-h-max min-w-screen max-w-screen'
  }
})

useSeoMeta({
  ogTitle: '[og:title]',
  ogDescription: '[og:description]',
  ogImage: '[og:image]',
  ogUrl: '[og:url]',
  twitterTitle: '[twitter:title]',
  twitterDescription: '[twitter:description]',
  twitterImage: '[twitter:image]',
  twitterCard: 'summary'
})
</script>

<template>
  <main class="min-h-screen max-h-max min-w-screen max-w-screen flex flex-col">
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </main>
</template>
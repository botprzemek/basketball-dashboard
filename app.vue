<script setup lang="ts">
const config = useRuntimeConfig()
const { locale } = useI18n()

useHeadSafe({
  htmlAttrs: {
    lang: locale.value
  },
  bodyAttrs: {
    class: 'min-h-screen max-h-max min-w-screen max-w-screen'
  },
  titleTemplate: (titleChunk) => {
    return titleChunk
        ? `${titleChunk} · ${config.public.websiteName}`
        : config.public.websiteName
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
  <VitePwaManifest />
  <main class="min-h-screen max-h-max min-w-screen max-w-screen flex flex-col">
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </main>
</template>
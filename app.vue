<script setup lang="ts">
const config = useRuntimeConfig()
useHead({
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
<!--  <Model/>-->
  <Navigation/>
  <main>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </main>
  <Footer/>
</template>
<script setup lang="ts">
const config = useRuntimeConfig()
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} · ${config.public.websiteName}`
      : config.public.websiteName
  }
})
</script>

<template>
  <Navigation/>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
  <Footer/>
</template>
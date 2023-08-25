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
  <main>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </main>
  <Footer/>
</template>
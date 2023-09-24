<script setup lang="ts">
const router = useRouter()
const { locale, locales } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const paths = [ 'index', 'schedule', 'team', 'merch', 'news', 'about', 'support', 'partnership', 'media', 'contact' ]

useHead({
  htmlAttrs: {
    lang: locale.value
  },
})
</script>
<template>
  <header class="relative z-50">
    <nav class="w-screen grid place-content-center">
      <ul class="w-full flex gap-4">
        <li v-for="path in paths" :key="path"><NuxtLink :to="localePath(path)" style="text-decoration: none; color: white">{{ $t(`path.${path}`).replaceAll('Strona g', 'G') }}</NuxtLink></li>
      </ul>
    </nav>
    <NuxtLink :to="switchLocalePath(locale.code)" v-for="locale in locales" :key="locale" style="text-decoration: none; color: white">{{ locale.name }}</NuxtLink>
  </header>
</template>
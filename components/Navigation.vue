<script setup lang="ts">
import paths from '~/components/Paths'

const { locale, locales } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()

useHead({
  htmlAttrs: {
    lang: locale.value
  },
})
</script>

<template>
  <header class="fixed z-50 sm:h-16 md:h-12 lg:h-12">
    <nav class="w-screen grid place-content-center">
      <ul class="w-full flex gap-4">
        <li v-for="path in paths" :key="path"><NuxtLink :to="localePath(path)" style="text-decoration: none; color: white">{{ $t(`path.${path}`).replaceAll('Strona g', 'G') }}</NuxtLink></li>
      </ul>
    </nav>
    <NuxtLink :to="switchLocalePath(locale.code)" v-for="locale in locales" :key="locale" style="text-decoration: none; color: white">{{ locale.name }}</NuxtLink>
  </header>
</template>
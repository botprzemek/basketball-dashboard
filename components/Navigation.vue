<script setup lang="ts">
const { locale, locales } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const paths = [ 'index', 'team', 'news', 'media', 'contact' ]

useHead({
  htmlAttrs: {
    lang: locale.value
  },
})
</script>
<template>
  <header class="relative z-50">
    <nav>
      <ul>
        <li v-for="path in paths" :key="path"><NuxtLink :to="localePath(path)" style="text-decoration: none; color: white">{{ $t(`path.${path}`).replaceAll('Strona g', 'G') }}</NuxtLink></li>
      </ul>
    </nav>
    <NuxtLink :to="switchLocalePath(locale.code)" v-for="locale in locales" :key="locale" style="text-decoration: none; color: white">{{ locale.name }}</NuxtLink>
  </header>
</template>
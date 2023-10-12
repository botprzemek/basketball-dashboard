<script setup lang="ts">
import links from '~/components/Links'

const { locale, locales } = useI18n()
const localePath = useLocalePath()

useHead({
  htmlAttrs: {
    lang: locale.value
  },
})
</script>

<template>
  <footer class="mt-auto">
    <nav class="w-screen grid place-content-center">
      <h6>Knury Knurów</h6>
      <p>{{ $t('static.copyright') }} © {{ new Date().getFullYear() }} - Knury Knurów</p>
      <a>Mapa strony</a>
      <ul class="w-full flex gap-4">
        <li v-for="title in Object.keys(links)" :key="title">
          {{ $t(`links.title.${title}`) }}
          <ul>
            <li v-for="link in links[title]" :key="link">
              <a :href="`/${title}#${link}`">
                {{ $t(`links.child.${title}.${link}`) }}
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </footer>
</template>
<script setup lang="ts">
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
</script>
<template>
  <header>
    <nav>
      <ul>
        <li><NuxtLink :to="localePath('index')">{{ $t('path.index') }}</NuxtLink></li>
        <li><NuxtLink :to="localePath('team')">{{ $t('path.team') }}</NuxtLink></li>
        <li><NuxtLink :to="localePath('news')">{{ $t('path.news') }}</NuxtLink></li>
        <li><NuxtLink :to="localePath('media')">{{ $t('path.media') }}</NuxtLink></li>
        <li><NuxtLink :to="localePath('contact')">{{ $t('path.contact') }}</NuxtLink></li>
      </ul>
    </nav>
    <NuxtLink :to="switchLocalePath('pl')">PL</NuxtLink>
    <NuxtLink :to="switchLocalePath('en')">EN</NuxtLink>
  </header>
</template>
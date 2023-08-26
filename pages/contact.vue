<script setup lang="ts">
const { t } = useI18n({ useScope: 'global' })

useHead({
  title: t(`path.${useRouter().currentRoute.value.name.split('___')[0]}`)
})
</script>

<template>
  <h1>{{ $t(`path.${$route.name.split('___')[0]}`) }}</h1>
</template>
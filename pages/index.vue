<script setup lang="ts">
const localePath = useLocalePath()
const { t } = useI18n({ useScope: 'global' })

useHeadSafe({
  title: t(`path.${useRouter().currentRoute.value.name.split('___')[0]}`)
})
</script>

<template>
  <h1>{{ $t(`path.${$route.name.split('___')[0]}`) }}</h1>
  <NuxtLink :to="localePath('match')">
    {{ t(`path.match`) }}
  </NuxtLink>
<!--  Terminarz-->
<!--  Zespół-->
<!--  Merch-->
<!--  Aktualności-->
<!--  O nas-->
<!--  Partnerstwo-->
<!--  Media-->
<!--  Kontakt-->
</template>
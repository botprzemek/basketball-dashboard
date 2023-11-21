<script setup lang="ts">
const localePath = useLocalePath()
const { t } = useI18n({ useScope: 'global' })

useHeadSafe({
  title: t(`path.${useRouter().currentRoute.value.name.split('___')[0]}`)
})
</script>

<template>
  Młodzież idzie po swoje!

  <br>

  Komponent: Terminarz

  <br>

  Komponent: Aktualności

  <br>

  Komponent: Zespół


  <br>

  Komponent: Merch

  <br>

  Komponent: O nas

  <br>

  Komponent: Road mapa z osiągnięciami

  <br>

  Komponent: Partnerstwo

  <br>

  Komponent: Media

  <br>

  Komponent: Kontakt

  <br>

  Komponent: Mapa strony
</template>
<script setup lang="ts">
const { t } = useI18n({ useScope: 'global' })

useHeadSafe({
  title: t(`path.${useRouter().currentRoute.value.name.split('___')[0]}`)
})
</script>

<template>
  <Match/>
</template>
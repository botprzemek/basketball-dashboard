<script setup lang="ts">
const route = useRoute()

const { t } = useI18n({ useScope: 'global' })

useHead({
  title: `${route.params.fullname}`
})
</script>

<template>
  <h1>{{ route.params.name }} - {{ route.params.fullname }}</h1>
</template>
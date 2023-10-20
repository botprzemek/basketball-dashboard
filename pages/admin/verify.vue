<script setup lang="ts">
useFetch(`/api/auth/verify?verification-code=${useRoute().query['verification-code']}`)
navigateTo('./login')
</script>

<template>
  <h1>Verify</h1>
</template>
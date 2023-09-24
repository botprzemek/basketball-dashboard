<script setup lang="ts">
const router = useRouter()
const props = defineProps({ error: Object })
const goBack = () => router.push({ path: '/' })
</script>

<template>
  <NuxtLayout name="error">
    <div>
      <p>{{ error.statusCode }}</p>
      <p>You've Arrived Here on Error, boss.</p>
      <button @click="goBack">Back</button>
    </div>
  </NuxtLayout>
</template>
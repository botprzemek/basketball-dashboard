<script setup lang="ts">
const props = defineProps({ error: Object })
</script>

<template>
  <main class="min-h-screen max-h-max min-w-screen max-w-screen flex flex-col">
    <NuxtLayout name="error">
      <div>
        <p>{{ error.statusCode }}</p>
        <p>You've Arrived Here on Error, boss.</p>
        <button @click="navigateTo('/')">Back</button>
      </div>
    </NuxtLayout>
  </main>
</template>
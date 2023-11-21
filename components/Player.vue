<script setup lang="ts">
const props = defineProps<{
  name: string,
  lastname: string,
  teamName: string,
  number: number,
  position: string,
  height: number,
  birthday: string,
}>()

toRefs(props)
</script>

<template>
  <section>
    <h1>{{ lastname }}</h1>
    <p>{{ name }}</p>
    <p>{{ teamName }}</p>
    <p>{{ number }}</p>
    <p>{{ position }}</p>
    <p>{{ height }}</p>
    <p>{{ birthday }}</p>
  </section>
</template>
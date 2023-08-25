<script setup lang="ts">
const router = useRouter()
const { t } = useI18n({ useScope: "global" })

useHead({
  title: t(`path.${useRouter().currentRoute.value.name.split('___')[0]}`)
})

let { data: players, pending, error } = await useFetch('/api/players')
</script>

<template>
  <h1>{{ $t(`path.${this.$route.name.split('___')[0]}`) }}</h1>
  <ul>
    <li v-for="player in players" :key="player.lastname">
      <h3>{{ player['lastname'] }}</h3>
      <p>{{ player.name }}</p>
      <p>Nr {{ player.number }}</p>
      <p>{{ `${player.height.in}`.replaceAll('.', `'`) }}" / {{ player.height.cm }}cm</p>
      <p>Pozycja {{ player.position.short }}</p>
    </li>
  </ul>
</template>
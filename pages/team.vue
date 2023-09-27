<script setup lang="ts">
const router = useRouter()
const { t } = useI18n({ useScope: 'global' })

useHead({
  title: t(`path.${useRouter().currentRoute.value.name.split('___')[0]}`)
})

let { data: teams } = await useFetch('/api/teams')
</script>

<template>
  <h1>{{ $t(`path.${$route.name.split('___')[0]}`) }}</h1>
  Team I
  Team II
  Statystyki indywidualne
  Statystyki drużynowe
  <ul>
    <li v-for="team in teams" :key="team.name">
      <p>{{ team.name }}</p>
      <p>{{ team.city }}</p>
      <p>{{ team.league }}</p>
      <p>Players</p>
      <ul>
        <li v-for="player in team.players" :key="player.lastname">
          <p>{{ player.name }}</p>
          <p>{{ player.lastname }}</p>
          <p>No {{ player.number }}</p>
          <p>{{ player.height }}cm</p>
          <p>Position {{ player.position }}</p>
          <p>Age {{ new Date().getFullYear() - new Date(player.age).getFullYear() }}</p>
        </li>
      </ul>
    </li>
  </ul>
</template>
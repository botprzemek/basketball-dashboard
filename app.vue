<script setup>
const url = 'http://localhost:3001/players'
const { data: players, pending } = await useLazyFetch(url, {
  headers: { secret: 'Rudzielec2208' },
  transform: (players) => {
    console.log(players.sort())
  }
})
</script>

<template>
  <div>
    <div v-if="!pending" v-for="player in players">
      <h1>{{ player.name }}</h1>
      <p>{{ player.last_name }}</p>
    </div>
  </div>
</template>

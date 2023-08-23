<script setup>
import Player from './models/Player'

const players = []
const { data, pending, error } = await useLazyFetch('http://localhost:3001/players', {
  headers: { secret: 'Rudzielec2208' },
  transform: response => response.map(player =>
      players.push(new Player(
          player.name,
          player.lastname,
          player.number,
          player.height,
          player.position
      ).getPlayerData()
    )
  )
})
setTimeout(() => console.log(players), 1500)
</script>

<template>
  <main>
    <section v-if="pending">
      <h1>Ładuję...</h1>
      {{ players.length }}
    </section>
    <section v-else v-for="player in players" :key="player.lastname">
      <h1>{{ player.lastname }}</h1>
      <p>{{ player.name }}</p>
      <p>{{ player.number }}</p>
      <p>{{ `${player.height.in}`.replaceAll('.', "'") }}</p>
      <p>{{ player.position.short }}</p>
    </section>
  </main>
</template>

<script setup>
import Player from './models/Player'

const players = []
const config = useRuntimeConfig()

const { data, pending, error } = await useFetch('/players', {
  baseURL: config.public.apiBase,
  headers: {
    secret: config.public.apiSecret,
    'Content-Type': 'application/json'
  },
  transform: response => response.forEach(player =>
    players.push(new Player(
      player.name,
      player.lastname,
      player.number,
      player.height,
      player.position
    ).getPlayerData())
  )
})

if (error.value) console.log(error.value)
</script>

<template>
  <main>
    <client-only>
      <section v-show="!pending && !error">
        <h1>Lista graczy</h1>
        <ul>
          <li v-for="player in players" :key="player.lastname">
            <aside>
              <h1>{{ player.lastname }}</h1>
              <p>{{ player.name }}</p>
              <p>{{ player.number }}</p>
              <p>{{ `${player.height.in}`.replaceAll('.', "'") }}</p>
              <p>{{ player.position.short }}</p>
            </aside>
          </li>
        </ul>
      </section>
    </client-only>
  </main>
</template>

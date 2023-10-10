<script setup>
import { io } from 'socket.io-client'
import { game } from '~/utils/game.util'

const socket = io('http://localhost:3001')
const { t } = useI18n({ useScope: 'global' })

useHead({
  title: t(`path.${useRouter().currentRoute.value.name.split('___')[0]}`)
})

onMounted(() => {
  game(socket)
})
</script>

<template>
  <h1>{{ $t(`path.${$route.name.split('___')[0]}`) }}</h1>

  ŚLK
  Sparing
  Wyniki
  Statystyki meczów
  Hala

  <h1>Basketball Game</h1>
  <p>Game Time: <span id="gameTime">00:00</span></p>
  <p>Quarter: <span id="quarter">1</span></p>
  <p>Status: <span id="status">End of regulation</span></p>
  <p>Paused: <span id="paused">Paused</span></p>

  <h3>Host</h3>
  <p>Points: <span class="scoreHost">0</span></p>

  <h3>Opponent</h3>
  <p>Points: <span class="scoreOpponent">0</span></p>

  <h2>Admin</h2>

  <h3>Host</h3>
  <button class="changeScoreHost" value="1">1pt</button>
  <button class="changeScoreHost" value="2">2pt</button>
  <button class="changeScoreHost" value="3">3pt</button>

  <h3>Opponent</h3>
  <button class="changeScoreOpponent" value="1">1pt</button>
  <button class="changeScoreOpponent" value="2">2pt</button>
  <button class="changeScoreOpponent" value="3">3pt</button>

  <h3>Time</h3>
  <button id="changeStatus">Change Status</button>
  <button id="pauseGame">Pause</button>
</template>
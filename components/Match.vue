<script setup lang="ts">
import { io } from 'socket.io-client'
import { gameClient } from '~/utils/socket/game.socket'

onMounted(() => {
  const socket = io(useRuntimeConfig().public.websocketBase, {
    secure: true,
  })
  gameClient(socket)
})
</script>

<template>
  <h1>Basketball Game</h1>
  <p>Game Time: <span id="gameTime">00:00</span></p>
  <p>Quarter: <span id="quarter">1</span></p>
  <p>Status: <span id="status">Waiting</span></p>
  <p>Paused: <span id="paused">Paused</span></p>

  <h2>Host</h2>
  <p>Points: <span class="scoreHost">0</span></p>

  <h2>Opponent</h2>
  <p>Points: <span class="scoreOpponent">0</span></p>
</template>
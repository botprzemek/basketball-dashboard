<script setup lang="ts">
import { io } from 'socket.io-client'
import {gameClient} from "~/utils/game.util";

onMounted(() => {
  const socket = io('http://localhost:3001', { secure: true })
  gameClient(socket)
})
</script>

<template>
  <h1>Basketball Game</h1>
  <p>Game Time: <span id="gameTime">00:00</span></p>
  <p>Quarter: <span id="quarter">1</span></p>
  <p>Status: <span id="status">End of regulation</span></p>
  <p>Paused: <span id="paused">Paused</span></p>

  <h3>Host</h3>
  <p>Points: <span class="scoreHost">0</span></p>

  <h3>Opponent</h3>
  <p>Points: <span class="scoreOpponent">0</span></p>
</template>
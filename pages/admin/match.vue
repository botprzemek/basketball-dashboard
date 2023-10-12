<script setup>
import { io } from 'socket.io-client'
import {gameAdmin} from '~/utils/game.util'

definePageMeta({
  middleware: [
    'auth',
  ],
})

onMounted(() => {
  const socket = io('http://localhost:3001/admin', {
    secure: true,
    rejectUnauthorized: true,
    auth: {
      email: useCookie('email').value,
      token: useCookie('token').value,
    },
  })
  gameAdmin(socket)
})
</script>

<template>
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
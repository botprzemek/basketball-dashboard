<script setup lang="ts">
import { io } from 'socket.io-client'
import {gameAdmin} from '~/utils/socket/game.socket'

definePageMeta({
  middleware: [
    'auth',
  ],
})

const { t } = useI18n({ useScope: 'global' })
const token = useCookie('token').value

useHeadSafe({
  title: t(`path.${useRouter().currentRoute.value.name.split('___')[0].replaceAll('-', '.')}`)
})

onMounted(() => {
  const socket = io(`${useRuntimeConfig().public.apiBase}/admin`, {
    secure: true,
    rejectUnauthorized: true,
    auth: {
      token: token,
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